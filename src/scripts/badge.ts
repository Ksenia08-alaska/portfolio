// Круглый бейдж на первом экране: крутится сам и быстрее — от прокрутки
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initBadge() {
  const ring = document.querySelector<SVGElement>('[data-hero-ring]');
  if (!ring) return;
  const spin = gsap.to(ring, { rotation: 360, duration: 22, ease: 'none', repeat: -1, transformOrigin: '50% 50%' });
  ScrollTrigger.create({
    trigger: '[data-hero]',
    start: 'top top',
    end: 'bottom top',
    onUpdate: (self) => {
      const v = Math.abs(self.getVelocity());
      gsap.to(spin, { timeScale: 1 + Math.min(v / 150, 8), duration: 0.2, overwrite: true });
      gsap.to(spin, { timeScale: 1, duration: 1.4, delay: 0.25 });
    },
  });
}
