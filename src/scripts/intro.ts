// Интро (только при первом заходе за сессию) + появление первого экрана
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

function heroIn(delay = 0) {
  const hero = document.querySelector<HTMLElement>('[data-hero]');
  if (!hero) return;
  const lines = hero.querySelectorAll<HTMLElement>('[data-hero-line]');
  const tl = gsap.timeline({ delay, defaults: { ease: 'expo.out' } });

  gsap.set(lines, { visibility: 'visible' });
  lines.forEach((line, i) => {
    const split = SplitText.create(line, { type: 'chars', mask: 'chars' });
    tl.from(split.chars, { yPercent: 110, duration: 1.3, stagger: 0.035 }, i * 0.12);
  });
  tl.from(hero.querySelectorAll('[data-hero-fade]'), { y: 30, autoAlpha: 0, duration: 1.1, stagger: 0.1 }, 0.35);
  tl.from(hero.querySelector('[data-hero-badge]'), { scale: 0, rotate: -120, duration: 1.4 }, 0.5);
}

export function initIntro() {
  const root = document.documentElement;
  const intro = document.querySelector<HTMLElement>('[data-intro]');

  if (!intro || !root.classList.contains('intro')) {
    heroIn(0.05);
    return;
  }

  const dark = intro.querySelector('[data-intro-dark]');
  const orange = intro.querySelector('[data-intro-orange]');
  const chars = intro.querySelectorAll('[data-intro-char]');
  const sub = intro.querySelector('[data-intro-sub]');

  const done = () => {
    root.classList.remove('intro');
    try { sessionStorage.setItem('kk-intro', '1'); } catch {}
    window.dispatchEvent(new Event('intro:done'));
  };

  const tl = gsap.timeline({ defaults: { ease: 'expo.inOut' }, onComplete: done });
  tl.from(chars, { yPercent: 110, duration: 0.9, stagger: 0.08, ease: 'expo.out' })
    .from(sub, { y: 16, autoAlpha: 0, duration: 0.6, ease: 'power3.out' }, '-=0.5')
    .to(chars, { yPercent: -110, duration: 0.6, stagger: 0.05, ease: 'expo.in' }, '+=0.35')
    .to(sub, { autoAlpha: 0, duration: 0.3 }, '<')
    .to(dark, { yPercent: -100, duration: 0.9 }, '-=0.15')
    .to(orange, { yPercent: -100, duration: 0.9 }, '-=0.75')
    .add(() => heroIn(0), '-=0.6');
}
