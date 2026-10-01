import { GraduationCap } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { certificates, current, education, testimonials } from '../data/portfolioData';

export default function Focus() {
  return (
    <section id="focus" aria-labelledby="focus-title" className="bg-surface py-24 sm:py-32">
      <div className="wrap">
        <SectionHeading title={<span id="focus-title">Learning and building</span>} lead={current.intro} />

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <h3 className="font-display text-xl font-semibold">Right now</h3>
            <ul className="mt-4 divide-y divide-line/10 border-y border-line/10">
              {current.items.map((item) => (
                <li key={item} className="flex items-center gap-4 py-4 text-lg">
                  <span aria-hidden="true" className="h-1 w-4 shrink-0 bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="prose-copy mt-8">{current.goal}</p>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-5">
            <div className="spot border border-accent2/30 bg-bg p-7 sm:p-9">
              <GraduationCap size={28} className="text-accent" aria-hidden="true" />
              <h3 className="mt-5 font-display text-xl font-semibold text-muted">Education</h3>
              <p className="mt-3 font-display text-3xl font-semibold leading-tight">{education.degree}</p>
              <p className="mt-3 text-lg">{education.institution}</p>
              <p className="mt-1 text-muted">{education.status}</p>
            </div>
          </Reveal>
        </div>

        {/* Renders only once real items are added in portfolioData.js */}
        {(certificates.length > 0 || testimonials.length > 0) && (
          <div className="mt-20 grid gap-12 lg:grid-cols-2">
            {certificates.length > 0 && (
              <Reveal>
                <h3 className="font-display text-2xl font-semibold">Certificates</h3>
                <ul className="mt-5 divide-y divide-line/10 border-y border-line/10">
                  {certificates.map((c) => (
                    <li key={c.id} className="py-4">
                      <p className="font-medium">{c.title}</p>
                      <p className="text-sm text-muted">
                        {[c.issuer, c.year].filter(Boolean).join(', ')}
                      </p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
            {testimonials.length > 0 && (
              <Reveal>
                <h3 className="font-display text-2xl font-semibold">What clients say</h3>
                <div className="mt-5 space-y-8">
                  {testimonials.map((t) => (
                    <figure key={t.id} className="border-l-2 border-accent pl-6">
                      <blockquote className="text-lg leading-relaxed">{t.quote}</blockquote>
                      <figcaption className="mt-3 text-sm text-muted">
                        {t.name}
                        {t.role ? `, ${t.role}` : ''}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </Reveal>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
