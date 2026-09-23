// Кнопка «Копировать» для почты
export function initCopy() {
  document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach((btn) => {
    const initial = btn.textContent;
    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(btn.dataset.copy || '');
        btn.textContent = 'Скопировано';
      } catch {
        btn.textContent = 'Не вышло — выделите вручную';
      }
      setTimeout(() => (btn.textContent = initial), 2000);
    });
  });
}
