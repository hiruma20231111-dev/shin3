// LP内で扱うコンテンツの型定義を一元管理。
// constants/salonData.ts はここからimportしてデータを定義する。

export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Concern = {
  id: string;
  text: string;
};

export type Reason = {
  id: string;
  title: string;
  description: string;
  iconLabel: string;
};

export type BeforeAfterCase = {
  id: string;
  ageRange: string;
  concern: string;
  treatment: string;
  before: ImageAsset;
  after: ImageAsset;
};

export type MenuCourse = {
  id: string;
  name: string;
  subName: string;
  durationMinutes: number;
  priceYen: number;
  originalPriceYen?: number;
  description: string;
  highlights: string[];
  isRecommended?: boolean;
};

export type FlowStep = {
  step: number;
  title: string;
  description: string;
  durationLabel: string;
};

export type Review = {
  id: string;
  customerName: string;
  ageLabel: string;
  course: string;
  rating: number;
  comment: string;
  avatar: ImageAsset;
};

export type Therapist = {
  name: string;
  romanName: string;
  title: string;
  bio: string;
  qualifications: string[];
  portrait: ImageAsset;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type SalonInfo = {
  name: string;
  address: string;
  nearestStation: string;
  businessHours: string;
  closedDays: string;
  trustBadges: {
    ratingLabel: string;
    reservationCountLabel: string;
  };
};
