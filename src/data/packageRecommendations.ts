import { packages } from '~/data/packages';
import { getPermalink } from '~/utils/permalinks';

export type RecommendationIntent = 'complementary' | 'related';

interface RecommendationConfig {
  /** Provisional one-line distinction for cards; replace with approved copy later. */
  blurb: string;
  /** Future badge artwork. The current cards deliberately draw CSS placeholders. */
  badge?: string;
  /** Explicit substitutes. Category matching is only a fallback when this is absent. */
  related?: readonly string[];
  /** Explicit services that can accompany this package. */
  complementary?: readonly string[];
}

// These relationships are placeholders for layout and internal-link review.
// Replace each list when the package groupings are approved.
export const packageRecommendations: Record<string, RecommendationConfig> = {
  '20-day-seo-boost': {
    blurb: 'One-time, 20-day link campaign',
    complementary: ['keywords-that-rank', 'content-that-ranks'],
    related: ['links-all-month', 'steady-plus', 'seo-perfect-storm'],
  },
  'content-that-ranks': {
    blurb: 'One-time content package',
    complementary: ['keywords-that-rank', 'links-all-month'],
    related: ['quick-wins', 'seo-perfect-storm', '20-day-seo-boost'],
  },
  'steady-plus': {
    blurb: 'Guest post placements',
    complementary: ['content-that-ranks', 'keywords-that-rank'],
    related: ['20-day-seo-boost', 'links-all-month', 'pbn-network'],
  },
  'keywords-that-rank': {
    blurb: 'One-time keyword strategy',
    complementary: ['content-that-ranks', '20-day-seo-boost'],
    related: ['quick-wins', 'seo-perfect-storm', 'steady-plus'],
  },
  'links-all-month': {
    blurb: 'Recurring monthly link building',
    complementary: ['content-that-ranks', 'keywords-that-rank'],
    related: ['20-day-seo-boost', 'steady-plus', 'seo-perfect-storm'],
  },
  nitros: {
    blurb: 'Existing-customer add-on',
    complementary: ['keywords-that-rank', 'content-that-ranks'],
    related: ['links-all-month', '20-day-seo-boost', 'seo-perfect-storm'],
  },
  'seo-perfect-storm': {
    blurb: 'Monthly audit, strategy, content and link campaign',
    complementary: ['steady-plus', 'pbn-network'],
    related: ['20-day-seo-boost', 'links-all-month', 'quick-wins'],
  },
  'quick-wins': {
    blurb: 'One-time optimization for pages already ranking',
    complementary: ['content-that-ranks', 'links-all-month'],
    related: ['keywords-that-rank', 'seo-perfect-storm', '20-day-seo-boost'],
  },
  'pbn-network': {
    blurb: 'Private-network links priced per link',
    complementary: ['keywords-that-rank', 'content-that-ranks'],
    related: ['steady-plus', '20-day-seo-boost', 'links-all-month'],
  },
};

export interface RecommendedPackage {
  slug: string;
  name: string;
  href: string;
  blurb: string;
  category: string;
  accent: string;
  price?: string;
  badge?: string;
}

const excludedRecommendationSlugs = new Set(['nitros']);

export function getPackageRecommendations(slug: string, intent: RecommendationIntent): RecommendedPackage[] {
  const current = packages.find((item) => item.slug === slug);
  if (!current) return [];

  const explicit = packageRecommendations[slug]?.[intent];
  const fallback =
    intent === 'related'
      ? packages.filter((item) => item.category === current.category).map((item) => item.slug)
      : [];
  const candidates = explicit ?? fallback;
  const limit = intent === 'complementary' ? 2 : 3;

  return [...new Set(candidates)]
    .filter((candidate) => candidate !== slug && !excludedRecommendationSlugs.has(candidate))
    .map((candidate) => packages.find((item) => item.slug === candidate))
    .filter((item): item is (typeof packages)[number] => Boolean(item))
    .slice(0, limit)
    .map((item) => ({
      slug: item.slug,
      name: item.name,
      href: getPermalink('/packages/' + item.slug),
      blurb: packageRecommendations[item.slug]?.blurb ?? item.name,
      category: item.category,
      accent: item.color,
      price: item.price,
      badge: packageRecommendations[item.slug]?.badge,
    }));
}
