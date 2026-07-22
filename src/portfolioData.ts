import civilAiZationImage from './assets/civil-ai-zation.png';
import comicsCharacterSheetImage from './assets/comics-character-sheet.png';
import eazoGtmImage from './assets/eazo-gtm.png';
import eazoMomentImage from './assets/eazo-moment.png';
import eazoUpdateImage from './assets/eazo-update.png';
import forgeRedemptionImage from './assets/forge-redemption.jpg';
import groundTruthImage from './assets/groundtruth.png';
import posterlyticsImage from './assets/posterlytics.svg';
import visualDesignImage from './assets/visual-design.png';

export type ClaimStatus = 'verified' | 'active' | 'planned';

export type ProofSource = {
  label: string;
  href: string;
  kind: string;
  summary: string;
  dateOrResult?: string;
  previewImage?: string;
};

export type WorkItem = {
  number: string;
  title: string;
  eyebrow: string;
  description: string;
  bullets: string[];
  detailIntro: string;
  detailBullets: string[];
  links: ProofSource[];
  image?: string;
};

export type GtmStory = {
  number: string;
  status: ClaimStatus;
  title: string;
  outcome: string;
  context: string;
  role: string;
  approach: string[];
  proof: string[];
  nextTests: string[];
  startupValue: string;
  sources: ProofSource[];
  image: string;
  imageAlt: string;
};

export const linkedinUrl = 'https://www.linkedin.com/in/anneliu49/';
export const contactEmail = 'anneliu49@gmail.com';
export const contactEmailHref = `mailto:${contactEmail}?subject=${encodeURIComponent(
  'AI startup collaboration',
)}&body=${encodeURIComponent(`Hi Anne,

Company:
What we’re building:
What you’d like to explore:
Timeline:
`)}`;

export const proofLinks: ProofSource[] = [
  {
    label: 'LinkedIn',
    href: linkedinUrl,
    kind: 'Professional profile',
    summary: 'Public record of product launches, hackathon outcomes, community work, and technical GTM writing.',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/anne-creator?tab=repositories',
    kind: 'Build archive',
    summary: 'Public repositories showing AI product experiments, prototypes, and shipped technical systems.',
  },
  {
    label: 'RedNote',
    href: 'https://www.xiaohongshu.com/user/profile/5c7f5fee00000000120200d7',
    kind: 'Audience and content',
    summary: 'Bilingual tutorials and product stories built for a technical Chinese-speaking audience.',
    previewImage: eazoUpdateImage,
  },
  {
    label: 'Dribbble',
    href: 'https://dribbble.com/brightlightartstudio',
    kind: 'Visual archive',
    summary: 'Illustration and design practice that supports memorable product communication.',
    previewImage: visualDesignImage,
  },
];

export const capabilities = [
  {
    title: 'I build',
    description: 'I get close enough to the product to find and demonstrate the value that deserves attention.',
    bullets: [
      { label: 'AI prototypes and product demos', source: proofLinks[1] },
      { label: 'GTM and attribution tools', source: proofLinks[0] },
      { label: 'Agent workflows', source: proofLinks[1] },
      { label: 'Technical product narratives', source: proofLinks[0] },
    ],
  },
  {
    title: 'I grow',
    description: 'I create recurring reasons for founders, developers, and early users to gather and stay involved.',
    bullets: [
      { label: 'Technical workshops', source: proofLinks[0] },
      { label: 'Founder and developer communities', source: proofLinks[0] },
      { label: 'Events and partnerships', source: proofLinks[0] },
      { label: 'Bilingual follow-up systems', source: proofLinks[2] },
    ],
  },
  {
    title: 'I prove',
    description: 'I turn launches and community activity into visible evidence, feedback, and the next decision.',
    bullets: [
      { label: '3× hackathon winner', source: proofLinks[0] },
      { label: 'Shipped technical products', source: proofLinks[1] },
      { label: 'Public audience and content', source: proofLinks[2] },
      { label: 'Real-world community programs', source: proofLinks[0] },
    ],
  },
];

