/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { IndustryInsight, FailureScenario, OfferTier, FaqItem } from "./types";

export const insights: IndustryInsight[] = [
  {
    id: 1,
    title: "AI Voice Agents Stop Inbound Call Leakage",
    source: "1,200+ Contractor Study (2025)",
    finding: "Contractors miss 35–50% of inbound calls. 24/7 AI Voice Assistants answer every call and recover $8,000–$15,000/mo in lost jobs.",
    whoApplied: "Precision HVAC & 15-Truck Plumbing Field Case Study",
    measuredImpact: [
      "100% call answer rate (up from 38% baseline)",
      "$8,000–$15,000/mo recovered revenue",
      "+40–65% booked jobs within 60 days",
      "4–8x ROI achieved in first 60 days"
    ],
    aiOpportunity: "Deploys 24/7 AI Voice agent on your main lines. Qualifies callers, checks dispatch schedules, and books appointments directly into your CRM.",
    opportunityScore: {
      impact: 90,
      ease: 80,
      overall: 87
    }
  },
  {
    id: 2,
    title: "Emergency After-Hours Call Capture",
    source: "Field Dispatch Data & Benchmark Study",
    finding: "Small contractors lose $45k–$120k/yr on unanswered calls. Capturing $2,400 weekend emergency tickets transforms business profits.",
    whoApplied: "Regional Plumbing & HVAC Contractor Case",
    measuredImpact: [
      "+$180,000 annual revenue captured",
      "$2,400 average emergency ticket size",
      "384% first-quarter ROI recorded",
      "0% missed-call rate after-hours"
    ],
    aiOpportunity: "Instant missed-call SMS + AI voice callback workflow seals emergency jobs before callers dial your local competitors.",
    opportunityScore: {
      impact: 95,
      ease: 85,
      overall: 91
    }
  },
  {
    id: 3,
    title: "Rapid Web Lead Capture (Sub-2 Minute Response)",
    source: "Contractor Lead Conversion Benchmark 2025",
    finding: "AI web chat slashes lead response times from 4+ hours to under 2 minutes. 78% of homeowners hire the first contractor who responds.",
    whoApplied: "AutoScale HVAC & Electrical Clients",
    measuredImpact: [
      "Sub-2 minute response times (down from 4+ hrs)",
      "+50% lead-to-booking conversion rate",
      "40% of jobs booked after-hours via web chat",
      "Zero added staff overhead required"
    ],
    aiOpportunity: "Custom AI web agent answers FAQs, verifies service area coverage, provides ballpark estimates, and books CRM appointments on the spot.",
    opportunityScore: {
      impact: 80,
      ease: 90,
      overall: 83
    }
  },
  {
    id: 4,
    title: "Automated Review & Estimate Re-engagement",
    source: "Local SEO & Contractor Review Study",
    finding: "Automated post-job review sequences boost Google ratings to 4.8+ stars while automatic 48-hour estimate re-engagement captures outstanding quotes.",
    whoApplied: "Sequoia GEO & Field Service Firms",
    measuredImpact: [
      "+75% new Google reviews in 90 days",
      "4.8 star average Google Map Pack rating",
      "+15% revenue from estimate follow-ups",
      "100% automated hands-free workflow"
    ],
    aiOpportunity: "Automates post-job SMS review requests and multi-touch 48-hour estimate follow-ups without manual staff intervention.",
    opportunityScore: {
      impact: 75,
      ease: 95,
      overall: 81
    }
  },
  {
    id: 5,
    title: "Predictive Off-Peak Seasonal Outreach",
    source: "HVAC & Plumbing Industry Report 2026",
    finding: "Predictive maintenance outreach linked to weather and equipment age prevents traditional slow-season revenue dips.",
    whoApplied: "National HVAC & Plumbing Service Network",
    measuredImpact: [
      "20–30% reduction in off-peak revenue dips",
      "3–5x higher conversion than blast emails",
      "$0 additional advertising spend required",
      "Full maintenance schedules locked in early"
    ],
    aiOpportunity: "Monitors CRM equipment age and weather shifts to auto-trigger personalized SMS tune-up reminders with 1-click booking.",
    opportunityScore: {
      impact: 70,
      ease: 90,
      overall: 76
    }
  }
];

