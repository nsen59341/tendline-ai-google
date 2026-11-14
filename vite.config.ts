import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig, type Plugin} from 'vite';
import {articlesMeta, DEFAULT_AUTHOR, SOCIAL_SAME_AS} from './src/data/articlesMeta';

function escapeHtmlAttr(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function buildRouteHtml(
  baseHtml: string,
  opts: {
    title: string;
    description: string;
    canonicalPath: string;
    ogType: 'website' | 'article';
    jsonLd: Record<string, unknown>;
  }
): string {
  const siteOrigin = 'https://tendline.xyz';
  const canonicalUrl = `${siteOrigin}${opts.canonicalPath}`;
  const safeTitle = escapeHtmlAttr(opts.title);
  const safeDesc = escapeHtmlAttr(opts.description);

  let html = baseHtml;
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${safeTitle}</title>`);
  html = html.replace(
    /<meta\s+name="description"[\s\S]*?\/>/i,
    `<meta name="description" content="${safeDesc}" />`
  );
  html = html.replace(
    /<meta\s+property="og:type"[\s\S]*?\/>/i,
    `<meta property="og:type" content="${opts.ogType}" />`
  );
  html = html.replace(
    /<meta\s+property="og:title"[\s\S]*?\/>/i,
    `<meta property="og:title" content="${safeTitle}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"[\s\S]*?\/>/i,
    `<meta property="og:description" content="${safeDesc}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:title"[\s\S]*?\/>/i,
    `<meta name="twitter:title" content="${safeTitle}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:description"[\s\S]*?\/>/i,
    `<meta name="twitter:description" content="${safeDesc}" />`
  );
  html = html.replace(
    /<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/i,
    `<link rel="canonical" href="${canonicalUrl}" />\n    <meta property="og:url" content="${canonicalUrl}" />\n    <script type="application/ld+json">${JSON.stringify(opts.jsonLd)}</script>`
  );
  return html;
}

function staticRouteSeoPlugin(): Plugin {
  return {
    name: 'tendline-static-route-seo',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const indexHtmlPath = path.join(distDir, 'index.html');
      if (!fs.existsSync(indexHtmlPath)) return;

      const baseHtml = fs.readFileSync(indexHtmlPath, 'utf8');

      // Generate /blog/index.html
      const blogDir = path.join(distDir, 'blog');
      fs.mkdirSync(blogDir, {recursive: true});
      const blogListHtml = buildRouteHtml(baseHtml, {
        title: 'Industry Insights | HVAC AI Automation, Voice Agents & Chatbots | TendLine',
        description:
          "Explore TendLine's Industry Insights on HVAC AI voice agents, emergency call capture, web lead chatbots, automated Google reviews, and predictive seasonal maintenance.",
        canonicalPath: '/blog',
        ogType: 'website',
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'TendLine Industry Insights',
          url: 'https://tendline.xyz/blog',
          publisher: {
            '@type': 'Organization',
            name: 'TendLine',
            url: 'https://tendline.xyz',
          },
        },
      });
      fs.writeFileSync(path.join(blogDir, 'index.html'), blogListHtml, 'utf8');

      // Generate /blog/<slug>/index.html for each of the 5 articles
      for (const article of articlesMeta) {
        const articleDir = path.join(blogDir, article.slug);
        fs.mkdirSync(articleDir, {recursive: true});
        const articleHtml = buildRouteHtml(baseHtml, {
          title: article.seoTitle,
          description: article.seoDescription,
          canonicalPath: `/blog/${article.slug}`,
          ogType: 'article',
          jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: article.title,
            description: article.seoDescription,
            datePublished: article.publishedDate,
            dateModified: article.publishedDate,
            articleSection: article.category,
            keywords: article.keywords.join(', '),
            author: {
              '@type': 'Person',
              name: DEFAULT_AUTHOR.name,
              jobTitle: DEFAULT_AUTHOR.role,
              url: `https://tendline.xyz${DEFAULT_AUTHOR.profileUrl}`,
              sameAs: SOCIAL_SAME_AS,
            },
            publisher: {
              '@type': 'Organization',
              name: 'TendLine',
              url: 'https://tendline.xyz',
              sameAs: SOCIAL_SAME_AS,
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://tendline.xyz/blog/${article.slug}`,
            },
          },
        });
        fs.writeFileSync(path.join(articleDir, 'index.html'), articleHtml, 'utf8');
      }
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), staticRouteSeoPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