export const proofStats = [
  ['2,300', 'RedNote followers'],
  ['27K', 'likes / saves'],
  ['72', 'GitHub repositories'],
];

export const growthStages = [
  ['01', 'Product understanding', 'Find the technical value and the strongest user-facing use case.'],
  ['02', 'Demonstration', 'Turn it into a prototype, tutorial, demo, or founder story.'],
  ['03', 'Gathering', 'Place the product inside workshops, hackathons, and builder communities.'],
  ['04', 'Follow-up', 'Continue the conversation through WeChat, Discord, and direct feedback.'],
  ['05', 'Distribution', 'Extend each moment through bilingual content, founders, sponsors, and partners.'],
  ['06', 'Early users', 'Create structured opportunities for the right people to try the product.'],
  ['07', 'Learning', 'Inspect activation, questions, channel quality, and willingness to pay.'],
];

export const gtmStories: GtmStory[] = [
  {
    number: '01',
    status: 'verified',
    title: 'Community programs & event activation',
    outcome: 'Put technical products in rooms where builders can understand them, try them, and stay involved.',
    context:
      'Early AI products need more than impressions. They need trusted environments where technical users can ask questions, see the product work, and meet the people behind it.',
    role:
      'I design the theme, recruit speakers, distribute invitations, host or co-host the room, and build the follow-up path after the event.',
    approach: [
      'Promote through Luma, posters, street distribution, WeChat, and partner communities.',
      'Run workshops that put the product directly in builders’ hands.',
      'Move attendees into an ongoing WeChat or developer-community conversation.',
      'Turn each event into content, referrals, feedback, and the next gathering.',
    ],
    proof: [
      'Started and continue to develop Anecdote technical workshops with Luma and WeChat distribution.',
      'Access to a 40–50-person event space with drinks and snacks for relevant programs.',
      'Experience securing speakers, co-hosting events, judging hackathons, and winning three hackathons.',
      'Close collaborators have co-hosted 200+ participant hackathons, expanding partnership capacity.',
      'Smol Machines has participated as an event sponsor and supporting partner.',
    ],
    nextTests: [
      'Test carefully designed sponsor-supported coffee programs.',
      'Compare free and paid workshop formats without weakening community trust.',
    ],
    startupValue:
      'A startup gets more than an event logo: it gets product contact, qualified questions, follow-up, and a repeatable community loop.',
    sources: [
      {
        label: 'Anecdote on Luma',
        href: 'https://luma.com/user/usr-8DIFEcDOu8KkLbe',
        kind: 'Event profile',
        summary: 'Public event-distribution profile supporting the workshop and community-program record.',
      },
      {
        label: 'EAZO event update',
        href: 'https://www.linkedin.com/feed/update/urn:li:activity:7464459906998317056/',
        kind: 'Hackathon and event record',
        summary: 'A public post connecting event participation, community distribution, and a GTM-tool win.',
        dateOrResult: 'Asia regional 1st place',
        previewImage: eazoMomentImage,
      },
    ],
    image: eazoMomentImage,
    imageAlt: 'Public event and hackathon update with community photos',
  },
  {
    number: '02',
    status: 'verified',
    title: 'Technical storytelling & builder distribution',
    outcome: 'Translate product depth into a story that technical audiences can understand, remember, and share.',
    context:
      'AI products often lose their advantage when the explanation becomes generic. Strong technical GTM keeps the product truth while making the value legible.',
    role:
      'I combine product fluency, demos, interviews, video, illustration, bilingual publishing, and community follow-up into one distribution system.',
    approach: [
      'Build or study the product deeply enough to demonstrate the real use case.',
      'Create tutorials, short-form video, founder or customer interviews, and visual explanations.',
      'Distribute through LinkedIn, RedNote, X and WeChat founder groups, Discord, and community partners.',
      'Connect Chinese technical communities in the United States with China-based hackathon, workshop, startup, and sponsor networks.',
    ],
    proof: [
      'RedNote audience of 2,300 followers with 27K combined likes and saves.',
      'Public InsForge tutorials and promotional content built around hands-on product education.',
      'Independent illustration and design archive used as product-storytelling leverage.',
      'Professional camera access and experience producing demos, interviews, and short-form media.',
    ],
    nextTests: [
      'Turn product releases and events into a consistent bilingual editorial rhythm.',
      'Coordinate community interns around publishing, replies, and follow-up.',
    ],
    startupValue:
      'The startup gains a translator who can preserve technical credibility while creating more paths into the product.',
    sources: [proofLinks[0], proofLinks[2], proofLinks[3]],
    image: eazoUpdateImage,
    imageAlt: 'Bilingual public update documenting a hackathon project and community response',
  },
  {
    number: '03',
    status: 'planned',
    title: 'Growth experiment lab',
    outcome: 'Turn attention into a measurable decision about intent, activation, and willingness to pay.',
    context:
      'Community activity becomes useful GTM evidence when each channel has a hypothesis, an activation event, and a decision rule.',
    role:
      'I connect the public demo, acquisition channel, activation path, qualitative feedback, and next product decision.',
    approach: [
      'Use an Agent Lifecycle Management demo to begin concrete founder and user conversations.',
      'Run a 10-day high-intent Search test around one narrow use case.',
      'Measure installs or quick-start completions instead of clicks alone.',
      'Inspect search terms and drop-off, then make a scale, revise, or stop decision.',
    ],
    proof: [
      'Posterlytics already demonstrates per-placement QR attribution and conversion tracking.',
      'EAZO GTM Tool packages channel tracking and founder-targeting judgment into a repeatable workflow.',
      'Technical demos and event conversations provide the qualitative input for experiment design.',
    ],
    nextTests: [
      'Test willingness to pay through a clearly scoped paywall experiment.',
      'Compare event-led, content-led, and paid acquisition using the same activation definition.',
    ],
    startupValue:
      'Founders get a small, legible experiment that produces a decision—not a vanity-metric report.',
    sources: [
      {
        label: 'Posterlytics',
        href: 'https://3f9q2998.insforge.site/',
        kind: 'Live attribution product',
        summary: 'A working URL-to-poster and per-placement QR attribution product.',
        previewImage: posterlyticsImage,
      },
      {
        label: 'EAZO GTM update',
        href: 'https://www.linkedin.com/feed/update/urn:li:activity:7464459906998317056/',
        kind: 'Public launch and award',
        summary: 'Public evidence for the channel-attribution workflow and regional hackathon win.',
        dateOrResult: '1st place / $5,000 cash',
        previewImage: eazoGtmImage,
      },
    ],
    image: eazoGtmImage,
    imageAlt: 'EAZO GTM tool launch visual',
  },
];

