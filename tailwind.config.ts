import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./constants/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 純白/純黒は使用禁止のため、すべてオフホワイト・こげ茶系で定義
        lumiere: {
          bg: "#F5F1EC",
          "bg-dark": "#1C1815",
          secondary: "#9B8478",
          "secondary-dark": "#7A6860",
          accent: "#C9A961",
          text: "#3D3530",
          "text-dark": "#EDE9E4",
        },
      },
      fontFamily: {
        // 日本語見出し
        serif: ["var(--font-noto-serif-jp)", "serif"],
        // 英文見出し装飾
        display: ["var(--font-cormorant)", "serif"],
        // 手書き風英字あしらい
        script: ["var(--font-allura)", "cursive"],
        // 本文
        sans: ["var(--font-noto-sans-jp)", "sans-serif"],
        // 数字・価格用セリフ
        price: ["var(--font-cormorant)", "serif"],
      },
      borderRadius: {
        // 高級感維持のため角丸は控えめ（4〜8px）
        luxe: "6px",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
