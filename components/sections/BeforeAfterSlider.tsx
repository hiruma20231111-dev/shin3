"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { SafeImage } from "@/components/ui/SafeImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BEFORE_AFTER_CASES } from "@/constants/salonData";
import type { BeforeAfterCase } from "@/types/salon";

// 外部ライブラリ不使用。CSS scroll-snap + JSスクロール制御で実装。
// 操作手段：左右矢印（PC）／スワイプ（スマホ／scroll-snap）／ドット（共通）。

type SliderProps = {
  cases?: BeforeAfterCase[];
};

export function BeforeAfterSlider({ cases = BEFORE_AFTER_CASES }: SliderProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // スクロール位置から現在表示中のカードindexを算出
  const handleScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = track.clientWidth;
    if (cardWidth === 0) return;
    const nextIndex = Math.round(track.scrollLeft / cardWidth);
    setActiveIndex(nextIndex);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener("scroll", handleScroll, { passive: true });
    return () => track.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(cases.length - 1, index));
    track.scrollTo({ left: track.clientWidth * clamped, behavior: "smooth" });
  };

  const goPrev = () => scrollToIndex(activeIndex - 1);
  const goNext = () => scrollToIndex(activeIndex + 1);

  return (
    <section className="bg-lumiere-bg px-6 py-20 dark:bg-lumiere-bg-dark md:py-28" id="results">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrowEn="Before & After"
          titleJp={<>1回でこの変化、というリアル。</>}
          description="※施術効果には個人差があります。お客様の同意を得て掲載しています。"
        />

        <div className="relative">
          {/* 左右矢印（PCのみ表示） */}
          <button
            type="button"
            onClick={goPrev}
            aria-label="前の症例を表示"
            disabled={activeIndex === 0}
            className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-lumiere-accent bg-lumiere-bg p-3 text-lumiere-accent shadow-md transition-opacity hover:opacity-80 disabled:opacity-30 dark:bg-lumiere-bg-dark md:flex"
          >
            <span aria-hidden="true" className="block h-3 w-3 -translate-x-px rotate-45 border-b border-l border-current" />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="次の症例を表示"
            disabled={activeIndex === cases.length - 1}
            className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-lumiere-accent bg-lumiere-bg p-3 text-lumiere-accent shadow-md transition-opacity hover:opacity-80 disabled:opacity-30 dark:bg-lumiere-bg-dark md:flex"
          >
            <span aria-hidden="true" className="block h-3 w-3 translate-x-px -rotate-45 border-b border-r border-current" />
          </button>

          <div
            ref={trackRef}
            role="region"
            aria-roledescription="carousel"
            aria-label="ビフォーアフター症例"
            className="scroll-snap-x no-scrollbar flex w-full overflow-x-auto"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") {
                event.preventDefault();
                goPrev();
              } else if (event.key === "ArrowRight") {
                event.preventDefault();
                goNext();
              }
            }}
          >
            {cases.map((item, index) => (
              <article
                key={item.id}
                aria-roledescription="slide"
                aria-label={`症例 ${index + 1} / ${cases.length}`}
                className="w-full flex-shrink-0 px-2"
              >
                <div className="mx-auto max-w-3xl rounded-luxe border border-lumiere-secondary/30 bg-lumiere-bg p-6 dark:bg-lumiere-bg-dark/40 md:p-8">
                  <div className="grid grid-cols-2 gap-4">
                    <BeforeAfterImage
                      label="Before"
                      image={item.before}
                    />
                    <BeforeAfterImage label="After" image={item.after} highlight />
                  </div>
                  <dl className="mt-6 grid grid-cols-1 gap-3 text-sm md:grid-cols-3">
                    <DescItem term="お客様" value={item.ageRange} />
                    <DescItem term="お悩み" value={item.concern} />
                    <DescItem term="施術内容" value={item.treatment} />
                  </dl>
                </div>
              </article>
            ))}
          </div>

          {/* ページネーションドット */}
          <div className="mt-6 flex justify-center gap-2" role="tablist" aria-label="症例選択">
            {cases.map((item, index) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-label={`症例 ${index + 1} を表示`}
                aria-selected={index === activeIndex}
                onClick={() => scrollToIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex
                    ? "w-8 bg-lumiere-accent"
                    : "w-2.5 bg-lumiere-secondary/50 hover:bg-lumiere-secondary"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BeforeAfterImage({
  label,
  image,
  highlight,
}: {
  label: string;
  image: BeforeAfterCase["before"];
  highlight?: boolean;
}) {
  return (
    <figure className="relative">
      <div className="relative aspect-[3/4] overflow-hidden rounded-luxe">
        <SafeImage
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 45vw, 320px"
          className="object-cover transition-transform duration-500 hover:scale-105"
          fallbackLabel={label}
        />
      </div>
      <figcaption
        className={`mt-3 text-center font-display text-lg tracking-widest ${
          highlight ? "text-lumiere-accent" : "text-lumiere-secondary"
        }`}
      >
        {label}
      </figcaption>
    </figure>
  );
}

function DescItem({ term, value }: { term: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-widest text-lumiere-accent">{term}</dt>
      <dd className="mt-1 text-lumiere-text dark:text-lumiere-text-dark">{value}</dd>
    </div>
  );
}
