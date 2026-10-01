import { Github, Instagram, Linkedin } from 'lucide-react';
import { socials } from '../data/portfolioData';

const icons = { linkedin: Linkedin, github: Github, instagram: Instagram };

export default function SocialLinks({ className = '', showLabels = false }) {
  return (
    <ul className={`flex flex-wrap items-center gap-3 ${className}`}>
      {socials.map((s) => {
        const Cmp = icons[s.id];
        return (
          <li key={s.id}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${s.label} (opens in a new tab)`}
              className={`inline-flex items-center gap-2 text-muted transition-colors hover:text-accent ${
                showLabels
                  ? 'rounded-full border border-line/15 px-4 py-2 text-sm hover:border-accent'
                  : 'grid h-10 w-10 place-items-center rounded-full border border-line/15 hover:border-accent'
              }`}
            >
              <Cmp size={18} aria-hidden="true" />
              {showLabels && <span>{s.label}</span>}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
