// Подключает все анимации и логику сайта.
// Если у посетителя включено «уменьшить движение» — работают только полезные функции без анимаций.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

import { initSmoothScroll } from './smooth-scroll';
import { initHeader } from './header';
import { initMenu } from './menu';
import { initStickyCta } from './sticky-cta';
import { initCopy } from './copy';
import { initTicker } from './ticker';
import { initIntro } from './intro';
import { initReveal } from './reveal';
import { initMarquee } from './marquee';
import { initParallax } from './parallax';
import { initBadge } from './badge';
import { initCursor } from './cursor';
import { initMagnetic } from './magnetic';
import { initPhoneScroll } from './phone-scroll';
import { initCaseNav } from './case-nav';
import { initLightbox } from './lightbox';

gsap.registerPlugin(ScrollTrigger, SplitText);

const root = document.documentElement;
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

// полезное — работает всегда
initHeader();
initMenu();
initStickyCta();
initCopy();
initPhoneScroll();
initCaseNav();
initLightbox();

if (reduce) {
  root.classList.remove('intro');
  initTicker(false);
} else {
  initSmoothScroll();
  initTicker(true);
  initMarquee();
  initBadge();
  // шрифты должны загрузиться до разбиения текста на строки
  document.fonts.ready.then(() => {
    initIntro();
    initReveal();
    initParallax();
    ScrollTrigger.refresh();
  });
  if (finePointer) {
    initCursor();
    initMagnetic();
  }
}
