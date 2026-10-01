export default function Logo({ className = '' }) {
  return (
    <a
      href="#top"
      aria-label="Raj Meena, back to top"
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <span
        aria-hidden="true"
        className="relative grid h-9 w-9 place-items-center rounded-lg bg-ink font-display text-sm font-bold tracking-tight text-bg"
      >
        RM
        <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-grad ring-2 ring-bg" />
      </span>
      <span className="font-display text-base font-semibold tracking-tight">Raj Meena</span>
    </a>
  );
}
