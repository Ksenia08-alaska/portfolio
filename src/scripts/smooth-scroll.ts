// Плавный скролл Lenis, синхронизированный с GSAP ScrollTrigger
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

declare global {
  interface Window { __lenis?: Lenis }
}

export function initSmoothScroll() {
  const lenis = new Lenis({
    lerp: 0.1,
    wheelMultiplier: 1,
    anchors: { offset: -90 },
    prevent: (node: HTMLElement) => node.hasAttribute('data-lenis-prevent'),
  });
  window.__lenis = lenis;
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  return lenis;
}