export const failureScenarios: FailureScenario[] = [
  {
    id: 1,
    category: "Acquisition",
    scenario: "Technician misses an inbound call while on a noisy job site — the customer immediately calls a competitor and books with them.",
    solution: "A 24/7 AI Voice Agent (Retell/Vapi) answers immediately, qualifies urgency, books the job into your CRM, and confirms instantly.",
    deliveryModel: "DFY",
    annualLeakEstimate: 42000
  },
  {
    id: 2,
    category: "Acquisition",
    scenario: "A hot web lead browses your service pages at 10pm, finds no interactive chat or booking, and leaves to find an active company.",
    solution: "A custom Website AI Chatbot answers emergency FAQs and secures booking/contact details on the spot.",
    deliveryModel: "DFY",
    annualLeakEstimate: 18000
  },
  {
    id: 3,
    category: "Acquisition",
    scenario: "An expensive estimate is sent, the customer goes silent, and the owner forgets to follow up due to field workload. The deal is lost.",
    solution: "Make.com workflow triggers multi-stage follow-ups: automated SMS in 48h, email in 72h, and a voice agent check-in if still uncommitted.",
    deliveryModel: "DFY",
    annualLeakEstimate: 35000
  },
  {
    id: 4,
    category: "Acquisition",
    scenario: "Summer AC or winter heating spike overwhelms your single office manager; 30–40% of inbound calls go to voicemail and are never returned.",
    solution: "Instant overflow voice agents take over when lines are busy, booking routine tune-ups and routing real emergencies to active staff.",
    deliveryModel: "DFY",
    annualLeakEstimate: 50000
  },
  {
    id: 5,
    category: "Experience",
    scenario: "Customer calls at 2am with a burst pipe or broken heater, hits your voicemail, and immediately calls the competitor with '24/7' in their listing.",
    solution: "An after-hours emergency triage agent answers at 2am, screens for actual emergencies, and instantly alerts the on-call tech via SMS summary.",
    deliveryModel: "DFY",
    annualLeakEstimate: 48000
  },
  {
    id: 6,
    category: "Experience",
    scenario: "A job is successfully closed, but the technician forgets to ask for a review. Your rating stays dormant, and local SEO ranking decays.",
    solution: "Make.com CRM integration: job complete triggers SMS/email review request with direct link within 1 hour, followed up automatically.",
    deliveryModel: "DFY",
    annualLeakEstimate: 15000
  },
  {
    id: 7,
    category: "Experience",
    scenario: "A prospective client submits a contact form but waits 4+ hours for a manual response, converting to a competitor during the wait.",
    solution: "Instant AI reply + webhook alerting the owner via SMS with one-click tap to call back, dropping response time under 120 seconds.",
    deliveryModel: "DFY",
    annualLeakEstimate: 22000
  },
  {
    id: 8,
    category: "Experience",
    scenario: "You have no system for maintenance plan upsells. High-value first-time installation customers never hear from you again.",
    solution: "Automated CRM workflow triggers scheduled personalized SMS tune-up notifications and service anniversary offers 6 months post-job.",
    deliveryModel: "DWY",
    annualLeakEstimate: 28000
  },
  {
    id: 9,
    category: "Efficiency",
    scenario: "Your office manager spends 3–4 hours a day on the phone answering basic FAQ questions rather than optimizing dispatcher schedules.",
    solution: "Deploy an interactive voice/web FAQ chatbot to handle locations, standard trip fees, and general scheduling steps autonomously.",
    deliveryModel: "DFY",
    annualLeakEstimate: 20000
  },
  {
    id: 10,
    category: "Efficiency",
    scenario: "A technician is dispatched without full context, arriving to find the wrong equipment size or customer frustration about repeating their issue.",
    solution: "AI Voice Agent transcribes, summarizes, and automatically syncs client complaints and equipment details straight into CRM dispatch notes.",
    deliveryModel: "DFY",
    annualLeakEstimate: 12000
  },
  {
    id: 11,
    category: "Efficiency",
    scenario: "Manual appointment reminders are forgotten, leading to a 15–25% no-show rate that wastes truck fuel, travel time, and technician wages.",
    solution: "Zapier/Make.com CRM-linked SMS confirmation sequence at booking, 24 hours prior, and 2 hours prior with one-click rescheduling.",
    deliveryModel: "DFY",
    annualLeakEstimate: 24000
  },
  {
    id: 12,
    category: "Efficiency",
    scenario: "You spend thousands on local ads but have zero visibility into which campaigns, keyword sets, or channels are actually driving booked jobs.",
    solution: "Integrate custom source tracking on AI booking webhooks to compile a weekly automated lead-source ROI report delivered straight to your inbox.",
    deliveryModel: "DWY",
    annualLeakEstimate: 16000
  },
  {
    id: 13,
    category: "Growth",
    scenario: "Your business relies 100% on passive referrals. You have no predictable outbound or lead capture engine to generate new bookings.",
    solution: "Connect an SEO-optimized web chat with Google Ads and Local Services Ads webhooks for immediate automated 60-second follow-up systems.",
    deliveryModel: "DWY",
    annualLeakEstimate: 60000
  },
  {
    id: 14,
    category: "Growth",
    scenario: "You want to add a second or third service truck but are paralyzed because you can't scale manual booking and dispatch operations.",
    solution: "Integrate a scalable front-office AI systems stack that handles unlimited simultaneous calls and web bookings without adding headcount.",
    deliveryModel: "Consulting",
    annualLeakEstimate: 85000
  },
  {
    id: 15,
    category: "Growth",
    scenario: "Traditional off-season months (spring/fall) trigger drastic revenue drops, leaving technicians underutilized and hurting cash flow.",
    solution: "Run automated, highly targeted recall campaigns that scan your CRM and offer smart seasonal pre-season tune-ups via SMS and interactive email.",
    deliveryModel: "DWY",
    annualLeakEstimate: 45000
  }
];

