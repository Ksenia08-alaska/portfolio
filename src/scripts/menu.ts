// Мобильное меню
export function initMenu() {
  const btn = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const menu = document.querySelector<HTMLElement>('[data-menu]');
  if (!btn || !menu) return;
  const root = document.documentElement;

  const set = (open: boolean) => {
    btn.setAttribute('aria-expanded', String(open));
    btn.querySelector('.sr-only')!.textContent = open ? 'Закрыть меню' : 'Открыть меню';
    menu.hidden = !open;
    root.classList.toggle('menu-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) window.__lenis?.stop();
    else window.__lenis?.start();
  };

  btn.addEventListener('click', () => set(btn.getAttribute('aria-expanded') !== 'true'));
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => set(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
      set(false);
      btn.focus();
    }
  });
  window.matchMedia('(min-width: 761px)').addEventListener('change', (e) => e.matches && set(false));
}
