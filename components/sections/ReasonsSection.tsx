import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { REASONS } from "@/constants/salonData";

export function ReasonsSection() {
  return (
    <section className="bg-lumiere-secondary/10 px-6 py-20 dark:bg-lumiere-bg-dark/60 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrowEn="Three Reasons"
          titleJp={<>選ばれる3つの理由</>}
          description="技術・空間・接遇。すべてに妥協しないからこそ、リピートが続きます。"
        />
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {REASONS.map((reason, index) => (
            <FadeInOnScroll key={reason.id} delayMs={index * 120}>
              <article className="h-full rounded-luxe border border-lumiere-secondary/30 bg-lumiere-bg p-8 dark:bg-lumiere-bg-dark/50">
                <span className="font-display text-4xl text-lumiere-accent">{reason.iconLabel}</span>
                <h3 className="mt-4 font-serif text-lg text-lumiere-text dark:text-lumiere-text-dark md:text-xl">
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-lumiere-secondary">
                  {reason.description}
                </p>
              </article>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
