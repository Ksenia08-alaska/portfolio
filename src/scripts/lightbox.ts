// Просмотр скрина целиком: клик по скрину → окно на весь экран с обычной прокруткой.
// Закрыть: крестик, Esc или клик по тёмному фону.
export function initLightbox() {
  const dlg = document.querySelector<HTMLDialogElement>('[data-lightbox]');
  const img = dlg?.querySelector<HTMLImageElement>('[data-lightbox-img]');
  if (!dlg || !img || typeof dlg.showModal !== 'function') return;

  const lenis = () => window.__lenis;

  document.addEventListener('click', (e) => {
    const btn = (e.target as HTMLElement).closest<HTMLElement>('[data-shot]');
    if (!btn) return;
    e.preventDefault();
    img.src = btn.dataset.shot || '';
    img.alt = btn.dataset.shotAlt || '';
    dlg.classList.toggle('is-phone', !!btn.closest('.phone'));
    lenis()?.stop();
    document.documentElement.classList.add('lightbox-open');
    dlg.showModal();
    dlg.querySelector<HTMLElement>('.lightbox__scroll')?.scrollTo(0, 0);
  });

  dlg.addEventListener('close', () => {
    lenis()?.start();
    document.documentElement.classList.remove('lightbox-open');
  });
  dlg.addEventListener('click', (e) => {
    const t = e.target as HTMLElement;
    if (t === dlg || t.hasAttribute('data-lightbox-close') || t.classList.contains('lightbox__scroll')) dlg.close();
  });
}