export const offerTiers: OfferTier[] = [
  {
    id: 1,
    title: "Call Capture Starter System",
    tagline: "Stop losing incoming job leads to voicemail and immediate competitor outreach.",
    features: [
      "AI Voice Agent (Retell AI / Vapi): Answers 100% of inbound calls 24/7, qualifies requests, books directly into CRM, and handles emergency escalation routing.",
      "Instant Missed-Call SMS Recovery (Make.com): Triggers automated SMS follow-up within 60s of any missed call to hook the prospect immediately.",
      "Post-Job Review Automation (Make.com/Zapier): Sends automated SMS and email review prompts within 1 hour of job completion to skyrocket Google Local rankings.",
      "Full CRM Webhook Integration (Housecall Pro, Jobber, ServiceTitan, etc.)"
    ],
    results: [
      "Slashes missed calls by 90%+",
      "Recovers $3,000–$8,000/mo in leaked phone revenue",
      "Secures a 4–8x ROI in under 60 days of deployment"
    ],
    bestFor: "HVAC, plumbing, and electrical solopreneurs or small teams (1-5 techs) looking to recover lost revenue from unanswered calls.",
    delivery: "Project-based (Fully delivered and active in 2–3 weeks)"
  },
  {
    id: 2,
    title: "Lead Conversion Growth System",
    tagline: "Maximize every web inquiry and estimate, converting traffic into booked tickets on autopilot.",
    features: [
      "Everything in the Call Capture Starter System",
      "Website AI Chatbot (Voiceflow / Chatling): FAQ responder, live estimate capture, and booking assistant that converts web traffic 24/7.",
      "Estimate Follow-Up Automation (Make.com / n8n): Multi-stage trigger sequence (SMS + email + AI voice follow-up) to recover 5–15% of unsigned quotes.",
      "Automated Appointment Reminders: Smart 24h & 2h SMS reminder sequences that bring no-shows down below 5%.",
      "Monthly AI Performance Report (n8n): Automatically compiles call volume, booking rates, and recovered revenue analytics straight to the owner."
    ],
    results: [
      "30–50% increase in lead-to-booking conversions",
      "Recovers 5–15% of outstanding estimates",
      "Brings booking no-show rates below 5% with zero manual work",
      "Recovers $8,000–$15,000/mo in additional revenue"
    ],
    bestFor: "Growing home service businesses (5-15 techs) with healthy web traffic but high leak rates across the customer acquisition funnel.",
    delivery: "Hybrid model (Full project build + 3-month strategic optimization retainer)"
  },
  {
    id: 3,
    title: "Full AI Growth Infrastructure",
    tagline: "A completely autonomous front office operations engine designed to help you scale without adding overhead.",
    features: [
      "Everything in Tiers 1 & 2",
      "Seasonal Outreach & Recall Engine (n8n / Make.com): Smart campaigns that target past customers based on weather changes, service history, and equipment age.",
      "Full CRM & Dispatcher Handoff: AI Voice agent collects equipment and site details, populates the CRM, and sends the active tech an immediate summary SMS.",
      "Custom AI Reporting Dashboard: Real-time visibility into booked jobs, call logs, acquisition channels, and seasonal patterns.",
      "White-Glove Onboarding & 6-Month Strategic Retainer: Direct ongoing optimizations, script updates, integration adjustments, and monthly growth consulting."
    ],
    results: [
      "Unlocks $15,000–$25,000/mo in additional revenue",
      "Operates a highly synchronized, 100% automated front office",
      "Eliminates manual CRM entries, forgotten follow-ups, and review collections",
      "Allows the owner to focus completely on scaling field operations and strategic growth"
    ],
    bestFor: "Established home service businesses (10-30+ techs) looking to optimize operations, secure local market dominance, and expand fleet capacity without proportional overhead.",
    delivery: "Hybrid model (Full enterprise system build + 6-month white-glove retainer)"
  }
];

