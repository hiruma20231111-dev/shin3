import type { Metadata } from "next";
import { Allura, Cormorant_Garamond, Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

// 日本語見出し
const notoSerifJp = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-serif-jp",
  display: "swap",
});

// 本文
const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

// 英文セリフ装飾／価格表記
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

// 手書き風あしらい
const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-allura",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Salon de Lumière | 表参道・自由が丘のフェイシャルエステ",
  description:
    "鏡を見るのが、また楽しみになる。完全予約制・個室の小顔矯正＆ハーブピーリング専門サロン。初回体験¥6,600。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ja"
      className={`${notoSerifJp.variable} ${notoSansJp.variable} ${cormorant.variable} ${allura.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
