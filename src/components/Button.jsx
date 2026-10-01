import { useRef } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import useFinePointer from '../hooks/useFinePointer';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[0.95rem] font-semibold transition-colors';
const variants = {
  primary: 'bg-grad text-on-accent hover:brightness-110 shadow-[0_8px_30px_-8px_rgb(var(--accent2)/0.6)]',
  ghost: 'border border-line/25 text-ink hover:border-accent hover:text-accent',
};

// Buttons drift slightly toward the pointer on desktop. Disabled on touch
// devices and when the visitor prefers reduced motion.
export default function Button({
  href,
  variant = 'primary',
  magnetic = true,
  className = '',
  children,
  ...rest
}) {
  const reduce = useReducedMotion();
  const fine = useFinePointer();
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });
  const active = magnetic && fine && !reduce;

  const onMove = (e) => {
    if (!active || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.18);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.25);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Tag = href ? motion.a : motion.button;
  const extra = href ? { href } : { type: rest.type || 'button' };

  return (
    <Tag
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={active ? { x: sx, y: sy } : undefined}
      className={`${base} ${variants[variant]} ${className}`}
      {...extra}
      {...rest}
    >
      {children}
    </Tag>
  );
}
