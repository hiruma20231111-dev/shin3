import { SectionHeading } from "@/components/ui/SectionHeading";
import { SALON_INFO } from "@/constants/salonData";

// 地図iframeのsrcは環境変数で差し替え可能。未設定時はOpenStreetMapにフォールバック。
const FALLBACK_MAP_SRC =
  "https://www.openstreetmap.org/export/embed.html?bbox=139.7080%2C35.6610%2C139.7160%2C35.6680&layer=mapnik";

export function AccessSection() {
  const mapSrc = process.env.NEXT_PUBLIC_MAP_EMBED_SRC ?? FALLBACK_MAP_SRC;

  return (
    <section className="bg-lumiere-secondary/10 px-6 py-20 dark:bg-lumiere-bg-dark/60 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrowEn="Access"
          titleJp={<>アクセス・営業時間</>}
        />
        <div className="grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-luxe border border-lumiere-secondary/30">
            <iframe
              src={mapSrc}
              title={`${SALON_INFO.name} の地図`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-72 w-full md:h-full"
              allowFullScreen
            />
          </div>
          <dl className="space-y-5 text-sm md:text-base">
            <InfoRow term="サロン名" value={SALON_INFO.name} />
            <InfoRow term="所在地" value={SALON_INFO.address} />
            <InfoRow term="最寄駅" value={SALON_INFO.nearestStation} />
            <InfoRow term="営業時間" value={SALON_INFO.businessHours} />
            <InfoRow term="定休日" value={SALON_INFO.closedDays} />
          </dl>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ term, value }: { term: string; value: string }) {
  return (
    <div className="grid grid-cols-[100px_1fr] gap-4 border-b border-lumiere-secondary/30 pb-4">
      <dt className="font-serif text-lumiere-accent">{term}</dt>
      <dd className="text-lumiere-text dark:text-lumiere-text-dark">{value}</dd>
    </div>
  );
}
