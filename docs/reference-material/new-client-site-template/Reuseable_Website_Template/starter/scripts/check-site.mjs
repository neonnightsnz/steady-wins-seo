import { locations } from '../src/data/locations.ts';
import { locationPages } from '../src/data/locationPages.ts';

const guideSlugs = new Set(locationPages.map((page) => page.slug));
const errors = [];

for (const location of locations) {
  if (location.slug && !guideSlugs.has(location.slug)) {
    errors.push(`${location.name}: location slug has no matching guide`);
  }
}

for (const page of locationPages) {
  if (!locations.some((location) => location.slug === page.slug)) {
    errors.push(`${page.slug}: guide has no matching location record`);
  }
  if (page.sections.length < 2 || page.bullets.length === 0) {
    errors.push(`${page.slug}: guide needs two local sections and useful bullets`);
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`Site data check passed: ${locations.length} service areas, ${locationPages.length} guides.`);
