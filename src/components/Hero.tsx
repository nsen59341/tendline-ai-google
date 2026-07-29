/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PhoneCall, MessageSquare, Database, ArrowRight, ShieldCheck, Play, RefreshCw, Smartphone, Clock, Sparkles } from "lucide-react";

interface HeroProps {
  onCtaClick: () => void;
}

type SimulationState = "idle" | "inbound" | "qualifying" | "crm_logging" | "dispatched" | "complete";
type SimulationType = "voice" | "chat";

export default function Hero({ onCtaClick }: HeroProps) {
  const [simType, setSimType] = useState<SimulationType>("voice");
  const [simState, setSimState] = useState<SimulationState>("idle");
  const [logs, setLogs] = useState<string[]>([]);
  const [activeStep, setActiveStep] = useState(0);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Auto-scroll terminal logs to bottom on mobile/desktop
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [logs, simState]);

  const voiceSimulationSteps = [
    { text: "📞 Inbound Call Detected on Main Business Line (11:42 PM Sunday)", duration: 1500, status: "inbound" },
    { text: "🤖 TendLine Voice Agent: 'Apex Emergency Plumbing. How can we help you tonight?'", duration: 1800, status: "qualifying" },
    { text: "🗣️ Customer: 'Yes, help! My basement is actively flooding from a burst main line! Help!'", duration: 1800, status: "qualifying" },
    { text: "🤖 TendLine Voice Agent: 'I understand this is a critical emergency. I am logging this for immediate dispatch. Confirming address: is this 1424 Pine Street?'", duration: 2000, status: "qualifying" },
    { text: "🗣️ Customer: 'Yes, that is correct! Hurry!'", duration: 1200, status: "qualifying" },
    { text: "🤖 TendLine Voice Agent: 'Got it. I have booked an emergency dispatch slot for you right now, and our on-call tech is being paged. What is your direct contact number?'", duration: 1800, status: "qualifying" },
    { text: "🗣️ Customer: '555-0199. Thank you so much!'", duration: 1200, status: "qualifying" },
    { text: "🤖 TendLine Voice Agent: 'Perfect. We are on our way John. Watch your phone for an SMS tracker link. Have a safe night.'", duration: 1500, status: "qualifying" },
    { text: "🔄 Webhook Triggered: Make.com CRM synchronization in progress...", duration: 1200, status: "crm_logging" },
    { text: "🗄️ CRM Updated (Housecall Pro): New emergency ticket #9021-E created. Address: 1424 Pine St. Job Type: Main Line Burst ($2,400 est ticket). Status: Urgently Paged.", duration: 1500, status: "crm_logging" },
    { text: "📱 SMS Sent to On-Call Tech: 'CRITICAL EMERGENCY: John Doe (555-0199) - Burst Main Line at 1424 Pine St. Customer panicked. Tap link for full call recording summary.'", duration: 1500, status: "dispatched" },
    { text: "🚀 System Status: Call captured, job booked, dispatcher alerted in 9.2 seconds. Total human time saved: 15 mins. Revenue leakage prevented: $2,400+", duration: 1000, status: "complete" }
  ];

  const chatSimulationSteps = [
    { text: "💬 Web visitor lands on site at 10:15 PM seeking HVAC Quote", duration: 1200, status: "inbound" },
    { text: "🤖 TendLine Web Assistant: 'Welcome to Precision Comfort! Need a quick quote or booking? I can help you right here in under 2 minutes.'", duration: 1500, status: "qualifying" },
    { text: "🗣️ Customer: 'Looking to get my AC unit serviced before summer. How much is a tune-up?'", duration: 1500, status: "qualifying" },
    { text: "🤖 TendLine Web Assistant: 'Our Precision AC Tune-up is a flat $129, and it includes our 21-point safety checklist. I can get you scheduled with a certified technician right now. What is your ZIP code?'", duration: 1800, status: "qualifying" },
    { text: "🗣️ Customer: 'ZIP is 37211'", duration: 1000, status: "qualifying" },
    { text: "🤖 TendLine Web Assistant: 'Great, we serve your neighborhood daily! We have slots open tomorrow at 9 AM or Tuesday at 1 PM. Which works best for John?'", duration: 1800, status: "qualifying" },
    { text: "🗣️ Customer: 'Tomorrow at 9 AM works perfectly.'", duration: 1200, status: "qualifying" },
    { text: "🤖 TendLine Web Assistant: 'Reserved! What is your mobile number so I can text you your confirmation?'", duration: 1500, status: "qualifying" },
    { text: "🗣️ Customer: '555-4421'", duration: 1000, status: "qualifying" },
    { text: "🤖 TendLine Web Assistant: 'Got it, John. Your booking is confirmed for tomorrow at 9:00 AM. Tech Dan will arrive between 9:00 AM and 11:00 AM.'", duration: 1500, status: "qualifying" },
    { text: "🔄 API Sync (Jobber): Booking synced. Assigned Tech: Dan. Notes: AC Pre-Season Tune-up. Mobile: 555-4421.", duration: 1200, status: "crm_logging" },
    { text: "📱 SMS confirmation dispatched automatically to customer.", duration: 1200, status: "dispatched" },
    { text: "🚀 System Status: Website lead successfully converted to booked job in 12.4 seconds with zero manual office labor.", duration: 1000, status: "complete" }
  ];

  const runSimulation = async () => {
    setSimState("inbound");
    setLogs([]);
    setActiveStep(0);
  };

  useEffect(() => {
    if (simState === "idle") return;

    const steps = simType === "voice" ? voiceSimulationSteps : chatSimulationSteps;
    if (activeStep < steps.length) {
      const timer = setTimeout(() => {
        setLogs((prev) => [...prev, steps[activeStep].text]);
        setSimState(steps[activeStep].status as SimulationState);
        setActiveStep((prev) => prev + 1);
      }, steps[activeStep].duration);
      return () => clearTimeout(timer);
    } else {
      setSimState("complete");
    }
  }, [simState, activeStep, simType]);

  const resetSim = () => {
    setSimState("idle");
    setLogs([]);
    setActiveStep(0);
  };

  return (
    <section className="relative overflow-hidden h-screen min-h-[500px] md:min-h-[600px] max-h-[800px] lg:max-h-[850px] xl:max-h-[900px] flex flex-col pt-16 sm:pt-20 md:pt-24 pb-4 border-b border-[#99775C]/20 bg-gradient-to-b from-[#EAE7DD] to-white/50" id="hero">
      {/* Visual Background Accents - Floating lightweight animation */}
      <motion.div 
        animate={{ 
          scale: [1, 1.05, 1],
          x: [0, 10, 0],
          y: [0, -10, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] rounded-full bg-[#99775C]/5 blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex items-center">
        {/* Parent Grid - Animates all hero contents together on load */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-12 items-center w-full"
        >
          
          {/* Left Column: Copywriting Pitch (PAS structure) */}
          <div className="md:col-span-7 space-y-3 sm:space-y-4 lg:space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#EAE7DD] border border-[#99775C]/30 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-none">
              <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#99775C] animate-pulse" />
              <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-widest text-[#99775C] font-bold">
                HVAC Contractor AI Infrastructure
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[50px] xl:text-[58px] lg:leading-[1.0] font-serif italic text-[#1A1A1A]">
              Stop Letting Missed Calls
              <span className="text-[#99775C] not-italic font-sans font-black uppercase tracking-tighter block mt-1 sm:mt-2 text-3xl sm:text-5xl lg:text-[52px] xl:text-[60px]">
                Book Your HVAC Competitors.
              </span>
            </h1>

            {/* Problem & Agitate - Scannable & Trimmed */}
            <div className="space-y-2 text-[#1A1A1A]/90">
              <p className="text-xs sm:text-base lg:text-lg font-medium leading-snug text-[#99775C]">
                HVAC Contractors <span className="font-black text-[#1A1A1A]">miss 35% to 50% of inbound calls</span> during heatwaves and freezes, losing <span className="font-black text-[#1A1A1A]">$350–$2,800+ per missed lead</span>.
              </p>
              <p className="text-xs sm:text-sm font-semibold text-[#1A1A1A] leading-relaxed border-l-2 border-[#99775C] pl-3 py-1 bg-[#99775C]/5">
                <strong className="text-[#99775C] uppercase tracking-wider text-[10px] sm:text-xs block mb-0.5">The Solution:</strong> 24/7 AI Voice & Web Chat dispatch agents built exclusively for HVAC Contractors. Integrates directly with ServiceTitan, Housecall Pro & Jobber to answer calls, qualify AC/heating emergencies, and book jobs on autopilot.
              </p>
            </div>

            {/* Conversion CTA Trigger */}
            <div className="grid grid-cols-2 sm:flex sm:flex-row items-center gap-2.5 sm:gap-4 pt-1 sm:pt-2 w-full">
              <motion.button
                onClick={onCtaClick}
                animate={{
                  scale: [1, 1.03, 1],
                  boxShadow: [
                    "0 0 10px rgba(153, 119, 92, 0.3)",
                    "0 0 25px rgba(153, 119, 92, 0.85)",
                    "0 0 10px rgba(153, 119, 92, 0.3)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                className="relative bg-[#1A1A1A] text-white py-3 px-4 sm:px-8 sm:py-3.5 font-black uppercase tracking-widest text-[9px] xs:text-[11px] sm:text-xs hover:bg-[#99775C] transition-colors rounded-none cursor-pointer text-center leading-snug border border-[#99775C]/80 group overflow-hidden"
                id="hero-primary-cta"
              >
                <span className="relative z-10 flex items-center justify-center space-x-1.5">
                  <span>Request Free AI Audit</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse shrink-0" />
                </span>
              </motion.button>
              
              <motion.a
                href="#insights"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="py-3 px-4 sm:px-6 sm:py-3.5 border border-[#99775C] text-[9px] xs:text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#1A1A1A] hover:bg-[#99775C] hover:text-white transition-colors text-center rounded-none leading-snug"
                id="hero-secondary-cta"
              >
                Explore ROI Insights
              </motion.a>
            </div>

            {/* Client Badges */}
            <div className="hidden sm:flex pt-4 border-t border-[#99775C]/20 flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2">
              <span className="text-[8px] sm:text-[9px] font-mono text-[#99775C] uppercase tracking-widest font-bold">Integrates securely with:</span>
              <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-1 font-sans font-black text-[9px] sm:text-[10px] uppercase tracking-widest text-[#1A1A1A]/70">
                <span className="hover:text-[#99775C] transition-colors cursor-default">Housecall Pro</span>
                <span>•</span>
                <span className="hover:text-[#99775C] transition-colors cursor-default">Jobber</span>
                <span>•</span>
                <span className="hover:text-[#99775C] transition-colors cursor-default">ServiceTitan</span>
                <span>•</span>
                <span className="hover:text-[#99775C] transition-colors cursor-default">FieldEdge</span>
              </div>
            </div>
          </div>

          {/* Right Column: AI Dispatch Simulator Widget */}
          <div className="md:col-span-5">
            <div className="bg-[#1A1A1A] rounded-none border border-[#99775C]/30 shadow-xl overflow-hidden relative" id="hero-simulator-container">
              
              {/* Simulator Header */}
              <div className="bg-[#1A1A1A] px-4 py-2.5 sm:px-6 sm:py-4 flex items-center justify-between border-b border-[#99775C]/20">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-green-600 animate-pulse" />
                  <span className="font-mono text-[8px] sm:text-[10px] text-white uppercase tracking-widest font-semibold">
                    TendLine Ops Sandbox
                  </span>
                </div>
                
                {/* Switch Toggles */}
                <div className="flex bg-[#1A1A1A] rounded-none p-0.5 border border-[#99775C]/30">
                  <button
                    onClick={() => { resetSim(); setSimType("voice"); }}
                    className={`px-2 py-0.5 sm:px-3 sm:py-1 rounded-none text-[8px] sm:text-[9px] font-mono uppercase tracking-widest transition-all cursor-pointer ${
                      simType === "voice" ? "bg-[#99775C] text-white font-bold" : "text-white/60 hover:text-white"
                    }`}
                    disabled={simState !== "idle" && simState !== "complete"}
                    id="sim-voice-toggle"
                  >
                    AI Voice
                  </button>
                  <button
                    onClick={() => { resetSim(); setSimType("chat"); }}
                    className={`px-2 py-0.5 sm:px-3 sm:py-1 rounded-none text-[8px] sm:text-[9px] font-mono uppercase tracking-widest transition-all cursor-pointer ${
                      simType === "chat" ? "bg-[#99775C] text-white font-bold" : "text-white/60 hover:text-white"
                    }`}
                    disabled={simState !== "idle" && simState !== "complete"}
                    id="sim-chat-toggle"
                  >
                    AI Chat
                  </button>
                </div>
              </div>

              {/* Terminal Viewport */}
              <div 
                ref={terminalRef}
                className="p-3 sm:p-5 h-[140px] sm:h-[180px] md:h-[200px] lg:h-[240px] xl:h-[280px] overflow-y-auto font-mono text-xs space-y-2 sm:space-y-3 bg-[#130E0C] text-white select-none flex flex-col"
              >
                <AnimatePresence>
                  {simState === "idle" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="h-full flex flex-col items-center justify-center text-center space-y-2 sm:space-y-4 py-2 sm:py-6"
                      id="sim-idle-view"
                    >
                      <div className="p-1.5 sm:p-2.5 bg-[#99775C]/15 rounded-none border border-[#99775C]/30">
                        {simType === "voice" ? (
                          <PhoneCall className="h-5 w-5 sm:h-7 sm:w-7 text-[#99775C] animate-bounce" />
                        ) : (
                          <MessageSquare className="h-5 w-5 sm:h-7 sm:w-7 text-[#99775C] animate-bounce" />
                        )}
                      </div>
                      <div className="space-y-0.5 sm:space-y-1">
                        <p className="font-bold text-white uppercase text-[10px] sm:text-xs tracking-widest">
                          Ready for Dispatch Simulation
                        </p>
                        <p className="text-[8px] sm:text-[10px] text-white/60 max-w-xs mx-auto uppercase tracking-wide px-2">
                          {simType === "voice"
                            ? "Simulate a late-night HVAC emergency call answered instantly by a high-fidelity TendLine voice agent."
                            : "Simulate a Sunday afternoon web booking form routing immediately to your operational schedules."}
                        </p>
                      </div>
                      <button
                        onClick={runSimulation}
                        className="bg-[#99775C] hover:bg-white text-white hover:text-[#1A1A1A] text-[8px] sm:text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 sm:px-4 sm:py-2 rounded-none transition-all cursor-pointer shadow-md"
                        id="run-sim-btn"
                      >
                        Run Simulation
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Log Stream */}
                {logs.map((log, index) => {
                  let logColor = "text-white/80";
                  if (log.includes("🤖")) logColor = "text-[#EAE7DD] font-semibold";
                  if (log.includes("👤") || log.includes("🗣️")) logColor = "text-[#C2A287]";
                  if (log.includes("🗄️") || log.includes("CRM")) logColor = "text-amber-400 font-semibold";
                  if (log.includes("📱") || log.includes("SMS")) logColor = "text-sky-400";
                  if (log.includes("🚀") || log.includes("Status")) logColor = "text-emerald-400 font-bold border-t border-[#99775C]/20 pt-1.5 mt-1.5";

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -5, y: 5 }}
                      animate={{ opacity: 1, x: 0, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`leading-relaxed text-[10px] sm:text-[11px] ${logColor}`}
                    >
                      {log}
                    </motion.div>
                  );
                })}

                {/* Processing Indicator */}
                {(simState !== "idle" && simState !== "complete") && (
                  <div className="flex items-center space-x-1.5 sm:space-x-2 text-[#99775C] text-[9px] sm:text-[10px] pt-1" id="sim-processing-indicator">
                    <RefreshCw className="h-2.5 w-2.5 sm:h-3 sm:w-3 animate-spin text-[#99775C]" />
                    <span className="animate-pulse uppercase tracking-wider">TendLine Router executing pipeline...</span>
                  </div>
                )}
              </div>

              {/* Live Pipeline Flow Status Bar */}
              <div className="bg-[#1A1A1A] border-t border-[#99775C]/20 px-1.5 py-2.5 sm:px-5 sm:py-3.5 grid grid-cols-4 gap-1 sm:gap-1.5 text-center text-[7px] sm:text-[9px] font-mono">
                <div className={`py-0.5 sm:py-1 rounded-none transition-all truncate ${simState === "inbound" ? "bg-[#99775C] text-white font-bold" : "bg-transparent text-white/30"}`}>
                  1. Inbound
                </div>
                <div className={`py-0.5 sm:py-1 rounded-none transition-all truncate ${simState === "qualifying" ? "bg-[#99775C] text-white font-bold" : "bg-transparent text-white/30"}`}>
                  2. Triage
                </div>
                <div className={`py-0.5 sm:py-1 rounded-none transition-all truncate ${simState === "crm_logging" ? "bg-[#99775C] text-white font-bold" : "bg-transparent text-white/30"}`}>
                  3. Sync CRM
                </div>
                <div className={`py-0.5 sm:py-1 rounded-none transition-all truncate ${simState === "dispatched" || simState === "complete" ? "bg-[#99775C] text-white font-bold" : "bg-transparent text-white/30"}`}>
                  4. Alert
                </div>
              </div>

              {/* Reset Control (Only on Complete) */}
              {simState === "complete" && (
                <div className="absolute inset-0 bg-[#1A1A1A]/95 backdrop-blur-sm flex flex-col items-center justify-center p-4 sm:p-6 text-center animate-fade-in" id="sim-complete-overlay">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 bg-emerald-500/10 border border-emerald-500/30 rounded-none flex items-center justify-center mb-2 sm:mb-3">
                    <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400" />
                  </div>
                  <h4 className="font-sans text-white font-black text-[10px] sm:text-xs uppercase tracking-widest">
                    Revenue Leak Stopped Successfully
                  </h4>
                  <p className="text-[8px] sm:text-[10px] text-[#EAE7DD] max-w-xs mt-1 sm:mt-1.5 leading-relaxed uppercase tracking-wider px-2">
                    This automated workflow operates 24/7/365 without human oversight, catching leads instantly.
                  </p>
                  <div className="flex items-center space-x-2 sm:space-x-3 mt-3 sm:mt-4">
                    <button
                      onClick={resetSim}
                      className="px-3 py-1.5 sm:px-4 sm:py-2 bg-transparent border border-[#99775C] hover:bg-[#99775C] text-white text-[8px] sm:text-[10px] font-mono uppercase tracking-widest transition-all cursor-pointer rounded-none"
                      id="sim-restart-btn"
                    >
                      Restart
                    </button>
                    <button
                      onClick={onCtaClick}
                      className="bg-[#99775C] hover:bg-white text-white hover:text-[#1A1A1A] text-[8px] sm:text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 sm:px-4 sm:py-2 rounded-none transition-all cursor-pointer"
                      id="sim-cta-btn"
                    >
                      Deploy This System
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
