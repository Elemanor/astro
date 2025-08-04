// Force bypass Node version check for development
process.env.ASTRO_SKIP_VERSION_CHECK = 'true';

// Add 'dev' command to process arguments
process.argv.push('dev');

// Import and run Astro CLI
import('./node_modules/astro/astro.js');