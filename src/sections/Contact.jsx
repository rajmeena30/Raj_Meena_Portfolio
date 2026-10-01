import { Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import Reveal from '../components/Reveal';
import SocialLinks from '../components/SocialLinks';
import { site } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="py-24 sm:py-32">
      <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <h2 id="contact-title" className="text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
            Have a project in mind?
          </h2>
          <p className="mt-6 max-w-[40ch] text-lg leading-relaxed text-muted">
            Tell me what you want to build, whether that&apos;s a website, a video or a set of creatives.
            I&apos;ll get back to you.
          </p>

          <ul className="mt-10 space-y-5">
            <li className="flex items-start gap-4">
              <Mail size={20} className="mt-1 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <p className="text-sm text-muted">Email</p>
                <a href={`mailto:${site.email}`} className="break-all text-lg font-medium hover:text-accent">
                  {site.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Phone size={20} className="mt-1 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <p className="text-sm text-muted">Phone and WhatsApp</p>
                <a href={`tel:+91${site.phone}`} className="text-lg font-medium hover:text-accent">
                  {site.phone}
                </a>
                <span className="mx-2 text-muted" aria-hidden="true">/</span>
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-accent underline underline-offset-4"
                >
                  Message on WhatsApp<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <MapPin size={20} className="mt-1 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <p className="text-sm text-muted">Location</p>
                <p className="text-lg font-medium">{site.location}</p>
              </div>
            </li>
          </ul>

          <SocialLinks showLabels className="mt-10" />
        </Reveal>

        <Reveal delay={0.08} className="relative lg:col-span-7">
          <div className="spot border border-line/15 bg-surface p-6 sm:p-10">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
