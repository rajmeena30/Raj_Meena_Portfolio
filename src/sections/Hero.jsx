import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { MapPin } from 'lucide-react';
import Button from '../components/Button';
import SocialLinks from '../components/SocialLinks';
import { heroRoles, profileImage, site } from '../data/portfolioData';

const ease = [0.22, 1, 0.36, 1];
const container = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } } };
const rise = { hidden: { y: '110%' }, show: { y: 0, transition: { duration: 0.85, ease } } };
const fade = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } };

function RotatingRole({ reduce }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (reduce) return undefined;
    const t = window.setInterval(() => setI((n) => (n + 1) % heroRoles.length), 2600);
    return () => window.clearInterval(t);
  }, [reduce]);

  if (reduce) {
    return <span className="font-medium text-ink">{heroRoles.join(', ')}</span>;
  }
  return (
    <>
      {/* Screen readers get the full list once instead of a changing word */}
      <span className="sr-only">{heroRoles.join(', ')}</span>
      <span aria-hidden="true" className="relative inline-block h-[1.5em] min-w-[13ch] overflow-hidden align-bottom">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={heroRoles[i]}
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.35, ease }}
            className="block whitespace-nowrap font-medium text-ink"
          >
            {heroRoles[i]}
          </motion.span>
        </AnimatePresence>
      </span>
    </>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const frameY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -28]);
  const photoY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 18]);
  const initial = reduce ? 'show' : 'hidden';

  return (
    <section id="top" ref={ref} aria-labelledby="hero-title" className="relative isolate overflow-x-clip pb-20 pt-32 sm:pt-36 lg:pb-28">
      <div className="aurora" aria-hidden="true" />
      <div className="grid-bg" aria-hidden="true" />
      <div className="wrap grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
        <motion.div variants={container} initial={initial} animate="show" className="lg:col-span-7">
          <motion.p variants={fade} className="inline-flex items-center gap-2.5 text-sm text-muted">
            <span aria-hidden="true" className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            Open to freelance projects
          </motion.p>

          <h1 id="hero-title" className="mt-7">
            <span className="block overflow-hidden pb-[0.14em]">
              <motion.span variants={rise} className="grad-text block text-[clamp(3.6rem,10.5vw,8.25rem)] font-bold leading-[0.95] tracking-[-0.035em]">
                Raj Meena
              </motion.span>
            </span>
            <span className="mt-2 block overflow-hidden pb-[0.1em]">
              <motion.span variants={rise} className="block text-[clamp(1.9rem,4.8vw,3.75rem)] font-medium leading-tight tracking-[-0.02em] text-muted">
                Web Developer
              </motion.span>
            </span>
          </h1>

          <motion.p variants={fade} className="mt-7 max-w-[34ch] font-display text-2xl font-medium leading-snug tracking-tight sm:text-[1.75rem]">
            {site.tagline}
          </motion.p>
          <motion.p variants={fade} className="mt-4 max-w-[52ch] text-lg leading-relaxed text-muted">
            {site.intro}
          </motion.p>

          <motion.p variants={fade} className="mt-6 flex flex-wrap items-baseline gap-x-2.5 text-base text-muted">
            <span>Also working as</span>
            <RotatingRole reduce={reduce} />
          </motion.p>

          <motion.div variants={fade} className="mt-9 flex flex-wrap items-center gap-3">
            <Button href="#work">View My Work</Button>
            <Button href="#contact" variant="ghost">
              Let&apos;s Work Together
            </Button>
          </motion.div>

          <motion.div variants={fade} className="mt-8">
            <SocialLinks />
          </motion.div>
        </motion.div>

        <motion.figure
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease }}
          className="relative mx-auto w-full max-w-[26rem] pb-6 pr-6 lg:col-span-5 lg:max-w-none"
        >
          {/* Offset outline frame, drifts slightly against the photo on scroll */}
          <div aria-hidden="true" className="absolute inset-0 translate-x-6 translate-y-6">
            <motion.div style={{ y: frameY }} className="h-full w-full border border-accent2/70" />
          </div>
          <div aria-hidden="true" className="absolute -left-3 top-10 bottom-16 w-1.5 bg-gradient-to-b from-accent via-accent2 to-accent3" />

          <motion.div style={{ y: photoY }} className="relative">
            <div className="relative aspect-[5/6] overflow-hidden bg-raised">
              <picture>
                <source
                  type="image/webp"
                  srcSet={profileImage.webpSrcSet}
                  sizes="(min-width: 1024px) 460px, 85vw"
                />
                <img
                  src={profileImage.fallback}
                  alt={profileImage.alt}
                  width={profileImage.width}
                  height={profileImage.height}
                  fetchpriority="high"
                  decoding="async"
                  className="h-full w-full object-cover object-[50%_18%]"
                />
              </picture>
            </div>
            <figcaption className="absolute -bottom-4 left-4 inline-flex items-center gap-2 bg-surface px-4 py-2.5 text-sm shadow-lg shadow-black/10 ring-1 ring-line/10 sm:-left-5">
              <MapPin size={15} className="text-accent" aria-hidden="true" />
              Dewas, Madhya Pradesh
            </figcaption>
            <span aria-hidden="true" className="glass float absolute -right-5 top-8 hidden px-4 py-2 text-sm font-medium sm:block">React</span>
            <span aria-hidden="true" style={{ animationDelay: '-2s' }} className="glass float absolute -right-9 top-1/2 hidden px-4 py-2 text-sm font-medium sm:block">MERN</span>
            <span aria-hidden="true" style={{ animationDelay: '-4s' }} className="glass float absolute -left-6 top-24 hidden px-4 py-2 text-sm font-medium lg:block">WordPress</span>
            <span aria-hidden="true" style={{ animationDelay: '-3s' }} className="glass float absolute -left-4 bottom-28 hidden px-4 py-2 text-sm font-medium lg:block">Video</span>
          </motion.div>
        </motion.figure>
      </div>
    </section>
  );
}
