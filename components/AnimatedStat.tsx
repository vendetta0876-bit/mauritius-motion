"use client";

import { useEffect, useState } from "react";

export function AnimatedStat({
  value,
  label,
  delayMs = 0,
}: {
  value: string;
  label: string;
  delayMs?: number;
}) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setDisplay(target);
      return;
    }
    let raf: number;
    const duration = 1200;
    let start: number | null = null;
    const timeout = setTimeout(() => {
      const step = (timestamp: number) => {
        if (start === null) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(eased * target));
        if (progress < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, delayMs);
    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, [target, delayMs]);

  return (
    <div
      className="animate-fade-up rounded-card border border-white/10 bg-white/5 px-3 py-4 text-center backdrop-blur-sm"
      style={{ animationDelay: `${delayMs}ms` }}
    >
      <div className="text-xl font-display text-lagoon sm:text-2xl">
        {display}{suffix}
      </div>
      <div className="mt-1.5 text-[11px] leading-snug text-ink-400">{label}</div>
    </div>
  );
}
