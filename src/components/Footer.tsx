export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-muted sm:px-6">
        © {new Date().getFullYear()} Atelier — fait avec Next.js et Tailwind CSS.
      </div>
    </footer>
  );
}
