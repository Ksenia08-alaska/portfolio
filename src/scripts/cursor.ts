// Кастомный курсор — только для мыши
import { gsap } from 'gsap';

export function initCursor() {
  const root = document.documentElement;
  const dot = document.querySelector<HTMLElement>('[data-cursor-dot]');
  const ring = document.querySelector<HTMLElement>('[data-cursor-ring]');
  const label = document.querySelector<HTMLElement>('[data-cursor-label]');
  if (!dot || !ring || !label) return;
  root.classList.add('has-cursor', 'cursor-hidden');

  const dx = gsap.quickTo(dot, 'x', { duration: 0.12, ease: 'power3' });
  const dy = gsap.quickTo(dot, 'y', { duration: 0.12, ease: 'power3' });
  const rx = gsap.quickTo(ring, 'x', { duration: 0.5, ease: 'power3' });
  const ry = gsap.quickTo(ring, 'y', { duration: 0.5, ease: 'power3' });

  window.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    root.classList.remove('cursor-hidden');
    dx(e.clientX); dy(e.clientY); rx(e.clientX); ry(e.clientY);
  }, { passive: true });
  document.addEventListener('mouseleave', () => root.classList.add('cursor-hidden'));

  document.addEventListener('pointerover', (e) => {
    const t = e.target as HTMLElement;
    const withLabel = t.closest<HTMLElement>('[data-cursor]');
    if (withLabel) {
      label.textContent = withLabel.dataset.cursor || '';
      root.classList.add('cursor-label');
      root.classList.remove('cursor-hover');
      return;
    }
    root.classList.remove('cursor-label');
    root.classList.toggle('cursor-hover', !!t.closest('a, button, [role="button"], [tabindex="0"]'));
  });
}
