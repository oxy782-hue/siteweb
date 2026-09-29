import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos — Atelier",
};

export default function About() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-20 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        À{" "}
        <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          propos
        </span>
      </h1>
      <p className="mt-6 text-lg text-muted">
        Atelier est un petit site d&apos;exemple construit avec Next.js, React et Tailwind CSS.
        Il sert de point de départ pour créer rapidement une vitrine en ligne.
      </p>
      <p className="mt-4 text-muted">
        Le code est volontairement court : une mise en page commune, deux pages et un composant
        interactif (la FAQ de l&apos;accueil).
      </p>
    </div>
  );
}
