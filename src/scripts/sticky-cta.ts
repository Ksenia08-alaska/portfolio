// Закреплённая кнопка связи на телефоне: появляется после первого экрана, прячется у блока контактов
export function initStickyCta() {
  const bar = document.querySelector<HTMLElement>('[data-sticky-cta]');
  if (!bar) return;
  const first = document.querySelector('[data-hero]') || document.querySelector('.chero');
  const contact = document.querySelector('#contact');
  let pastFirst = !first;
  let atContact = false;
  const update = () => bar.classList.toggle('is-visible', pastFirst && !atContact);

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.target === first) pastFirst = !e.isIntersecting && e.boundingClientRect.top < 0;
      if (e.target === contact) atContact = e.isIntersecting;
    });
    update();
  });
  if (first) io.observe(first);
  if (contact) io.observe(contact);
  update();
}
