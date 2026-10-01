/* ====================================================================
   PORTFOLIO CONTENT
   Edit this file to update the website. Nothing here is invented:
   anything not yet verified is left as a clearly marked placeholder.
==================================================================== */

export const site = {
  name: 'Raj Meena',
  title: 'Web Developer',
  url: 'https://rajmeena.in/',
  location: 'Dewas, Madhya Pradesh, India',
  email: 'mr.rajmeena0702@gmail.com',
  phone: '8839223002',
  // WhatsApp needs the country code. 91 = India. Change if the number differs.
  whatsapp: '918839223002',
  tagline: 'I build websites and digital experiences for real businesses.',
  intro:
    'I work across development, design and video, helping ideas become usable digital products.',
};

// To change the photo, replace the files in /public/images (see README).
export const profileImage = {
  alt: 'Portrait of Raj Meena, web developer, in a black sweater with hands clasped under his chin',
  fallback: '/images/raj-meena.jpg',
  webpSrcSet:
    '/images/raj-meena-480.webp 480w, /images/raj-meena-800.webp 800w, /images/raj-meena-1057.webp 1057w',
  width: 1057,
  height: 1488,
};

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
];

export const socials = [
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/raj-meena-51ab8132b/' },
  { id: 'github', label: 'GitHub', href: 'https://github.com/mrrajmeena0702-arch' },
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/mr.abhaymeena30/' },
];

// Shown in the hero as a rotating supporting line.
export const heroRoles = [
  'Full-Stack Developer',
  'MERN Developer',
  'WordPress Developer',
  'Graphic Designer',
  'Video Editor',
];

export const about = {
  heading: 'Real projects, real requirements.',
  paragraphs: [
    "I'm Raj Meena, a web developer from Dewas, Madhya Pradesh. My foundation is C, C++, JavaScript and DSA. On top of that I build with the MERN stack and WordPress, and I design graphics and edit video.",
    "I prefer solving real-world problems to building tutorial projects or clones. I've built multiple live projects, and with my team I've built websites for businesses. I've also worked for clients as a graphic designer and video editor, so I'm used to starting from what a business actually needs.",
    "Right now I'm deepening my technical skills and gaining more hands-on experience. Longer term, I want to build a startup of my own.",
  ],
  // Qualitative only. Add numbers here only once you can verify them.
  highlights: [
    'Built multiple live projects',
    'Built websites for businesses, together with my team',
    'Designed graphics and edited video for clients',
    'Work from real business requirements, not clones',
  ],
};

export const experience = [
  {
    id: 'exsora',
    company: 'EXSORA',
    url: 'https://www.exsora.in/',
    role: 'Video Editor & Graphic Designer',
    duration: 'Approximately 6 months',
    current: true,
    points: [
      'Editing videos for clients',
      'Creating social media creatives',
      'Understanding business requirements',
      'Technology-related work, supporting client and business needs through both creative and technical tasks',
    ],
  },
  {
    id: 'wardhan',
    company: 'Wardhan Pvt Ltd',
    url: null,
    role: 'Data Entry Operator',
    duration: '6 months',
    current: false,
    points: [],
  },
];

export const skillGroups = [
  {
    id: 'web',
    title: 'Web development',
    note: 'Where most of my work happens.',
    featured: true,
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'MERN stack', 'WordPress'],
  },
  {
    id: 'foundations',
    title: 'Programming foundations',
    items: ['C', 'C++', 'DSA'],
  },
  {
    id: 'creative',
    title: 'Design and video',
    items: ['Graphic design', 'Video editing', 'Figma', 'Canva'],
  },
  {
    id: 'ai',
    title: 'AI',
    items: ['Prompt engineering', 'Generative AI', 'AI automation', 'LLMs', 'API integration'],
  },
  {
    id: 'tools',
    title: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Docker', 'Vercel'],
  },
];

