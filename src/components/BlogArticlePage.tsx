/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, ChevronRight, FileText, User } from "lucide-react";
import { BlogArticle } from "../types";
import { getRelatedArticles } from "../data/articles";
import { SOCIAL_PROFILES } from "../data/articlesMeta";
import AppLink from "./AppLink";
import ArticleCard from "./ArticleCard";

interface BlogArticlePageProps {
  article?: BlogArticle;
  onCtaClick: () => void;
}

export default function BlogArticlePage({ article, onCtaClick }: BlogArticlePageProps) {
  const [imgError, setImgError] = useState(false);

  if (!article) {
    return (
      <main className="pt-32 pb-24 bg-[#EAE7DD] min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[#99775C] font-bold">
            404 — Article Not Found
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] uppercase tracking-tight">
            This article could not be found.
          </h1>
          <p className="text-sm text-[#1A1A1A]/75 leading-relaxed">
            The requested article may have moved or the URL may be incorrect. Browse all published TendLine Industry Insights below.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <AppLink
              href="/blog"
              className="inline-flex items-center space-x-2 bg-[#1A1A1A] text-white px-6 py-3 text-xs font-black uppercase tracking-widest hover:bg-[#99775C] transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>All Insights</span>
            </AppLink>
            <AppLink
              href="/"
              className="inline-flex items-center border border-[#99775C] text-[#1A1A1A] px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors"
            >
              Back Home
            </AppLink>
          </div>
        </div>
      </main>
    );
  }

  const relatedArticles = getRelatedArticles(article);

  return (
    <main className="pt-28 sm:pt-32 pb-20 bg-[#EAE7DD] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation: Home -> Industry Insights -> Article Title */}
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-widest text-[#99775C] mb-8"
        >
          <AppLink href="/" className="hover:text-[#1A1A1A] transition-colors">
            Home
          </AppLink>
          <ChevronRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <AppLink href="/blog" className="hover:text-[#1A1A1A] transition-colors">
            Industry Insights
          </AppLink>
          <ChevronRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <span className="text-[#1A1A1A] font-bold truncate max-w-xs sm:max-w-md" aria-current="page">
            {article.title}
          </span>
        </nav>

        {/* Article Header */}
        <header className="max-w-4xl space-y-5 mb-10">
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-xs uppercase tracking-widest text-[#99775C] font-bold">
            <span>{article.category}</span>
            <span aria-hidden="true">&middot;</span>
            <time dateTime={article.publishedDate}>{article.publishedDateLabel}</time>
            <span aria-hidden="true">&middot;</span>
            <span>{article.readingTime}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A1A1A] tracking-tight leading-[1.08] text-balance">
            {article.title}
          </h1>

          {/* Author Byline */}
          <div className="flex items-center space-x-3 pt-1">
            <div className="h-9 w-9 bg-[#1A1A1A] text-[#EAE7DD] flex items-center justify-center rounded-none font-mono text-xs font-bold shrink-0">
              NS
            </div>
            <div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-[#1A1A1A]">
                {article.author.name}
              </div>
              <div className="text-[11px] text-[#99775C] font-medium">
                {article.author.role}
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-12 border border-[#99775C]/25 bg-[#1A1A1A] overflow-hidden aspect-video max-h-[520px] w-full">
          {!imgError ? (
            <img
              src={article.featuredImage}
              alt={article.featuredImageAlt}
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-10 text-center bg-gradient-to-br from-[#1A1A1A] to-[#2B241E]">
              <FileText className="h-10 w-10 text-[#99775C] mb-3" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#EAE7DD]">
                {article.title}
              </span>
            </div>
          )}
        </div>

        {/* Main Content + Editorial Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Article Body */}
          <article className="lg:col-span-8 space-y-10">
            {/* Introduction */}
            <section className="space-y-4 text-base sm:text-[17px] text-[#1A1A1A]/90 leading-[1.75]">
              {article.introduction.map((para, idx) => (
                <p
                  key={idx}
                  className={idx === 0 ? "text-lg sm:text-xl font-medium text-[#1A1A1A] leading-relaxed" : ""}
                >
                  {para}
                </p>
              ))}
            </section>

            {/* Key Takeaways */}
            <section
              aria-label="Key Takeaways"
              className="bg-white border border-[#99775C]/25 p-6 sm:p-8 rounded-none space-y-4"
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#99775C] font-bold">
                Key Takeaways
              </div>
              <ul className="space-y-3">
                {article.keyTakeaways.map((point, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-4 w-4 text-[#99775C] shrink-0 mt-1" />
                    <span className="text-sm sm:text-base text-[#1A1A1A] leading-relaxed font-medium">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Structured Content Sections */}
            {article.sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="space-y-5 pt-6 border-t border-[#99775C]/15"
              >
                <h2 className="text-2xl sm:text-3xl font-black text-[#1A1A1A] tracking-tight leading-snug">
                  {section.heading}
                </h2>

                {section.paragraphs.map((p, idx) => (
                  <p key={idx} className="text-base text-[#1A1A1A]/85 leading-[1.75]">
                    {p}
                  </p>
                ))}

                {section.bullets && section.bullets.length > 0 && (
                  <ul className="space-y-2.5 pl-5 list-disc marker:text-[#99775C] text-base text-[#1A1A1A]/90 leading-relaxed">
                    {section.bullets.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                )}

                {section.subsections?.map((sub, subIdx) => (
                  <div key={subIdx} className="space-y-3 pt-2">
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#1A1A1A] tracking-tight">
                      {sub.heading}
                    </h3>
                    {sub.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="text-base text-[#1A1A1A]/85 leading-[1.75]">
                        {p}
                      </p>
                    ))}
                    {sub.bullets && sub.bullets.length > 0 && (
                      <ul className="space-y-2 pl-5 list-disc marker:text-[#99775C] text-base text-[#1A1A1A]/90 leading-relaxed">
                        {sub.bullets.map((b, bIdx) => (
                          <li key={bIdx}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                {section.callout && (
                  <aside className="bg-white border border-[#99775C]/25 p-5 sm:p-6 rounded-none space-y-1.5">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-[#99775C] font-bold">
                      {section.callout.title}
                    </div>
                    <p className="text-sm sm:text-base text-[#1A1A1A] leading-relaxed font-medium">
                      {section.callout.body}
                    </p>
                  </aside>
                )}

                {section.internalLink && (
                  <div className="pt-1">
                    <AppLink
                      href={section.internalLink.href}
                      className="inline-flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-[#99775C] hover:text-[#1A1A1A] underline underline-offset-4 transition-colors"
                    >
                      <span>{section.internalLink.label}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </AppLink>
                  </div>
                )}
              </section>
            ))}

            {/* Conclusion */}
            <section className="space-y-4 pt-6 border-t border-[#99775C]/20">
              <h2 className="text-2xl sm:text-3xl font-black text-[#1A1A1A] tracking-tight leading-snug">
                {article.conclusion.heading}
              </h2>
              {article.conclusion.paragraphs.map((p, idx) => (
                <p key={idx} className="text-base text-[#1A1A1A]/85 leading-[1.75]">
                  {p}
                </p>
              ))}
            </section>

            {/* Author Profile Card */}
            <section
              id="author-natasha-sen"
              aria-label="About the author"
              className="bg-white border border-[#99775C]/25 p-6 sm:p-8 rounded-none flex flex-col sm:flex-row items-start gap-5"
            >
              <div className="h-14 w-14 bg-[#1A1A1A] text-[#EAE7DD] flex items-center justify-center rounded-none shrink-0">
                <User className="h-6 w-6 text-[#99775C]" />
              </div>
              <div className="space-y-2">
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#99775C] font-bold">
                  About the Author
                </div>
                <h3 className="text-lg font-black text-[#1A1A1A] uppercase tracking-tight">
                  {article.author.name}
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-[#99775C]">
                  {article.author.role}
                </p>
                <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
                  {article.author.bio}
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-1" aria-label="Author Social Profiles">
                  {SOCIAL_PROFILES.map((profile) => (
                    <a
                      key={profile.name}
                      href={profile.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 font-mono text-[10px] font-bold uppercase tracking-widest text-[#99775C] hover:text-[#1A1A1A] underline underline-offset-4 transition-colors"
                    >
                      <span>{profile.name}</span>
                      <ArrowUpRight className="h-3 w-3 shrink-0" />
                    </a>
                  ))}
                </div>
              </div>
            </section>

            {/* Strategy Session CTA */}
            <section className="bg-[#1A1A1A] text-white p-8 sm:p-10 border border-[#99775C]/40 rounded-none space-y-5">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#99775C] font-bold block">
                TendLine Automation Systems
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight leading-tight">
                {article.cta.heading}
              </h2>
              <p className="text-sm text-[#EAE7DD]/85 leading-relaxed max-w-2xl">
                {article.cta.description}
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={onCtaClick}
                  className="bg-[#EAE7DD] hover:bg-white text-[#1A1A1A] px-6 py-3.5 text-xs font-black uppercase tracking-widest transition-colors cursor-pointer whitespace-nowrap"
                  id="article-cta-primary"
                >
                  {article.cta.primaryLabel}
                </button>
                <AppLink
                  href={article.cta.secondaryHref}
                  className="inline-flex items-center justify-center space-x-2 border border-[#99775C] text-[#EAE7DD] hover:bg-[#99775C] hover:text-white px-6 py-3.5 text-xs font-bold uppercase tracking-widest transition-colors whitespace-nowrap"
                >
                  <span>{article.cta.secondaryLabel}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </AppLink>
              </div>
            </section>
          </article>

          {/* Editorial Sidebar */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            <div className="bg-white border border-[#99775C]/25 p-6 rounded-none space-y-4">
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#99775C] font-bold border-b border-[#99775C]/15 pb-2">
                In This Article
              </div>
              <nav aria-label="Table of contents">
                <ul className="space-y-2.5">
                  {article.sections.map((section, idx) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="text-xs font-bold text-[#1A1A1A]/80 hover:text-[#99775C] transition-colors flex items-start space-x-2 leading-snug"
                      >
                        <span className="font-mono text-[10px] text-[#99775C] shrink-0 mt-0.5">
                          0{idx + 1}.
                        </span>
                        <span>{section.heading}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="bg-white border border-[#99775C]/25 p-6 rounded-none space-y-4">
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#99775C] font-bold">
                TendLine Services
              </div>
              <h3 className="text-base font-black text-[#1A1A1A] uppercase tracking-tight">
                AI Voice Agents, Chatbots &amp; CRM Workflows
              </h3>
              <p className="text-xs text-[#1A1A1A]/75 leading-relaxed">
                Explore how we connect 24/7 call capture, web chat, and automated follow-ups into ServiceTitan, Housecall Pro, and Jobber.
              </p>
              <div className="space-y-2 pt-1">
                <AppLink
                  href="/#offers"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-[#1A1A1A] hover:bg-[#99775C] text-white py-3 px-4 text-xs font-black uppercase tracking-widest transition-colors"
                >
                  <span>Explore AI Blueprint Offers</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </AppLink>
                <AppLink
                  href="/#diagnostic"
                  className="w-full inline-flex items-center justify-center border border-[#99775C]/40 hover:border-[#1A1A1A] text-[#1A1A1A] py-2.5 px-4 text-[11px] font-bold uppercase tracking-widest transition-colors"
                >
                  Run Leakage Diagnostic
                </AppLink>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section
            className="mt-16 pt-12 border-t border-[#99775C]/25 space-y-8"
            aria-labelledby="related-articles-heading"
          >
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div className="space-y-1.5">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#99775C] font-bold">
                  Continue Reading
                </span>
                <h2
                  id="related-articles-heading"
                  className="text-2xl sm:text-3xl font-black text-[#1A1A1A] uppercase tracking-tight"
                >
                  Related <span className="font-serif italic text-[#99775C] lowercase font-normal">insights</span>
                </h2>
              </div>
              <AppLink
                href="/blog"
                className="inline-flex items-center space-x-1.5 text-xs font-black uppercase tracking-widest text-[#1A1A1A] hover:text-[#99775C] transition-colors"
              >
                <span>All Insights</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </AppLink>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedArticles.map((related) => (
                <div key={related.slug} className="flex">
                  <ArticleCard article={related} surface="white" />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
