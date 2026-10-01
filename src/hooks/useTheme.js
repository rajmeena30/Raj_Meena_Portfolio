import { useCallback, useEffect, useState } from 'react';

const KEY = 'rm-theme';

function readTheme() {
  if (typeof document === 'undefined') return 'dark';
  return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
}

export default function useTheme() {
  const [theme, setTheme] = useState(readTheme);

  // Follow the system setting only while the visitor has not chosen a theme.
  useEffect(() => {
    let saved = null;
    try {
      saved = localStorage.getItem(KEY);
    } catch (e) {
      /* storage unavailable */
    }
    if (saved) return undefined;
    const mq = window.matchMedia('(prefers-color-scheme: light)');
    const onChange = (e) => apply(e.matches ? 'light' : 'dark', false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  function apply(next, animate = true) {
    const root = document.documentElement;
    if (animate) {
      root.classList.add('theme-transition');
      window.setTimeout(() => root.classList.remove('theme-transition'), 450);
    }
    root.setAttribute('data-theme', next);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', next === 'light' ? '#F8F7FC' : '#05060A');
    setTheme(next);
  }

  const toggle = useCallback(() => {
    const next = readTheme() === 'light' ? 'dark' : 'light';
    apply(next);
    try {
      localStorage.setItem(KEY, next);
    } catch (e) {
      /* storage unavailable */
    }
  }, []);

  return { theme, toggle };
}
