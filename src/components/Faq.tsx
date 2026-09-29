"use client";

import { useState } from "react";

type Item = { question: string; answer: string };

export function Faq({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border rounded-2xl border border-border bg-card">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium"
            >
              {item.question}
              <span className={`text-accent transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
            </button>
            {isOpen && <p className="px-5 pb-5 text-muted">{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
