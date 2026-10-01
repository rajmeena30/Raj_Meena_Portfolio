import { ArrowUpRight, Github } from 'lucide-react';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { projects, SHOW_PLACEHOLDERS } from '../data/portfolioData';

function ProjectVisual({ project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.imageAlt || `${project.title} screenshot`}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
      />
    );
  }
  // Neutral panel used until a real screenshot is added
  return (
    <div className="grid h-full w-full place-items-center bg-raised">
      <span className="font-display text-7xl font-bold tracking-tighter text-line/20">
        {project.title.slice(0, 2).toUpperCase()}
      </span>
    </div>
  );
}

function Project({ project, index }) {
  const flip = index % 2 === 1;
  const number = String(index + 1).padStart(2, '0');
  const hasLinks = project.liveUrl || project.githubUrl || project.caseStudyUrl;

  return (
    <Reveal as="article" className="group grid gap-8 py-14 md:grid-cols-12 md:items-center md:gap-12 md:py-20">
      <div className={`md:col-span-7 ${flip ? 'md:order-2' : ''}`}>
        <div className="relative aspect-[16/10] overflow-hidden border border-line/15 bg-raised">
          <ProjectVisual project={project} />
          {project.placeholder && (
            <span className="absolute left-3 top-3 bg-accent px-2.5 py-1 text-xs font-semibold text-on-accent">
              Placeholder, hidden in production
            </span>
          )}
        </div>
      </div>

      <div className={`md:col-span-5 ${flip ? 'md:order-1' : ''}`}>
        <p className="flex items-center gap-3 text-sm text-muted">
          <span className="font-display text-lg font-semibold text-accent">{number}</span>
          <span>{project.category}</span>
          {project.year && <span>{project.year}</span>}
        </p>
        <h3 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">{project.title}</h3>
        <p className="mt-4 text-lg leading-relaxed text-muted">{project.summary}</p>

        <dl className="mt-6 space-y-4 border-t border-line/15 pt-6 text-[0.95rem]">
          {project.problem && (
            <div className="grid grid-cols-[6.5rem_1fr] gap-4">
              <dt className="text-muted">Problem</dt>
              <dd>{project.problem}</dd>
            </div>
          )}
          {project.role && (
            <div className="grid grid-cols-[6.5rem_1fr] gap-4">
              <dt className="text-muted">My role</dt>
              <dd>{project.role}</dd>
            </div>
          )}
          {project.tech?.length > 0 && (
            <div className="grid grid-cols-[6.5rem_1fr] gap-4">
              <dt className="text-muted">Stack</dt>
              <dd className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="chip !py-1">
                    {t}
                  </span>
                ))}
              </dd>
            </div>
          )}
        </dl>

        {hasLinks && (
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 font-medium">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-accent">
                View project <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            )}
            {project.caseStudyUrl && (
              <a href={project.caseStudyUrl} className="inline-flex items-center gap-1.5 hover:text-accent">
                Case study
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-muted hover:text-accent">
                <Github size={17} aria-hidden="true" /> Code
              </a>
            )}
          </div>
        )}
      </div>
    </Reveal>
  );
}

export default function Work() {
  const visible = projects.filter((p) => !p.placeholder || SHOW_PLACEHOLDERS);

  return (
    <section id="work" aria-labelledby="work-title" className="py-24 sm:py-32">
      <div className="wrap">
        <SectionHeading
          title={<span id="work-title">Selected work</span>}
          lead="Websites and projects, written up with the problem, my role and what was used."
        />

        {visible.length > 0 ? (
          <div className="mt-10 divide-y divide-line/15 border-t border-line/15">
            {visible.map((p, i) => (
              <Project key={p.id} project={p} index={i} />
            ))}
          </div>
        ) : (
          <Reveal className="mt-14 grid gap-8 border border-line/15 bg-surface p-8 sm:p-12 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <h3 className="text-3xl font-semibold sm:text-4xl">Project write-ups are being added.</h3>
              <p className="prose-copy mt-4">
                I&apos;ve built websites for businesses and done design and video work for clients. If you
                want to see live examples, message me and I&apos;ll share them directly.
              </p>
            </div>
            <div className="md:col-span-4 md:justify-self-end">
              <Button href="#contact">Ask for examples</Button>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
