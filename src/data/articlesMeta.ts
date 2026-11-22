/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArticleAuthor, BlogArticleMeta } from "../types";

export const WHATSAPP_CONTACT = {
  number: "9007145941",
  formatted: "+91 9007145941",
  href: "https://wa.me/919007145941",
} as const;

export const BRAND_LOGOS = {
  light: "/assets/aistudio/Extract_logo_image_from_here_202609011956_bd906bf9.jpeg",
  textured: "/assets/aistudio/bg_1f33d0cf.jfif",
} as const;

export const SOCIAL_PROFILES = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/tendline-automation-0407a7429",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/nsen59341/",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/natasha.sen.9655",
  },
] as const;

export const SOCIAL_SAME_AS = SOCIAL_PROFILES.map((profile) => profile.href);

export const DEFAULT_AUTHOR: ArticleAuthor = {
  name: "Natasha Sen",
  role: "Founder & AI Systems Architect, TendLine",
  bio: "Natasha Sen designs AI voice agents, web chatbots, and CRM workflow automation systems for HVAC and home-service operators, focusing on practical lead capture and reliable dispatch execution.",
  profileUrl: "/#author-natasha-sen",
};

export const articlesMeta: BlogArticleMeta[] = [
  {
    id: 1,
    slug: "ai-voice-agents-hvac",
    title: "AI Voice Agents Eliminate Inbound HVAC Call Leakage",
    excerpt:
      "Contractor research points to $45,000–$120,000 a year in missed-call losses. Learn how AI voice agents capture inbound HVAC calls when technicians are busy or on-site.",
    category: "AI Voice Agents",
    publishedDate: "2026-11-02",
    publishedDateLabel: "November 2, 2026",
    readingTime: "6 min read",
    seoTitle: "AI Voice Agents Eliminate Inbound HVAC Call Leakage | TendLine",
    seoDescription:
      "See how AI voice agents help HVAC contractors answer inbound calls during busy field hours, protect ad spend, and convert missed calls into booked jobs.",
    featuredImageAlt:
      "Minimalist HVAC AI voice dispatch console with matte charcoal microphone and bronze audio waveform display on travertine stone",
    keywords: [
      "AI voice agents for HVAC",
      "HVAC call leakage",
      "HVAC missed calls",
      "AI receptionist HVAC",
      "capture HVAC leads",
    ],
  },
  {
    id: 2,
    slug: "hvac-emergency-call-capture",
    title: "No-Cooling & Furnace Emergency Call Capture: Closing the 2026 AI Readiness Gap",
    excerpt:
      "What ServiceTitan's 2026 contractor data shows about AI adoption—and why answering evening and peak-season emergency calls is where real operational advantage starts.",
    category: "HVAC Automation",
    publishedDate: "2026-11-05",
    publishedDateLabel: "November 5, 2026",
    readingTime: "6 min read",
    seoTitle: "No-Cooling & Furnace Emergency Call Capture for HVAC | TendLine",
    seoDescription:
      "Explore 2026 HVAC AI adoption findings and learn how automated emergency call capture keeps after-hours no-cooling and heating leads from going to competitors.",
    featuredImageAlt:
      "Commercial HVAC dispatch desk at dusk with warm brass desk lamp illuminating condenser blueprints and a telephone receiver",
    keywords: [
      "HVAC emergency call capture",
      "no-cooling call answering",
      "HVAC AI adoption 2026",
      "after-hours HVAC dispatch",
      "HVAC automation",
    ],
  },
  {
    id: 3,
    slug: "hvac-web-lead-capture",
    title: "Rapid Web HVAC Lead Capture Without Automating a Broken Process",
    excerpt:
      "Adding a chatbot without clear follow-up only automates the gap. Learn the three operational decisions that turn HVAC web enquiries into booked jobs.",
    category: "AI Chatbots",
    publishedDate: "2026-11-08",
    publishedDateLabel: "November 8, 2026",
    readingTime: "6 min read",
    seoTitle: "Rapid Web HVAC Lead Capture & AI Chatbots | TendLine",
    seoDescription:
      "Discover how to deploy HVAC website chatbots and automated lead capture responsibly so every web enquiry receives fast follow-up and converts into a booked job.",
    featuredImageAlt:
      "Modern brushed aluminum tablet on a warm sand architectural desk showing a clean dark and bronze chat interface",
    keywords: [
      "HVAC web lead capture",
      "HVAC AI chatbot",
      "automate lead follow-up",
      "home service chatbot",
      "HVAC booking automation",
    ],
  },
  {
    id: 4,
    slug: "automated-google-reviews",
    title: "Automated Google Reviews & System Replacement Estimate Recovery",
    excerpt:
      "How CRM-connected post-job review requests and 48-hour replacement quote follow-ups help HVAC contractors strengthen local visibility and recover unsigned estimates.",
    category: "Business Automation",
    publishedDate: "2026-11-10",
    publishedDateLabel: "November 10, 2026",
    readingTime: "5 min read",
    seoTitle: "Automated Google Reviews & HVAC Estimate Recovery | TendLine",
    seoDescription:
      "Learn how HVAC businesses automate post-service Google review requests and 48-hour system replacement quote follow-ups directly from their CRM.",
    featuredImageAlt:
      "Architectural flat lay of geometric brass five-star emblem blocks and linen estimate folders on a warm sand and charcoal table",
    keywords: [
      "automated Google reviews HVAC",
      "HVAC estimate follow-up",
      "HVAC business automation",
      "ServiceTitan review automation",
      "recover unsigned HVAC quotes",
    ],
  },
  {
    id: 5,
    slug: "predictive-hvac-maintenance",
    title: "Predictive Off-Peak Seasonal Maintenance Outreach for HVAC Teams",
    excerpt:
      "Use existing CRM equipment age records and local weather shifts to trigger timely AC and heating tune-up reminders during spring and fall shoulder seasons.",
    category: "AI Technology",
    publishedDate: "2026-11-12",
    publishedDateLabel: "November 12, 2026",
    readingTime: "5 min read",
    seoTitle: "Predictive Off-Peak Seasonal Maintenance Outreach | TendLine",
    seoDescription:
      "Stabilize spring and fall HVAC schedules using predictive CRM equipment age and weather-triggered maintenance reminders without increasing ad spend.",
    featuredImageAlt:
      "Isometric architectural rendering of a modern precision HVAC heat pump unit with a warm bronze seasonal dial",
    keywords: [
      "predictive HVAC maintenance",
      "seasonal HVAC outreach",
      "HVAC shoulder season marketing",
      "CRM maintenance reminders",
      "HVAC AI technology",
    ],
  },
];
