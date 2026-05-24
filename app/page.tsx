import { AboutSection } from "@/components/sections/AboutSection";
import { AccessSection } from "@/components/sections/AccessSection";
import { BeforeAfterSlider } from "@/components/sections/BeforeAfterSlider";
import { EmpathySection } from "@/components/sections/EmpathySection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { FlowSection } from "@/components/sections/FlowSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { MenuSection } from "@/components/sections/MenuSection";
import { ReasonsSection } from "@/components/sections/ReasonsSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { StickyCtaBar } from "@/components/ui/StickyCtaBar";

// 仕様で指定された順序通りにセクションを配置。
// 1.FV → 2.共感 → 3.約束 → 4.B/A → 5.メニュー → 6.流れ → 7.声 → 8.紹介 → 9.アクセス → 10.FAQ → 11.最終CTA
export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <EmpathySection />
      <ReasonsSection />
      <BeforeAfterSlider />
      <MenuSection />
      <FlowSection />
      <ReviewsSection />
      <AboutSection />
      <AccessSection />
      <FaqSection />
      <FinalCtaSection />
      <SiteFooter />
      <StickyCtaBar />
    </main>
  );
}
