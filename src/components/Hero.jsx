import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const SOCIAL_PROOF = [
  { initials: 'SK', color: 'bg-violet-500' },
  { initials: 'JL', color: 'bg-sky-500'    },
  { initials: 'AR', color: 'bg-emerald-500'},
  { initials: 'MK', color: 'bg-orange-500' },
];

// Fake product UI mockup rendered with divs
function ProductMockup() {
  const tasks = [
    { label: 'Design system update',  status: 'done',        tag: 'Design'   },
    { label: 'Auth API integration',  status: 'in-progress', tag: 'Backend'  },
    { label: 'Onboarding flow v2',    status: 'in-progress', tag: 'Product'  },
    { label: 'Write Q3 release notes',status: 'todo',        tag: 'Content'  },
    { label: 'Set up CI pipeline',    status: 'todo',        tag: 'DevOps'   },
  ];

  const statusStyle = {
    done:        'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20',
    'in-progress':'bg-brand-500/15  text-brand-300  border border-brand-500/20',
    todo:        'bg-zinc-700/50    text-zinc-400   border border-zinc-700',
  };
  const statusLabel = {
    done: 'Done', 'in-progress': 'In progress', todo: 'To do',
  };
  const tagColors = {
    Design: 'bg-violet-500/15 text-violet-300',
    Backend:'bg-sky-500/15    text-sky-300',
    Product:'bg-orange-500/15 text-orange-300',
    Content:'bg-pink-500/15   text-pink-300',
    DevOps: 'bg-teal-500/15   text-teal-300',
  };

  return (
    <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-4 py-3 bg-zinc-800/80 backdrop-blur-sm border-b border-white/5">
        <div className="w-3 h-3 rounded-full bg-red-500/70"   />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70"/>
        <div className="w-3 h-3 rounded-full bg-green-500/70" />
        <div className="flex-1 mx-3 h-5 bg-zinc-700/60 rounded-md flex items-center px-3">
          <span className="text-[10px] text-zinc-500">app.flowdesk.io/workspace/q3-launch</span>
        </div>
      </div>

      {/* App body */}
      <div className="flex bg-zinc-900">
        {/* Sidebar */}
        <div className="hidden sm:flex flex-col w-44 bg-zinc-950/70 border-r border-white/5 p-3 gap-1">
          {['Dashboard','My Tasks','Projects','Team','Automations','Settings'].map((item, i) => (
            <div
              key={item}
              className={`text-[11px] px-2.5 py-1.5 rounded-md font-medium cursor-default ${
                i === 1
                  ? 'bg-brand-600/30 text-brand-300'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Main panel */}
        <div className="flex-1 p-4 min-h-[280px]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-zinc-100">Q3 Launch Sprint</h3>
            <span className="text-[10px] bg-brand-500/20 text-brand-300 px-2 py-0.5 rounded-full font-medium border border-brand-500/20">
              5 tasks · 2 in progress
            </span>
          </div>

          <div className="space-y-1.5">
            {tasks.map(({ label, status, tag }) => (
              <div
                key={label}
                className="flex items-center gap-3 bg-zinc-800/50 hover:bg-zinc-800/80 border border-white/5 rounded-lg px-3 py-2 transition-colors cursor-default"
              >
                <div className={`shrink-0 w-2 h-2 rounded-full ${
                  status === 'done'        ? 'bg-emerald-400'
                  : status === 'in-progress' ? 'bg-brand-400'
                  : 'bg-zinc-600'
                }`} />
                <span className={`flex-1 text-[11px] font-medium ${
                  status === 'done' ? 'text-zinc-500 line-through' : 'text-zinc-200'
                }`}>
                  {label}
                </span>
                <span className={`hidden md:block text-[10px] px-1.5 py-0.5 rounded-md font-medium ${tagColors[tag]}`}>
                  {tag}
                </span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${statusStyle[status]}`}>
                  {statusLabel[status]}
                </span>
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="mt-4">
            <div className="flex justify-between text-[10px] text-zinc-500 mb-1">
              <span>Sprint progress</span>
              <span>40%</span>
            </div>
            <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full w-[40%] bg-gradient-to-r from-brand-500 to-violet-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="hero" className="hero-bg relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-brand-600/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left — copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-brand-300 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-brand-400 rounded-full animate-pulse" />
              Now in public beta — free forever
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-white leading-[1.1] tracking-tight">
              The project tool{' '}
              <span className="bg-gradient-to-r from-brand-400 to-violet-400 bg-clip-text text-transparent">
                your team will actually use
              </span>
            </h1>

            <p className="mt-6 text-lg text-zinc-400 leading-relaxed max-w-xl">
              Flowdesk brings tasks, timelines, and team communication into one
              beautiful workspace. Spend less time managing work — and more time
              shipping it.
            </p>

            {/* Email form */}
            <div className="mt-8">
              {submitted ? (
                <div className="flex items-center gap-2 text-emerald-400 font-medium">
                  <CheckCircle2 size={20} />
                  You're on the list! We'll be in touch shortly.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="flex-1 bg-white/5 border border-white/10 text-white placeholder-zinc-500 text-sm rounded-lg px-4 py-3 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm px-5 py-3 rounded-lg transition-colors shadow-lg shadow-brand-600/30 whitespace-nowrap"
                  >
                    Get started free <ArrowRight size={16} />
                  </button>
                </form>
              )}
              <p className="mt-3 text-xs text-zinc-500">
                No credit card required. Free plan available forever.
              </p>
            </div>

            {/* Social proof */}
            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-2">
                {SOCIAL_PROOF.map(({ initials, color }) => (
                  <div
                    key={initials}
                    className={`w-8 h-8 rounded-full ${color} border-2 border-zinc-900 flex items-center justify-center text-[10px] font-bold text-white`}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <p className="text-sm text-zinc-400">
                <span className="font-semibold text-white">4,200+</span> teams already on board
              </p>
            </div>
          </div>

          {/* Right — product mockup */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <ProductMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
