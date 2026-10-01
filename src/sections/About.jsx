import { Check } from 'lucide-react';
import Reveal from '../components/Reveal';
import { about } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-24 sm:py-32">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <h2 id="about-title" className="text-4xl font-semibold leading-[1.05] sm:text-5xl lg:sticky lg:top-28 lg:text-6xl">
            {about.heading}
          </h2>
        </Reveal>

        <div className="lg:col-span-7">
          <div className="space-y-6">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p className={i === 0 ? 'max-w-[58ch] text-xl leading-relaxed text-ink' : 'prose-copy'}>{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12">
            <h3 className="font-display text-xl font-semibold">What that looks like in practice</h3>
            <ul className="mt-4 divide-y divide-line/10 border-y border-line/10">
              {about.highlights.map((h) => (
                <li key={h} className="flex items-start gap-4 py-4">
                  <Check size={18} className="mt-1 shrink-0 text-accent3" aria-hidden="true" />
                  <span className="text-[1.0625rem] leading-snug">{h}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
