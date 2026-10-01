const items = [
  'Web Development',
  'MERN Stack',
  'WordPress',
  'Graphic Design',
  'Video Editing',
  'UI/UX',
  'AI Automation',
  'Prompt Engineering',
];

// Decorative skill ticker. Hidden from screen readers; the same terms appear in Skills.
export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div aria-hidden="true" className="marquee-wrap overflow-hidden border-y border-line/10 bg-surface/60 py-5">
      <div className="marquee">
        {row.map((t, i) => (
          <span key={i} className="flex items-center whitespace-nowrap font-display text-2xl font-semibold tracking-tight text-muted sm:text-3xl">
            {t}
            <span className="mx-8 h-2 w-2 rounded-full bg-grad sm:mx-10" />
          </span>
        ))}
      </div>
    </div>
  );
}
