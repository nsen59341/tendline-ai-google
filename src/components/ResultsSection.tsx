/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { insights } from "../data";
import { FileText, CheckCircle2, Zap, AlertCircle, TrendingUp, Play, ArrowRight } from "lucide-react";
import AppLink from "./AppLink";

interface ResultsSectionProps {
  onCtaClick: () => void;
}

export default function ResultsSection({ onCtaClick }: ResultsSectionProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);
  const [autoplayCount, setAutoplayCount] = useState(0);

  // Autoplay feature: auto-advance through 2-3 items once, then stop & hand control to user
  useEffect(() => {
    if (userInteracted || autoplayCount >= 2) return;

    const timer = setTimeout(() => {
      setActiveTab((prev) => (prev + 1) % insights.length);
      setAutoplayCount((prev) => prev + 1);
    }, 3200);

    return () => clearTimeout(timer);
  }, [activeTab, userInteracted, autoplayCount]);

  const handleTabClick = (idx: number) => {
    setUserInteracted(true);
    setActiveTab(idx);
  };

  const currentInsight = insights[activeTab];

  return (
    <section className="py-16 sm:py-20 bg-[#EAE7DD] border-b border-[#99775C]/20" id="insights">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10"
        >
          <div className="max-w-3xl space-y-2">
            <span className="font-mono text-xs text-[#99775C] uppercase tracking-widest font-extrabold flex items-center">
              <TrendingUp className="h-4 w-4 mr-1.5 text-[#99775C]" />
              Field-Tested AI Benchmarks
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#1A1A1A] tracking-tighter uppercase">
              5 Strategic Insights: <span className="font-serif italic text-[#99775C] lowercase">the science of AI ROI</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#1A1A1A]/80 font-medium leading-relaxed">
              Data from 1,200+ HVAC contractors across North America. Scannable findings in 15 seconds:
            </p>
          </div>

          <AppLink
            href="/blog"
            className="inline-flex items-center space-x-2 self-start sm:self-auto px-4 py-2 bg-white border border-[#99775C]/40 hover:border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white text-xs font-bold uppercase tracking-widest transition-colors duration-200 rounded-none whitespace-nowrap shrink-0"
            id="all-insights-link"
          >
            <span>All Insights</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </AppLink>
        </motion.div>

        {/* Interactive Grid Board */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
        >
          
          {/* Left Menu: Tabs Column */}
          <div className="lg:col-span-4 space-y-3 overflow-hidden">
            <div className="flex items-center justify-between px-1">
              <span className="text-[10px] font-mono font-bold text-[#99775C] uppercase tracking-widest block">
                Select Vertical Insight
              </span>
              {!userInteracted && autoplayCount < 2 && (
                <span className="text-[9px] font-mono text-[#99775C] uppercase tracking-widest flex items-center space-x-1 animate-pulse">
                  <Play className="h-2.5 w-2.5 fill-[#99775C]" />
                  <span>Autoplay Preview</span>
                </span>
              )}
            </div>

            <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible pb-3 -mx-4 px-4 lg:mx-0 lg:px-0 gap-2 scrollbar-none">
              {insights.map((insight, idx) => {
                const isActive = activeTab === idx;
                return (
                  <motion.button
                    key={insight.id}
                    onClick={() => handleTabClick(idx)}
                    whileHover={{ scale: 1.01, x: 2 }}
                    whileTap={{ scale: 0.99 }}
                    className={`shrink-0 w-[240px] sm:w-[280px] lg:w-full text-left p-3 sm:p-3.5 rounded-none border transition-all duration-300 cursor-pointer flex items-center space-x-3 ${
                      isActive
                        ? "bg-[#1A1A1A] border-[#1A1A1A] text-white shadow-md"
                        : "bg-white border-[#99775C]/20 hover:border-[#99775C]/50 text-[#1A1A1A]"
                    }`}
                    id={`insight-tab-${idx}`}
                  >
                    <div className={`h-7 w-7 rounded-none flex items-center justify-center shrink-0 ${
                      isActive ? "bg-[#99775C] text-white" : "bg-[#EAE7DD] text-[#99775C]"
                    }`}>
                      <span className="font-mono text-xs font-black">0{insight.id}</span>
                    </div>
                    <div className="truncate flex-1">
                      <h4 className={`text-xs font-bold uppercase tracking-wider truncate ${isActive ? "text-white" : "text-[#1A1A1A]"}`}>
                        {insight.title}
                      </h4>
                      <p className={`text-[9px] font-mono truncate uppercase tracking-wider ${isActive ? "text-[#EAE7DD]/70" : "text-[#99775C]"}`}>
                        Rank: {insight.opportunityScore.overall}% Score
                      </p>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Quick Warning Badge */}
            <div className="hidden lg:block bg-white/80 border border-[#99775C]/20 rounded-none p-3.5 mt-4">
              <div className="flex space-x-2.5 items-center">
                <AlertCircle className="h-4 w-4 text-[#99775C] shrink-0" />
                <p className="text-[11px] text-[#1A1A1A] leading-snug font-medium">
                  Unanswered lines leak up to <strong className="font-black text-[#99775C]">$120,000/year</strong>. Automated dispatch plugs this leak on day 1.
                </p>
              </div>
            </div>
          </div>

          {/* Right Area: Dynamic Viewer Panel */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.25 }}
                className="bg-white border border-[#99775C]/20 rounded-none p-5 sm:p-7 space-y-5 shadow-sm"
                id="insight-display-panel"
              >
                {/* Header Area */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#99775C]/20">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-[9px] uppercase bg-[#EAE7DD] text-[#1A1A1A] px-2 py-0.5 font-bold border border-[#99775C]/30 tracking-widest">
                        Insight 0{currentInsight.id}
                      </span>
                      <span className="text-[10px] font-mono text-[#99775C] uppercase tracking-wider font-semibold">
                        {currentInsight.source}
                      </span>
                    </div>
                    <h3 className="font-serif italic text-xl sm:text-2xl text-[#1A1A1A] tracking-tight">
                      {currentInsight.title}
                    </h3>
                  </div>

                  {/* Priority Rank Badge */}
                  <div className="bg-[#EAE7DD] border border-[#99775C]/30 px-3.5 py-1.5 rounded-none text-center shrink-0 self-start sm:self-auto">
                    <span className="text-[8px] font-mono text-[#99775C] uppercase tracking-widest block leading-none mb-0.5">
                      Priority Rank
                    </span>
                    <span className="text-xl font-sans font-black text-[#99775C] leading-none">
                      {currentInsight.opportunityScore.overall}%
                    </span>
                  </div>
                </div>

                {/* Finding Callout */}
                <div className="bg-[#EAE7DD]/40 border-l-3 border-[#99775C] p-3.5 space-y-1">
                  <span className="text-[9px] font-mono uppercase text-[#99775C] font-black tracking-widest flex items-center">
                    <FileText className="h-3 w-3 mr-1" /> Key Finding
                  </span>
                  <p className="text-xs sm:text-sm text-[#1A1A1A] font-medium leading-relaxed">
                    {currentInsight.finding}
                  </p>
                </div>

                {/* Measured Impact Grid */}
                <div className="space-y-2">
                  <h4 className="text-[10px] font-mono text-[#99775C] uppercase tracking-widest font-black">
                    Measured Results (Field Case Data)
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {currentInsight.measuredImpact.map((metric, i) => (
                      <div key={i} className="flex items-center space-x-2 bg-white border border-[#99775C]/20 p-2.5 rounded-none">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#99775C] shrink-0" />
                        <span className="text-[11px] font-bold text-[#1A1A1A] tracking-tight uppercase leading-snug">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actionable Solution */}
                <div className="bg-[#1A1A1A] text-white p-4 border border-[#99775C]/30 space-y-1.5">
                  <h4 className="text-[10px] font-mono text-[#99775C] uppercase tracking-widest font-extrabold flex items-center">
                    <Zap className="h-3.5 w-3.5 mr-1 text-[#99775C]" />
                    How TendLine Solves This
                  </h4>
                  <p className="text-xs leading-relaxed text-[#EAE7DD] font-normal">
                    {currentInsight.aiOpportunity}
                  </p>
                </div>

                {/* Quick Deploy Trigger & Read Full Article */}
                <div className="pt-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <p className="text-[10px] text-[#99775C] uppercase tracking-wider font-bold">
                    Deploy this module in your exclusive territory:
                  </p>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
                    <AppLink
                      href={`/blog/${currentInsight.articleSlug}`}
                      className="inline-flex items-center justify-center space-x-1.5 px-4 py-2 bg-[#EAE7DD]/70 hover:bg-[#EAE7DD] text-[#1A1A1A] border border-[#99775C]/40 hover:border-[#99775C] text-xs font-bold uppercase tracking-widest transition-colors duration-200 rounded-none whitespace-nowrap"
                      id="insight-read-article-link"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight className="h-3.5 w-3.5 text-[#99775C]" />
                    </AppLink>
                    <button
                      onClick={onCtaClick}
                      className="px-5 py-2 bg-[#1A1A1A] text-white border border-[#99775C]/50 text-xs font-bold uppercase tracking-widest hover:bg-[#99775C] transition-colors duration-200 cursor-pointer rounded-none text-center whitespace-nowrap"
                      id="insight-deploy-btn"
                    >
                      Request Territory Audit
                    </button>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
