import { ArrowRight, Check, ExternalLink, Linkedin, Sparkles, X } from 'lucide-react';
import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import civilAiZationImage from './assets/civil-ai-zation.png';
import comicsCharacterSheetImage from './assets/comics-character-sheet.png';
import eazoGtmImage from './assets/eazo-gtm.png';
import forgeRedemptionImage from './assets/forge-redemption.jpg';
import heroVideo from './assets/girl-personal-portfolio.mp4';
import groundTruthImage from './assets/groundtruth.png';
import visualDesignImage from './assets/visual-design.png';

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
  detailIntro: string;
  detailBullets: string[];
  links: LinkItem[];
  image?: string;
};

const workItems: WorkItem[] = [
  {
    number: '01',
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
      { label: 'Devpost', href: 'https://devpost.com/software/forgeredemption' },
      { label: 'Live', href: 'https://9eek84vj.insforge.site/landing' },
      { label: 'GitHub', href: 'https://github.com/NaichuanZhang/ForgeRedemption' },
    ],
    image: forgeRedemptionImage,
  },
  {
    number: '02',
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
      'Uses public proof to show the outcome and momentum behind the work.',
    ],
    links: [{ label: 'LinkedIn proof', href: 'https://www.linkedin.com/feed/update/urn:li:activity:7464459906998317056/' }],
    image: eazoGtmImage,
  },
  {
    number: '03',
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
      { label: 'Live', href: 'https://groundtruth-blush.vercel.app/' },
      { label: 'GitHub', href: 'https://github.com/anne-creator/groundtruth' },
    ],
    image: groundTruthImage,
  },
  {
    number: '04',
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
    links: [{ label: 'GitHub', href: 'https://github.com/NaichuanZhang/Civil-AI-zation' }],
    image: civilAiZationImage,
  },
  {
    number: '05',
    title: 'Illustration & Visual',
    eyebrow: 'Creative archive',
    description: 'My illustration and design works',
    bullets: ['Bright Light Art Studio', 'Oil painting + illustration', 'Design taste as product leverage'],
    detailIntro:
      'Illustration & Visual collects the creative practice behind the taste, composition, and storytelling that also show up in product work.',
    detailBullets: [
      'Includes illustration, oil painting, and visual design experiments.',
      'Treats visual taste as part of product communication.',
      'Connects independent creative work with public portfolio proof.',
    ],
    links: [{ label: 'Dribbble', href: 'https://dribbble.com/brightlightartstudio' }],
    image: visualDesignImage,
  },
  {
    number: '06',
    title: 'Comics',
    eyebrow: 'Visual storytelling',
    description: 'Two short comics exploring product, identity, and builder culture.',
    bullets: ['LinkedIn comic release', 'Visual storytelling', 'Public creative work'],
    detailIntro:
      'Comics is a small public storytelling series using visual scenes to talk about building, identity, and product culture.',
    detailBullets: [
      'Two finished comic posts are ready to share as creative proof.',
      'The format makes builder ideas feel more personal and memorable.',
      'The series connects illustration practice with public-facing product narrative.',
    ],
    links: [
      { label: 'Comic 01', href: 'https://www.linkedin.com/feed/update/urn:li:activity:7448957371755900929/' },
      { label: 'Comic 02', href: 'https://www.linkedin.com/feed/update/urn:li:activity:7453141194869665792/' },
    ],
    image: comicsCharacterSheetImage,
  },
];

const proofLinks: LinkItem[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anneliu49/' },
  { label: 'GitHub', href: 'https://github.com/anne-creator?tab=repositories' },
  { label: 'Xiaohongshu', href: 'https://www.xiaohongshu.com/user/profile/5c7f5fee00000000120200d7' },
  { label: 'Dribbble', href: 'https://dribbble.com/brightlightartstudio' },
];

