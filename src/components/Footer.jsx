import { Zap, Twitter, Github, Linkedin } from 'lucide-react';
import { FOOTER_LINKS } from '../data/content';

const SOCIALS = [
  { Icon: Twitter,  href: '#', label: 'Twitter' },
  { Icon: Github,   href: '#', label: 'GitHub'  },
  { Icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          {/* Brand column */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center shadow-md shadow-brand-600/30">
                <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">Flowdesk</span>
            </a>
            <p className="text-sm leading-relaxed max-w-[220px]">
              Project management your team will actually use. Built for speed, designed for clarity.
            </p>
            <div className="flex gap-3 mt-6">
              {SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition-colors"
                >
                  <Icon size={15} className="text-zinc-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">
            © {year} Flowdesk, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map(item => (
              <a
                key={item}
                href="#"
                className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
