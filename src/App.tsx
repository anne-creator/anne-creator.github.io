import {
  ArrowRight,
  Check,
  ExternalLink,
  Linkedin,
  Sparkles,
  X,
} from 'lucide-react';
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import { useEffect, useId, useRef, useState } from 'react';
import heroDesktopPoster from './assets/hero-desktop-poster.webp';
import heroMobilePoster from './assets/hero-mobile-poster.webp';
import heroMobileVideo from './assets/hero-mobile.mp4';
import heroDesktopVideo from './assets/girl-personal-portfolio.mp4';
import {
  aboutGalleryItems,
  capabilities,
  collaborationPaths,
  growthStages,
  gtmStories,
  linkedinUrl,
  proofLinks,
  proofStats,
  workItems,
  type ClaimStatus,
  type GtmStory,
  type ProofSource,
  type WorkItem,
} from './portfolioData';

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() =>
    typeof window === 'undefined' ? false : window.matchMedia(query).matches,
  );

  useEffect(() => {
    const media = window.matchMedia(query);
    const update = () => setMatches(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, [query]);

  return matches;
}

function WordsPullUp({
  text,
  className = '',
  showAsterisk = false,
}: {
  text: string;
  className?: string;
  showAsterisk?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const reduceMotion = useReducedMotion();
  const words = text.split(' ');

  return (
    <div ref={ref} className={`inline-flex flex-wrap overflow-hidden ${className}`}>
      {words.map((word, index) => (
        <span className="mr-[0.08em] inline-block overflow-hidden last:mr-0" key={`${word}-${index}`}>
          <motion.span
            className="relative inline-block"
            initial={reduceMotion ? false : { y: 24, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 24, opacity: 0 }}
            transition={{ duration: 0.8, delay: reduceMotion ? 0 : index * 0.08, ease: [0.16, 1, 0.3, 1] }}
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
  const reduceMotion = useReducedMotion();
  const words = segments.flatMap((segment) =>
    segment.text.split(' ').map((word) => ({ word, className: segment.className ?? '' })),
  );

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center overflow-hidden ${className}`}>
      {words.map((item, index) => (
        <span className="inline-block overflow-hidden pr-[0.18em]" key={`${item.word}-${index}`}>
          <motion.span
            className={`inline-block ${item.className}`}
            initial={reduceMotion ? false : { y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.7, delay: reduceMotion ? 0 : index * 0.045, ease: [0.16, 1, 0.3, 1] }}
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
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.2'] });
  const chars = Array.from(text);

  if (reduceMotion) {
    return <p className="mx-auto mt-8 max-w-3xl text-sm leading-relaxed text-[#DEDBC8] md:text-base">{text}</p>;
  }

  return (
    <p ref={ref} className="mx-auto mt-8 max-w-3xl text-sm leading-relaxed text-[#DEDBC8] md:text-base">
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

function HeroMedia() {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const [saveData] = useState(() => {
    if (typeof navigator === 'undefined') return false;
    return Boolean((navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData);
  });
  const videoSource = isMobile ? heroMobileVideo : heroDesktopVideo;
  const posterSource = isMobile ? heroMobilePoster : heroDesktopPoster;

  if (prefersReducedMotion || saveData) {
    return <img className="absolute inset-0 h-full w-full object-cover" src={posterSource} alt="" />;
  }

  return (
    <video
      autoPlay
      className="absolute inset-0 h-full w-full object-cover"
      key={videoSource}
      loop
      muted
      playsInline
      poster={posterSource}
      preload="auto"
      src={videoSource}
    />
  );
}

function ProofPreview({ source }: { source: ProofSource }) {
  const [open, setOpen] = useState(false);
  const generatedId = useId();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
      cancelClose();
    };
  }, [open]);

  const previewId = `proof-${generatedId.replace(/:/g, '')}`;

  return (
    <div
      className="relative w-full sm:w-auto"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) scheduleClose();
      }}
      onFocus={cancelClose}
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
      ref={wrapperRef}
    >
      <button
        aria-controls={previewId}
        aria-expanded={open}
        className="group inline-flex w-full items-center justify-between gap-2 rounded-full border border-primary/15 px-3 py-2 text-left text-xs text-primary/80 transition hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 sm:w-auto"
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        <span>{source.label}</span>
        <span className="text-[9px] uppercase tracking-[0.14em] text-primary/40">proof</span>
      </button>
      <AnimatePresence>
        {open ? (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="relative z-40 mt-2 w-full rounded-[8px] border border-primary/15 bg-[#171717] p-3 shadow-glow md:absolute md:left-0 md:top-full md:w-72"
            exit={{ opacity: 0, y: -4 }}
            id={previewId}
            initial={{ opacity: 0, y: -4 }}
            role="region"
            transition={{ duration: 0.16 }}
          >
            {source.previewImage ? (
              <div className="mb-3 h-32 overflow-hidden rounded-[6px] bg-[#E1E0CC]">
                <img className="h-full w-full object-contain" src={source.previewImage} alt="" />
              </div>
            ) : null}
            <p className="text-[9px] uppercase tracking-[0.16em] text-primary/45">{source.kind}</p>
            <p className="mt-2 text-xs leading-relaxed text-gray-300">{source.summary}</p>
            {source.dateOrResult ? <p className="mt-2 text-[11px] text-primary/65">{source.dateOrResult}</p> : null}
            <a
              className="mt-3 inline-flex items-center gap-2 text-xs text-primary transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
              href={source.href}
              rel="noreferrer"
              target="_blank"
            >
              Open original
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function ProofList({ sources }: { sources: ProofSource[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {sources.map((source) => (
        <ProofPreview key={`${source.label}-${source.href}`} source={source} />
      ))}
    </div>
  );
}

function StatusPill({ status }: { status: ClaimStatus }) {
  const labels: Record<ClaimStatus, string> = {
    verified: 'Proof so far',
    active: 'Active work',
    planned: 'Experimenting next',
  };

  return (
    <span className="inline-flex rounded-full border border-primary/15 bg-black/30 px-3 py-2 text-[9px] uppercase tracking-[0.18em] text-primary/65">
      {labels[status]}
    </span>
  );
}

function WorkCard({ item, index, onOpen }: { item: WorkItem; index: number; onOpen: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const reduceMotion = useReducedMotion();

  return (
    <motion.button
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      className="group flex min-h-[560px] flex-col overflow-hidden rounded-[8px] bg-[#212121] text-left shadow-glow outline-none transition focus-visible:ring-2 focus-visible:ring-primary/70"
      initial={reduceMotion ? false : { opacity: 0, scale: 0.95 }}
      onClick={onOpen}
      ref={ref}
      transition={{ duration: 0.65, delay: reduceMotion ? 0 : index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      type="button"
    >
      {item.image ? (
        <div className="relative flex h-64 items-center justify-center overflow-hidden bg-[#E1E0CC] p-3">
          <img
            className="h-full w-full object-contain transition duration-700 group-hover:scale-[1.03]"
            src={item.image}
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#212121] via-transparent to-transparent" />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-primary/50">{item.eyebrow}</p>
            <h3 className="mt-2 text-xl leading-none text-[#E1E0CC]">{item.title}</h3>
          </div>
          <span className="text-sm text-primary/40">{item.number}</span>
        </div>
        <p className="mt-5 text-sm leading-relaxed text-gray-400">{item.description}</p>
        <ul className="mt-4 space-y-2">
          {item.bullets.slice(0, 2).map((bullet) => (
            <li className="flex gap-2 text-xs leading-snug text-primary/55" key={bullet}>
              <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-primary/50" />
              {bullet}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex items-center justify-between gap-4 pt-6">
          <span className="text-[10px] uppercase tracking-[0.16em] text-primary/45">
            {item.links.length} proof source{item.links.length === 1 ? '' : 's'}
          </span>
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
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      aria-labelledby="project-modal-title"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-md"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      onPointerDown={onClose}
      role="dialog"
    >
      <motion.div
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative z-10 max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-[8px] border border-primary/15 bg-[#101010] p-5 text-[#E1E0CC] shadow-glow sm:p-7"
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        onPointerDown={(event) => event.stopPropagation()}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      >
        <button
          aria-label="Close project popup"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-primary/15 text-primary/70 transition hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
          onClick={onClose}
          ref={closeButtonRef}
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
        <div className="mt-7 border-t border-primary/10 pt-5">
          <p className="mb-3 text-[9px] uppercase tracking-[0.18em] text-primary/45">Supporting proof</p>
          <ProofList sources={item.links} />
        </div>
      </motion.div>
    </motion.div>
  );
}

function StoryList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="text-[9px] uppercase tracking-[0.18em] text-primary/45">{title}</p>
      <ul className="mt-3 space-y-3">
        {items.map((item) => (
          <li className="flex gap-3 text-sm leading-relaxed text-gray-400" key={item}>
            <Check className="mt-1 h-3.5 w-3.5 flex-none text-primary/70" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function GtmStoryCard({ story, index }: { story: GtmStory; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      className="rounded-[8px] border border-primary/10 bg-[#101010] p-4 sm:p-6 lg:p-8"
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      ref={ref}
      transition={{ duration: 0.7, delay: reduceMotion ? 0 : index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
        <div>
          <div className="flex items-center justify-between gap-4">
            <StatusPill status={story.status} />
            <span className="text-sm text-primary/35">{story.number}</span>
          </div>
          <div className="mt-6 overflow-hidden rounded-[8px] bg-[#E1E0CC]">
            <img className="h-64 w-full object-contain sm:h-80" src={story.image} alt={story.imageAlt} />
          </div>
          <p className="mt-5 text-[9px] uppercase tracking-[0.18em] text-primary/45">Why it matters</p>
          <p className="mt-3 text-sm leading-relaxed text-primary/75">{story.startupValue}</p>
        </div>
        <div>
          <h3 className="text-3xl leading-[0.98] text-[#E1E0CC] sm:text-4xl">{story.title}</h3>
          <p className="mt-4 max-w-2xl font-serif text-xl italic leading-snug text-primary/80 sm:text-2xl">
            {story.outcome}
          </p>
          <div className="mt-7 grid gap-6 border-y border-primary/10 py-6 sm:grid-cols-2">
            <div>
              <p className="text-[9px] uppercase tracking-[0.18em] text-primary/45">Context</p>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">{story.context}</p>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-[0.18em] text-primary/45">My role</p>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">{story.role}</p>
            </div>
          </div>
          <div className="mt-7 grid gap-8 xl:grid-cols-2">
            <StoryList items={story.approach} title="How the system works" />
            <StoryList items={story.proof} title="Proof so far" />
          </div>
          <div className="mt-8 rounded-[8px] bg-black/35 p-4">
            <StoryList items={story.nextTests} title="What I’m testing next" />
          </div>
          <div className="mt-7">
            <p className="mb-3 text-[9px] uppercase tracking-[0.18em] text-primary/45">Supporting proof</p>
            <ProofList sources={story.sources} />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function App() {
  const [selectedProject, setSelectedProject] = useState<WorkItem | null>(null);
  const aboutText =
    'I work where product, story, and distribution meet: understanding the technical system, making the value legible, gathering the right people around it, and turning what we learn into the next growth decision.';

  return (
    <main className="min-h-screen bg-black text-[#E1E0CC]">
      <section className="relative h-screen p-4 md:p-6">
        <div className="relative h-full overflow-hidden rounded-2xl bg-[#101010] md:rounded-[2rem]">
          <HeroMedia />
          <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.22] mix-blend-overlay" />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 45%, rgba(0,0,0,0.58) 72%, rgba(0,0,0,0.96) 100%)',
            }}
          />
          <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-7 md:p-9">
            <div className="grid items-end gap-6 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-black/30 px-3 py-2 text-[9px] uppercase tracking-[0.16em] text-primary/70 backdrop-blur sm:text-[10px] sm:tracking-[0.18em]">
                  <Sparkles className="h-3.5 w-3.5" />
                  Technical GTM Builder / AI Products / Community-Led Growth
                </p>
                <h1 className="text-[18vw] font-medium leading-[0.85] text-[#E1E0CC] sm:text-[17vw] md:text-[16vw] lg:text-[14vw] xl:text-[13vw] 2xl:text-[12vw]">
                  <WordsPullUp showAsterisk text="Anne Liu" />
                </h1>
              </div>
              <div className="lg:col-span-4">
                <motion.p
                  animate={{ opacity: 1, y: 0 }}
                  className="max-w-md text-sm leading-snug text-primary/85 md:text-base"
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  I help AI startups turn technical products into communities people join, trust, and grow with.
                </motion.p>
                <motion.p
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 max-w-md text-xs leading-relaxed text-primary/55"
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  Technical GTM strategy, product fluency, founder-led content, community programs, and real-world events.
                </motion.p>
                <motion.p
                  animate={{ opacity: 1 }}
                  className="mt-3 text-[9px] uppercase tracking-[0.14em] text-primary/45"
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  3× hackathon winner · AI product builder · Community-led GTM strategist
                </motion.p>
                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-5 flex flex-wrap gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    className="group inline-flex items-center gap-2 rounded-full bg-primary py-2 pl-5 pr-2 text-sm font-medium text-black transition hover:gap-3 sm:text-base"
                    href={linkedinUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Start a conversation
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition group-hover:scale-110 sm:h-10 sm:w-10">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </span>
                  </a>
                  <a
                    aria-label="Connect with Anne Liu on LinkedIn"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/15 bg-black/30 text-primary/80 backdrop-blur transition hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
                    href={linkedinUrl}
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
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="flex min-h-[560px] flex-col justify-center rounded-[8px] bg-[#101010] p-6 text-center sm:p-10">
              <p className="text-[10px] uppercase tracking-[0.18em] text-primary sm:text-xs">Technical GTM for AI startups</p>
              <h2 className="mx-auto mt-6 max-w-3xl text-3xl leading-[0.98] sm:text-4xl sm:leading-[0.95] md:text-5xl lg:text-6xl xl:text-7xl">
                <WordsPullUpMultiStyle
                  segments={[
                    { text: 'I build the GTM engine' },
                    { text: 'around technical products.', className: 'font-serif italic' },
                  ]}
                />
              </h2>
              <ScrollRevealText text={aboutText} />
              <div className="mx-auto mt-8 grid w-full max-w-2xl grid-cols-3 gap-2 text-left">
                {proofStats.map(([value, label]) => (
                  <div className="rounded-[8px] bg-black/45 p-3 sm:p-4" key={label}>
                    <p className="text-xl leading-none text-primary sm:text-3xl">{value}</p>
                    <p className="mt-2 text-[10px] text-gray-500 sm:text-[11px]">{label}</p>
                  </div>
                ))}
              </div>
              <div className="mx-auto mt-7 flex flex-wrap justify-center gap-2">
                {proofLinks.map((source) => (
                  <ProofPreview key={source.href} source={source} />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 content-start gap-4">
              {aboutGalleryItems.map((item) => (
                <figure
                  className={`group relative overflow-hidden rounded-[8px] bg-[#101010] ${item.className}`}
                  key={item.label}
                >
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
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {capabilities.map((capability, index) => (
              <motion.article
                className="rounded-[8px] bg-[#101010] p-6"
                initial={{ opacity: 0, y: 18 }}
                key={capability.title}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true, margin: '-80px' }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <p className="text-[9px] uppercase tracking-[0.18em] text-primary/40">0{index + 1}</p>
                <h3 className="mt-4 text-2xl text-primary">{capability.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">{capability.description}</p>
                <ul className="mt-6 space-y-3 border-t border-primary/10 pt-5">
                  {capability.bullets.map((bullet) => (
                    <li className="flex gap-3 text-xs text-primary/65" key={bullet}>
                      <Check className="h-3.5 w-3.5 flex-none" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-black px-4 py-16 sm:px-6 md:py-24" id="engine">
        <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.12]" />
        <div className="relative mx-auto max-w-7xl rounded-[8px] bg-[#101010] p-6 sm:p-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-[10px] uppercase tracking-[0.18em] text-primary/60">Community-led growth engine</p>
            <h2 className="mt-6 text-3xl leading-none sm:text-4xl md:text-5xl">
              One system from <span className="font-serif italic text-primary/70">product truth</span> to early believers.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-gray-400">
              Workshops, content, partnerships, and experiments become more useful when every step feeds the next one.
            </p>
          </div>
          <div className="mt-10 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {growthStages.map(([number, title, description], index) => (
              <motion.article
                className="rounded-[8px] border border-primary/10 bg-black/35 p-5"
                initial={{ opacity: 0, y: 16 }}
                key={title}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                viewport={{ once: true, margin: '-60px' }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] tracking-[0.18em] text-primary/35">{number}</span>
                  {index < growthStages.length - 1 ? <ArrowRight className="h-3.5 w-3.5 text-primary/30" /> : null}
                </div>
                <h3 className="mt-6 text-lg text-primary">{title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-gray-500">{description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-4 py-16 sm:px-6 md:py-24" id="gtm-stories">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-[10px] uppercase tracking-[0.18em] text-primary/60">How I work</p>
            <h2 className="mx-auto mt-5 max-w-4xl text-3xl leading-tight sm:text-4xl md:text-5xl">
              Three ways I turn technical depth into real-world pull.
            </h2>
          </div>
          <div className="space-y-5">
            {gtmStories.map((story, index) => (
              <GtmStoryCard index={index} key={story.title} story={story} />
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
                  { text: 'Technical work that keeps the GTM story' },
                  { text: 'close to the product truth.', className: 'text-gray-500' },
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

      <section className="bg-black px-4 pb-6 pt-16 sm:px-6 md:pt-24" id="contact">
        <div className="mx-auto max-w-7xl rounded-[8px] bg-[#101010] p-6 sm:p-10">
          <div className="grid gap-4 md:grid-cols-3">
            {collaborationPaths.map((path, index) => (
              <article className="rounded-[8px] bg-black/40 p-5" key={path.title}>
                <p className="text-[9px] uppercase tracking-[0.18em] text-primary/35">0{index + 1}</p>
                <h3 className="mt-4 text-xl text-primary">{path.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{path.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 border-t border-primary/10 pt-10 text-center">
            <p className="text-[10px] uppercase tracking-[0.18em] text-primary/55">Start a collaboration conversation</p>
            <h2 className="mx-auto mt-5 max-w-4xl text-4xl leading-[0.95] sm:text-5xl md:text-6xl">
              Building an AI product that needs its <span className="font-serif italic text-primary/70">first believers?</span>
            </h2>
            <a
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary py-2 pl-5 pr-2 text-sm font-medium text-black transition hover:gap-3 sm:text-base"
              href={linkedinUrl}
              rel="noreferrer"
              target="_blank"
            >
              Start a conversation
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition group-hover:scale-110 sm:h-10 sm:w-10">
                <ArrowRight className="h-4 w-4 text-primary" />
              </span>
            </a>
          </div>
        </div>
      </section>

      <footer className="px-6 py-8 text-center text-[9px] uppercase tracking-[0.18em] text-primary/30">
        Anne Liu · Technical GTM for AI startups
      </footer>

      <AnimatePresence>
        {selectedProject ? <ProjectModal item={selectedProject} onClose={() => setSelectedProject(null)} /> : null}
      </AnimatePresence>
    </main>
  );
}

export default App;
