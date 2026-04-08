import { useEffect, useRef } from 'react';

/**
 * Attaches an IntersectionObserver to the returned ref.
 * When the element enters the viewport, the `visible` class is added
 * (used by the `reveal` and `reveal-stagger` CSS utilities).
 *
 * @param {IntersectionObserverInit} options
 * @returns {React.RefObject}
 */
export function useInView(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el); // fire once
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px', ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
