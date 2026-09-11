import { chromium } from 'playwright';
const SL=['barbekyu-kompleksy','kaminy','izraztsy','pechi-kaminy','bannye-portaly','russkie-pechi','otopitelnye-pechi'];
const b = await chromium.launch({channel:'chrome'});
console.log('первый экран, без прокрутки · DPR 2\n');
console.log('раздел'.padEnd(20), 'запросов  вес      LCP     CLS   шрифты  css+js  картинки');
for (const s of SL) {
  const ctx = await b.newContext({viewport:{width:1440,height:900}, deviceScaleFactor:2});
  const p = await ctx.newPage();
  const by={}; let n=0, tot=0;
  p.on('response', async r=>{
    const len=+(r.headers()['content-length']||0); if(!len) return;
    const u=r.url(); n++; tot+=len;
    const k=/\.(woff2?|ttf)/.test(u)?'шрифт':/\.css/.test(u)?'css':/\.js/.test(u)?'js':/\.(webp|jpg|png|svg)/.test(u)?'img':'проч';
    by[k]=(by[k]||0)+len;
  });
  await p.goto('http://localhost:8099/'+s+'/?x='+Math.random(), {waitUntil:'networkidle'});
  await p.waitForTimeout(1200);
  const m = await p.evaluate(()=>new Promise(res=>{
    let lcp=0, cls=0;
    new PerformanceObserver(l=>{for(const e of l.getEntries()) lcp=e.startTime;}).observe({type:'largest-contentful-paint',buffered:true});
    new PerformanceObserver(l=>{for(const e of l.getEntries()) if(!e.hadRecentInput) cls+=e.value;}).observe({type:'layout-shift',buffered:true});
    setTimeout(()=>res({lcp:Math.round(lcp), cls:+cls.toFixed(3)}), 900);
  }));
  const kb=x=>String(Math.round((by[x]||0)/1024)).padStart(5)+'к';
  console.log(s.padEnd(20), String(n).padStart(6), String(Math.round(tot/1024)).padStart(6)+'к',
    String(m.lcp).padStart(6)+'мс', String(m.cls).padStart(6),
    kb('шрифт'), (Math.round(((by.css||0)+(by.js||0))/1024)+'к').padStart(7), kb('img'));
  await ctx.close();
}
await b.close();
