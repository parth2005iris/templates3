import { useInView } from '../hooks/useInView';
import { HOW_IT_WORKS } from '../data/content';

export default function HowItWorks() {
  const headingRef = useInView();
  const stepsRef   = useInView();

  return (
    <section id="how-it-works" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={headingRef} className="reveal max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-600 mb-3">
            How it works
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Up and running in{' '}
            <span className="text-brand-600">minutes, not months</span>
          </h2>
          <p className="mt-4 text-lg text-zinc-500">
            No consultant required. No six-week onboarding. Just a workspace that
            works the way your team does.
          </p>
        </div>

        {/* Steps */}
        <div
          ref={stepsRef}
          className="reveal-stagger relative grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {/* Connecting line (desktop) */}
          <div
            className="hidden md:block absolute top-[46px] left-[calc(16.67%+20px)] right-[calc(16.67%+20px)] h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent"
            aria-hidden
          />

          {HOW_IT_WORKS.map(({ step, title, description }, i) => (
            <div key={step} className="relative flex flex-col items-center text-center">
              {/* Step number badge */}
              <div className="relative z-10 w-[60px] h-[60px] rounded-2xl bg-gradient-to-br from-brand-600 to-violet-600 flex items-center justify-center shadow-lg shadow-brand-600/30 mb-5">
                <span className="text-white text-sm font-black tracking-tight">{step}</span>
              </div>

              {/* Arrow between steps (mobile) */}
              {i < HOW_IT_WORKS.length - 1 && (
                <div className="md:hidden text-zinc-300 text-2xl mb-5">↓</div>
              )}

              <h3 className="text-lg font-bold text-zinc-900 mb-3">{title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">{description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <a
            href="#hero"
            className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors shadow-md shadow-brand-600/25"
          >
            Start your free workspace →
          </a>
        </div>
      </div>
    </section>
  );
}