export const workItems: WorkItem[] = [
  {
    number: '01',
    title: 'EAZO GTM Tool',
    eyebrow: 'EAZO HackSong Asia 1st / $5,000 cash',
    description:
      'GTM attribution and founder-targeting workflow turning channel data, tracking links, and outreach judgment into reusable growth infrastructure.',
    bullets: ['Channel-level conversion view', 'Founder/client targeting', 'Reusable GTM operating system'],
    detailIntro:
      'EAZO GTM Tool won 1st place in EAZO HackSong Asia region with $5,000 cash, turning hackathon growth work into reusable GTM infrastructure.',
    detailBullets: [
      'Won 1st place in EAZO HackSong Asia region with a $5,000 cash prize.',
      'Tracks channel-level performance for clearer growth decisions.',
      'Packages targeting and outreach judgment into repeatable workflows.',
      'Uses public records to show the outcome and momentum behind the work.',
    ],
    links: [
      {
        label: 'LinkedIn update',
        href: 'https://www.linkedin.com/feed/update/urn:li:activity:7464459906998317056/',
        kind: 'Award and launch post',
        summary: 'Public record of the product, team, event, and Asia regional 1st-place result.',
        dateOrResult: '1st place / $5,000 cash',
        previewImage: eazoUpdateImage,
      },
    ],
    image: eazoGtmImage,
  },
  {
    number: '02',
    title: 'Posterlytics',
    eyebrow: 'InsForge Hackathon winner',
    description:
      'Turns any product URL into an on-brand promotional poster with per-placement QR codes that track scans, conversions, and channel performance automatically.',
    bullets: ['URL-to-poster agent', 'Per-placement QR attribution', 'Scan + conversion dashboard'],
    detailIntro:
      'Posterlytics closes the gap between building and distribution: paste a product URL, get an on-brand poster, and see which placement actually drives traction.',
    detailBullets: [
      'Extracts product assets, color palette, typography, imagery, and brand tone from a supplied URL.',
      'Generates poster copy and a hosted landing page for the target audience.',
      'Creates unique QR codes for placements such as Instagram, LinkedIn, and physical posters.',
      'Tracks scans, visitors, conversions, and per-placement channel performance.',
      'Built with React, TypeScript, Postgres row-level security, and GPT-4o via InsForge.',
    ],
    links: [
      {
        label: 'Website',
        href: 'https://3f9q2998.insforge.site/',
        kind: 'Live product',
        summary: 'Working poster-generation and placement-attribution experience.',
        previewImage: posterlyticsImage,
      },
      {
        label: 'LinkedIn post',
        href: 'https://www.linkedin.com/feed/update/urn:li:activity:7469518204747399168/',
        kind: 'Launch record',
        summary: 'Public product walkthrough and launch context.',
        previewImage: posterlyticsImage,
      },
    ],
    image: posterlyticsImage,
  },
  {
    number: '03',
    title: 'ForgeRedemption',
    eyebrow: '1st place / $2,000 cash + 3,000 credits',
    description:
      'Autonomous multi-agent prison escape game where LLM characters coordinate, search the web, build RAG memory, and narrate infrastructure actions live.',
    bullets: ['Ship to Prod Top Overall', 'InsForge + Nexla/TinyFish', 'pgvector RAG + Vapi narration'],
    detailIntro:
      'ForgeRedemption won 1st place with $2,000 cash and 3,000 credits, built around a live prison escape story, agent coordination, and production infrastructure.',
    detailBullets: [
      'Awarded $2,000 cash plus 3,000 credits for the hackathon win.',
      'LLM characters coordinate decisions and actions across a shared game loop.',
      'RAG memory and web search give agents context during play.',
      'Live narration turns infrastructure work into a visible product moment.',
    ],
    links: [
      {
        label: 'Devpost',
        href: 'https://devpost.com/software/forgeredemption',
        kind: 'Hackathon submission',
        summary: 'Project description, prize record, demo, and technology overview.',
        dateOrResult: 'Top overall',
        previewImage: forgeRedemptionImage,
      },
      {
        label: 'Live',
        href: 'https://9eek84vj.insforge.site/landing',
        kind: 'Live product',
        summary: 'Public product experience for the multi-agent prison escape game.',
        previewImage: forgeRedemptionImage,
      },
      {
        label: 'GitHub',
        href: 'https://github.com/NaichuanZhang/ForgeRedemption',
        kind: 'Source code',
        summary: 'Repository for the agent coordination, RAG memory, and narration implementation.',
        previewImage: forgeRedemptionImage,
      },
    ],
    image: forgeRedemptionImage,
  },
  {
    number: '04',
    title: 'GroundTruth / nHackathon',
    eyebrow: 'Founder decision engine',
    description:
      'A company-brain concept for cross-domain startup decisions, combining Hyperspell context, InsForge orchestration, and Neo4j-style dependency reasoning.',
    bullets: ['Slack/docs/CRM/finance context', 'Conflicting-goal reasoning', 'Founder approval loop'],
    detailIntro:
      'GroundTruth explores how a founder-facing system can combine scattered company context into clearer operating decisions.',
    detailBullets: [
      'Connects product, customer, finance, and team context into one decision view.',
      'Models conflicting goals so tradeoffs are visible before action.',
      'Keeps founders in the approval loop for high-impact decisions.',
    ],
    links: [
      {
        label: 'Live',
        href: 'https://groundtruth-blush.vercel.app/',
        kind: 'Live product',
        summary: 'Public founder-decision experience combining cross-functional company context.',
        previewImage: groundTruthImage,
      },
      {
        label: 'GitHub',
        href: 'https://github.com/anne-creator/groundtruth',
        kind: 'Source code',
        summary: 'Repository for the company-brain and decision-reasoning prototype.',
        previewImage: groundTruthImage,
      },
    ],
    image: groundTruthImage,
  },
  {
    number: '05',
    title: 'Civil-AI-zation',
    eyebrow: 'AI arena system',
    description:
      'A realtime spectator game with LLM agents battling on a 5x5 grid, persistent game state, rules validation, and narration for non-technical viewers.',
    bullets: ['5x5 agent battlefield', 'Realtime events', 'Narrated AI gameplay'],
    detailIntro:
      'Civil-AI-zation is a spectator-friendly AI arena where agents compete inside a constrained board game system.',
    detailBullets: [
      'Agents act inside a 5x5 battlefield with persistent state.',
      'Rules validation keeps gameplay legible and consistent.',
      'Narration makes AI behavior easier for non-technical viewers to follow.',
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/NaichuanZhang/Civil-AI-zation',
        kind: 'Source code',
        summary: 'Repository for the realtime AI arena, game state, and narration system.',
        previewImage: civilAiZationImage,
      },
    ],
    image: civilAiZationImage,
  },
  {
    number: '06',
    title: 'Illustration & Visual',
    eyebrow: 'Creative archive',
    description: 'Illustration and design practice used to make technical products more memorable and human.',
    bullets: ['Bright Light Art Studio', 'Oil painting + illustration', 'Design taste as product leverage'],
    detailIntro:
      'Illustration & Visual collects the creative practice behind the taste, composition, and storytelling that also show up in product work.',
    detailBullets: [
      'Includes illustration, oil painting, and visual design experiments.',
      'Treats visual taste as part of product communication.',
      'Connects independent creative work with public portfolio proof.',
    ],
    links: [
      {
        label: 'Dribbble',
        href: 'https://dribbble.com/brightlightartstudio',
        kind: 'Creative archive',
        summary: 'Public illustration, oil painting, and visual-design collection.',
        previewImage: visualDesignImage,
      },
    ],
    image: visualDesignImage,
  },
  {
    number: '07',
    title: 'Comics',
    eyebrow: 'Visual storytelling',
    description: 'Two short comics exploring product, identity, and builder culture.',
    bullets: ['LinkedIn comic release', 'Visual storytelling', 'Public creative work'],
    detailIntro:
      'Comics is a small public storytelling series using visual scenes to talk about building, identity, and product culture.',
    detailBullets: [
      'Two finished comic posts are available as public creative proof.',
      'The format makes builder ideas feel more personal and memorable.',
      'The series connects illustration practice with public-facing product narrative.',
    ],
    links: [
      {
        label: 'Comic 01',
        href: 'https://www.linkedin.com/feed/update/urn:li:activity:7448957371755900929/',
        kind: 'Published comic',
        summary: 'Public visual story connecting creative work and builder identity.',
        previewImage: comicsCharacterSheetImage,
      },
      {
        label: 'Comic 02',
        href: 'https://www.linkedin.com/feed/update/urn:li:activity:7453141194869665792/',
        kind: 'Published comic',
        summary: 'Second public comic in the product-and-builder storytelling series.',
        previewImage: comicsCharacterSheetImage,
      },
    ],
    image: comicsCharacterSheetImage,
  },
];

export const aboutGalleryItems = [
  { label: 'Visual & Design', image: comicsCharacterSheetImage, className: 'col-span-2 h-72 md:h-80' },
  { label: 'ForgeRedemption', image: forgeRedemptionImage, className: 'h-36 md:h-44' },
  { label: 'Civil-AI-zation', image: civilAiZationImage, className: 'h-36 md:h-44' },
];

export const collaborationPaths = [
  {
    title: 'AI startups',
    description: 'Technical positioning, demos, early-adopter activation, and community-led GTM.',
  },
  {
    title: 'Sponsors',
    description: 'Relevant workshops, hackathons, and programs that put products in front of builders.',
  },
  {
    title: 'Collaborators',
    description: 'Speakers, co-hosts, content partners, and ecosystem programs with a shared audience.',
  },
];
