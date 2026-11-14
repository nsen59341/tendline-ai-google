/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { IndustryInsight, FailureScenario, OfferTier, FaqItem } from "./types";

export const insights: IndustryInsight[] = [
  {
    id: 1,
    articleSlug: "ai-voice-agents-hvac",
    title: "AI Voice Agents Eliminate Inbound HVAC Call Leakage",
    source: "1,200+ HVAC Contractor Benchmark Study",
    finding: "HVAC contractors miss 35–50% of inbound calls during summer heatwaves and winter freezes. 24/7 AI Voice Assistants answer every call and recover $8,000–$18,000/mo in lost AC/heating jobs.",
    whoApplied: "Precision Heating & Air (15-Tech HVAC Field Study)",
    measuredImpact: [
      "100% call answer rate during heatwave spikes",
      "$8,000–$18,000/mo recovered HVAC revenue",
      "+40–65% booked jobs within 60 days",
      "4–8x ROI achieved in first 60 days"
    ],
    aiOpportunity: "Deploys 24/7 AI Voice agent on your primary phone lines. Qualifies AC and heating callers, checks technician dispatch schedules, and books appointments directly into ServiceTitan or Housecall Pro.",
    opportunityScore: {
      impact: 92,
      ease: 82,
      overall: 89
    }
  },
  {
    id: 2,
    articleSlug: "hvac-emergency-call-capture",
    title: "No-Cooling & Furnace Emergency Call Capture",
    source: "HVAC Field Dispatch Data & Benchmark Study",
    finding: "Small HVAC contractors lose $50k–$130k/yr on unanswered after-hours emergency calls. Capturing $1,800–$3,200 emergency AC/heating replacement tickets transforms contractor profitability.",
    whoApplied: "Regional HVAC & Heat Pump Specialist Firm",
    measuredImpact: [
      "+$180,000 annual revenue captured from phone lines",
      "$2,400 average HVAC emergency ticket size",
      "384% first-quarter ROI recorded",
      "0% missed-call rate during weekend freezes & spikes"
    ],
    aiOpportunity: "Instant missed-call SMS + AI voice callback workflow seals no-cooling and furnace breakdown jobs before homeowners call local HVAC competitors.",
    opportunityScore: {
      impact: 96,
      ease: 86,
      overall: 93
    }
  },
  {
    id: 3,
    articleSlug: "hvac-web-lead-capture",
    title: "Rapid Web HVAC Lead Capture (Sub-2 Minute Response)",
    source: "HVAC Lead Conversion Benchmark 2025",
    finding: "AI web chat slashes web inquiry response times from 4+ hours to under 2 minutes. 78% of homeowners hire the first HVAC contractor who responds when their AC is out.",
    whoApplied: "AutoScale Heating & Air Clients",
    measuredImpact: [
      "Sub-2 minute response times (down from 4+ hrs)",
      "+50% lead-to-booking conversion rate",
      "42% of jobs booked after-hours via HVAC web chat",
      "Zero added dispatcher overhead required"
    ],
    aiOpportunity: "Custom AI web agent answers HVAC FAQs, verifies local service area coverage, provides ballpark diagnostic estimates, and books CRM appointments on the spot.",
    opportunityScore: {
      impact: 82,
      ease: 90,
      overall: 84
    }
  },
  {
    id: 4,
    articleSlug: "automated-google-reviews",
    title: "Automated Google Reviews & Estimate Re-engagement",
    source: "Local SEO & HVAC Contractor Study",
    finding: "Automated post-job review sequences boost Google ratings to 4.8+ stars while automatic 48-hour equipment replacement estimate re-engagement captures outstanding quotes.",
    whoApplied: "Apex Comfort Systems & HVAC Field Service Network",
    measuredImpact: [
      "+75% new Google reviews in 90 days",
      "4.8 star average Google Map Pack rating",
      "+15% revenue from system replacement follow-ups",
      "100% automated hands-free workflow"
    ],
    aiOpportunity: "Automates post-service SMS review requests and multi-touch 48-hour system replacement estimate follow-ups without manual office staff intervention.",
    opportunityScore: {
      impact: 78,
      ease: 95,
      overall: 83
    }
  },
  {
    id: 5,
    articleSlug: "predictive-hvac-maintenance",
    title: "Predictive Off-Peak Seasonal Maintenance Outreach",
    source: "HVAC Industry Benchmark Report 2026",
    finding: "Predictive maintenance outreach linked to weather shifts and equipment age prevents traditional spring and fall revenue dips for HVAC contractors.",
    whoApplied: "National HVAC & Heat Pump Service Network",
    measuredImpact: [
      "25–35% reduction in off-season revenue dips",
      "3–5x higher conversion than blast emails",
      "$0 additional advertising spend required",
      "Full maintenance agreement schedules locked in early"
    ],
    aiOpportunity: "Monitors CRM equipment age and local weather forecasts to auto-trigger personalized SMS AC/heating tune-up reminders with 1-click booking.",
    opportunityScore: {
      impact: 72,
      ease: 90,
      overall: 78
    }
  }
];

