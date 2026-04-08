import { useState, useEffect } from 'react';
import { Zap, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../data/content';

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-zinc-100 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center shadow-md shadow-brand-600/30">
              <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
            <span
              className={`font-bold text-[17px] tracking-tight transition-colors ${
                scrolled ? 'text-zinc-900' : 'text-white'
              }`}
            >
              Flowdesk
            </span>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className={`text-sm font-medium transition-colors hover:text-brand-600 ${
                    scrolled ? 'text-zinc-600' : 'text-zinc-300'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#"
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? 'text-zinc-600 hover:text-zinc-900'
                  : 'text-zinc-300 hover:text-white'
              }`}
            >
              Log in
            </a>
            <a
              href="#hero"
              className="inline-flex items-center gap-1.5 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors shadow-md shadow-brand-600/25"
            >
              Get started free
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(o => !o)}
            className="md:hidden p-1 rounded-md"
          >
            {menuOpen
              ? <X  size={22} className={scrolled ? 'text-zinc-900' : 'text-white'} />
              : <Menu size={22} className={scrolled ? 'text-zinc-900' : 'text-white'} />
            }
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-zinc-100 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 py-4 space-y-1">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={closeMenu}
              className="block text-sm font-medium text-zinc-700 hover:text-brand-600 py-2"
            >
              {label}
            </a>
          ))}
          <div className="pt-3 border-t border-zinc-100 space-y-2">
            <a href="#" className="block text-sm font-medium text-zinc-600 py-1">
              Log in
            </a>
            <a
              href="#hero"
              onClick={closeMenu}
              className="block bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg text-center transition-colors"
            >
              Get started free
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
