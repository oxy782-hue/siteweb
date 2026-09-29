import Link from "next/link";
import { Faq } from "@/components/Faq";

const features = [
  {
    title: "Rapide",
    text: "Rendu côté serveur et pages statiques grâce au App Router de Next.js.",
    icon: "⚡",
    color: "bg-primary/10 text-primary",
    bar: "bg-primary",
  },
  {
    title: "Responsive",
    text: "Une mise en page pensée pour le mobile d'abord, stylée avec Tailwind CSS.",
    icon: "📱",
    color: "bg-secondary/10 text-secondary",
    bar: "bg-secondary",
  },
  {
    title: "Simple",
    text: "Peu de fichiers, du TypeScript clair : facile à lire et à faire évoluer.",
    icon: "✨",
    color: "bg-accent/10 text-accent",
    bar: "bg-accent",
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
    <div className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-secondary/25 blur-3xl sm:left-2/3" />
        <div className="absolute top-40 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute top-72 right-0 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <section className="py-20 sm:py-28">
          <p className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            Next.js · Tailwind
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
            Un petit site,{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              propre et rapide.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">
            Une base de départ simple pour présenter un projet, une activité ou un portfolio.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/a-propos"
              className="rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-medium text-white shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5"
            >
              En savoir plus
            </Link>
            <a
              href="#faq"
              className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              Questions fréquentes
            </a>
          </div>
        </section>

        <section className="grid gap-4 pb-20 sm:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="relative overflow-hidden rounded-2xl border border-border bg-card p-6"
            >
              <div className={`absolute inset-x-0 top-0 h-1 ${feature.bar}`} />
              <span className={`flex h-11 w-11 items-center justify-center rounded-xl text-xl ${feature.color}`}>
                {feature.icon}
              </span>
              <h2 className="mt-4 text-lg font-semibold">{feature.title}</h2>
              <p className="mt-2 text-muted">{feature.text}</p>
            </article>
          ))}
        </section>

        <section id="faq" className="scroll-mt-24 pb-24">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight">Questions fréquentes</h2>
          <Faq items={faq} />
        </section>
      </div>
    </div>
  );
}
