/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, MapPin, ShieldCheck, ArrowUpRight, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import AppLink from "./AppLink";
import BrandLogo from "./BrandLogo";
import { SOCIAL_PROFILES, WHATSAPP_CONTACT } from "../data/articlesMeta";

interface FooterProps {
  onCtaClick: () => void;
  bookingLink: string;
}

export default function Footer({ onCtaClick, bookingLink }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const techStack = ["Voiceflow", "Vapi", "Retell AI", "Make.com", "n8n", "Bolt", "Lovable (AI coding)"];

  const footerLinks = [
    { label: "Industry Insights", href: "/#insights" },
    { label: "Diagnostic Scanner", href: "/#diagnostic" },
    { label: "AI Blueprint Offers", href: "/#offers" },
    { label: "Security & Trust", href: "/#security" },
    { label: "FAQs", href: "/#faqs" },
    { label: "All Insights", href: "/blog" },
  ];

  return (
    <footer className="bg-[#1A1A1A] text-[#D4CFC9] pt-16 pb-12 border-t border-[#99775C]/25 relative" id="footer">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-[#99775C]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper Footer Grid with scroll fade-in */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#99775C]/20"
        >
          
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-4">
            <AppLink href="/" className="inline-block w-full max-w-[260px]" ariaLabel="TendLine AI Growth Systems Home">
              <BrandLogo variant="card" className="w-full" />
            </AppLink>
            
            <p className="text-xs text-[#BCB6AF] leading-relaxed max-w-sm font-medium uppercase tracking-tight">
              Premium B2B AI operational systems and 24/7 autonomous dispatch infrastructure designed exclusively for HVAC Contractors across North America.
            </p>

            <div className="flex items-center space-x-2 bg-[#EAE7DD]/10 border border-[#99775C]/20 p-2 rounded-none max-w-xs">
              <span className="h-1.5 w-1.5 rounded-none bg-green-500 shrink-0 animate-pulse"></span>
              <span className="font-mono text-[8px] text-white uppercase tracking-widest font-bold">
                TendLine AI Standard Verified
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-3.5">
            <h5 className="font-mono text-[9px] text-white uppercase tracking-widest font-extrabold">
              Site Navigation
            </h5>
            <ul className="space-y-2 text-xs font-bold uppercase tracking-wider" aria-label="Footer Navigation">
              {footerLinks.map((item) => (
                <li key={item.label}>
                  <AppLink
                    href={item.href}
                    className="inline-block transition-colors text-[#A59F97] hover:text-white"
                  >
                    {item.label}
                  </AppLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Technical Stack */}
          <div className="md:col-span-3 space-y-3.5">
            <h5 className="font-mono text-[9px] text-white uppercase tracking-widest font-extrabold">
              Agency Tech Stack
            </h5>
            <div className="flex flex-wrap gap-1.5" aria-label="Technical Stack Integrations">
              {techStack.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05, borderColor: "#99775C" }}
                  className="font-mono text-[9px] bg-[#EAE7DD]/10 text-white px-2.5 py-1 rounded-none border border-[#99775C]/20 shrink-0 uppercase tracking-widest cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
            <p className="text-[9px] text-[#99775C] font-mono leading-relaxed uppercase font-bold tracking-wider">
              Hardened, API-first integrations with failover redundancy. No brittle templates.
            </p>
          </div>

          {/* Core Contacts & Booking */}
          <div className="md:col-span-3 space-y-4">
            <h5 className="font-mono text-[9px] text-white uppercase tracking-widest font-extrabold">
              Contact & Booking
            </h5>
            
            <div className="space-y-2.5 text-xs text-[#A59F97] uppercase tracking-wider font-bold" aria-label="Contact Information">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[#99775C] shrink-0" />
                <span>United States Market Operations</span>
              </div>
              <a
                href="mailto:nsen59341@gmail.com"
                className="flex items-center space-x-2 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 text-[#99775C] shrink-0" />
                <span className="truncate">nsen59341@gmail.com</span>
              </a>
              <a
                href={WHATSAPP_CONTACT.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-[#EAE7DD] hover:text-[#99775C] transition-colors group"
                id="footer-whatsapp-link"
                aria-label={`Chat on WhatsApp with ${WHATSAPP_CONTACT.number}`}
              >
                <MessageCircle className="h-4 w-4 text-[#99775C] shrink-0 group-hover:scale-110 transition-transform" />
                <span>WhatsApp: {WHATSAPP_CONTACT.number}</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-[#99775C] shrink-0" />
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-1" aria-label="Social Profiles">
              {SOCIAL_PROFILES.map((profile) => (
                <a
                  key={profile.name}
                  href={profile.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 font-mono text-[10px] uppercase tracking-widest px-2.5 py-1.5 border border-[#99775C]/30 bg-[#EAE7DD]/5 text-[#EAE7DD] hover:border-[#99775C] hover:bg-[#99775C] hover:text-white transition-colors"
                  aria-label={`TendLine ${profile.name}`}
                >
                  <span>{profile.name}</span>
                  <ArrowUpRight className="h-3 w-3 shrink-0" />
                </a>
              ))}
            </div>

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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="relative w-full bg-[#EAE7DD] hover:bg-white text-[#1A1A1A] text-xs font-black uppercase tracking-widest py-3.5 px-6 rounded-none transition-colors cursor-pointer font-sans border border-[#99775C]/80 overflow-hidden"
              id="footer-cta-btn"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>Book Discovery Meeting</span>
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse shrink-0" />
              </span>
            </motion.button>
          </div>

        </motion.div>

        {/* Lower Footer Area */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-[9px] text-[#8C857D] font-mono uppercase tracking-widest">
          <div className="space-y-1">
            <p>
              &copy; {currentYear} TendLine. Built for Solopreneurs & SMB contractors. All rights reserved.
            </p>
            <p className="text-[#6C655F]">
              TendLine AI &bull; AI Growth Infrastructure &bull; Vertical: Home Services &bull; 2025&ndash;2026 &bull; Natasha Sen
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <AppLink href="/#security" className="hover:text-white transition-colors flex items-center">
              <ShieldCheck className="h-3.5 w-3.5 mr-1 text-green-500" />
              <span>Data Protection Guidelines</span>
            </AppLink>
            <span>|</span>
            <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Direct Scheduler Link
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
