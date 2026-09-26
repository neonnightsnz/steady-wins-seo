// Per-package rich content for the landing-page template: problem cards,
// timelines, and testimonials (sourced from docs/steady-wins-reviews.csv).
export interface Testimonial {
  reviewer: string;
  text: string;
}
export interface ProblemCard {
  title: string;
  body: string;
}
export interface TimelineStep {
  range: string;
  label: string;
  body: string;
}
export interface PackageExtra {
  problems: ProblemCard[];
  timeline: TimelineStep[];
  testimonials: Testimonial[];
}

export const packageExtra: Record<string, PackageExtra> = {
  'steady-seo': {
    problems: [
      {
        title: 'Someone else is closing your client',
        body: "While you sit on page 4, the business on page 1 is answering the search you should've owned.",
      },
      {
        title: 'Old tactics, new packaging',
        body: 'Directories and link exchanges stopped moving rankings years ago — a lot of "SEO" today is just that, rebranded.',
      },
      {
        title: 'Batch links look like what they are',
        body: 'A pile of links dropped all at once reads as manipulation, not authority. Search engines notice the pattern.',
      },
    ],
    timeline: [
      {
        range: '01',
        label: 'Full site audit',
        body: "Before we touch anything, we know exactly what we're working with.",
      },
      {
        range: '02–09',
        label: 'Anchor + target strategy',
        body: 'Anchor text plan built around your actual target keywords — not generic phrases.',
      },
      {
        range: '10',
        label: 'Progress check-in',
        body: "You see what's been built so far — no radio silence for three weeks.",
      },
      {
        range: '11–19',
        label: '10–15 backlinks built',
        body: 'High-authority links delivered across the window, drip-fed on purpose.',
      },
      {
        range: '20',
        label: 'Final report',
        body: 'Every link, every URL, DR of every site, and a ranking snapshot — before vs. after.',
      },
    ],
    testimonials: [
      { reviewer: 'acneultimate', text: 'on time - good links -will buy again' },
      {
        reviewer: 'Thantheman1790',
        text: 'Barry and his team are awesome. He provides clear guidance and does his research to provide a well thought out SEO backlink strategy.',
      },
      {
        reviewer: 'pablobulto',
        text: 'So far si happy with the service provided and the reporting. Will see the effects in some weeks. Hope everything is ok as always. Recommended service with no doubt. Thanks',
      },
    ],
  },
  'content-that-ranks': {
    problems: [
      {
        title: "Thin content doesn't rank",
        body: 'Pages built to fill space get ignored by search engines and get nothing from readers.',
      },
      {
        title: "Robot content doesn't convert",
        body: 'Content written for algorithms reads like it — and turns real buyers off.',
      },
      {
        title: 'Stuck at the same light',
        body: 'Without the right words and structure, every page stays flat no matter how good it feels.',
      },
    ],
    timeline: [
      {
        range: 'Week 1',
        label: 'Keyword + intent research',
        body: 'The search term your audience is actually using, verified by data.',
      },
      {
        range: 'Week 1',
        label: 'Content brief',
        body: 'Title, header structure, and target length locked before we write a word.',
      },
      {
        range: 'Week 2',
        label: '1–2 SEO articles written',
        body: '1,500–2,000 words each, built around real search intent.',
      },
      {
        range: 'Week 2',
        label: 'On-page pass',
        body: 'Title tag, meta description, headers, and internal links all optimized.',
      },
      {
        range: 'Week 3',
        label: 'Delivered with a "why"',
        body: "Each piece ships with the reasoning for why it's built to rank.",
      },
    ],
    testimonials: [
      { reviewer: 'RTItraining', text: 'Barry is the best! We cannot recommend him highly enough!!!' },
      {
        reviewer: 'Thantheman1790',
        text: 'Excellent job with an in depth breakdown of why Barry chose the keywords he did as well as some info on strategy moving forward. I look forward to ordering his other services.',
      },
      { reviewer: 'christenstefan', text: 'Great service as always!' },
    ],
  },
  'steady-plus': {
    problems: [
      {
        title: 'Junk sites, nothing gained',
        body: "Most guest post services place you on sites nobody reads and Google doesn't trust.",
      },
      {
        title: 'You pay, you get nothing',
        body: 'A link on a spam step is worse than no link — it can drag your rankings down.',
      },
      { title: 'Guessed anchor text', body: 'Links pointed at the wrong pages and phrases do more harm than good.' },
    ],
    timeline: [
      {
        range: '01',
        label: 'Vet the sites',
        body: '3–5 relevant, DR-vetted sites open to guest posts — shortlisted before we pitch.',
      },
      {
        range: '02',
        label: 'Write the article',
        body: 'One unique, topically matched article per placement. Not spun, not recycled.',
      },
      {
        range: '03',
        label: 'Niche-match check',
        body: "Your link goes on a page about your actual business — never the wrong client's product.",
      },
      { range: '04', label: 'Publish + screenshot', body: 'Every live post captured and documented.' },
      { range: '05', label: 'Final report', body: 'Every live URL and DR of every placement.' },
    ],
    testimonials: [
      { reviewer: 'starvenger', text: 'Barry thanks you. Amazing job. See you soon' },
      { reviewer: 'nopus', text: 'Perfect. 5 Stars *****' },
      { reviewer: 'gustavtk', text: 'Great as always' },
    ],
  },
  'keywords-that-rank': {
    problems: [
      {
        title: 'Guesswork keywords',
        body: 'Most businesses guess at the words to target — and build content around volume, not buyers.',
      },
      {
        title: 'Big volume, no intent',
        body: 'Chasing the biggest search volumes lands you in the fiercest competition, converting nobody.',
      },
      { title: 'Right content, wrong words', body: 'Perfect content aimed at the wrong terms still gets you nothing.' },
    ],
    timeline: [
      { range: 'Step 1', label: 'Pull the data', body: 'Keyword list with volume, difficulty, and search intent.' },
      {
        range: 'Step 2',
        label: 'Map to pages',
        body: '10–20 target terms, each mapped to a specific page on your site.',
      },
      { range: 'Step 3', label: 'Gap analysis', body: "What your competitors rank for that you don't." },
      { range: 'Step 4', label: 'On-page plan', body: 'Placement recommendations for title, H1, and body.' },
      { range: 'Step 5', label: 'Tracking sheet', body: 'A reusable spreadsheet you keep and update.' },
    ],
    testimonials: [
      { reviewer: 'RTItraining', text: 'Barry is the best! We cannot recommend him highly enough!!!' },
      {
        reviewer: 'Thantheman1790',
        text: 'Excellent job with an in depth breakdown of why Barry chose the keywords he did as well as some info on strategy moving forward. I look forward to ordering his other services.',
      },
      { reviewer: 'Tradewinds', text: 'Thanks for the insight. I have some work to do' },
    ],
  },
  'links-all-month': {
    problems: [
      {
        title: 'One push, short spike',
        body: 'A single link-building burst gives you a temporary bump that fades fast.',
      },
      {
        title: 'Agencies quit at month two',
        body: "Most can't sustain the work past the first month — your rankings stall again.",
      },
      { title: 'You chase reports', body: 'Without a scheduled cadence, follow-ups and delivery fall on you.' },
    ],
    timeline: [
      {
        range: 'Monthly',
        label: 'Confirm targets',
        body: 'Keyword + anchor list re-confirmed each month before anything builds.',
      },
      {
        range: 'Monthly',
        label: 'Drip-fed links',
        body: 'Agreed link volume delivered across the month, not batch-dumped.',
      },
      { range: 'Monthly', label: 'Track rankings', body: 'Your rank-tracking sheet updated with current positions.' },
      { range: 'Monthly', label: 'Monthly report', body: 'Links built, live URLs, DR, and ranking movement.' },
      { range: 'As needed', label: 'Drop alert', body: 'Any keyword that drops is flagged before you ask.' },
    ],
    testimonials: [
      { reviewer: 'gustavtk', text: 'Excellent delivery as always' },
      { reviewer: 'dannycsz', text: 'excellent work by Barry team once again. Highly recomment.' },
      { reviewer: 'mattdoubleyoo', text: 'thanks!' },
    ],
  },
  nitros: {
    problems: [
      { title: 'Campaign feels slow', body: "You've got the plan running, but it needs more fuel to really move." },
      { title: 'More work, split effort', body: 'Launching a separate build spreads your momentum thin.' },
      { title: 'No booster layered on', body: 'Without an addon, the base package alone caps how fast you climb.' },
    ],
    timeline: [
      { range: '01', label: 'Confirm the order', body: 'We verify you have an active order to boost.' },
      {
        range: '02',
        label: 'Layer the booster',
        body: 'Extra links or a content push added onto the existing campaign.',
      },
      {
        range: '03',
        label: 'Log it in-place',
        body: "The addon lands in your original order's report, not a new one.",
      },
      { range: '04', label: 'Apply your coupon', body: 'Your existing-customer discount confirmed and applied.' },
    ],
    testimonials: [
      {
        reviewer: 'sajithtm',
        text: "Hey Barry, as always, great job. Appreciate it! Hoping to see some great results soon. We'll work together again :)",
      },
      {
        reviewer: 'gordonlee',
        text: 'Thanks for the awesome service and good communication throughout project. Rankings moving... upwards!',
      },
      { reviewer: 'jasuparri', text: 'Great job, a great professional, congratulations' },
    ],
  },
  'seo-perfect-storm': {
    problems: [
      {
        title: 'Piecemeal SEO plateaus',
        body: "A few links here, an article there — it's not enough in a crowded market.",
      },
      {
        title: 'Strategy ignores rivals',
        body: 'Optimizing in isolation ignores what your competitors are doing to outrank you.',
      },
      {
        title: 'Starter packages, bigger price',
        body: "A bigger label isn't a bigger strategy if it's still a template.",
      },
    ],
    timeline: [
      { range: '01', label: 'Full audit', body: 'Site health plus a snapshot of your top 1–2 competitors.' },
      { range: '02', label: 'Keyword strategy doc', body: 'Priority targets with reasoning, not just a list.' },
      { range: '03', label: 'Content plan', body: 'What to publish, in what order.' },
      { range: '04', label: 'Larger link build', body: 'A build sized to your market — typically 20+ links.' },
      { range: '05', label: 'Roadmap + report', body: "Strategy roadmap and first month's report delivered together." },
    ],
    testimonials: [
      { reviewer: 'dannycsz', text: 'excellent work by Barry team once again. Highly recomment.' },
      { reviewer: 'gustavtk', text: 'Excellent delivery as always' },
      { reviewer: 'almuzayanglobal', text: 'Barry is honest seller. your money in safe place' },
    ],
  },
  'quick-wins': {
    problems: [
      {
        title: 'Slowest wins first',
        body: "Most SEO chases pages that aren't ranking yet — the slowest possible win.",
      },
      { title: 'Striking distance ignored', body: 'Pages already sitting on page 2–3 get passed over.' },
      { title: 'No one pushes', body: 'Someone has to actually go and optimize those pages to close the gap.' },
    ],
    timeline: [
      { range: '01', label: 'Pull striking-distance terms', body: 'Every keyword you already rank for on page 2–3.' },
      { range: '02', label: 'Pick the best 3–5', body: 'Selected by volume and relevance.' },
      { range: '03', label: 'On-page optimization', body: 'Applied to those exact pages.' },
      { range: '04', label: 'Small link push', body: 'Where it will move the needle.' },
      { range: '05', label: 'Proof', body: 'A before/after ranking snapshot.' },
    ],
    testimonials: [
      {
        reviewer: 'RTItraining',
        text: "Barry is the man. Excellent service and explanations. Wouldn't shop anywhere else.",
      },
    ],
  },
  'pbn-network': {
    problems: [
      {
        title: 'Shared PBNs, diluted links',
        body: 'Low-quality networks reuse the same domains across hundreds of buyers.',
      },
      {
        title: 'Google notices',
        body: "Shared, low-quality link patterns get flagged — or simply don't move rankings.",
      },
      { title: 'Wrong niche, no relevance', body: 'Links on unrelated domains do nothing for your topical authority.' },
    ],
    timeline: [
      {
        range: 'Per link',
        label: 'Match the domain',
        body: 'A private-network domain matched to your niche — not rented out.',
      },
      {
        range: 'Per link',
        label: 'Anchor check',
        body: 'Correct anchor text verified against your actual product/site.',
      },
      { range: 'Per link', label: 'On-page action plan', body: 'A free action plan bundled with every order.' },
      { range: 'Per link', label: 'Live URL report', body: 'Every placement documented.' },
      { range: 'Week 4', label: 'Movement check', body: 'A follow-up to check ranking movement.' },
    ],
    testimonials: [
      { reviewer: 'dannycsz', text: 'excellent work by Barry team once again. Highly recomment.' },
      { reviewer: 'gustavtk', text: 'Excellent delivery as always' },
      { reviewer: 'almuzayanglobal', text: 'Barry is honest seller. your money in safe place' },
    ],
  },
};
