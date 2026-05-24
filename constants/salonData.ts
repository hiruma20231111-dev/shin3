// LPに表示する全データを集約。
// 画像URL・コピー・料金などはここを編集すれば全画面に反映される構造。

import type {
  BeforeAfterCase,
  Concern,
  FaqItem,
  FlowStep,
  ImageAsset,
  MenuCourse,
  Reason,
  Review,
  SalonInfo,
  Therapist,
} from "@/types/salon";

// Unsplash実画像URL。差し替え時はこの定数群のみ編集すればOK。
// w=パラメータでサイズ最適化を依頼。
const UNSPLASH = {
  hero: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1600&q=80",
  beforeA: "https://images.unsplash.com/photo-1614108223721-058c0fde9610?auto=format&fit=crop&w=600&q=80",
  afterA: "https://images.unsplash.com/photo-1616394158624-a2ba9cfe2994?auto=format&fit=crop&w=600&q=80",
  beforeB: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=600&q=80",
  afterB: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=600&q=80",
  beforeC: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
  afterC: "https://images.unsplash.com/photo-1571907483086-3c25d80a228e?auto=format&fit=crop&w=600&q=80",
  reviewer1: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  reviewer2: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
  reviewer3: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
  therapist: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=600&q=80",
} as const;

const portraitDimensions = { width: 600, height: 800 } as const;
const avatarDimensions = { width: 200, height: 200 } as const;

const buildImage = (
  src: string,
  alt: string,
  dimensions: { width: number; height: number },
): ImageAsset => ({
  src,
  alt,
  width: dimensions.width,
  height: dimensions.height,
});

export const SALON_INFO: SalonInfo = {
  name: "Salon de Lumière",
  address: "東京都渋谷区神宮前0-0-0 Lumière Bldg. 3F",
  nearestStation: "表参道駅A1出口より徒歩4分／自由が丘店も併設",
  businessHours: "10:00 - 20:00（最終受付 18:30）",
  closedDays: "不定休",
  trustBadges: {
    ratingLabel: "口コミ評価 ★4.9 / 5.0",
    reservationCountLabel: "累計予約数 12,000件突破",
  },
};

export const HERO_COPY = {
  catch: "鏡を見るのが、また楽しみになる。",
  sub: "1回で違いを実感する、完全個室の小顔矯正フェイシャル。",
  ctaPrimary: "初回体験を予約する",
  ctaSecondary: "メニューを見る",
  trialPriceYen: 6600,
  originalPriceYen: 13200,
} as const;

export const CONCERNS: Concern[] = [
  { id: "c1", text: "30代を過ぎて、顔のたるみ・フェイスラインのもたつきが気になる" },
  { id: "c2", text: "肌がくすんで見えて、メイクのノリが昔と違う" },
  { id: "c3", text: "毛穴・小じわが目立ち、写真の自分にがっかりする" },
  { id: "c4", text: "市販コスメやセルフケアでは限界を感じている" },
  { id: "c5", text: "ゴリゴリ強い刺激ではなく、丁寧な施術を受けたい" },
];

export const REASONS: Reason[] = [
  {
    id: "r1",
    title: "1回で実感する小顔矯正",
    description:
      "骨格と筋膜にアプローチする独自の手技で、施術直後にフェイスラインの変化を体感いただけます。",
    iconLabel: "01",
  },
  {
    id: "r2",
    title: "肌再生を促すハーブピーリング",
    description:
      "天然ハーブ100%。肌本来のターンオーバーを整え、くすみ・毛穴・小じわを根本からケアします。",
    iconLabel: "02",
  },
  {
    id: "r3",
    title: "完全個室・完全予約制",
    description:
      "他のお客様と顔を合わせない、隠れ家プライベート空間。カウンセリングからお見送りまで担当者が一貫対応。",
    iconLabel: "03",
  },
];

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: "ba1",
    ageRange: "38歳・女性",
    concern: "フェイスラインのたるみ",
    treatment: "小顔矯正コース 60分 × 1回",
    before: buildImage(UNSPLASH.beforeA, "施術前の頬まわり", portraitDimensions),
    after: buildImage(UNSPLASH.afterA, "施術後の引き締まったフェイスライン", portraitDimensions),
  },
  {
    id: "ba2",
    ageRange: "42歳・女性",
    concern: "くすみ・毛穴",
    treatment: "ハーブピーリングコース 75分 × 1回",
    before: buildImage(UNSPLASH.beforeB, "施術前の肌色", portraitDimensions),
    after: buildImage(UNSPLASH.afterB, "施術後の透明感ある肌", portraitDimensions),
  },
  {
    id: "ba3",
    ageRange: "35歳・女性",
    concern: "目元の小じわ・むくみ",
    treatment: "プレミアムエイジングケア 90分 × 1回",
    before: buildImage(UNSPLASH.beforeC, "施術前の目元", portraitDimensions),
    after: buildImage(UNSPLASH.afterC, "施術後のハリのある目元", portraitDimensions),
  },
];

