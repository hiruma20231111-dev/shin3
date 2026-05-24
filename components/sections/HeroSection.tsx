import { CtaButton } from "@/components/ui/CtaButton";
import { SafeImage } from "@/components/ui/SafeImage";
import { HERO_COPY, SALON_INFO } from "@/constants/salonData";

// ファーストビュー：画像は cover で全面表示、コピーは左寄せ＋オーバーレイで可読性確保。
const HERO_IMAGE_SRC =
  "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1800&q=80";

export function HeroSection() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden md:min-h-screen">
      <div className="absolute inset-0">
        <SafeImage
          src={HERO_IMAGE_SRC}
          alt="顔のクローズアップ - 上質なフェイシャルケアのイメージ"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          fallbackLabel="Salon de Lumière"
        />
        {/* 画像上にグラデーション。テキスト可読性とブランドカラーを両立 */}
        <div className="absolute inset-0 bg-gradient-to-t from-lumiere-bg-dark/80 via-lumiere-bg-dark/40 to-lumiere-bg-dark/20" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-6 pb-16 pt-32 md:min-h-screen md:justify-center md:px-12 md:pb-24">
        <p className="mb-3 font-script text-3xl text-lumiere-accent md:text-4xl">Salon de Lumière</p>
        <h1 className="font-serif text-3xl leading-tight text-lumiere-text-dark md:text-5xl lg:text-6xl">
          鏡を見るのが、
          <br />
          また楽しみになる。
        </h1>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-lumiere-text-dark/90 md:text-base">
          {HERO_COPY.sub}
          <br />
          表参道・自由が丘の完全予約制プライベートサロン。
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <CtaButton href="#reservation" variant="primary" size="lg">
            初回体験 ¥{HERO_COPY.trialPriceYen.toLocaleString()} を予約する
          </CtaButton>
          <CtaButton href="#menu" variant="secondary" size="lg">
            メニューを見る
          </CtaButton>
        </div>

        <ul className="mt-8 flex flex-wrap gap-3 text-xs text-lumiere-text-dark/85 md:text-sm">
          <li className="rounded-luxe border border-lumiere-accent/60 px-3 py-1.5">
            {SALON_INFO.trustBadges.ratingLabel}
          </li>
          <li className="rounded-luxe border border-lumiere-accent/60 px-3 py-1.5">
            {SALON_INFO.trustBadges.reservationCountLabel}
          </li>
          <li className="rounded-luxe border border-lumiere-accent/60 px-3 py-1.5">
            完全個室・完全予約制
          </li>
        </ul>
      </div>
    </section>
  );
}
