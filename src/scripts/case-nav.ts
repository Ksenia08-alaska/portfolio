// Подсвечивает текущий раздел кейса в навигации
export function initCaseNav() {
  const links = [...document.querySelectorAll<HTMLAnchorElement>('[data-casenav-link]')];
  if (!links.length) return;
  const sections = links
    .map((a) => document.getElementById(a.hash.slice(1)))
    .filter((s): s is HTMLElement => !!s);

  let activeId = '';
  const setActive = (id: string) => {
    if (id === activeId) return;
    activeId = id;
    for (const a of links) {
      const on = a.hash === `#${id}`;
      a.classList.toggle('is-active', on);
      if (on) {
        a.setAttribute('aria-current', 'true');
        const li = a.parentElement;
        const list = li?.parentElement;
        if (li && list && list.scrollWidth > list.clientWidth) {
          const left = li.offsetLeft - (list.clientWidth - li.offsetWidth) / 2;
          list.scrollTo({ left: Math.max(0, left), behavior: 'smooth' });
        }
      } else a.removeAttribute('aria-current');
    }
  };

  const onScroll = () => {
    const line = window.innerHeight * 0.35;
    let current = sections[0]?.id;
    for (const s of sections) if (s.getBoundingClientRect().top <= line) current = s.id;
    if (current) setActive(current);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}
