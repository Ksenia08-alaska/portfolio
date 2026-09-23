// Скрины в телефоне и браузере.
// Страница никогда не «застревает»: внутри макета ничего не скроллится.
// Мышь: при наведении длинный скрин плавно проезжает вниз и возвращается.
// Клик или тап: скрин открывается целиком (см. lightbox.ts).
export function initPhoneScroll() {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const mouse = matchMedia('(hover: hover) and (pointer: fine)').matches;

  document.querySelectorAll<HTMLElement>('[data-shot-frame]').forEach((frame) => {
    const img = frame.querySelector<HTMLImageElement>('img');
    const holder = frame.parentElement;
    if (!img || !holder) return;

    const distance = () => Math.max(0, img.offsetHeight - frame.clientHeight);
    const update = () => holder.classList.toggle('has-more', distance() > 8);
    if (img.complete) update();
    img.addEventListener('load', update);
    window.addEventListener('resize', update, { passive: true });

    if (reduce || !mouse) return;
    frame.addEventListener('pointerenter', () => {
      const d = distance();
      if (!d) return;
      img.style.setProperty('--pan-dur', `${Math.min(8, Math.max(1.2, d / 450))}s`);
      img.style.setProperty('--pan', `${-d}px`);
    });
    frame.addEventListener('pointerleave', () => {
      img.style.setProperty('--pan-dur', '0.9s');
      img.style.setProperty('--pan', '0px');
    });
  });
}
