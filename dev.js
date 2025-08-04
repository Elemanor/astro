#!/usr/bin/env node
// Direct Astro dev server launcher
import { dev } from 'astro';

dev({
  root: process.cwd(),
  port: 4321,
  host: true
}).catch(err => {
  console.error(err);
  process.exit(1);
});