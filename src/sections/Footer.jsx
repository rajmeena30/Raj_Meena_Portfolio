import SocialLinks from '../components/SocialLinks';
import { navLinks, site } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="relative border-t border-line/15 bg-surface pb-10 pt-16">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-grad" />
      <div className="wrap">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="font-display text-3xl font-semibold tracking-tight">{site.name}</p>
            <p className="mt-1 text-muted">{site.title}</p>
            <p className="mt-5 max-w-[42ch] leading-relaxed text-muted">
              Building websites, graphics and video for real businesses, from Dewas, Madhya Pradesh.
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-3">
            <h2 className="font-display text-lg font-semibold">Pages</h2>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} className="text-muted transition-colors hover:text-accent">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <h2 className="font-display text-lg font-semibold">Get in touch</h2>
            <a href={`mailto:${site.email}`} className="mt-4 block break-all text-muted transition-colors hover:text-accent">
              {site.email}
            </a>
            <SocialLinks className="mt-5" />
          </div>
        </div>

        <p className="mt-14 border-t border-line/10 pt-6 text-sm text-muted">
          © {new Date().getFullYear()} Raj Meena. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
