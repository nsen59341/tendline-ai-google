/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, MessageSquare, PhoneCall, ShieldCheck } from "lucide-react";

interface CtaModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingLink: string;
}

export default function CtaModal({ isOpen, onClose, bookingLink }: CtaModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#1A1A1A]/90 backdrop-blur-md"
            id="modal-backdrop"
          />

          {/* Modal Container - Expanded to max-w-4xl to give the Calendar plenty of space */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative z-10 w-full max-w-4xl overflow-hidden rounded-none border border-[#99775C]/30 bg-[#EAE7DD] text-[#1A1A1A] shadow-2xl"
            id="cta-modal"
          >
            {/* Top Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-[#99775C] hover:text-[#1A1A1A] transition-colors duration-200 cursor-pointer z-50 bg-[#EAE7DD]/80 p-1 md:bg-transparent"
              aria-label="Close modal"
              id="close-modal-btn"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Main Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 min-h-[500px]">
              {/* Left Side: Pitch (Visible only on desktop) */}
              <div className="hidden md:flex md:col-span-4 bg-[#1A1A1A] text-white p-8 flex-col justify-between border-r border-[#99775C]/20">
                <div className="space-y-6">
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-[9px] tracking-widest text-[#99775C] uppercase font-bold">TendLine AI</span>
                  </div>
                  <h3 className="font-sans text-xl font-black uppercase tracking-tight leading-none">
                    Pre-Qualifying Strategy Session
                  </h3>
                  <p className="text-xs text-[#EAE7DD]/80 leading-relaxed font-light">
                    We only partner with 2 HVAC contractors per territory to ensure localized SEO and operational focus. Let's analyze your systems.
                  </p>

                  <div className="space-y-4 pt-4">
                    <div className="flex items-start space-x-3">
                      <PhoneCall className="h-5 w-5 text-[#99775C] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white">Inbound Protection</h4>
                        <p className="text-[11px] text-[#EAE7DD]/70">Secure 100% call capture guarantees.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MessageSquare className="h-5 w-5 text-[#99775C] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white">Interactive Triage</h4>
                        <p className="text-[11px] text-[#EAE7DD]/70">Connect web chat and CRM directly.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <ShieldCheck className="h-5 w-5 text-[#99775C] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white">Compliance Standard</h4>
                        <p className="text-[11px] text-[#EAE7DD]/70">Secure APIs & end-to-end encryption.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-[#99775C]/20 pt-4 mt-6">
                  <div className="flex items-center space-x-2">
                    <span className="h-1.5 w-1.5 rounded-none bg-green-500 animate-pulse"></span>
                    <span className="text-[9px] font-mono text-green-400 uppercase tracking-widest font-bold">Strategy Sessions Available Today</span>
                  </div>
                </div>
              </div>

              {/* Right Side: Direct Intake / Scheduler */}
              <div className="col-span-12 md:col-span-8 p-6 md:p-8 flex flex-col justify-center">
                <div className="space-y-4 flex-1 flex flex-col h-full" id="booking-step">
                  <div className="space-y-1">
                    <span className="font-mono text-[9px] text-[#99775C] uppercase tracking-widest font-bold flex items-center">
                      <Calendar className="h-3.5 w-3.5 mr-1 text-[#99775C]" />
                      Direct Booking Calendar
                    </span>
                    <h3 className="text-2xl font-black text-[#1A1A1A] tracking-tighter uppercase leading-[1.05]">
                      Secure Your AI Strategy Session
                    </h3>
                    <p className="text-xs text-[#99775C] font-medium leading-relaxed">
                      Select a convenient time below with Natasha Sen to lay out your Growth Infrastructure.
                    </p>
                  </div>

                  {/* Cal.com Embedded Iframe */}
                  <div className="relative flex-1 min-h-[400px] md:min-h-[440px] border border-[#99775C]/25 rounded-none overflow-hidden bg-white">
                    <iframe
                      src={`${bookingLink}?embed=true`}
                      width="100%"
                      height="100%"
                      style={{ border: "none" }}
                      title="Book a strategy session with Natasha Sen"
                      className="absolute inset-0"
                    />
                  </div>

                  {/* Backup & Confirm Controls */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-2 border-t border-[#99775C]/20">
                    <p className="text-[9px] text-[#99775C] font-mono uppercase tracking-widest font-bold">
                      Iframe not loading? Book directly using the button on the right.
                    </p>
                    <motion.a
                      href={bookingLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center justify-center space-x-1.5 bg-[#1A1A1A] hover:bg-[#99775C] text-white text-xs font-bold uppercase tracking-widest py-2.5 px-4 rounded-none transition-all"
                      id="direct-booking-link"
                    >
                      <Calendar className="h-3.5 w-3.5" />
                      <span>Open Booking in New Tab</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
