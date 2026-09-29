import Link from "next/link";
import { Faq } from "@/components/Faq";

const features = [
  {
    title: "Rapide",
    text: "Rendu côté serveur et pages statiques grâce au App Router de Next.js.",
  },
  {
    title: "Responsive",
    text: "Une mise en page pensée pour le mobile d'abord, stylée avec Tailwind CSS.",
  },
  {
    title: "Simple",
    text: "Peu de fichiers, du TypeScript clair : facile à lire et à faire évoluer.",
  },
];

const faq = [
  {
    question: "Comment lancer le site en local ?",
    answer: "Installe les dépendances avec npm install, puis lance npm run dev et ouvre http://localhost:3000.",
  },
  {
    question: "Où modifier le contenu ?",
    answer: "Le contenu de l'accueil se trouve dans src/app/page.tsx, les composants dans src/components.",
  },
  {
    question: "Peut-on le déployer facilement ?",
    answer: "Oui : importe le dépôt GitHub sur Vercel et le site est en ligne en quelques minutes.",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6">
      <section className="py-20 sm:py-28">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">Next.js · Tailwind</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
          Un petit site, propre et rapide.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted">
          Une base de départ simple pour présenter un projet, une activité ou un portfolio.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/a-propos"
            className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85"
          >
            En savoir plus
          </Link>
          <a
            href="#faq"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-card"
          >
            Questions fréquentes
          </a>
        </div>
      </section>

      <section className="grid gap-4 pb-20 sm:grid-cols-3">
        {features.map((feature) => (
          <article key={feature.title} className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-lg font-semibold">{feature.title}</h2>
            <p className="mt-2 text-muted">{feature.text}</p>
          </article>
        ))}
      </section>

      <section id="faq" className="scroll-mt-8 pb-24">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight">Questions fréquentes</h2>
        <Faq items={faq} />
      </section>
    </div>
  );
}
