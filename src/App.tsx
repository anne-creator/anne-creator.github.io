import { ArrowRight, Check, ExternalLink, Github, Linkedin, Sparkles } from 'lucide-react';
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import { useRef } from 'react';
import eazoMoment from './assets/eazo-moment.png';
import eazoUpdate from './assets/eazo-update.png';
import whiteDress from './assets/white-dress.png';

const textColor = '#E1E0CC';

type LinkItem = {
  label: string;
  href: string;
};

type WorkItem = {
  number: string;
  title: string;
  eyebrow: string;
  description: string;
  bullets: string[];
  links: LinkItem[];
  image?: string;
};

const workItems: WorkItem[] = [
  {
    number: '01',
    title: 'ForgeRedemption',
    eyebrow: '1st place hackathon win',
    description:
      'Autonomous multi-agent prison escape game where LLM characters coordinate, search the web, build RAG memory, and narrate infrastructure actions live.',
    bullets: ['Ship to Prod Top Overall', 'InsForge + Nexla/TinyFish', 'pgvector RAG + Vapi narration'],
    links: [
      { label: 'Devpost', href: 'https://devpost.com/software/forgeredemption' },
      { label: 'Live', href: 'https://9eek84vj.insforge.site/landing' },
      { label: 'GitHub', href: 'https://github.com/NaichuanZhang/ForgeRedemption' },
    ],
  },
  {
    number: '02',
    title: 'GroundTruth / nHackathon',
    eyebrow: 'Founder decision engine',
    description:
      'A company-brain concept for cross-domain startup decisions, combining Hyperspell context, InsForge orchestration, and Neo4j-style dependency reasoning.',
    bullets: ['Slack/docs/CRM/finance context', 'Conflicting-goal reasoning', 'Founder approval loop'],
    links: [
      { label: 'Live', href: 'https://groundtruth-blush.vercel.app/' },
      { label: 'Notion', href: 'https://www.notion.so/nHackathon-35be6ee3602f805fa3eada6b2623f87e' },
      { label: 'GitHub', href: 'https://github.com/anne-creator/groundtruth' },
    ],
  },
  {
    number: '03',
    title: 'EAZO GTM Tool',
    eyebrow: 'Asia region 1st place / $5000',
    description:
      'GTM attribution and founder-targeting workflow turning channel data, tracking links, and outreach judgment into reusable growth infrastructure.',
    bullets: ['Channel-level conversion view', 'Founder/client targeting', 'Reusable GTM operating system'],
    links: [{ label: 'LinkedIn proof', href: 'https://www.linkedin.com/feed/update/urn:li:activity:7464459906998317056/' }],
    image: eazoUpdate,
  },
  {
    number: '04',
    title: 'Civil-AI-zation',
    eyebrow: 'AI arena system',
    description:
      'A realtime spectator game with LLM agents battling on a 5x5 grid, persistent game state, rules validation, and narration for non-technical viewers.',
    bullets: ['5x5 agent battlefield', 'Realtime events', 'Narrated AI gameplay'],
    links: [
      { label: 'Notion', href: 'https://www.notion.so/Civil-AI-zation-354e6ee3602f8048874cee8cbecf4430' },
      { label: 'GitHub', href: 'https://github.com/NaichuanZhang/Civil-AI-zation' },
    ],
  },
  {
    number: '05',
    title: 'Creative Archive',
    eyebrow: 'Illustration + visual taste',
    description:
      'A body of illustration and graphic work that shows the visual judgment behind the product surfaces, demos, and storytelling systems.',
    bullets: ['Bright Light Art Studio', 'Oil painting + illustration', 'Design taste as product leverage'],
    links: [{ label: 'Dribbble', href: 'https://dribbble.com/brightlightartstudio' }],
    image: whiteDress,
  },
];

const proofLinks: LinkItem[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anneliu49/' },
  { label: 'GitHub', href: 'https://github.com/anne-creator?tab=repositories' },
  { label: 'Xiaohongshu', href: 'https://www.xiaohongshu.com/user/profile/5c7f5fee00000000120200d7' },
  { label: 'Dribbble', href: 'https://dribbble.com/brightlightartstudio' },
];

