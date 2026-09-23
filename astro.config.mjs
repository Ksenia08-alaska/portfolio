// @ts-check
import { defineConfig } from 'astro/config';

// Адрес сайта. Когда подключим домен — поменять здесь (нужен для og-картинок и canonical).
export default defineConfig({
  site: 'https://krishtopova.vercel.app',
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'auto' },
  devToolbar: { enabled: false },
});
