// Находит файл скрина в public/. Путь можно писать без расширения:
// '/media/projects/sv-house/01-object' → подойдёт .webp, .png, .jpg или .jpeg.
// Если файла нет — вернёт null, и на сайте будет заглушка.
import { existsSync } from 'node:fs';
import { join } from 'node:path';

const EXTS = ['.webp', '.png', '.jpg', '.jpeg', '.mp4'];

export function resolveMedia(src: string | null | undefined): string | null {
  if (!src) return null;
  const pub = join(process.cwd(), 'public');
  if (/\.[a-z0-9]+$/i.test(src)) return existsSync(join(pub, src)) ? src : null;
  for (const ext of EXTS) if (existsSync(join(pub, src + ext))) return src + ext;
  return null;
}
