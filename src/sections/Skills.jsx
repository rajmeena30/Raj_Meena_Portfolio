import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { skillGroups } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="py-24 sm:py-32">
      <div className="wrap">
        <SectionHeading
          title={<span id="skills-title">Skills and tools</span>}
          lead="What I work with day to day, grouped by the kind of work."
        />

        <div className="mt-14 border-t border-line/15">
          {skillGroups.map((group) => (
            <Reveal key={group.id} className="grid gap-5 border-b border-line/15 py-8 md:grid-cols-12 md:gap-8 md:py-10">
              <div className="md:col-span-4">
                <h3 className={`font-display font-semibold ${group.featured ? 'text-3xl' : 'text-2xl'}`}>{group.title}</h3>
                {group.note && <p className="mt-2 text-sm text-muted">{group.note}</p>}
              </div>
              <ul className="flex flex-wrap gap-2.5 md:col-span-8">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className={
                      group.featured
                        ? 'inline-flex items-center rounded-md border border-accent2/50 bg-gradient-to-r from-accent/15 to-accent3/15 px-4 py-2 text-base font-medium'
                        : 'chip'
                    }
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
