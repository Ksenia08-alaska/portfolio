// Шапка: подложка после начала прокрутки, прячется при скролле вниз
export function initHeader() {
  const header = document.querySelector<HTMLElement>('[data-header]');
  if (!header) return;
  let last = window.scrollY;
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle('is-scrolled', y > 20);
    const menuOpen = document.documentElement.classList.contains('menu-open');
    if (!menuOpen) header.classList.toggle('is-hidden', y > 500 && y > last + 2);
    if (y < last - 2) header.classList.remove('is-hidden');
    document.documentElement.classList.toggle('header-hidden', header.classList.contains('is-hidden'));
    last = y;
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  header.addEventListener('focusin', () => header.classList.remove('is-hidden'));
}
