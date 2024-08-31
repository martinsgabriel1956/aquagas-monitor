import path from 'node:path'
import { fileURLToPath } from 'node:url';

export function setURL(filepath: string) {
  return path.resolve(path.dirname(fileURLToPath(import.meta.url)), filepath)
}