import { Check } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { PRICING_TIERS } from '../data/content';

export default function Pricing() {
  const headingRef = useInView();
  const cardsRef   = useInView();

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={headingRef} className="reveal max-w-2xl mx-auto text-center mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-600 mb-3">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-zinc-500">
            Start free. Scale as you grow. No surprises on your invoice.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-sm font-medium px-4 py-2 rounded-full border border-emerald-200">
            <Check size={14} strokeWidth={2.5} />
            Save 20% with annual billing
          </div>
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start"
        >
          {PRICING_TIERS.map(({ name, price, period, description, cta, ctaVariant, featured, badge, features }) => (
            <div
              key={name}
              className={`relative flex flex-col rounded-2xl p-7 ${
                featured
                  ? 'pricing-featured ring-2 ring-brand-600 md:-translate-y-4'
                  : 'bg-white border border-zinc-200 hover:border-brand-200 transition-colors'
              }`}
            >
              {/* Badge */}
              {badge && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white text-brand-600 text-xs font-bold px-3 py-1 rounded-full border border-brand-200 shadow-sm">
                  {badge}
                </span>
              )}

              {/* Tier name */}
              <p className={`text-sm font-semibold uppercase tracking-widest mb-1 ${
                featured ? 'text-brand-200' : 'text-brand-600'
              }`}>
                {name}
              </p>

              {/* Price */}
              <div className="flex items-end gap-1.5 mb-1">
                <span className={`text-4xl font-extrabold tracking-tight ${
                  featured ? 'text-white' : 'text-zinc-900'
                }`}>
                  {price}
                </span>
                {price !== 'Custom' && (
                  <span className={`text-sm mb-1.5 ${featured ? 'text-brand-200' : 'text-zinc-500'}`}>
                    / mo
                  </span>
                )}
              </div>
              <p className={`text-xs mb-4 ${featured ? 'text-brand-200' : 'text-zinc-400'}`}>
                {period}
              </p>

              <p className={`text-sm leading-relaxed mb-6 ${featured ? 'text-brand-100' : 'text-zinc-500'}`}>
                {description}
              </p>

              {/* CTA */}
              <a
                href="#hero"
                className={`block text-center text-sm font-semibold px-5 py-3 rounded-xl transition-all mb-7 ${
                  featured
                    ? 'bg-white text-brand-700 hover:bg-brand-50 shadow-md'
                    : 'bg-brand-600 hover:bg-brand-700 text-white shadow-md shadow-brand-600/20'
                }`}
              >
                {cta}
              </a>

              {/* Divider */}
              <div className={`h-px mb-6 ${featured ? 'bg-white/15' : 'bg-zinc-100'}`} />

              {/* Feature list */}
              <ul className="space-y-3">
                {features.map(f => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check
                      size={15}
                      strokeWidth={2.5}
                      className={`mt-0.5 shrink-0 ${featured ? 'text-brand-200' : 'text-brand-500'}`}
                    />
                    <span className={`text-sm ${featured ? 'text-brand-100' : 'text-zinc-600'}`}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-zinc-400">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
}
