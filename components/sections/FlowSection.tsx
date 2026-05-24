import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FLOW_STEPS } from "@/constants/salonData";

export function FlowSection() {
  return (
    <section className="bg-lumiere-bg px-6 py-20 dark:bg-lumiere-bg-dark md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrowEn="Treatment Flow"
          titleJp={<>初めての方も安心の、6ステップ。</>}
          description="ご来店からお見送りまで、すべてを担当者が一貫してご案内します。"
        />
        <ol className="relative space-y-8 border-l border-lumiere-secondary/40 pl-6 md:pl-10">
          {FLOW_STEPS.map((step, index) => (
            <FadeInOnScroll key={step.step} delayMs={index * 80}>
              <li className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[34px] flex h-8 w-8 items-center justify-center rounded-full bg-lumiere-accent font-display text-sm text-lumiere-bg md:-left-[52px] md:h-10 md:w-10 md:text-base"
                >
                  {step.step}
                </span>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-serif text-lg text-lumiere-text dark:text-lumiere-text-dark md:text-xl">
                    {step.title}
                  </h3>
                  <span className="text-xs tracking-widest text-lumiere-accent">
                    {step.durationLabel}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-lumiere-secondary md:text-base">
                  {step.description}
                </p>
              </li>
            </FadeInOnScroll>
          ))}
        </ol>
      </div>
    </section>
  );
}
