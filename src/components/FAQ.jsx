import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { FAQS } from '../data/content';

function AccordionItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border border-zinc-200 rounded-xl overflow-hidden hover:border-brand-200 transition-colors">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-semibold text-zinc-900 text-[15px]">{question}</span>
        <ChevronDown
          size={18}
          strokeWidth={2.5}
          className={`shrink-0 text-zinc-400 transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-brand-500' : ''
          }`}
        />
      </button>

      <div className={`accordion-body ${isOpen ? 'open' : ''}`}>
        <p className="px-6 pb-5 text-sm text-zinc-500 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const headingRef = useInView();
  const listRef    = useInView();

  const toggle = (i) => setOpenIndex(prev => (prev === i ? null : i));

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={headingRef} className="reveal text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-600 mb-3">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-zinc-500">
            Still have questions?{' '}
            <a href="#" className="text-brand-600 hover:underline">
              Chat with us
            </a>{' '}
            — we reply in minutes.
          </p>
        </div>

        {/* Accordion */}
        <div ref={listRef} className="reveal space-y-3">
          {FAQS.map(({ question, answer }, i) => (
            <AccordionItem
              key={question}
              question={question}
              answer={answer}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
