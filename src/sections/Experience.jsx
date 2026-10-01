import { ArrowUpRight } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="bg-surface py-24 sm:py-32">
      <div className="wrap">
        <SectionHeading title={<span id="experience-title">Experience</span>} lead="Where I work now, and where I worked before." />

        <ol className="relative mt-14 space-y-12 border-l border-line/15 pl-6 sm:pl-10">
          {experience.map((job) => (
            <Reveal as="li" key={job.id} className="relative">
              <span
                aria-hidden="true"
                className={`absolute -left-[1.95rem] top-2 h-3 w-3 rounded-full sm:-left-[2.95rem] ${
                  job.current ? 'bg-accent ring-4 ring-accent/20' : 'border border-muted bg-surface'
                }`}
              />
              {job.current ? (
                <div className="spot border border-accent2/30 bg-bg p-6 sm:p-9">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-sm font-medium text-accent">
                      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
                      Currently working
                    </span>
                    <span className="text-sm text-muted">{job.duration}</span>
                  </div>
                  <h3 className="mt-5 text-4xl font-semibold sm:text-5xl">
                    {job.url ? (
                      <a
                        href={job.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-start gap-2 hover:text-accent"
                      >
                        {job.company}
                        <ArrowUpRight size={22} className="mt-2" aria-label="(opens in a new tab)" />
                      </a>
                    ) : (
                      job.company
                    )}
                  </h3>
                  <p className="mt-2 text-xl text-muted">{job.role}</p>
                  <ul className="mt-7 grid gap-x-10 gap-y-3 sm:grid-cols-2">
                    {job.points.map((pt) => (
                      <li key={pt} className="flex gap-3 leading-snug">
                        <span aria-hidden="true" className="mt-2.5 h-1 w-3 shrink-0 bg-accent" />
                        <span className="text-ink/90">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-1">
                  <div>
                    <h3 className="text-2xl font-semibold">{job.company}</h3>
                    <p className="mt-1 text-muted">{job.role}</p>
                  </div>
                  <p className="text-sm text-muted">{job.duration}</p>
                </div>
              )}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
