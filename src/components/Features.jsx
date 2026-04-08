import { useInView } from '../hooks/useInView';
import { FEATURES } from '../data/content';

export default function Features() {
  const headingRef = useInView();
  const gridRef    = useInView();

  return (
    <section id="features" className="py-24 bg-white grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={headingRef} className="reveal max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-600 mb-3">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Everything you need to{' '}
            <span className="text-brand-600">move faster</span>
          </h2>
          <p className="mt-4 text-lg text-zinc-500">
            Flowdesk packs a decade of project-management learnings into a tool
            that stays out of your way.
          </p>
        </div>

        {/* Feature grid */}
        <div
          ref={gridRef}
          className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="gradient-border group flex flex-col gap-4 p-6 bg-white rounded-xl border border-zinc-200/80 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-600/5 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center group-hover:bg-brand-600 group-hover:border-brand-600 transition-colors duration-300">
                <Icon
                  size={20}
                  className="text-brand-600 group-hover:text-white transition-colors duration-300"
                  strokeWidth={1.75}
                />
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900 mb-1.5">{title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
