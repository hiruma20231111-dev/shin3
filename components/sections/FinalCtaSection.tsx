import { ReservationForm } from "@/components/sections/ReservationForm";
import { CtaButton } from "@/components/ui/CtaButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HERO_COPY } from "@/constants/salonData";

// 3導線（LINE/電話/フォーム）を1セクションに集約し、最終CVを取りこぼさない構成。
export function FinalCtaSection() {
  const lineUrl = process.env.NEXT_PUBLIC_LINE_URL ?? "#";
  const tel = process.env.NEXT_PUBLIC_TEL ?? "";
  const telDisplay = process.env.NEXT_PUBLIC_TEL_DISPLAY ?? "";

  return (
    <section
      id="reservation"
      className="relative overflow-hidden bg-lumiere-bg-dark px-6 py-20 text-lumiere-text-dark md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrowEn="Book Your First Visit"
          titleJp={
            <span className="text-lumiere-text-dark">
              初回限定 ¥{HERO_COPY.trialPriceYen.toLocaleString()}（通常 ¥
              {HERO_COPY.originalPriceYen.toLocaleString()}）
            </span>
          }
          description={
            <span className="text-lumiere-text-dark/80">
              月間 30 名様限定の特別価格。お好きな方法でご予約ください。
            </span>
          }
        />

        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="font-serif text-lg text-lumiere-accent">3つのご予約方法</h3>
            <ul className="mt-6 space-y-4">
              <li className="rounded-luxe border border-lumiere-accent/40 p-5">
                <p className="font-serif text-base">LINEでサクッと予約</p>
                <p className="mt-1 text-xs text-lumiere-text-dark/70">
                  24時間受付。担当者から最短10分で返信します。
                </p>
                <CtaButton
                  href={lineUrl}
                  external
                  variant="primary"
                  size="md"
                  className="mt-4 w-full"
                  aria-label="LINEで予約する"
                >
                  LINEで予約する
                </CtaButton>
              </li>
              <li className="rounded-luxe border border-lumiere-accent/40 p-5">
                <p className="font-serif text-base">お電話で直接予約</p>
                <p className="mt-1 text-xs text-lumiere-text-dark/70">
                  営業時間内：10:00 - 20:00（最終受付 18:30）
                </p>
                {tel ? (
                  <a
                    href={`tel:${tel}`}
                    aria-label={`電話で予約する ${telDisplay}`}
                    className="mt-4 block rounded-luxe border border-lumiere-accent py-3 text-center font-price text-2xl tracking-wider text-lumiere-accent transition-opacity hover:opacity-80"
                  >
                    {telDisplay || tel}
                  </a>
                ) : (
                  <p className="mt-4 text-center text-sm text-lumiere-text-dark/60">
                    {/* TODO: 環境変数 NEXT_PUBLIC_TEL が未設定です */}
                    電話番号未設定
                  </p>
                )}
              </li>
              <li className="rounded-luxe border border-lumiere-accent/40 p-5">
                <p className="font-serif text-base">フォームでじっくり相談</p>
                <p className="mt-1 text-xs text-lumiere-text-dark/70">
                  右のフォームから24時間受付中です。
                </p>
              </li>
            </ul>
          </div>
          <div>
            <ReservationForm />
          </div>
        </div>
      </div>
    </section>
  );
}
