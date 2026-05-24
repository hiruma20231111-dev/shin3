"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type FadeInOnScrollProps = {
  children: ReactNode;
  delayMs?: number;
  className?: string;
};

// IntersectionObserverで初回可視タイミングを検知し、控えめにフェードインさせる。
// reduced-motion対応：ユーザー設定で動きを抑える場合は即時表示する。
export function FadeInOnScroll({ children, delayMs = 0, className }: FadeInOnScrollProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delayMs}ms` }}
      className={`${isVisible ? "animate-fadeInUp" : "opacity-0"} ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