const aboutGalleryItems = [
  { label: 'Visual & Design', image: comicsCharacterSheetImage, className: 'col-span-2 h-72 md:h-80' },
  { label: 'ForgeRedemption', image: forgeRedemptionImage, className: 'h-36 md:h-44' },
  { label: 'Civil-AI-zation', image: civilAiZationImage, className: 'h-36 md:h-44' },
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
  const opacity = useTransform(progress, [charProgress - 0.1, charProgress + 0.05], [0.56, 1]);

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

function WorkCard({ item, index, onOpen }: { item: WorkItem; index: number; onOpen: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.button
      ref={ref}
      className="group flex min-h-[430px] flex-col overflow-hidden rounded-[8px] bg-[#212121] text-left shadow-glow outline-none transition focus-visible:ring-2 focus-visible:ring-primary/70"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      onClick={onOpen}
      type="button"
      transition={{ duration: 0.65, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      {item.image ? (
        <div className="relative flex h-72 items-center justify-center overflow-hidden bg-[#E1E0CC] p-3">
          <img className="h-full w-full object-contain transition duration-700 group-hover:scale-[1.03]" src={item.image} alt="" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#212121] via-transparent to-transparent" />
        </div>
      ) : (
        <div className="relative flex h-72 items-center justify-center overflow-hidden bg-black">
          <div className="bg-noise absolute inset-0 opacity-[0.18]" />
          <div className="absolute inset-4 rounded-[8px] border border-primary/10" />
          <div className="absolute bottom-5 left-5 right-5 text-[11px] uppercase tracking-[0.18em] text-primary/55">
            system / product / proof
          </div>
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-primary/50">{item.eyebrow}</p>
            <h3 className="mt-2 text-xl leading-none text-[#E1E0CC]">{item.title}</h3>
          </div>
          <span className="text-sm text-primary/40">{item.number}</span>
        </div>
        <div className="mt-auto flex items-center justify-between gap-4 pt-6">
          <span className="text-[11px] uppercase tracking-[0.18em] text-primary/50">{item.links.length} link{item.links.length === 1 ? '' : 's'}</span>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 px-3 py-2 text-xs text-primary/80 transition group-hover:border-primary/40 group-hover:text-primary">
            Open project
            <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </motion.button>
  );
}

function ProjectModal({ item, onClose }: { item: WorkItem; onClose: () => void }) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <motion.div
      aria-labelledby="project-modal-title"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      onPointerDown={onClose}
      role="dialog"
    >
      <button
        aria-label="Close project popup backdrop"
        className="absolute inset-0 h-full w-full cursor-default"
        onClick={onClose}
        onPointerDown={onClose}
        type="button"
      />
      <motion.div
        className="relative z-10 max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-[8px] border border-primary/15 bg-[#101010] p-5 text-[#E1E0CC] shadow-glow sm:p-7"
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        onClick={(event) => event.stopPropagation()}
        onPointerDown={(event) => event.stopPropagation()}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      >
        <button
          aria-label="Close project popup"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-primary/15 text-primary/70 transition hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
          onClick={onClose}
          type="button"
        >
          <X className="h-4 w-4" />
        </button>

        <p className="pr-12 text-[10px] uppercase tracking-[0.18em] text-primary/55">{item.eyebrow}</p>
        <div className="mt-3 flex items-start justify-between gap-6 pr-12">
          <h3 className="text-3xl leading-none text-[#E1E0CC] sm:text-4xl" id="project-modal-title">
            {item.title}
          </h3>
          <span className="text-sm text-primary/40">{item.number}</span>
        </div>
        <p className="mt-5 text-sm leading-relaxed text-gray-300 sm:text-base">{item.description}</p>
        <p className="mt-5 text-sm leading-relaxed text-gray-300 sm:text-base">{item.detailIntro}</p>
        <ul className="mt-6 space-y-3">
          {item.detailBullets.map((bullet) => (
            <li className="flex gap-3 text-sm leading-snug text-gray-400" key={bullet}>
              <Check className="mt-0.5 h-4 w-4 flex-none text-primary" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <div className="mt-7 flex flex-wrap gap-2 border-t border-primary/10 pt-5">
          {item.links.map((link) => (
            <LinkPill link={link} key={link.href} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

function App() {
  const [selectedProject, setSelectedProject] = useState<WorkItem | null>(null);
  const aboutText =
    'I build the technical system, the product story, and the proof loop around it: AI agents, hackathon demos, GTM workflows, user feedback, public writing, and visual craft.';

  return (
    <main className="min-h-screen bg-black text-[#E1E0CC]">
      <section className="relative h-screen p-4 md:p-6">
        <div className="relative h-full overflow-hidden rounded-2xl bg-[#101010] md:rounded-[2rem]">
          <video
            autoPlay
            className="absolute inset-0 h-full w-full object-cover"
            loop
            muted
            playsInline
            src={heroVideo}
          />
          <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.22] mix-blend-overlay" />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 52%, rgba(0,0,0,0.58) 76%, rgba(0,0,0,0.94) 100%)',
            }}
          />

          <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-7 md:p-9">
            <div className="grid items-end gap-6 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-black/30 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-primary/70 backdrop-blur">
                  <Sparkles className="h-3.5 w-3.5" />
                  Forever Builder / GTM Co-Founder / Influencer
                </p>
                <h1
                  className="text-[18vw] font-medium leading-[0.85] text-[#E1E0CC] sm:text-[17vw] md:text-[16vw] lg:text-[14vw] xl:text-[13vw] 2xl:text-[12vw]"
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
                  Forever Builder, OpenDeploy Co-Founder, and AI ecosystem influencer, 2x hackathon Winner (1st at
                  tokens & MiraclePlus).
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
                ['2,300', 'RedNote followers'],
                ['2.7w', 'likes / saves'],
                ['72', 'GitHub repositories'],
              ].map(([value, label]) => (
                <div className="rounded-[8px] bg-black/45 p-4" key={label}>
                  <p className="text-2xl leading-none text-primary sm:text-3xl">{value}</p>
                  <p className="mt-2 text-[11px] text-gray-500">{label}</p>
                </div>
              ))}
            </div>
            <div className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-2">
              {[
                'GTM Co-Founder @ OpenDeploy',
                'Hackathon',
                'Honour Specialization In CS',
                'Psychology',
                'Visual & Design',
              ].map((tag) => (
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

          <div className="grid grid-cols-2 content-start gap-4">
            {aboutGalleryItems.map((item) => (
              <figure className={`group relative overflow-hidden rounded-[8px] bg-[#101010] ${item.className}`} key={item.label}>
                <img
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  src={item.image}
                  alt={`${item.label} project visual`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-4 text-[10px] uppercase tracking-[0.18em] text-primary/75">
                  {item.label}
                </figcaption>
              </figure>
            ))}
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
          <div className="grid gap-6 sm:gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4">
            {workItems.map((item, index) => (
              <WorkCard index={index} item={item} key={item.title} onOpen={() => setSelectedProject(item)} />
            ))}
          </div>
        </div>
      </section>
      <AnimatePresence>
        {selectedProject ? <ProjectModal item={selectedProject} onClose={() => setSelectedProject(null)} /> : null}
      </AnimatePresence>
    </main>
  );
}

export default App;
