import { getPermalink, getBlogPermalink } from './utils/permalinks';
export const headerData = {
  links: [
    { text: 'Packages', href: getPermalink('/services') },
    { text: 'Our approach', href: getPermalink('/about') },
    { text: 'Pricing', href: getPermalink('/pricing') },
    { text: 'Insights', href: getBlogPermalink() },
  ],
  actions: [{ variant: 'primary' as const, text: 'Build my growth brief ↗︎', href: getPermalink('/contact') }],
};
export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [],
  footNote: 'Steady Wins · Keywords That Rank',
};
