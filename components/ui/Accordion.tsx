"use client";

import { useId, useState } from "react";

type AccordionProps = {
  question: string;
  answer: string;
};

// WCAG: aria-expanded / aria-controls を付与してスクリーンリーダー対応。
// Enter/Space両方で開閉できるよう、button要素を使用（ネイティブで両キー対応）。
export function Accordion({ question, answer }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const buttonId = useId();

  return (
    <div className="border-b border-lumiere-secondary/30">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex w-full items-center justify-between gap-4 py-5 text-left font-serif text-base text-lumiere-text transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lumiere-accent dark:text-lumiere-text-dark md:text-lg"
        >
          <span className="flex items-start gap-3">
            <span className="font-script text-xl text-lumiere-accent">Q.</span>
            <span>{question}</span>
          </span>
          <span
            aria-hidden="true"
            className={`flex h-6 w-6 shrink-0 items-center justify-center text-lumiere-accent transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
          >
            ＋
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!isOpen}
        className="pb-6 pl-9 pr-2 text-sm leading-relaxed text-lumiere-secondary md:text-base"
      >
        {answer}
      </div>
    </div>
  );
}