export const primaryServices = [
  {
    id: 'video',
    icon: 'Clapperboard',
    title: 'Video editing',
    description:
      'Editing for client videos and social content, cut to suit the platform it will be posted on.',
    outcome: 'Videos that are ready to publish.',
  },
  {
    id: 'design',
    icon: 'PenTool',
    title: 'Graphic design',
    description:
      'Social media creatives and visual assets built around what the business needs to communicate.',
    outcome: 'Creatives you can post straight away.',
  },
  {
    id: 'web',
    icon: 'Code2',
    title: 'Web development',
    description:
      'Business websites and web apps with React and the MERN stack, or WordPress when the owner needs to edit the site themselves.',
    outcome: 'A live site you can manage and grow.',
  },
];

export const secondaryServices = [
  { id: 'wordpress', icon: 'LayoutTemplate', title: 'WordPress', description: 'Sites that owners can update themselves.' },
  { id: 'ecommerce', icon: 'ShoppingBag', title: 'E-commerce', description: 'Online stores where customers can browse and order.' },
  { id: 'react', icon: 'Atom', title: 'React development', description: 'Component-based interfaces that stay easy to change.' },
  { id: 'uiux', icon: 'Layers', title: 'UI/UX', description: 'Clear layouts and flows, designed before they are coded.' },
  { id: 'branding', icon: 'Fingerprint', title: 'Branding', description: 'Colour, type and logo choices that stay consistent.' },
  { id: 'ai', icon: 'Sparkles', title: 'AI integration', description: 'LLM and API features added to existing products.' },
  { id: 'automation', icon: 'Workflow', title: 'Automation', description: 'Removing repetitive manual steps with scripts and AI.' },
  { id: 'consulting', icon: 'MessagesSquare', title: 'Consulting', description: 'Help deciding what to build and which tools to use.' },
];

/* --------------------------------------------------------------------
   PROJECTS
   No verified project list has been provided yet, so nothing is invented.
   The entry below is a PLACEHOLDER: it only appears while you run
   `npm run dev`, so you can see the layout. It is hidden in the
   production build. To add a real project, copy the template, fill in
   real details and remove `placeholder: true`.
-------------------------------------------------------------------- */
export const projects = [
  {
    id: 'project-1',
    placeholder: true, // remove this line for real projects
    title: 'PROJECT_TITLE',
    category: 'PROJECT_CATEGORY',
    year: '',
    summary: 'PROJECT_DESCRIPTION',
    problem: 'PROJECT_PROBLEM',
    role: 'PROJECT_ROLE',
    tech: ['PROJECT_TECH'],
    image: '', // e.g. '/images/projects/my-project.webp'. Empty shows a neutral panel.
    imageAlt: '',
    liveUrl: '', // PROJECT_URL
    githubUrl: '',
    caseStudyUrl: '',
  },
  // PROJECT_DATA_HERE
];

/* Recognition. Leave empty until you have real items; the UI renders
   only what exists. Copy the shapes below. */
export const certificates = [
  // CERTIFICATE_DATA_HERE
  // { id: 'cert-1', title: '', issuer: '', year: '', url: '' },
];

export const testimonials = [
  // TESTIMONIAL_DATA_HERE
  // { id: 't-1', quote: '', name: '', role: '' },
];

export const current = {
  intro:
    "I'm a student at SKILASTRA, and this is what I'm working on now.",
  items: [
    'Developing my MERN skills',
    'Building projects',
    'Learning through practical work',
    'Working with students at SKILASTRA',
    'Taking part in technical activities',
  ],
  goal: 'Longer term, I want to build a startup of my own. The client work and projects are how I am learning what that takes.',
};

export const education = {
  degree: 'B.Com Computer Application',
  institution: 'Vikram University, Ujjain',
  status: '3rd year running',
};

export const contactProjectTypes = [
  'Website or web app',
  'WordPress site',
  'Graphic design',
  'Video editing',
  'AI or automation',
  'Something else',
];

// Formspree endpoint comes from an environment variable (see README).
export const FORM_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || '';

// Placeholder projects are shown only while developing locally.
export const SHOW_PLACEHOLDERS = Boolean(import.meta.env.DEV);
