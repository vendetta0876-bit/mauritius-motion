"use client";

import { useEffect, useState } from "react";

const stats = [
  {
    value: "15+",
    label: "années d'expérience",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="m12 2 2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.3l-6.1 3.3 1.4-6.8-5.1-4.7 6.9-.8Z" />
      </svg>
    ),
  },
  {
    value: "500+",
    label: "athlètes accompagnés",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <circle cx="9" cy="8" r="3.2" />
        <path d="M3.5 20c0-3.3 2.5-6 5.5-6s5.5 2.7 5.5 6" />
        <circle cx="17" cy="9" r="2.6" />
        <path d="M15.5 14.3c2.6.3 4.5 2.6 4.5 5.7" />
      </svg>
    ),
  },
  {
    value: "100%",
    label: "dédié à votre progression",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    value: "2011",
    label: "en activité depuis",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
        <path d="M3.5 9.5h17M8 3v3.5M16 3v3.5" />
        <path d="m9 14 2 2 4-4" />
      </svg>
    ),
  },
];

function BannerStat({ value, label, delayMs }: { value: string; label: string; delayMs: number }) {
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
    <div className="animate-fade-up flex flex-1 flex-col items-center gap-2 px-4 text-center" style={{ animationDelay: `${delayMs}ms` }}>
      <span className="text-lagoon">{stats.find((s) => s.label === label)?.icon}</span>
      <div className="text-2xl font-display sm:text-3xl">
        {display}{suffix}
      </div>
      <div className="text-xs leading-snug text-ink-400 sm:text-sm">{label}</div>
    </div>
  );
}

export function StatsBanner() {
  return (
    <div className="border-y border-white/10 bg-base-alt">
      <div className="mx-auto flex max-w-6xl flex-wrap divide-x divide-white/10 px-6 py-10 sm:px-10 lg:px-16">
        {stats.map((stat, i) => (
          <BannerStat key={stat.label} value={stat.value} label={stat.label} delayMs={i * 120} />
        ))}
      </div>
    </div>
  );
}
