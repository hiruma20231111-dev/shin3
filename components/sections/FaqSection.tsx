import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQS } from "@/constants/salonData";

export function FaqSection() {
  return (
    <section className="bg-lumiere-bg px-6 py-20 dark:bg-lumiere-bg-dark md:py-28" id="faq">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrowEn="FAQ"
          titleJp={<>よくあるご質問</>}
        />
        <div>
          {FAQS.map((faq) => (
            <Accordion key={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