export const MENU_COURSES: MenuCourse[] = [
  {
    id: "m1",
    name: "小顔矯正ベーシック",
    subName: "Petite Visage Basic",
    durationMinutes: 60,
    priceYen: 13200,
    description:
      "もたつくフェイスラインに集中アプローチ。骨格×筋膜の独自手技で、すっきりとした輪郭へ。",
    highlights: ["カウンセリング込み", "クレンジング込み", "デコルテケア込み"],
  },
  {
    id: "m2",
    name: "ハーブピーリング",
    subName: "Herbal Renewal",
    durationMinutes: 75,
    priceYen: 17600,
    originalPriceYen: 22000,
    description:
      "天然ハーブで肌本来の再生力を引き出す名物コース。くすみ・毛穴・小じわを総合ケア。",
    highlights: ["ハーブパック", "クールダウン込み", "アフター美容液付き"],
    isRecommended: true,
  },
  {
    id: "m3",
    name: "プレミアムエイジングケア",
    subName: "Lumière Premium",
    durationMinutes: 90,
    priceYen: 24200,
    description:
      "小顔矯正＋ハーブピーリング＋目元集中ケアのフルコース。特別な日の前にも。",
    highlights: ["全工程フル", "目元集中ケア", "限定アロマ選択可"],
  },
];

export const FLOW_STEPS: FlowStep[] = [
  { step: 1, title: "ご来店・受付", description: "完全個室にご案内。お飲み物をご用意してお待ちしております。", durationLabel: "5分" },
  { step: 2, title: "丁寧なカウンセリング", description: "肌診断とお悩みヒアリング。ゴール設定までしっかりお伺いします。", durationLabel: "15分" },
  { step: 3, title: "クレンジング・洗顔", description: "メイクや皮脂汚れをやさしくオフ。施術前の準備を整えます。", durationLabel: "10分" },
  { step: 4, title: "メイン施術", description: "小顔矯正＋ハーブピーリング。心地よい圧で、丁寧に。", durationLabel: "40〜60分" },
  { step: 5, title: "仕上げ・整肌", description: "鎮静パック・保湿。施術後すぐにメイク直しいただけます。", durationLabel: "10分" },
  { step: 6, title: "アフターカウンセリング", description: "次回までのホームケアアドバイス。無理な勧誘は一切いたしません。", durationLabel: "10分" },
];

export const REVIEWS: Review[] = [
  {
    id: "rv1",
    customerName: "M.K. 様",
    ageLabel: "38歳・会社員",
    course: "小顔矯正ベーシック",
    rating: 5,
    comment:
      "1回でフェイスラインがすっきり！痛みもなく、施術中もリラックスできました。完全個室なのも嬉しいポイントです。",
    avatar: buildImage(UNSPLASH.reviewer1, "M.K.様のお写真", avatarDimensions),
  },
  {
    id: "rv2",
    customerName: "S.A. 様",
    ageLabel: "42歳・経営者",
    course: "ハーブピーリング",
    rating: 5,
    comment:
      "長年のくすみが気にならなくなり、メイクのノリが全然違います。担当の方の説明も丁寧で安心して任せられます。",
    avatar: buildImage(UNSPLASH.reviewer2, "S.A.様のお写真", avatarDimensions),
  },
  {
    id: "rv3",
    customerName: "Y.T. 様",
    ageLabel: "35歳・自営業",
    course: "プレミアムエイジングケア",
    rating: 5,
    comment:
      "目元のハリ感がここまで変わるとは。無理な勧誘もなく、自分のペースで通えるのが本当にありがたいです。",
    avatar: buildImage(UNSPLASH.reviewer3, "Y.T.様のお写真", avatarDimensions),
  },
];

export const THERAPIST: Therapist = {
  name: "中村 玲奈",
  romanName: "Reina Nakamura",
  title: "代表セラピスト / 認定エステティシャン",
  bio: "美容業界15年。大手エステサロンでチーフを務めた後、独自の小顔矯正メソッドを確立。「肌と向き合う時間こそが、自分への投資」をモットーに、お一人おひとりに寄り添う施術を提供しています。",
  qualifications: ["AJESTHE認定上級エステティシャン", "ハーブピーリング施術認定", "骨格矯正セラピスト 一級"],
  portrait: buildImage(UNSPLASH.therapist, "代表セラピスト 中村玲奈のポートレート", portraitDimensions),
};

export const FAQS: FaqItem[] = [
  {
    id: "f1",
    question: "しつこい勧誘はありませんか？",
    answer:
      "一切ございません。アフターカウンセリングではホームケアのアドバイスのみお伝えし、次回予約も無理にはご案内いたしません。",
  },
  {
    id: "f2",
    question: "施術中の痛みはありますか？",
    answer:
      "小顔矯正は心地よい圧での施術で、ゴリゴリと痛む感覚はございません。ハーブピーリングも針を使わない天然成分の施術ですのでご安心ください。",
  },
  {
    id: "f3",
    question: "効果はどのくらい持続しますか？",
    answer:
      "個人差はございますが、小顔矯正は約2〜3週間、ハーブピーリングのトーンアップ効果は約1ヶ月持続するお客様が多いです。月1回のご来店で良い状態をキープいただけます。",
  },
  {
    id: "f4",
    question: "施術後すぐにメイクはできますか？",
    answer:
      "はい、可能です。仕上げに鎮静パックと保湿を行いますので、お出かけ前のご来店も歓迎しております。",
  },
  {
    id: "f5",
    question: "敏感肌でも受けられますか？",
    answer:
      "カウンセリングで肌状態を丁寧に確認し、刺激の少ない手技と製品を選択いたします。心配な方はパッチテストもご相談ください。",
  },
  {
    id: "f6",
    question: "予約のキャンセル・変更は可能ですか？",
    answer:
      "前日までのご連絡で無料変更が可能です。当日キャンセルはコース料金の50%を頂戴しております。",
  },
  {
    id: "f7",
    question: "支払い方法は何がありますか？",
    answer:
      "現金・各種クレジットカード・QRコード決済（PayPay/楽天Pay）に対応しております。",
  },
];
