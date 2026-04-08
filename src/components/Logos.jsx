import { useInView } from '../hooks/useInView';
import { TRUSTED_LOGOS } from '../data/content';

export default function Logos() {
  const ref = useInView();

  return (
    <section className="bg-zinc-50 border-y border-zinc-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-8">
          Trusted by teams at
        </p>
        <div
          ref={ref}
          className="reveal-stagger flex flex-wrap items-center justify-center gap-x-10 gap-y-5 sm:gap-x-16"
        >
          {TRUSTED_LOGOS.map(name => (
            <div
              key={name}
              className="text-zinc-300 text-xl font-black tracking-tight select-none transition-colors hover:text-zinc-400 cursor-default"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
