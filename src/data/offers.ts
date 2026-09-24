export type Offer = {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  price: string;
  accent: string;
  cardAccent: string;
  image: string;
  imageAlt: string;
  eyebrow: string;
  headline: string;
  intro: string;
  problem: string;
  solution: string;
  benefits: string[];
  sections: { title: string; body: string }[];
};

const image = (file: string) => `/images/offers/${file}`;

export const offers: Offer[] = [
  {
    slug: 'green-light-content-that-ranks',
    title: 'Green Light Content That Ranks',
    shortTitle: 'Green Light Content',
    category: 'Content strategy',
    price: '$499',
    accent: '#108020',
    cardAccent: '#0b5b1a',
    image: image('315418721_5806824402766009_8312562941433168666_n.jpg'),
    imageAlt: 'Green abstract business reference image',
    eyebrow: '01 / Content strategy',
    headline: 'Boost Your Search Engine Rankings and Drive More Traffic with Our Proven Content Strategy',
    intro:
      'Welcome to Green Light Content That Ranks, the premier SEO service for businesses looking to increase their online presence and drive more traffic to their website.',
    problem:
      'Many businesses struggle with low search engine rankings and poor online visibility. It can be difficult to create content that stands out in a crowded digital landscape and even harder to improve your search engine rankings.',
    solution:
      'Our team of experts will work with you to identify the best keywords for your business and craft compelling content that will rank well in search engines and engage your audience.',
    benefits: [
      'Increased online visibility',
      'Improved search engine rankings',
      'More qualified traffic to your website',
    ],
    sections: [
      {
        title: 'The strategy',
        body: 'Our team of SEO experts has spent years perfecting a content strategy that delivers real results. By creating compelling, high-quality content that targets the right keywords and resonates with your audience, we can help increase your online visibility and establish your brand as an industry leader.',
      },
      {
        title: 'What you get',
        body: "By partnering with Green Light Content That Ranks, you'll benefit from increased online visibility, improved search engine rankings, and more qualified traffic to your website.",
      },
    ],
  },
  {
    slug: 'steady-on-new-links-all-month',
    title: 'Steady On New Links All Month',
    shortTitle: 'New Links All Month',
    category: 'Link building',
    price: '$499',
    accent: '#2080f0',
    cardAccent: '#1252a2',
    image: image('315431127_837681247554096_2346618594346378314_n.jpg'),
    imageAlt: 'Blue abstract business reference image',
    eyebrow: '02 / Link building',
    headline: 'Boost Your Search Engine Rankings and Drive More Traffic with Our Proven Link Building Strategy',
    intro:
      'Welcome to Steady On New Links All Month, the premier monthly managed link building service for businesses looking to increase their online presence and drive more traffic to their website.',
    problem:
      "Traditional link building tactics like low-quality directories and link exchanges just don't cut it anymore. It's hard to stand out in a crowded digital landscape and even harder to improve your search engine rankings.",
    solution:
      'Our monthly managed link building service includes keywords, rankings, and tracking reports to help you understand the effectiveness of our strategy. Our team will work with you to identify the best websites for your business to be featured on.',
    benefits: ['High-quality, authoritative links', 'Keywords, rankings, and tracking', 'A steady stream of new links'],
    sections: [
      {
        title: 'The strategy',
        body: 'By consistently acquiring new, high-quality links from authoritative websites, we can help increase your online visibility, establish your brand as an industry leader, and drive more qualified traffic to your website.',
      },
      {
        title: 'What you get',
        body: 'Craft compelling content that will attract high-quality links and drive traffic to your website, with monthly managed activity around the pages that matter.',
      },
    ],
  },
  {
    slug: '20-days-seo-boost',
    title: 'Steady Wins 20 Days SEO Boost',
    shortTitle: '20 Days SEO Boost',
    category: 'Link building',
    price: '$97',
    accent: '#f09020',
    cardAccent: '#9a4e06',
    image: image('315519410_513833433963164_5862828981401951313_n.jpg'),
    imageAlt: 'Orange abstract business reference image',
    eyebrow: '03 / 20 day boost',
    headline: 'Boost Your Search Engine Rankings and Drive More Traffic with Our Proven Link Building Strategy',
    intro:
      "Attention all business owners and marketing professionals: Are you tired of the same old link building techniques that just don't seem to deliver results? Are you ready to take your online presence to the next level with a steady stream of high-quality, authoritative links?",
    problem:
      "Traditional link building tactics like low-quality directories and link exchanges just don't cut it anymore. It's hard to stand out in a crowded digital landscape and even harder to improve your search engine rankings.",
    solution:
      'Steady on New Links All Month offers a solution to this problem. Our team will work with you to identify the best websites for your business to be featured on and craft compelling content that will attract high-quality links and drive traffic to your website.',
    benefits: [
      'Increased online visibility',
      'Improved search engine rankings',
      'More qualified traffic to your website',
    ],
    sections: [
      {
        title: 'The boost',
        body: 'Our team of SEO experts has spent years perfecting a link building strategy that actually works. By consistently acquiring new, high-quality links from authoritative websites, we can help increase your online visibility and establish your brand as an industry leader.',
      },
      { title: 'The offer', body: 'The ORIGINAL ALPHA SEO - Top Marketplace Seller for $97.' },
    ],
  },
  {
    slug: 'easy-seo-quick-wins',
    title: 'Steady Wins Easy SEO Quick Wins',
    shortTitle: 'Easy SEO Quick Wins',
    category: 'SEO process',
    price: '$499',
    accent: '#fff010',
    cardAccent: '#756500',
    image: image('315234488_675848500560273_7168400827480865574_n.jpg'),
    imageAlt: 'Yellow abstract business reference image',
    eyebrow: '04 / SEO process',
    headline: "Rank on Google's Front Page FAST with Our Proven 8 Step SEO Process",
    intro:
      'Welcome to Steady Wins Easy SEO Quick Wins, the premier SEO service for businesses looking to increase their online presence and drive more traffic to their website.',
    problem:
      "Many businesses struggle with low search engine rankings and poor online visibility. Traditional link building tactics often don't work and cookie-cutter SEO packages from the past are no longer effective.",
    solution:
      "Our team will analyze your domain URL, filter for keywords ranking below page 1, and research the competition to identify the best, low-competition keywords with high search volume. We'll then optimize the content for those keywords and sprinkle high DR link juice to give your rankings a boost.",
    benefits: ['A proven 8 step SEO process', 'Value-driven keywords', "Content using Google's ranking factors"],
    sections: [
      {
        title: 'The process',
        body: "Our team of SEO experts has developed an SEO process that delivers real results, quickly. By discovering value-driven keywords, taking advantage of your competitors' weaknesses, and creating perfectly optimized content, we can help increase your online visibility.",
      },
      {
        title: 'The outcome',
        body: "By partnering with Steady Wins Easy SEO Quick Wins, you'll benefit from increased online visibility, improved search engine rankings, and more qualified traffic to your website.",
      },
    ],
  },
  {
    slug: 'keywords-that-rank',
    title: 'Steady Wins Keywords That Rank',
    shortTitle: 'Keywords That Rank',
    category: 'Keyword strategy',
    price: '$499',
    accent: '#6020a0',
    cardAccent: '#43116e',
    image: image('314551870_1187777118817674_7919818327657003498_n.jpg'),
    imageAlt: 'Purple and red abstract business reference image',
    eyebrow: '05 / Keyword strategy',
    headline: 'Boost Your Search Engine Rankings and Drive More Traffic with Our Proven Keyword Strategy',
    intro:
      'Welcome to Steady Wins Keywords That Rank, the premier SEO service for businesses looking to increase their online presence and drive more traffic to their website.',
    problem:
      'Many businesses struggle with low search engine rankings and poor online visibility. It can be difficult to stand out in a crowded digital landscape and even harder to improve your search engine rankings.',
    solution:
      'Our team of experts will work with you to identify the best keywords for your business and help you incorporate them into your website and content in a way that ranks well in search engines and resonates with your audience.',
    benefits: ['Targeted, ranking keywords', 'Increased online visibility', 'More qualified traffic to your website'],
    sections: [
      {
        title: 'The strategy',
        body: 'Our team of SEO experts has spent years perfecting a keyword strategy that delivers real results. By targeting the right keywords and incorporating them into your website and content in a natural way, we can help increase your online visibility and establish your brand as an industry leader.',
      },
      {
        title: 'What you get',
        body: "By partnering with Steady Wins Keywords That Rank, you'll benefit from increased online visibility, improved search engine rankings, and more qualified traffic to your website.",
      },
    ],
  },
  {
    slug: 'nitrous-seo-addon',
    title: 'Steady Wins Nitrous SEO Addon',
    shortTitle: 'Nitrous SEO Addon',
    category: 'SEO add-on',
    price: '$299',
    accent: '#d02020',
    cardAccent: '#821414',
    image: image('315012010_432231895767913_822123909248969522_n.jpg'),
    imageAlt: 'Red abstract business reference image',
    eyebrow: '06 / SEO add-on',
    headline: 'Unleash the Full Potential of Your Online Presence with Steady Wins Nitrous SEO Addon',
    intro:
      'Welcome to Steady Wins Nitrous SEO Addon, the ultimate SEO booster for businesses looking to take their online presence to the next level.',
    problem:
      "As an existing customer, you've already taken the first step in improving your online presence. But if you want to take things to the next level, you need a boost – something that will push your results over the top and give you an edge over your competition.",
    solution:
      'Our secret sauce is designed to boost your search engine rankings and drive more traffic to your website, giving you the edge you need to dominate your industry.',
    benefits: [
      'Improved search engine rankings',
      'Increased online visibility',
      'More qualified traffic to your website',
    ],
    sections: [
      {
        title: 'The add-on',
        body: "Are you ready to take your results to OVER-DRIVE? This exclusive offer is only available to existing customers, so don't miss out on the chance to supercharge your online presence.",
      },
      {
        title: 'The offer',
        body: "By signing up for Steady Wins Nitrous SEO Addon, you'll benefit from the boost you need to stand out in your industry and attract more business.",
      },
    ],
  },
  {
    slug: 'seo-perfect-storm',
    title: 'Steady Wins SEO Perfect Storm',
    shortTitle: 'SEO Perfect Storm',
    category: 'Complete SEO solution',
    price: '$999',
    accent: '#f01010',
    cardAccent: '#8a0808',
    image: image('314590836_447696713984273_2061149358019426679_n.jpg'),
    imageAlt: 'Red and yellow abstract business reference image',
    eyebrow: '07 / Complete SEO solution',
    headline:
      'Dominate Your Online Competition and Drive Unlimited Traffic to Your Website with the Ultimate SEO Solution',
    intro:
      'Welcome to Steady Wins SEO Perfect Storm, the ultimate SEO solution for businesses looking to dominate their online competition and drive unlimited amounts of traffic to their website.',
    problem:
      'Many businesses struggle to stay relevant and visible online, constantly fighting for attention in a crowded marketplace. Traditional SEO tactics and link building packages are often ineffective and fail to deliver lasting results.',
    solution:
      "Our team of experts will conduct a thorough analysis of your website and industry to identify the most valuable keywords and opportunities for growth. We'll then craft a custom, data-driven SEO strategy that targets those keywords and leverages the latest ranking factors.",
    benefits: [
      'A comprehensive SEO strategy',
      'Valuable keyword and growth opportunities',
      'Compelling, high-quality content',
    ],
    sections: [
      {
        title: 'The strategy',
        body: "By identifying and targeting the most valuable keywords for your business, analyzing and exploiting your competitors' weaknesses, and creating compelling, high-quality content that ranks at the top of search engines, we can help you become the undisputed leader in your industry.",
      },
      {
        title: 'What you get',
        body: "By partnering with Steady Wins SEO Perfect Storm, you'll benefit from increased online visibility, improved search engine rankings, and more qualified traffic to your website.",
      },
    ],
  },
  {
    slug: 'hard-hitting-guest-posts',
    title: 'Straight Up Hard Hitting Guest Posts',
    shortTitle: 'Hard Hitting Guest Posts',
    category: 'Guest posting',
    price: '$499',
    accent: '#f01010',
    cardAccent: '#8a0808',
    image: image('314702971_810864760128647_3657096636100651118_n.jpg'),
    imageAlt: 'Red and yellow abstract business reference image',
    eyebrow: '08 / Guest posting',
    headline: 'Boost Your Search Engine Rankings and Drive More Traffic with Our Proven Guest Posting Strategy',
    intro:
      'Welcome to Straight Up Hard Hitting Guest Posts, the premier SEO service for businesses looking to increase their online presence and drive more traffic to their website.',
    problem:
      'Traditional SEO tactics like keyword stuffing and backlinking have become less effective, and it can be difficult to stand out in a crowded digital landscape.',
    solution:
      'Our team of experts will work with you to identify the best websites for your business to be featured on and craft compelling content that will showcase your expertise and drive traffic to your website.',
    benefits: ['High-quality guest posts', 'Relevant industry websites', 'More qualified traffic to your website'],
    sections: [
      {
        title: 'The strategy',
        body: 'Our team of SEO experts has spent years perfecting a guest posting strategy that delivers real results. By getting your business featured on high-authority websites, we can help you increase your online visibility and establish your brand as an industry leader.',
      },
      {
        title: 'What you get',
        body: "By partnering with Straight Up Hard Hitting Guest Posts, you'll benefit from increased online visibility, improved search engine rankings, and more qualified traffic to your website.",
      },
    ],
  },
  {
    slug: 'pbn-network-whip',
    title: 'The PBN Network Whip',
    shortTitle: 'PBN Network Whip',
    category: 'Link building',
    price: '$199',
    accent: '#2060a0',
    cardAccent: '#123a65',
    image: image('314575372_1840223389659236_6500017196100725113_n.jpg'),
    imageAlt: 'Blue abstract business reference image',
    eyebrow: '09 / Private network',
    headline: 'Rank Higher and Drive More Traffic to Your Website with Our Private, High-Authority PBN Network',
    intro:
      'Welcome to The PBN Network Whip, the ultimate link building solution for businesses looking to boost their search engine rankings and drive more traffic to their website.',
    problem:
      'Many businesses struggle with low search engine rankings and poor online visibility, despite trying various link building techniques. Many PBNs on the market are low quality and shared among multiple vendors.',
    solution:
      "Our private PBN network is full of high-authority domains that really do move the needle and can help you boost your rankings and drive more traffic to your website. We'll target valuable keywords and provide you with high-quality links.",
    benefits: ['40 high authority links', 'A private PBN network', 'Real link juice and power'],
    sections: [
      {
        title: 'The network',
        body: 'Our team of SEO experts has developed a private PBN network that delivers powerful link juice to any business looking to rank high on search engines. By targeting valuable keywords and leveraging the authority of high-quality domains, we can help you get unstuck.',
      },
      {
        title: 'The offer',
        body: '40 High Authority Links from the Lightning PBN Network Real Link Juice and Power for $199.',
      },
    ],
  },
];

export const getOffer = (slug: string) => offers.find((offer) => offer.slug === slug);