export const failureScenarios: FailureScenario[] = [
  {
    id: 1,
    category: "Acquisition",
    scenario: "HVAC technician is on a hot attic install and misses an inbound AC call — the homeowner immediately calls a competitor and books a $1,200 repair.",
    solution: "A 24/7 AI Voice Agent (Retell/Vapi) answers immediately, qualifies cooling urgency, books the diagnostic trip into ServiceTitan/Housecall Pro, and confirms instantly.",
    deliveryModel: "DFY",
    annualLeakEstimate: 48000
  },
  {
    id: 2,
    category: "Acquisition",
    scenario: "A homeowner whose furnace died at 9pm browses your website, finds no interactive chat or booking, and leaves to call a competitor offering '24/7 Dispatch'.",
    solution: "A custom HVAC Web AI Chatbot answers emergency heating FAQs and secures booking and contact details on the spot.",
    deliveryModel: "DFY",
    annualLeakEstimate: 22000
  },
  {
    id: 3,
    category: "Acquisition",
    scenario: "A $9,500 heat pump replacement estimate is sent, the homeowner goes silent, and the owner forgets to follow up during heatwave chaos. The high-ticket job is lost.",
    solution: "Make.com workflow triggers multi-stage replacement follow-ups: automated SMS in 48h, email financing options in 72h, and an AI voice agent check-in.",
    deliveryModel: "DFY",
    annualLeakEstimate: 45000
  },
  {
    id: 4,
    category: "Acquisition",
    scenario: "First summer heatwave overwhelms your office dispatcher; 40% of inbound AC calls go to voicemail and callers never receive a timely call-back.",
    solution: "Instant overflow voice agents take over when lines are busy, booking routine tune-ups and routing no-cooling emergencies to active technicians.",
    deliveryModel: "DFY",
    annualLeakEstimate: 58000
  },
  {
    id: 5,
    category: "Experience",
    scenario: "Homeowner calls at 2am with a frozen AC unit or furnace breakdown, hits your voicemail, and immediately calls the local competitor with '24/7 Emergency HVAC' in their ad.",
    solution: "An after-hours HVAC emergency triage agent answers at 2am, screens for true emergency vs. routine inquiry, and alerts the on-call tech via SMS summary.",
    deliveryModel: "DFY",
    annualLeakEstimate: 52000
  },
  {
    id: 6,
    category: "Experience",
    scenario: "An AC unit install is successfully completed, but the tech forgets to ask for a review. Your Google Map Pack rating stays dormant while competitors pull ahead.",
    solution: "ServiceTitan/Housecall Pro CRM integration: job complete triggers SMS/email review request with direct Google link within 1 hour.",
    deliveryModel: "DFY",
    annualLeakEstimate: 18000
  },
  {
    id: 7,
    category: "Experience",
    scenario: "A prospective client submits a website contact form for ductless mini-split installation but waits 4+ hours for a response, booking with another contractor in the meantime.",
    solution: "Instant AI reply + webhook alerting the HVAC manager via SMS with one-click tap to call back, dropping response time under 120 seconds.",
    deliveryModel: "DFY",
    annualLeakEstimate: 26000
  },
  {
    id: 8,
    category: "Experience",
    scenario: "You have no system for annual HVAC maintenance plan upsells. High-value equipment installation customers are never re-engaged for seasonal tune-ups.",
    solution: "Automated CRM workflow triggers scheduled personalized SMS tune-up notifications and membership plan offers 6 months post-installation.",
    deliveryModel: "DWY",
    annualLeakEstimate: 32000
  },
  {
    id: 9,
    category: "Efficiency",
    scenario: "Your dispatcher spends 3–4 hours a day on the phone answering basic HVAC pricing and service zone questions rather than optimizing technician routes.",
    solution: "Deploy an interactive voice/web HVAC FAQ chatbot to handle service areas, standard trip diagnostic fees, and general scheduling autonomously.",
    deliveryModel: "DFY",
    annualLeakEstimate: 24000
  },
  {
    id: 10,
    category: "Efficiency",
    scenario: "An HVAC tech is dispatched without equipment context, arriving to find a 15-year-old R-22 system or specific refrigerant requirements they weren't prepared for.",
    solution: "AI Voice Agent transcribes caller equipment details (brand, age, symptoms) and syncs them straight into ServiceTitan dispatch notes for the tech.",
    deliveryModel: "DFY",
    annualLeakEstimate: 16000
  },
  {
    id: 11,
    category: "Efficiency",
    scenario: "Manual HVAC appointment reminders are forgotten, leading to a 15–20% no-show rate that wastes truck fuel, travel time, and technician labor.",
    solution: "CRM-linked SMS confirmation sequence at booking, 24 hours prior, and when tech is en route, with one-click rescheduling.",
    deliveryModel: "DFY",
    annualLeakEstimate: 28000
  },
  {
    id: 12,
    category: "Efficiency",
    scenario: "You spend thousands on Local Services Ads for 'AC Repair' but have zero visibility into which ads or keywords actually convert into completed HVAC jobs.",
    solution: "Integrate custom source tracking on AI booking webhooks to compile a weekly automated lead-source ROI report delivered straight to your inbox.",
    deliveryModel: "DWY",
    annualLeakEstimate: 20000
  },
  {
    id: 13,
    category: "Growth",
    scenario: "Your HVAC business relies 100% on passive referrals. You have no predictable outbound or lead capture engine to fill tech schedules during shoulder months.",
    solution: "Connect an SEO-optimized web chat with Google Ads and LSA webhooks for immediate automated 60-second follow-up systems.",
    deliveryModel: "DWY",
    annualLeakEstimate: 65000
  },
  {
    id: 14,
    category: "Growth",
    scenario: "You want to add 2 new service trucks to your HVAC fleet but are paralyzed because your office dispatcher cannot handle double the call volume.",
    solution: "Integrate a scalable front-office AI systems stack that handles unlimited simultaneous calls and web bookings without adding dispatcher headcount.",
    deliveryModel: "Consulting",
    annualLeakEstimate: 95000
  },
  {
    id: 15,
    category: "Growth",
    scenario: "Shoulder months (spring/fall) trigger drastic revenue drops for your HVAC firm, leaving technicians underutilized and hurting cash flow.",
    solution: "Run automated, highly targeted recall campaigns that scan your CRM for 10+ year old AC/heating systems and offer pre-season tune-ups via SMS.",
    deliveryModel: "DWY",
    annualLeakEstimate: 52000
  }
];

