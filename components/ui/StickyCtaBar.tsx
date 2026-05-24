// スマホ固定追従CTAバー。md以上では非表示（離脱対策はモバイル限定）。
// 3タップ導線：LINE / 電話 / フォーム。

export function StickyCtaBar() {
  const lineUrl = process.env.NEXT_PUBLIC_LINE_URL ?? "#";
  const tel = process.env.NEXT_PUBLIC_TEL ?? "";

  return (
    <nav
      aria-label="予約クイックアクセス"
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-lumiere-secondary/40 bg-lumiere-bg shadow-[0_-4px_16px_rgba(60,40,30,0.08)] md:hidden dark:bg-lumiere-bg-dark"
    >
      <a
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LINEで予約する"
        className="flex flex-col items-center justify-center py-3 text-xs font-serif text-lumiere-text transition-opacity hover:opacity-70 dark:text-lumiere-text-dark"
      >
        <span aria-hidden="true" className="font-display text-lg text-lumiere-accent">
          L
        </span>
        LINE
      </a>
      <a
        href={tel ? `tel:${tel}` : "#"}
        aria-label="電話で予約する"
        className="flex flex-col items-center justify-center border-x border-lumiere-secondary/30 py-3 text-xs font-serif text-lumiere-text transition-opacity hover:opacity-70 dark:text-lumiere-text-dark"
      >
        <span aria-hidden="true" className="font-display text-lg text-lumiere-accent">
          ☏
        </span>
        電話
      </a>
      <a
        href="#reservation"
        aria-label="予約フォームを開く"
        className="flex flex-col items-center justify-center bg-gradient-to-r from-lumiere-secondary to-lumiere-accent py-3 text-xs font-serif text-lumiere-bg transition-opacity hover:opacity-90"
      >
        <span aria-hidden="true" className="font-display text-lg">
          ◆
        </span>
        予約する
      </a>
    </nav>
  );
}
