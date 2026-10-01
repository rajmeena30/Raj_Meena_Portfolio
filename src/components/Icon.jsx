import {
  Atom,
  Clapperboard,
  Code2,
  Fingerprint,
  Layers,
  LayoutTemplate,
  MessagesSquare,
  PenTool,
  ShoppingBag,
  Sparkles,
  Workflow,
} from 'lucide-react';

const icons = {
  Atom,
  Clapperboard,
  Code2,
  Fingerprint,
  Layers,
  LayoutTemplate,
  MessagesSquare,
  PenTool,
  ShoppingBag,
  Sparkles,
  Workflow,
};

// Maps the icon names used in portfolioData.js to Lucide components.
export default function Icon({ name, ...props }) {
  const Cmp = icons[name] || Sparkles;
  return <Cmp aria-hidden="true" {...props} />;
}