export const offerTiers: OfferTier[] = [
  {
    id: 1,
    title: "HVAC Call Capture Starter System",
    tagline: "Stop losing incoming AC and heating repair leads to voicemail and local HVAC competitors.",
    features: [
      "24/7 AI Voice Agent (Retell AI / Vapi): Answers 100% of inbound calls, qualifies cooling/heating urgency, books directly into your CRM, and routes emergencies.",
      "Instant Missed-Call SMS Recovery (Make.com): Triggers automated SMS follow-up within 60s of any missed call to lock in the homeowner.",
      "Post-Service Review Automation (Make.com/Zapier): Sends automated SMS review prompts within 1 hour of job completion to dominate Google Local Map Packs.",
      "Full HVAC CRM Webhook Integration (ServiceTitan, Housecall Pro, Jobber, FieldEdge, etc.)"
    ],
    results: [
      "Slashes missed HVAC calls by 90%+",
      "Recovers $3,000–$8,000/mo in leaked phone revenue",
      "Secures a 4–8x ROI in under 60 days of deployment"
    ],
    bestFor: "HVAC contractors or small teams (1-5 techs) looking to recover lost revenue from unanswered calls during busy seasons.",
    delivery: "Project-based (Fully delivered and active in 2–3 weeks)"
  },
  {
    id: 2,
    title: "HVAC Lead Conversion Growth System",
    tagline: "Maximize every web inquiry and system replacement estimate, converting traffic into booked tickets on autopilot.",
    features: [
      "Everything in the HVAC Call Capture Starter System",
      "Website HVAC AI Chatbot (Voiceflow / Chatling): Diagnostic FAQ responder, live estimate capture, and booking assistant that converts web traffic 24/7.",
      "Equipment Replacement Follow-Up Automation: Multi-stage trigger sequence (SMS + email + AI voice) to recover 5–15% of unsigned AC/heating quotes.",
      "Automated Dispatch & Reminder Sequences: Smart 24h & 2h SMS reminder sequences that bring no-shows down below 5%.",
      "Monthly HVAC AI Performance Analytics: Automatically compiles call volume, booking rates, and recovered revenue analytics straight to the owner."
    ],
    results: [
      "30–50% increase in lead-to-booking conversions",
      "Recovers 5–15% of outstanding HVAC replacement estimates",
      "Brings booking no-show rates below 5% with zero manual work",
      "Recovers $8,000–$18,000/mo in additional revenue"
    ],
    bestFor: "Growing HVAC businesses (5-15 techs) with healthy web traffic but high leak rates across the customer acquisition funnel.",
    delivery: "Hybrid model (Full project build + 3-month strategic optimization retainer)"
  },
  {
    id: 3,
    title: "Full HVAC AI Growth Infrastructure",
    tagline: "A completely autonomous HVAC front office operations engine designed to help you scale your fleet without adding overhead.",
    features: [
      "Everything in Tiers 1 & 2",
      "Seasonal Maintenance & Recall Engine: Smart campaigns that target past customers based on weather forecasts, system age, and refrigerant type.",
      "Full CRM & Dispatcher Handoff: AI Voice agent collects equipment brand, age, and diagnostic notes, populating ServiceTitan and texting the active tech.",
      "Custom HVAC AI Executive Dashboard: Real-time visibility into booked jobs, call logs, acquisition channels, and seasonal truck utilization.",
      "White-Glove Onboarding & 6-Month Strategic Retainer: Direct ongoing optimizations, script updates, integration adjustments, and monthly growth consulting."
    ],
    results: [
      "Unlocks $15,000–$30,000/mo in additional revenue",
      "Operates a highly synchronized, 100% automated HVAC front office",
      "Eliminates manual CRM entries, forgotten quote follow-ups, and review collections",
      "Allows the owner to focus completely on expanding fleet capacity and technician hiring"
    ],
    bestFor: "Established HVAC contractors (10-30+ trucks) looking to optimize operations, secure local market dominance, and expand fleet capacity without proportional overhead.",
    delivery: "Hybrid model (Full enterprise system build + 6-month white-glove retainer)"
  }
];

