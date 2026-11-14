/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useMemo, useState } from "react";
import { ArrowRight, ChevronRight, Search, TrendingUp, X } from "lucide-react";
import { blogArticles } from "../data/articles";
import { BlogCategory } from "../types";
import AppLink from "./AppLink";
import ArticleCard from "./ArticleCard";

interface BlogListPageProps {
  onCtaClick: () => void;
}

const CATEGORIES: ("All" | BlogCategory)[] = [
  "All",
  "HVAC Automation",
  "AI Voice Agents",
  "AI Chatbots",
  "Business Automation",
  "AI Technology",
];

export default function BlogListPage({ onCtaClick }: BlogListPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<"All" | BlogCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return blogArticles.filter((article) => {
      const matchesCategory =
        selectedCategory === "All" || article.category === selectedCategory;
      if (!matchesCategory) return false;
      if (!query) return true;

      return (
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query) ||
        article.keywords.some((kw) => kw.toLowerCase().includes(query))
      );
    });
  }, [selectedCategory, searchQuery]);

  return (
    <main className="pt-28 sm:pt-32 pb-20 bg-[#EAE7DD] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center space-x-2 font-mono text-[11px] uppercase tracking-widest text-[#99775C]"
        >
          <AppLink href="/" className="hover:text-[#1A1A1A] transition-colors">
            Home
          </AppLink>
          <ChevronRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <span className="text-[#1A1A1A] font-bold" aria-current="page">
            Industry Insights
          </span>
        </nav>

        {/* Page Header */}
        <header className="max-w-3xl space-y-3">
          <span className="font-mono text-xs text-[#99775C] uppercase tracking-widest font-extrabold flex items-center">
            <TrendingUp className="h-4 w-4 mr-1.5 text-[#99775C]" />
            TendLine Research &amp; Implementation Guides
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#1A1A1A] tracking-tighter uppercase leading-[1.05]">
            Industry <span className="font-serif italic text-[#99775C] lowercase font-normal">Insights</span>
          </h1>
          <p className="text-sm sm:text-base text-[#1A1A1A]/80 leading-relaxed font-medium">
            Practical guides for HVAC and home-service business owners on stopping missed-call revenue leakage, deploying AI voice agents and chatbots responsibly, and automating CRM follow-ups.
          </p>
        </header>

        {/* Search & Category Filter Controls */}
        <div className="border-y border-[#99775C]/20 py-5 space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Category Filters */}
            <div
              className="flex flex-wrap items-center gap-2"
              role="group"
              aria-label="Filter articles by category"
            >
              {CATEGORIES.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3.5 py-2 text-[11px] font-bold uppercase tracking-widest transition-colors rounded-none cursor-pointer whitespace-nowrap shrink-0 border ${
                      isActive
                        ? "bg-[#1A1A1A] text-white border-[#1A1A1A]"
                        : "bg-white text-[#99775C] border-[#99775C]/25 hover:border-[#99775C] hover:text-[#1A1A1A]"
                    }`}
                    id={`blog-filter-${category.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-72 shrink-0">
              <Search
                className="h-4 w-4 text-[#99775C] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search insights..."
                aria-label="Search articles"
                id="blog-search-input"
                className="w-full bg-white border border-[#99775C]/30 focus:border-[#1A1A1A] focus:outline-none pl-9 pr-8 py-2 text-xs text-[#1A1A1A] placeholder:text-[#99775C]/70 rounded-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#99775C] hover:text-[#1A1A1A] cursor-pointer"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>

          <div className="font-mono text-[10px] uppercase tracking-widest text-[#99775C] tabular-nums">
            Showing {filteredArticles.length} of {blogArticles.length} Articles
          </div>
        </div>

        {/* Articles Grid */}
        <section aria-label="Published articles">
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {filteredArticles.map((article) => (
                <div key={article.slug} className="flex">
                  <ArticleCard article={article} surface="white" />
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white border border-[#99775C]/20 p-10 text-center space-y-4">
              <p className="text-sm font-bold text-[#1A1A1A]">
                No articles matched your current filter or search term.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="bg-[#1A1A1A] text-white px-5 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-[#99775C] transition-colors cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}
        </section>

        {/* Bottom CTA Strip */}
        <section className="bg-[#1A1A1A] text-white p-8 sm:p-10 border border-[#99775C]/30 rounded-none flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#99775C] font-bold block">
              TendLine AI Systems
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
              Want these systems running in your HVAC business?
            </h2>
            <p className="text-xs sm:text-sm text-[#EAE7DD]/80 leading-relaxed">
              Explore our AI Voice Agents, web chat, and automated CRM follow-up blueprints built for ServiceTitan, Housecall Pro, and Jobber.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <AppLink
              href="/#offers"
              className="inline-flex items-center justify-center space-x-2 border border-[#99775C] text-[#EAE7DD] hover:bg-[#99775C] hover:text-white px-5 py-3 text-xs font-bold uppercase tracking-widest transition-colors whitespace-nowrap"
            >
              <span>Explore Services</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </AppLink>
            <button
              type="button"
              onClick={onCtaClick}
              className="inline-flex items-center justify-center bg-[#EAE7DD] hover:bg-white text-[#1A1A1A] px-6 py-3 text-xs font-black uppercase tracking-widest transition-colors cursor-pointer whitespace-nowrap"
              id="blog-list-cta-btn"
            >
              Book Strategy Session
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
