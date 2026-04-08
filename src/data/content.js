import {
  LayoutDashboard,
  Users,
  GitBranch,
  Zap,
  BarChart3,
  Puzzle,
} from 'lucide-react';

export const NAV_LINKS = [
  { label: 'Features',     href: '#features'      },
  { label: 'How it works', href: '#how-it-works'   },
  { label: 'Pricing',      href: '#pricing'        },
  { label: 'FAQ',          href: '#faq'            },
];

export const TRUSTED_LOGOS = [
  'Vercel', 'Stripe', 'Notion', 'Linear', 'Figma', 'Loom',
];

export const FEATURES = [
  {
    icon: LayoutDashboard,
    title: 'Smart Task Management',
    description:
      "Intelligent task prioritization that learns from your team's workflow. Drag, drop, and delegate with zero friction.",
  },
  {
    icon: Users,
    title: 'Real-time Collaboration',
    description:
      'See changes as they happen with live cursors, presence indicators, and instant comment threads on any task.',
  },
  {
    icon: GitBranch,
    title: 'Timeline & Gantt Views',
    description:
      'Visualize project progress with beautiful interactive timelines. Spot blockers before they become problems.',
  },
  {
    icon: Zap,
    title: 'Automated Workflows',
    description:
      'Eliminate repetitive work with powerful no-code automations. Build rules once, save hours every week.',
  },
  {
    icon: BarChart3,
    title: 'Actionable Analytics',
    description:
      'Make data-driven decisions with built-in velocity tracking, burndown charts, and team workload insights.',
  },
  {
    icon: Puzzle,
    title: 'Native Integrations',
    description:
      'Connect with 100+ tools your team already uses — GitHub, Slack, Figma, Notion, and many more.',
  },
];

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Create your workspace',
    description:
      'Set up your team in under two minutes. Invite members via email or SSO, choose your timezone, and import existing projects from Jira, Trello, or Asana.',
  },
  {
    step: '02',
    title: 'Build your workflow',
    description:
      'Customize boards, lists, or timeline views to match how your team thinks. Set up automations, templates, and recurring tasks — no engineer required.',
  },
  {
    step: '03',
    title: 'Ship faster together',
    description:
      'Track progress in real time, hit deadlines with confidence, and celebrate wins. Your whole team sees the same source of truth, always.',
  },
];

export const PRICING_TIERS = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for individuals and small teams just getting started.',
    cta: 'Start for free',
    ctaVariant: 'outline',
    featured: false,
    features: [
      'Up to 5 members',
      '10 active projects',
      '1 GB file storage',
      'Board & list views',
      'Basic integrations (Slack, GitHub)',
      'Community support',
    ],
  },
  {
    name: 'Pro',
    price: '$12',
    period: 'per user / month',
    description: 'For growing teams that need power, flexibility, and insights.',
    cta: 'Start free trial',
    ctaVariant: 'featured',
    featured: true,
    badge: 'Most popular',
    features: [
      'Unlimited members',
      'Unlimited projects',
      '50 GB file storage',
      'All views incl. Timeline & Gantt',
      'Advanced automations (500/mo)',
      'Analytics & reporting',
      'Priority email support',
      'API access',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    description: 'For large organizations with compliance and security requirements.',
    cta: 'Talk to sales',
    ctaVariant: 'outline',
    featured: false,
    features: [
      'Everything in Pro',
      'SAML SSO & SCIM provisioning',
      'Unlimited automations',
      'Audit logs & data export',
      'SLA & uptime guarantee',
      'Dedicated success manager',
      'Custom contracts & invoicing',
    ],
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Flowdesk cut our sprint planning time in half. The automation rules alone saved my team four hours a week. I wish we'd switched sooner.",
    name: 'Sarah Chen',
    role: 'Head of Product',
    company: 'Meridian Labs',
    avatar: 'SC',
    avatarColor: 'bg-violet-500',
  },
  {
    quote:
      'We evaluated eight tools before landing on Flowdesk. Nothing else comes close on the intersection of power and simplicity. Our engineers actually love it.',
    name: 'Marcus Williams',
    role: 'Engineering Lead',
    company: 'Stackform',
    avatar: 'MW',
    avatarColor: 'bg-sky-500',
  },
  {
    quote:
      'The timeline view single-handedly fixed our cross-team dependency problem. We can finally see where things are blocked before a deadline blows up.',
    name: 'Priya Patel',
    role: 'COO',
    company: 'Veloxa',
    avatar: 'PP',
    avatarColor: 'bg-emerald-500',
  },
  {
    quote:
      'Onboarding our 40-person team took one afternoon. The Notion import was flawless. Customer support answered in 12 minutes on a Sunday.',
    name: 'Tom Eriksson',
    role: 'Founder & CEO',
    company: 'Brightpath',
    avatar: 'TE',
    avatarColor: 'bg-orange-500',
  },
];

export const FAQS = [
  {
    question: 'Is Flowdesk free to try?',
    answer:
      'Yes. Our Free plan is free forever with no credit card required — up to 5 members and 10 projects. The Pro trial gives you 14 days of full access at no cost.',
  },
  {
    question: 'How does billing work?',
    answer:
      'Pro is billed per active user, monthly or annually. Annual billing saves you 20%. You only pay for users who logged in during the billing period. Downgrade or cancel any time — no penalties.',
  },
  {
    question: 'Can I migrate from Jira, Trello, or Asana?',
    answer:
      'Absolutely. Flowdesk has one-click importers for Jira, Trello, Asana, Linear, and Notion. Your tasks, attachments, comments, and custom fields come with you. Most imports finish in under five minutes.',
  },
  {
    question: 'How is my data secured?',
    answer:
      "All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We're SOC 2 Type II certified and GDPR compliant. Enterprise customers can choose their data residency region (US, EU, or APAC).",
  },
  {
    question: 'What integrations are available?',
    answer:
      'Flowdesk integrates natively with GitHub, GitLab, Slack, Figma, Notion, Google Drive, Zoom, Zapier, and 90+ more. A full REST API and webhooks are available on the Pro plan.',
  },
  {
    question: 'Can I cancel or change my plan anytime?',
    answer:
      "Yes, always. Cancel with one click in your account settings. You'll retain access until the end of your billing period. Downgrading to Free is instant and we never delete your data.",
  },
];

export const FOOTER_LINKS = {
  Product:  ['Features', 'Changelog', 'Roadmap', 'Status', 'Pricing'],
  Company:  ['About', 'Blog', 'Careers', 'Press', 'Contact'],
  Resources:['Documentation', 'API Reference', 'Guides', 'Community', 'Templates'],
  Legal:    ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security'],
};
