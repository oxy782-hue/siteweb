import { LogoMark } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-8 text-sm text-muted sm:px-6">
        <LogoMark className="h-6 w-6" />
        © {new Date().getFullYear()} Atelier — fait avec Next.js et Tailwind CSS.
      </div>
    </footer>
  );
}
