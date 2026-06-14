// ============================================
// inmoApp — Shared TypeScript Types
// ============================================

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialProofItem {
  value: string;
  label: string;
}

export interface ProblemCard {
  icon: string;
  title: string;
  body: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  body: string;
}

export interface Step {
  number: string;
  title: string;
  body: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  highlight: boolean;
  badge?: string;
  features: readonly string[];
  cta: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface FooterLinkGroup {
  label: string;
  href: string;
}