export const faqs: FaqItem[] = [
  {
    id: 1,
    category: "Implementation",
    question: "Do we have to replace our existing software or CRM?",
    answer: "No. Our core philosophy is building custom integration layers, not replacing systems. We integrate directly with your existing CRM (such as Housecall Pro, Jobber, ServiceTitan, or FieldEdge) and booking schedulers using secure APIs and webhooks. Your field team will continue to use the software they already know."
  },
  {
    id: 2,
    category: "Security",
    question: "How secure is our customer data and phone systems?",
    answer: "We employ strict enterprise-grade security protocols. All integrations utilize secure API keys, HTTPS protocols, and end-to-end encryption. Your voice agents and chatbots run on isolated, compliant server environments that guarantee absolute compliance with data privacy standards. We do not sell, store, or train models on your proprietary customer databases."
  },
  {
    id: 3,
    category: "ROI",
    question: "How soon do we see a financial return on this system?",
    answer: "Most home services clients see a full financial return on their setup investment within 30 to 60 days. Because we target immediate revenue leaks—like missed inbound calls (averaging $250-$1,200 in value each) and forgotten estimates—the system captures missed money from day one. In fact, a single recovered emergency weekend call can cover a massive portion of the starter setup."
  },
  {
    id: 4,
    category: "Implementation",
    question: "How much effort is required from our office staff during onboarding?",
    answer: "Almost none. We deliver these systems as complete, white-glove, Done-For-You (DFY) or Done-With-You (DWY) solutions. Our team handles the scripts, prompt engineering, CRM webhooks, and exhaustive edge-case testing. Your team is only involved for a brief discovery audit and a final 1-hour sign-off session to review the system's voice and chatbot tone before we press go."
  },
  {
    id: 5,
    category: "Implementation",
    question: "Will the AI sound robotic or annoy our customers?",
    answer: "Absolutely not. We use ultra-low latency, next-generation conversational frameworks (such as Retell AI and Vapi) coupled with highly engineered, natural-sounding, industry-specific custom voice models. They respond in under 1 second, match human conversational cadences, recognize technician jargon, and politely handle interrupts. If a customer demands a human or poses an extremely unique inquiry, the AI seamlessly transfers the call with a clean typed summary."
  },
  {
    id: 6,
    category: "ROI",
    question: "Why should we hire TendLine instead of building no-code templates ourselves?",
    answer: "Patchwork solutions fail under pressure. Standard templates lack error-handling, fail during CRM sync lags, and cause duplicate customer records, leading to dispatch nightmares. TendLine builds professional-grade, resilient enterprise growth infrastructure. We construct custom fail-safes, clean API parsing pipelines, and provide strategic optimization retainers to ensure your AI works 24/7/365 without glitching."
  }
];
