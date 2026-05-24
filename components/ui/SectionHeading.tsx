import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrowEn: string;
  titleJp: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
};

// セクション見出しの共通レイアウト。英文あしらい＋日本語見出しの2段組。
export function SectionHeading({
  eyebrowEn,
  titleJp,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <header className={`mb-12 max-w-2xl ${alignment}`}>
      <p className="mb-3 font-script text-2xl text-lumiere-accent md:text-3xl">{eyebrowEn}</p>
      <h2 className="font-serif text-2xl leading-snug text-lumiere-text dark:text-lumiere-text-dark md:text-3xl">
        {titleJp}
      </h2>
      {description && (
        <p className="mt-5 text-sm leading-relaxed text-lumiere-secondary md:text-base">
          {description}
        </p>
      )}
    </header>
  );
}
