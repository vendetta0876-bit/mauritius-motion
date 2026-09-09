import { WhatsappCta } from "./WhatsappCta";

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-base/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
        <span className="text-sm font-semibold tracking-wide text-ink-50">
          Mauritius Motion
        </span>

        <nav className="hidden gap-8 text-sm text-ink-200 sm:flex">
          <a href="#formules" className="hover:text-ink-50">
            Formules
          </a>
          <a href="#" className="hover:text-ink-50">
            Qui je suis
          </a>
        </nav>

        <WhatsappCta
          label="WhatsApp"
          message="Bonjour, j'ai une question sur le coaching sportif."
          variant="outline"
        />
      </div>
    </header>
  );
}
