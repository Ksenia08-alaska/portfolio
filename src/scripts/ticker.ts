// Блок «Работают прямо сейчас» на первом экране: по очереди подсвечивает проекты
import { gsap } from 'gsap';

export function initTicker(animate: boolean) {
  const box = document.querySelector<HTMLElement>('[data-ticker]');
  if (!box) return;
  const items = [...box.querySelectorAll<HTMLElement>('[data-ticker-item]')];
  if (!items.length || !animate) return;

  let i = 0;
  let paused = false;
  let tween: gsap.core.Tween | null = null;

  const activate = (n: number) => {
    items.forEach((el, k) => el.classList.toggle('is-active', k === n));
    const bar = items[n].querySelector('.hero__now-bar i');
    tween?.kill();
    gsap.set(box.querySelectorAll('.hero__now-bar i'), { scaleX: 0 });
    tween = gsap.fromTo(bar, { scaleX: 0 }, {
      scaleX: 1,
      duration: 3.4,
      ease: 'none',
      onComplete: () => {
        if (!paused) {
          i = (i + 1) % items.length;
          activate(i);
        }
      },
    });
  };

  box.addEventListener('mouseenter', () => { paused = true; tween?.pause(); });
  box.addEventListener('mouseleave', () => { paused = false; tween?.resume(); });
  box.addEventListener('focusin', () => { paused = true; tween?.pause(); });
  box.addEventListener('focusout', () => { paused = false; tween?.resume(); });

  // стартуем после интро
  const start = () => activate(0);
  if (document.documentElement.classList.contains('intro')) {
    window.addEventListener('intro:done', start, { once: true });
  } else start();
}
