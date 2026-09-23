// Бегущая строка: скорость и направление зависят от прокрутки
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initMarquee() {
  document.querySelectorAll<HTMLElement>('[data-marquee]').forEach((box) => {
    const track = box.querySelector<HTMLElement>('[data-marquee-track]');
    if (!track) return;
    const loop = gsap.to(track, { xPercent: -50, duration: 38, ease: 'none', repeat: -1 });
    let dir = 1;
    ScrollTrigger.create({
      trigger: box,
      start: 'top bottom',
      end: 'bottom top',
      onToggle: (self) => (self.isActive ? loop.play() : loop.pause()),
      onUpdate: (self) => {
        const v = self.getVelocity();
        if (Math.abs(v) > 20) dir = v > 0 ? 1 : -1;
        const boost = gsap.utils.clamp(1, 6, 1 + Math.abs(v) / 400);
        gsap.to(loop, { timeScale: dir * boost, duration: 0.2, overwrite: true });
        gsap.to(loop, { timeScale: dir, duration: 1.2, delay: 0.2, overwrite: false });
      },
    });
  });
}
