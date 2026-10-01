import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import Button from './Button';
import useActiveSection from '../hooks/useActiveSection';
import { navLinks } from '../data/portfolioData';

const ids = navLinks.map((l) => l.id);

export default function Navbar({ theme, onToggleTheme }) {
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);
  const menuButton = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock page scroll and support Escape while the mobile menu is open.
  useEffect(() => {
    if (!open) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled || open
          ? 'border-b border-line/10 bg-bg/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <a
        href="#main"
        className="sr-only-focusable absolute left-4 top-3 z-[60] rounded-md bg-accent px-4 py-2 font-semibold text-on-accent"
      >
        Skip to content
      </a>
      <div className="wrap flex h-[4.5rem] items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  aria-current={active === l.id ? 'true' : undefined}
                  className={`relative block px-3.5 py-2 text-[0.95rem] transition-colors ${
                    active === l.id ? 'text-ink' : 'text-muted hover:text-ink'
                  }`}
                >
                  {l.label}
                  {active === l.id && (
                    <motion.span
                      layoutId={reduce ? undefined : 'nav-indicator'}
                      className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-accent"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <Button href="#contact" magnetic={false} className="hidden !px-5 !py-2.5 lg:inline-flex">
            Let&apos;s Talk
          </Button>
          <button
            ref={menuButton}
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-line/15 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-line/10 bg-bg lg:hidden"
          >
            <nav aria-label="Mobile" className="wrap flex flex-col py-6">
              {navLinks.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="border-b border-line/10 py-4 font-display text-3xl font-semibold tracking-tight"
                >
                  {l.label}
                </a>
              ))}
              <Button href="#contact" magnetic={false} className="mt-8" onClick={() => setOpen(false)}>
                Let&apos;s Talk
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
