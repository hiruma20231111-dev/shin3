import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { SafeImage } from "@/components/ui/SafeImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { REVIEWS } from "@/constants/salonData";

const MAX_RATING = 5;

export function ReviewsSection() {
  return (
    <section className="bg-lumiere-secondary/10 px-6 py-20 dark:bg-lumiere-bg-dark/60 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrowEn="Voice of Customers"
          titleJp={<>お客様の声</>}
          description="施術後にいただいた率直なご感想をご紹介します。"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {REVIEWS.map((review, index) => (
            <FadeInOnScroll key={review.id} delayMs={index * 120}>
              <article className="flex h-full flex-col rounded-luxe border border-lumiere-secondary/30 bg-lumiere-bg p-6 dark:bg-lumiere-bg-dark/40">
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full">
                    <SafeImage
                      src={review.avatar.src}
                      alt={review.avatar.alt}
                      fill
                      sizes="56px"
                      className="object-cover"
                      fallbackLabel={review.customerName}
                    />
                  </div>
                  <div>
                    <p className="font-serif text-base text-lumiere-text dark:text-lumiere-text-dark">
                      {review.customerName}
                    </p>
                    <p className="text-xs text-lumiere-secondary">{review.ageLabel}</p>
                  </div>
                </div>

                <div
                  className="mt-4 flex gap-1 text-lumiere-accent"
                  aria-label={`評価 ${review.rating} / ${MAX_RATING}`}
                >
                  {Array.from({ length: MAX_RATING }).map((_, starIndex) => (
                    <span key={starIndex} aria-hidden="true">
                      {starIndex < review.rating ? "★" : "☆"}
                    </span>
                  ))}
                </div>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-lumiere-text dark:text-lumiere-text-dark">
                  {review.comment}
                </p>

                <p className="mt-4 border-t border-lumiere-secondary/30 pt-3 text-xs text-lumiere-secondary">
                  ご利用コース：{review.course}
                </p>
              </article>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
