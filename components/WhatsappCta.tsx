const WHATSAPP_NUMBER = "23057822062";

export function whatsappHref(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

function WhatsappIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.42-1.34a9.87 9.87 0 0 0 4.62 1.15h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.51 2 12.04 2Zm5.78 14.02c-.24.68-1.4 1.31-1.93 1.35-.5.05-1.02.24-3.4-.71-2.87-1.14-4.71-4.07-4.85-4.26-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.09.99-2.37.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.18.01.42-.07.65.5.24.58.82 2 .89 2.14.07.14.12.3.02.49-.09.19-.14.3-.28.47-.14.16-.29.36-.42.48-.14.14-.28.29-.12.57.16.28.71 1.17 1.52 1.9 1.05.94 1.93 1.23 2.21 1.37.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.18-.28.37-.23.62-.14.26.09 1.64.77 1.92.91.28.14.47.21.54.33.07.12.07.68-.16 1.36Z" />
    </svg>
  );
}

export function WhatsappCta({
  label,
  message,
  variant = "solid",
  className = "",
}: {
  label: string;
  message: string;
  variant?: "solid" | "outline" | "whatsapp";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold transition-colors";
  const styles =
    variant === "solid"
      ? "rounded-md bg-coral text-[#2a0e05] hover:bg-coral/90"
      : variant === "whatsapp"
        ? "rounded-full bg-[#25D366] text-white hover:bg-[#25D366]/90"
        : "rounded-md border border-white/20 text-ink-50 hover:border-white/40";

  return (
    <a
      href={whatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      {variant === "whatsapp" && <WhatsappIcon />}
      {label}
    </a>
  );
}
