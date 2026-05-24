import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CONCERNS } from "@/constants/salonData";

export function EmpathySection() {
  return (
    <section className="bg-lumiere-bg px-6 py-20 dark:bg-lumiere-bg-dark md:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrowEn="Your Concerns"
          titleJp={<>こんなお悩み、ありませんか？</>}
          description="ひとつでも当てはまる方は、ぜひ続きをご覧ください。"
        />
        <FadeInOnScroll>
          <ul className="space-y-4">
            {CONCERNS.map((concern) => (
              <li
                key={concern.id}
                className="flex items-start gap-4 rounded-luxe border border-lumiere-secondary/30 bg-lumiere-bg/70 p-5 dark:bg-lumiere-bg-dark/40"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-lumiere-accent text-xs text-lumiere-accent"
                >
                  ✓
                </span>
                <p className="text-sm leading-relaxed text-lumiere-text dark:text-lumiere-text-dark md:text-base">
                  {concern.text}
                </p>
              </li>
            ))}
          </ul>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
