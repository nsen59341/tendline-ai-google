/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { ArrowRight, FileText } from "lucide-react";
import { BlogArticle } from "../types";
import AppLink from "./AppLink";

interface ArticleCardProps {
  article: BlogArticle;
  surface?: "white" | "sand";
}

export default function ArticleCard({ article, surface = "white" }: ArticleCardProps) {
  const [imgError, setImgError] = useState(false);
  const cardBg = surface === "white" ? "bg-white" : "bg-[#EAE7DD]/45";

  return (
    <article
      className={`group rounded-none border border-[#99775C]/20 hover:border-[#99775C] transition-colors duration-200 flex flex-col justify-between h-full ${cardBg}`}
      id={`article-card-${article.slug}`}
    >
      <div>
        <AppLink
          href={`/blog/${article.slug}`}
          className="block relative aspect-video overflow-hidden border-b border-[#99775C]/15 bg-[#1A1A1A]"
          ariaLabel={`Read ${article.title}`}
        >
          {!imgError ? (
            <img
              src={article.featuredImage}
              alt={article.featuredImageAlt}
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#1A1A1A] to-[#2B241E]">
              <FileText className="h-8 w-8 text-[#99775C] mb-2" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#EAE7DD]">
                {article.category}
              </span>
            </div>
          )}
        </AppLink>

        <div className="p-6 space-y-3.5">
          {/* Unboxed Clean Metadata */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[10px] uppercase tracking-widest text-[#99775C] font-semibold">
            <span>{article.category}</span>
            <span aria-hidden="true">&middot;</span>
            <time dateTime={article.publishedDate}>{article.publishedDateLabel}</time>
            <span aria-hidden="true">&middot;</span>
            <span>{article.readingTime}</span>
          </div>

          <h3 className="text-lg sm:text-xl font-black text-[#1A1A1A] tracking-tight leading-snug group-hover:text-[#99775C] transition-colors">
            <AppLink href={`/blog/${article.slug}`}>{article.title}</AppLink>
          </h3>

          <p className="text-xs sm:text-sm text-[#1A1A1A]/75 leading-relaxed font-normal line-clamp-3">
            {article.excerpt}
          </p>
        </div>
      </div>

      <div className="px-6 pb-6 pt-3 flex items-center justify-between border-t border-[#99775C]/10 mt-2">
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#99775C]">
          By {article.author.name}
        </span>
        <AppLink
          href={`/blog/${article.slug}`}
          className="inline-flex items-center space-x-1.5 text-xs font-black uppercase tracking-widest text-[#1A1A1A] group-hover:text-[#99775C] transition-colors py-1.5"
          id={`read-article-${article.slug}`}
        >
          <span>Read Article</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </AppLink>
      </div>
    </article>
  );
}
