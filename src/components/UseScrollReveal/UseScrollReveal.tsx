import { useEffect, useRef } from "react";

interface Options {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: Options = {},
) {
  const ref = useRef<T>(null);
  const {
    threshold = 0.12,
    rootMargin = "0px 0px -40px 0px",
    once = true,
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold, rootMargin },
    );

    // Observe element itself and all reveal/stagger children
    observer.observe(el);
    el.querySelectorAll(".reveal, .stagger").forEach((child) => {
      observer.observe(child);
    });

    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return ref;
}