function WordsPullUp({ text, className = '', showAsterisk = false }: { text: string; className?: string; showAsterisk?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const words = text.split(' ');

  return (
    <div ref={ref} className={`inline-flex flex-wrap overflow-hidden ${className}`}>
      {words.map((word, index) => (
        <span className="mr-[0.08em] inline-block overflow-hidden last:mr-0" key={`${word}-${index}`}>
          <motion.span
            className="relative inline-block"
            initial={{ y: 24, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 24, opacity: 0 }}
            transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
            {showAsterisk && index === words.length - 1 ? (
              <span className="absolute -right-[0.34em] top-[0.08em] text-[0.22em] leading-none">*</span>
            ) : null}
          </motion.span>
        </span>
      ))}
    </div>
  );
}

function WordsPullUpMultiStyle({
  segments,
  className = '',
}: {
  segments: Array<{ text: string; className?: string }>;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const words = segments.flatMap((segment) =>
    segment.text.split(' ').map((word) => ({ word, className: segment.className ?? '' })),
  );

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center overflow-hidden ${className}`}>
      {words.map((item, index) => (
        <span className="inline-block overflow-hidden pr-[0.18em]" key={`${item.word}-${index}`}>
          <motion.span
            className={`inline-block ${item.className}`}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.7, delay: index * 0.045, ease: [0.16, 1, 0.3, 1] }}
          >
            {item.word}
          </motion.span>
        </span>
      ))}
    </div>
  );
}

function AnimatedLetter({
  char,
  progress,
  index,
  total,
}: {
  char: string;
  progress: MotionValue<number>;
  index: number;
  total: number;
}) {
  const charProgress = index / total;
  const opacity = useTransform(progress, [charProgress - 0.1, charProgress + 0.05], [0.22, 1]);

  return (
    <motion.span style={{ opacity }} aria-hidden="true">
      {char}
    </motion.span>
  );
}

function ScrollRevealText({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.2'] });
  const chars = Array.from(text);

  return (
    <p ref={ref} className="mx-auto mt-8 max-w-3xl text-xs leading-[1.45] text-[#DEDBC8] sm:text-sm md:text-base">
      <span className="sr-only">{text}</span>
      {chars.map((char, index) => (
        <AnimatedLetter
          char={char}
          index={index}
          key={`${char}-${index}`}
          progress={scrollYProgress}
          total={chars.length}
        />
      ))}
    </p>
  );
}

function LinkPill({ link }: { link: LinkItem }) {
  return (
    <a
      className="group inline-flex items-center gap-2 rounded-full border border-primary/15 px-3 py-2 text-xs text-primary/80 transition hover:border-primary/40 hover:text-primary"
      href={link.href}
      rel="noreferrer"
      target="_blank"
    >
      {link.label}
      <ExternalLink className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}

function WorkCard({ item, index }: { item: WorkItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.article
      ref={ref}
      className="group flex min-h-[410px] flex-col overflow-hidden rounded-[8px] bg-[#212121] shadow-glow"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.65, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      {item.image ? (
        <div className="relative h-40 overflow-hidden">
          <img className="h-full w-full object-cover transition duration-700 group-hover:scale-105" src={item.image} alt="" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#212121] via-transparent to-transparent" />
        </div>
      ) : (
        <div className="relative h-40 overflow-hidden bg-black">
          <div className="bg-noise absolute inset-0 opacity-[0.18]" />
          <div className="absolute inset-4 rounded-[8px] border border-primary/10" />
          <div className="absolute bottom-5 left-5 right-5 text-[11px] uppercase tracking-[0.18em] text-primary/55">
            system / product / proof
          </div>
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-primary/50">{item.eyebrow}</p>
            <h3 className="mt-2 text-xl leading-none text-[#E1E0CC]">{item.title}</h3>
          </div>
          <span className="text-sm text-primary/40">{item.number}</span>
        </div>
        <p className="text-sm leading-snug text-gray-400">{item.description}</p>
        <ul className="mt-5 space-y-3">
          {item.bullets.map((bullet) => (
            <li className="flex gap-2 text-xs leading-tight text-gray-400" key={bullet}>
              <Check className="mt-0.5 h-3.5 w-3.5 flex-none text-primary" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {item.links.map((link) => (
            <LinkPill link={link} key={link.href} />
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function App() {
  const aboutText =
    'I build the technical system, the product story, and the proof loop around it: AI agents, hackathon demos, GTM workflows, user feedback, public writing, and visual craft.';

  return (
    <main className="min-h-screen bg-black text-[#E1E0CC]">
      <section className="relative h-screen p-4 md:p-6">
        <div className="relative h-full overflow-hidden rounded-2xl bg-[#101010] md:rounded-[2rem]">
          <video
            autoPlay
            className="absolute inset-0 h-full w-full object-cover opacity-50"
            loop
            muted
            playsInline
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
          />
          <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/15 to-black/75" />

          <nav className="absolute left-1/2 top-0 z-20 -translate-x-1/2 rounded-b-2xl bg-black px-4 py-2 md:rounded-b-3xl md:px-8">
            <div className="flex items-center gap-3 text-[10px] sm:gap-6 sm:text-xs md:gap-12 md:text-sm lg:gap-14">
              {['About', 'Work', 'Proof', 'Links'].map((item) => (
                <a
                  className="whitespace-nowrap transition"
                  href={item === 'Work' ? '#work' : item === 'About' ? '#about' : '#proof'}
                  key={item}
                  style={{ color: 'rgba(225, 224, 204, 0.8)' }}
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>

          <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-7 md:p-9">
            <div className="grid items-end gap-6 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-black/30 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-primary/70 backdrop-blur">
                  <Sparkles className="h-3.5 w-3.5" />
                  AI engineer / GTM builder / illustrator
                </p>
                <h1
                  className="text-[24vw] font-medium leading-[0.85] text-[#E1E0CC] sm:text-[21vw] md:text-[18vw] lg:text-[14vw] xl:text-[13vw] 2xl:text-[12vw]"
                  style={{ letterSpacing: '-0.055em' }}
                >
                  <WordsPullUp showAsterisk text="Anne Liu" />
                </h1>
              </div>
              <div className="lg:col-span-4">
                <motion.p
                  className="max-w-md text-xs leading-[1.2] text-primary/70 sm:text-sm md:text-base"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  San Francisco AI Engineer building at the edge of code, product, GTM, and creative systems.
                </motion.p>
                <motion.div
                  className="mt-6 flex flex-wrap gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    className="group inline-flex items-center gap-2 rounded-full bg-primary py-2 pl-5 pr-2 text-sm font-medium text-black transition hover:gap-3 sm:text-base"
                    href="#work"
                  >
                    View work
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition group-hover:scale-110 sm:h-10 sm:w-10">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </span>
                  </a>
                  <a
                    aria-label="LinkedIn"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/15 bg-black/30 text-primary/80 backdrop-blur transition hover:border-primary/40 hover:text-primary"
                    href="https://www.linkedin.com/in/anneliu49/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    aria-label="GitHub"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/15 bg-black/30 text-primary/80 backdrop-blur transition hover:border-primary/40 hover:text-primary"
                    href="https://github.com/anne-creator?tab=repositories"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black px-4 py-16 sm:px-6 md:py-24" id="about">
        <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex min-h-[560px] flex-col justify-center rounded-[8px] bg-[#101010] p-6 text-center sm:p-10">
            <p className="text-[10px] uppercase tracking-[0.18em] text-primary sm:text-xs">Multidimensional builder</p>
            <h2 className="mx-auto mt-6 max-w-3xl text-3xl leading-[0.98] sm:text-4xl sm:leading-[0.95] md:text-5xl lg:text-6xl xl:text-7xl">
              <WordsPullUpMultiStyle
                segments={[
                  { text: 'I build AI products,' },
                  { text: 'then make people care.', className: 'font-serif italic' },
                ]}
              />
            </h2>
            <ScrollRevealText text={aboutText} />
            <div className="mx-auto mt-8 grid w-full max-w-2xl grid-cols-3 gap-2 text-left" id="proof">
              {[
                ['1k+', 'XHS followers'],
                ['1w+', 'likes / saves'],
                ['72', 'GitHub repositories'],
              ].map(([value, label]) => (
                <div className="rounded-[8px] bg-black/45 p-4" key={label}>
                  <p className="text-2xl leading-none text-primary sm:text-3xl">{value}</p>
                  <p className="mt-2 text-[11px] text-gray-500">{label}</p>
                </div>
              ))}
            </div>
            <div className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-2">
              {['San Francisco AI Engineer', '黑客松Hackathon', 'CS & Psychology', '插画-央美'].map((tag) => (
                <span className="rounded-full border border-primary/15 px-3 py-2 text-[11px] text-primary/70" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="mx-auto mt-7 flex flex-wrap justify-center gap-2">
              {proofLinks.map((link) => (
                <LinkPill link={link} key={link.href} />
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="relative min-h-[360px] overflow-hidden rounded-[8px] bg-[#101010]">
              <img className="absolute inset-0 h-full w-full object-cover" src={whiteDress} alt="White Dress oil painting by Anne" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-[10px] uppercase tracking-[0.18em] text-primary/60">Creative archive</p>
                <p className="mt-2 max-w-sm text-xl leading-tight text-[#E1E0CC]">
                  Visual craft is part of the product surface, not a side quest.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img className="h-64 w-full rounded-[8px] object-cover object-top" src={eazoMoment} alt="EAZO hackathon social proof screenshot" />
              <img className="h-64 w-full rounded-[8px] object-cover object-top" src={eazoUpdate} alt="EAZO hackathon update screenshot" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-screen overflow-hidden bg-black px-4 py-16 sm:px-6 md:py-24" id="work">
        <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.15]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="mx-auto max-w-4xl text-xl font-normal leading-tight sm:text-2xl md:text-3xl lg:text-4xl">
              <WordsPullUpMultiStyle
                segments={[
                  { text: 'Technical systems with real-world pull.' },
                  { text: 'Built fast. Shown publicly. Improved by feedback.', className: 'text-gray-500' },
                ]}
              />
            </h2>
          </div>
          <div className="grid gap-3 sm:gap-2 md:grid-cols-2 md:gap-3 xl:grid-cols-4">
            {workItems.map((item, index) => (
              <WorkCard index={index} item={item} key={item.title} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
