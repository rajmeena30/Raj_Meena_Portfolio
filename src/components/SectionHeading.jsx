import Reveal from './Reveal';

export default function SectionHeading({ title, lead, className = '' }) {
  return (
    <Reveal className={`max-w-3xl ${className}`}>
      <h2 className="text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">{title}</h2>
      {lead && <p className="mt-5 max-w-[56ch] text-lg leading-relaxed text-muted">{lead}</p>}
    </Reveal>
  );
}
