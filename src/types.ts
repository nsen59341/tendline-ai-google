/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface IndustryInsight {
  id: number;
  articleSlug: string;
  title: string;
  source: string;
  finding: string;
  whoApplied: string;
  measuredImpact: string[];
  aiOpportunity: string;
  opportunityScore: {
    impact: number;
    ease: number;
    overall: number;
  };
}

export interface FailureScenario {
  id: number;
  category: "Acquisition" | "Experience" | "Efficiency" | "Growth";
  scenario: string;
  solution: string;
  deliveryModel: "DFY" | "DWY" | "Consulting";
  annualLeakEstimate: number; // estimated dollar leak for small-to-medium contractors
}

export interface OfferTier {
  id: number;
  title: string;
  tagline: string;
  features: string[];
  results: string[];
  bestFor: string;
  delivery: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category: "Security" | "Implementation" | "ROI" | "General";
}

export interface LeadData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  techCount: string;
  primaryBottleneck: string;
  estimatedMissedCalls: string;
}

export type BlogCategory =
  | "HVAC Automation"
  | "AI Voice Agents"
  | "AI Chatbots"
  | "Business Automation"
  | "AI Technology";

export interface ArticleAuthor {
  name: string;
  role: string;
  bio: string;
  profileUrl: string;
}

export interface ArticleLinkRef {
  label: string;
  href: string;
}

export interface ArticleBlock {
  id: string;
  heading: string;
  paragraphs: string[];
  subsections?: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
  bullets?: string[];
  callout?: {
    title: string;
    body: string;
  };
  internalLink?: ArticleLinkRef;
}

export interface BlogArticleMeta {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  publishedDate: string;
  publishedDateLabel: string;
  readingTime: string;
  seoTitle: string;
  seoDescription: string;
  featuredImageAlt: string;
  keywords: string[];
}

export interface BlogArticle extends BlogArticleMeta {
  author: ArticleAuthor;
  featuredImage: string;
  introduction: string[];
  keyTakeaways: string[];
  sections: ArticleBlock[];
  conclusion: {
    heading: string;
    paragraphs: string[];
  };
  relatedSlugs: string[];
  cta: {
    heading: string;
    description: string;
    primaryLabel: string;
    secondaryLabel: string;
    secondaryHref: string;
  };
}

