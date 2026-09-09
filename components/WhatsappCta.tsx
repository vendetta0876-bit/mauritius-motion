const WHATSAPP_NUMBER = "23057822062"; // 57822062 avec l'indicatif Maurice (+230)

export function whatsappHref(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export function WhatsappCta({
  label,
  message,
  variant = "solid",
  className = "",
}: {
  label: string;
  message: string;
  variant?: "solid" | "outline";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition-colors";
  const styles =
    variant === "solid"
      ? "bg-coral text-[#2a0e05] hover:bg-coral/90"
      : "border border-white/20 text-ink-50 hover:border-white/40";

  return (
    <a
      href={whatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      {label}
    </a>
  );
}
