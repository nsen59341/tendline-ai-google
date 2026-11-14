/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import AppLink from "./AppLink";

interface NavbarProps {
  onCtaClick: () => void;
}

export default function Navbar({ onCtaClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Industry Insights", href: "/#insights" },
    { name: "Diagnostic Scanner", href: "/#diagnostic" },
    { name: "AI Blueprint Offers", href: "/#offers" },
    { name: "Security & Trust", href: "/#security" },
    { name: "FAQs", href: "/#faqs" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#EAE7DD]/95 backdrop-blur-md border-b border-[#99775C]/20 py-3 shadow-sm"
          : "bg-[#EAE7DD] border-b border-[#99775C]/10 py-5"
      }`}
      id="main-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo & Navigation Group */}
          <div className="flex items-center space-x-8 xl:space-x-12 min-w-0">
            {/* Logo Brand Area */}
            <div className="flex items-center space-x-2 shrink-0">
              <AppLink href="/" className="flex items-center space-x-2 group">
                <div className="h-8 w-8 bg-[#99775C] flex items-center justify-center rounded-xs transition-transform duration-300 group-hover:scale-105 shrink-0">
                  <span className="font-sans font-black text-[#EAE7DD] text-sm tracking-tighter">TL</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-sans font-black text-xl tracking-tighter uppercase text-[#1A1A1A] group-hover:text-[#99775C] transition-colors leading-none whitespace-nowrap">
                    TendLine
                  </span>
                  <span className="font-mono text-[8px] uppercase tracking-widest text-[#99775C] leading-none mt-1 whitespace-nowrap">
                    AI Growth Systems
                  </span>
                </div>
              </AppLink>
            </div>

            {/* Desktop Navigation Link items */}
            <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <span key={link.name} className="shrink-0">
                  <AppLink
                    href={link.href}
                    className="text-xs font-bold text-[#99775C] hover:text-[#1A1A1A] tracking-widest uppercase transition-colors duration-200 whitespace-nowrap"
                  >
                    {link.name}
                  </AppLink>
                </span>
              ))}
            </nav>
          </div>

          {/* Call-to-Action Area */}
          <div className="hidden lg:flex items-center shrink-0">
            <motion.button
              onClick={onCtaClick}
              animate={{
                scale: [1, 1.03, 1],
                boxShadow: [
                  "0 0 8px rgba(153, 119, 92, 0.3)",
                  "0 0 22px rgba(153, 119, 92, 0.85)",
                  "0 0 8px rgba(153, 119, 92, 0.3)"
                ]
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              className="relative bg-[#1A1A1A] text-white px-6 py-2.5 text-xs font-black uppercase tracking-widest hover:bg-[#99775C] transition-colors rounded-none cursor-pointer border border-[#99775C]/80 group overflow-hidden whitespace-nowrap shrink-0"
              id="navbar-cta-btn"
            >
              <span className="relative z-10 flex items-center space-x-1.5">
                <span>Strategy Session</span>
                <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse shrink-0" />
              </span>
            </motion.button>
          </div>

          {/* Mobile / Tablet Menu Toggle Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#1A1A1A] hover:bg-[#99775C]/10 transition-colors rounded-none"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#EAE7DD] border-b border-[#99775C]/20 overflow-hidden"
            id="mobile-menu-panel"
          >
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <AppLink
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2.5 text-xs font-bold tracking-widest uppercase text-[#99775C] hover:bg-[#99775C]/10"
                  >
                    {link.name}
                  </AppLink>
                </div>
              ))}
              <div className="pt-4 pb-2 border-t border-[#99775C]/20 px-3">
                <motion.button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onCtaClick();
                  }}
                  animate={{
                    scale: [1, 1.02, 1],
                    boxShadow: [
                      "0 0 8px rgba(153, 119, 92, 0.3)",
                      "0 0 20px rgba(153, 119, 92, 0.8)",
                      "0 0 8px rgba(153, 119, 92, 0.3)"
                    ]
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="relative w-full bg-[#1A1A1A] text-white py-3 text-xs font-black uppercase tracking-widest hover:bg-[#99775C] transition-colors rounded-none cursor-pointer text-center border border-[#99775C]/80 overflow-hidden"
                  id="mobile-navbar-cta-btn"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-1.5">
                    <span>Book Strategy Session</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse shrink-0" />
                  </span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
