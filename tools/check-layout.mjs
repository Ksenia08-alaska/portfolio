// Проверка вёрстки: 9 ширин, горизонтальная прокрутка, вылезающий текст, скриншоты.
// Запуск: npm run build, затем npm run preview (в другом окне), затем npm run check:layout
// Первый раз: npx playwright install chromium
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';

const BASE = process.env.BASE_URL || 'http://localhost:4321';
const PAGES = (process.env.PAGES || '/,/projects/sv-house/,/projects/mayak/,/projects/svidno/').split(',');
const WIDTHS = [320, 360, 390, 430, 768, 1024, 1280, 1440, 1920];
const SHOTS = process.env.SHOTS !== '0';

const browser = await chromium.launch(
  process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {},
);
await mkdir('shots', { recursive: true });
let problems = 0;

for (const path of PAGES) {
  for (const width of WIDTHS) {
    const page = await browser.newPage({ viewport: { width, height: width < 768 ? 800 : 900 } });
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto(BASE + path, { waitUntil: 'networkidle' });
    await page.waitForTimeout(400);

    const report = await page.evaluate(() => {
      const doc = document.documentElement;
      const out = { scrollX: doc.scrollWidth - doc.clientWidth, overflow: [] };
      const vw = doc.clientWidth;
      for (const el of document.querySelectorAll('body *')) {
        const cs = getComputedStyle(el);
        if (cs.display === 'none' || cs.visibility === 'hidden' || cs.position === 'fixed') continue;
        if (el.closest('[data-overflow-ok], .marquee, .sr-only, [aria-hidden="true"]')) continue;
        const r = el.getBoundingClientRect();
        if (r.width === 0 || r.height === 0) continue;
        const clipped = (() => {
          for (let a = el.parentElement; a && a !== document.body; a = a.parentElement) {
            const ox = getComputedStyle(a).overflowX;
            if (ox !== 'visible') { const ar = a.getBoundingClientRect(); if (ar.right <= vw + 1 && ar.left >= -1) return true; }
          }
          return false;
        })();
        if ((r.right > vw + 1 || r.left < -1) && !clipped) {
          out.overflow.push(`${el.tagName.toLowerCase()}.${[...el.classList].join('.')} ${Math.round(r.left)}..${Math.round(r.right)}`);
        } else if (el.scrollWidth > el.clientWidth + 1 && ['hidden', 'clip', 'visible'].includes(cs.overflowX) && el.children.length === 0 && el.textContent.trim()) {
          out.overflow.push(`text ${el.tagName.toLowerCase()}.${[...el.classList].join('.')} «${el.textContent.trim().slice(0, 30)}»`);
        }
      }
      out.overflow = out.overflow.slice(0, 8);
      return out;
    });

    const bad = report.scrollX > 0 || report.overflow.length;
    if (bad) problems++;
    console.log(`${bad ? 'FAIL' : 'ok  '} ${path} @${width}${report.scrollX > 0 ? ` scrollX=${report.scrollX}` : ''}`);
    for (const o of report.overflow) console.log('      ' + o);

    if (SHOTS && [360, 768, 1440].includes(width)) {
      const name = `shots/${path.replace(/\//g, '_') || 'home'}-${width}.png`;
      await page.screenshot({ path: name, fullPage: true });
    }
    await page.close();
  }
}
await browser.close();
console.log(problems ? `\nПроблем: ${problems}` : '\nВсё чисто');
process.exit(problems ? 1 : 0);
