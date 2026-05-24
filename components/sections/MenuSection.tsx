import { CtaButton } from "@/components/ui/CtaButton";
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MENU_COURSES } from "@/constants/salonData";

export function MenuSection() {
  return (
    <section className="bg-lumiere-secondary/10 px-6 py-20 dark:bg-lumiere-bg-dark/60 md:py-28" id="menu">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrowEn="Menu & Price"
          titleJp={<>迷わせない、3つのコース。</>}
          description="どのコースも、カウンセリングと丁寧なクレンジングを含んでいます。"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {MENU_COURSES.map((course, index) => (
            <FadeInOnScroll key={course.id} delayMs={index * 100}>
              <article
                className={`relative flex h-full flex-col rounded-luxe border bg-lumiere-bg p-8 dark:bg-lumiere-bg-dark/50 ${
                  course.isRecommended
                    ? "border-lumiere-accent shadow-lg"
                    : "border-lumiere-secondary/30"
                }`}
              >
                {course.isRecommended && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-luxe bg-lumiere-accent px-4 py-1 text-xs tracking-widest text-lumiere-bg">
                    RECOMMENDED
                  </span>
                )}
                <p className="font-script text-2xl text-lumiere-accent">{course.subName}</p>
                <h3 className="mt-1 font-serif text-xl text-lumiere-text dark:text-lumiere-text-dark">
                  {course.name}
                </h3>
                <p className="mt-1 text-xs text-lumiere-secondary">{course.durationMinutes}分</p>

                <div className="my-6 border-t border-lumiere-secondary/30 pt-6">
                  {course.originalPriceYen && (
                    <p className="text-sm text-lumiere-secondary line-through">
                      通常 ¥{course.originalPriceYen.toLocaleString()}
                    </p>
                  )}
                  <p className="font-price text-4xl text-lumiere-text dark:text-lumiere-text-dark">
                    ¥{course.priceYen.toLocaleString()}
                    <span className="ml-1 text-sm text-lumiere-secondary">（税込）</span>
                  </p>
                </div>

                <p className="text-sm leading-relaxed text-lumiere-secondary">
                  {course.description}
                </p>

                <ul className="mt-5 space-y-2 text-sm">
                  {course.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 text-lumiere-text dark:text-lumiere-text-dark"
                    >
                      <span aria-hidden="true" className="mt-1 text-lumiere-accent">◆</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <CtaButton
                    href="#reservation"
                    variant={course.isRecommended ? "primary" : "secondary"}
                    size="md"
                    className="w-full"
                  >
                    このコースを予約する
                  </CtaButton>
                </div>
              </article>
            </FadeInOnScroll>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-lumiere-secondary">
          ※初回の方は全コース ¥6,600 でお試しいただける体験プランをご用意しております。
        </p>
      </div>
    </section>
  );
}
