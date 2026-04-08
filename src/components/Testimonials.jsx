import { Quote } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { TESTIMONIALS } from '../data/content';

export default function Testimonials() {
  const headingRef = useInView();
  const gridRef    = useInView();

  return (
    <section id="testimonials" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={headingRef} className="reveal max-w-2xl mx-auto text-center mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-600 mb-3">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Loved by teams who{' '}
            <span className="text-brand-600">ship great things</span>
          </h2>
          <p className="mt-4 text-lg text-zinc-500">
            Don't take our word for it. Here's what teams using Flowdesk say.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {TESTIMONIALS.map(({ quote, name, role, company, avatar, avatarColor }) => (
            <div
              key={name}
              className="flex flex-col bg-white rounded-2xl border border-zinc-200 p-6 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-600/5 transition-all duration-300"
            >
              <Quote size={20} className="text-brand-200 mb-4 shrink-0" strokeWidth={2} />
              <p className="text-sm text-zinc-600 leading-relaxed flex-1 mb-5">
                "{quote}"
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div
                  className={`w-9 h-9 rounded-full ${avatarColor} flex items-center justify-center text-xs font-bold text-white shrink-0`}
                >
                  {avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900 leading-tight">{name}</p>
                  <p className="text-xs text-zinc-400 leading-tight">
                    {role} · {company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Star rating strip */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-zinc-500">
          <div className="flex gap-0.5 text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-lg">★</span>
            ))}
          </div>
          <span>
            Rated <strong className="text-zinc-900">4.9 / 5</strong> from over{' '}
            <strong className="text-zinc-900">1,200 reviews</strong> on G2 and Capterra
          </span>
        </div>
      </div>
    </section>
  );
}
