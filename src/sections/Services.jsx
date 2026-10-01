import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { primaryServices, secondaryServices } from '../data/portfolioData';

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="bg-surface py-24 sm:py-32">
      <div className="wrap">
        <SectionHeading
          title={<span id="services-title">What I can do for you</span>}
          lead="Three things I do most, and a few more I can take on around them."
        />

        <ul className="mt-14 border-t border-line/15">
          {primaryServices.map((s) => (
            <Reveal
              as="li"
              key={s.id}
              className="group grid gap-6 border-b border-line/15 py-10 spot md:grid-cols-12 md:items-start md:gap-8 md:px-4 md:py-12"
            >
              <div className="flex items-center gap-5 md:col-span-5">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent/25 to-accent3/20 text-accent3 transition-transform duration-300 group-hover:-translate-y-0.5">
                  <Icon name={s.icon} size={26} strokeWidth={1.75} />
                </span>
                <h3 className="text-3xl font-semibold sm:text-4xl">{s.title}</h3>
              </div>
              <p className="prose-copy md:col-span-4">{s.description}</p>
              <p className="font-medium text-ink md:col-span-3">{s.outcome}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-20">
          <h3 className="font-display text-2xl font-semibold">Also available</h3>
          <ul className="mt-6 grid border-l border-t border-line/15 sm:grid-cols-2 lg:grid-cols-4">
            {secondaryServices.map((s) => (
              <li key={s.id} className="spot border-b border-r border-line/15 p-6">
                <Icon name={s.icon} size={22} strokeWidth={1.75} className="text-accent3" />
                <h4 className="mt-4 font-display text-lg font-semibold">{s.title}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.description}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
