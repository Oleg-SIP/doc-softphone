// Before `npm run build:ru`: puts the Russian screenshots (and only those:
// static/screenshots holds all thirty languages, 700 MB) into static-ru/,
// the static directory of the Russian site.
import { cpSync, rmSync, mkdirSync } from 'node:fs';

const target = 'static-ru/screenshots/macos/ru';
rmSync('static-ru/screenshots/macos', { recursive: true, force: true });
mkdirSync(target, { recursive: true });
cpSync('static/screenshots/macos/ru', target, { recursive: true });
console.log(`prepare-ru: static/screenshots/macos/ru -> ${target}`);
