'use client';

import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

// Check if IntersectionObserver is supported (runs once at module load)
const hasIntersectionObserver = typeof window !== 'undefined' && 'IntersectionObserver' in window;

export function useInView({
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true,
}: UseInViewOptions = {}) {
  const ref = useRef<HTMLElement>(null);
  // If no IntersectionObserver support, default to visible
  const [isInView, setIsInView] = useState(!hasIntersectionObserver);

  useEffect(() => {
    const element = ref.current;
    if (!element || !hasIntersectionObserver) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isInView };
}

export default useInView;
