/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import { BlogArticle } from "../types";
import { SOCIAL_SAME_AS } from "../data/articlesMeta";

export const DEFAULT_SEO = {
  title: "TendLine | AI Automation, Chatbots & Voice Agents for Businesses",
  description:
    "TendLine helps HVAC and home-service businesses capture more leads, automate customer follow-ups and book more jobs using AI chatbots, voice agents and automation systems.",
};

export const BLOG_LIST_SEO = {
  title: "Industry Insights | HVAC AI Automation, Voice Agents & Chatbots | TendLine",
  description:
    "Explore TendLine's Industry Insights on HVAC AI voice agents, emergency call capture, web lead chatbots, automated Google reviews, and predictive seasonal maintenance.",
};

interface SeoHeadProps {
  pathname: string;
  article?: BlogArticle;
  isBlogList?: boolean;
}

function setMetaTag(selector: string, attrName: "name" | "property", attrValue: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function SeoHead({ pathname, article, isBlogList }: SeoHeadProps) {
  useEffect(() => {
    const origin = window.location.origin;
    const canonicalUrl = `${origin}${pathname === "/" ? "/" : pathname}`;

    let title = DEFAULT_SEO.title;
    let description = DEFAULT_SEO.description;
    let ogType = "website";
    let ogImage: string | null = null;
    let structuredData: Record<string, unknown>;

    if (article) {
      title = article.seoTitle;
      description = article.seoDescription;
      ogType = "article";
      ogImage = article.featuredImage.startsWith("http")
        ? article.featuredImage
        : `${origin}${article.featuredImage.startsWith("/") ? "" : "/"}${article.featuredImage}`;

      structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: article.title,
        description: article.seoDescription,
        image: [ogImage],
        datePublished: article.publishedDate,
        dateModified: article.publishedDate,
        articleSection: article.category,
        keywords: article.keywords.join(", "),
        author: {
          "@type": "Person",
          name: article.author.name,
          jobTitle: article.author.role,
          url: `${origin}${article.author.profileUrl}`,
          sameAs: SOCIAL_SAME_AS,
        },
        publisher: {
          "@type": "Organization",
          name: "TendLine",
          url: origin,
          sameAs: SOCIAL_SAME_AS,
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": canonicalUrl,
        },
      };
    } else if (isBlogList) {
      title = BLOG_LIST_SEO.title;
      description = BLOG_LIST_SEO.description;
      ogType = "website";
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "TendLine Industry Insights",
        description: BLOG_LIST_SEO.description,
        url: canonicalUrl,
        publisher: {
          "@type": "Organization",
          name: "TendLine",
          url: origin,
        },
      };
    } else {
      structuredData = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "TendLine",
        applicationCategory: "BusinessApplication",
        operatingSystem: "All",
        description: DEFAULT_SEO.description,
      };
    }

    document.title = title;
    setMetaTag('meta[name="description"]', "name", "description", description);
    setMetaTag('meta[property="og:type"]', "property", "og:type", ogType);
    setMetaTag('meta[property="og:site_name"]', "property", "og:site_name", "TendLine");
    setMetaTag('meta[property="og:title"]', "property", "og:title", title);
    setMetaTag('meta[property="og:description"]', "property", "og:description", description);
    setMetaTag('meta[property="og:url"]', "property", "og:url", canonicalUrl);

    setMetaTag('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMetaTag('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMetaTag('meta[name="twitter:description"]', "name", "twitter:description", description);

    if (ogImage) {
      setMetaTag('meta[property="og:image"]', "property", "og:image", ogImage);
      setMetaTag('meta[property="og:image:alt"]', "property", "og:image:alt", article?.featuredImageAlt || title);
      setMetaTag('meta[name="twitter:image"]', "name", "twitter:image", ogImage);
    } else {
      document.querySelector('meta[property="og:image"]')?.remove();
      document.querySelector('meta[property="og:image:alt"]')?.remove();
      document.querySelector('meta[name="twitter:image"]')?.remove();
    }

    let canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonicalUrl);

    document.querySelectorAll('script[type="application/ld+json"]').forEach((node) => node.remove());
    const ldScript = document.createElement("script");
    ldScript.setAttribute("type", "application/ld+json");
    ldScript.setAttribute("data-seo-ld", "true");
    ldScript.textContent = JSON.stringify(structuredData);
    document.head.appendChild(ldScript);
  }, [pathname, article, isBlogList]);

  return null;
}