export const faqs: FaqItem[] = [
  {
    id: 1,
    category: "Implementation",
    question: "Do we have to replace ServiceTitan, Housecall Pro, or our current HVAC CRM?",
    answer: "No. Our core philosophy is building custom integration layers, not replacing software. We integrate directly with your existing HVAC CRM (such as ServiceTitan, Housecall Pro, Jobber, FieldEdge, or Successware) and dispatch schedulers using secure APIs and webhooks. Your techs and dispatchers keep using what they already know."
  },
  {
    id: 2,
    category: "Security",
    question: "How secure is our customer data and dispatch system?",
    answer: "We employ strict enterprise-grade security protocols. All integrations utilize secure API keys, HTTPS protocols, and end-to-end encryption. Your voice agents and chatbots run on isolated, compliant server environments. We never sell, store, or train AI models on your proprietary customer databases or dispatch logs."
  },
  {
    id: 3,
    category: "ROI",
    question: "How soon does an HVAC contractor see a return on this system?",
    answer: "Most HVAC clients see a full financial return on their setup investment within 30 to 60 days. Because we target immediate revenue leaks—like missed inbound AC calls during heatwaves (averaging $350–$2,800+ in value each) and forgotten replacement estimates—the system captures lost money from day one. A single captured no-cooling emergency or heat pump replacement can pay for the system."
  },
  {
    id: 4,
    category: "Implementation",
    question: "How much effort is required from our office manager or dispatchers during setup?",
    answer: "Almost none. We deliver these systems as complete, white-glove, Done-For-You (DFY) solutions. Our team handles the scripts, HVAC prompt engineering, CRM webhooks, and exhaustive edge-case testing. Your team is only involved for a brief discovery audit and a final 45-minute sign-off session to review the AI's tone and dispatch rules before we launch."
  },
  {
    id: 5,
    category: "Implementation",
    question: "Will the AI voice agent sound robotic to homeowners calling about their broken AC?",
    answer: "Absolutely not. We use ultra-low latency, next-generation conversational frameworks (Retell AI / Vapi) coupled with custom, natural-sounding voice models trained on HVAC terminology. They respond in under 1 second, recognize equipment terms (R-410A, heat pumps, compressors, thermostats), match human cadences, and handle interrupts gracefully. If a caller insists on speaking to a human, the AI transfers the call immediately with a transcribed summary."
  },
  {
    id: 6,
    category: "ROI",
    question: "Why should an HVAC business hire TendLine instead of trying no-code templates?",
    answer: "Patchwork templates break under peak HVAC pressure. Standard templates lack fail-safes, fail during ServiceTitan sync delays, and create duplicate customer records, causing technician dispatch nightmares. TendLine builds professional-grade, resilient enterprise growth infrastructure with built-in redundancy, custom API parsing, and ongoing optimization to ensure your AI works 24/7/365 without glitching."
  }
];
