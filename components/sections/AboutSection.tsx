import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { SafeImage } from "@/components/ui/SafeImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { THERAPIST } from "@/constants/salonData";

export function AboutSection() {
  return (
    <section className="bg-lumiere-bg px-6 py-20 dark:bg-lumiere-bg-dark md:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrowEn="Therapist"
          titleJp={<>あなたの肌と、本気で向き合う人。</>}
        />
        <div className="grid items-center gap-10 md:grid-cols-5">
          <FadeInOnScroll className="md:col-span-2">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-luxe">
              <SafeImage
                src={THERAPIST.portrait.src}
                alt={THERAPIST.portrait.alt}
                fill
                sizes="(max-width: 768px) 80vw, 320px"
                className="object-cover transition-transform duration-700 hover:scale-105"
                fallbackLabel={THERAPIST.name}
              />
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll delayMs={150} className="md:col-span-3">
            <p className="font-script text-2xl text-lumiere-accent">{THERAPIST.romanName}</p>
            <h3 className="mt-1 font-serif text-2xl text-lumiere-text dark:text-lumiere-text-dark md:text-3xl">
              {THERAPIST.name}
            </h3>
            <p className="mt-1 text-sm text-lumiere-secondary">{THERAPIST.title}</p>

            <p className="mt-6 text-sm leading-loose text-lumiere-text dark:text-lumiere-text-dark md:text-base">
              {THERAPIST.bio}
            </p>

            <ul className="mt-6 space-y-2 text-sm text-lumiere-secondary">
              {THERAPIST.qualifications.map((qualification) => (
                <li key={qualification} className="flex items-start gap-2">
                  <span aria-hidden="true" className="mt-1 text-lumiere-accent">●</span>
                  <span>{qualification}</span>
                </li>
              ))}
            </ul>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
