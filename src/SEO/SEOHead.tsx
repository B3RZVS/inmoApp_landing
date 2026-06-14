import React from "react";
import { SITE_META } from "../constants/content";

/**
 * SEOHead — renders all meta tags, Open Graph, Twitter Card and JSON-LD
 * structured data for maximum search engine visibility.
 *
 * Usage: place inside your <head> via React Helmet, Next.js <Head>,
 * or Vite's index.html. The JSON-LD is also included as a dangerouslySetInnerHTML
 * script for frameworks that render this server-side.
 */
export const SEOHead: React.FC = () => {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_META.canonical}/#website`,
        url: SITE_META.canonical,
        name: "inmoApp",
        description: SITE_META.description,
        inLanguage: "es-AR",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE_META.canonical}/buscar?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_META.canonical}/#app`,
        name: SITE_META.schema.name,
        applicationCategory: SITE_META.schema.applicationCategory,
        operatingSystem: SITE_META.schema.operatingSystem,
        url: SITE_META.canonical,
        description: SITE_META.description,
        inLanguage: "es-AR",
        offers: {
          "@type": "Offer",
          priceCurrency: "ARS",
          availability: "https://schema.org/InStock",
          url: `${SITE_META.canonical}/#precios`,
        },
        publisher: {
          "@type": "Organization",
          name: "inmoApp",
          url: SITE_META.canonical,
        },
        audience: {
          "@type": "Audience",
          audienceType: "Corredores inmobiliarios en Argentina",
          geographicArea: {
            "@type": "Country",
            name: "Argentina",
          },
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_META.canonical}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Vale la pena si todavía tengo pocos contratos?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Empezar organizado es más fácil que ordenar el caos después. Con tu primer contrato ya tiene sentido. Los corredores que arrancan bien escalan más rápido.",
            },
          },
          {
            "@type": "Question",
            name: "¿Es difícil de usar?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Fue diseñado para el corredor que empieza, no para técnicos. Si sabés usar WhatsApp, podés usar inmoApp.",
            },
          },
          {
            "@type": "Question",
            name: "¿Calcula aumentos por ICL e IPC?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí. El sistema aplica automáticamente el índice que corresponda según el contrato: ICL, IPC u otros que se definan por normativa.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      {/* Primary meta */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{SITE_META.title}</title>
      <meta name="description" content={SITE_META.description} />
      <meta name="keywords" content={SITE_META.keywords} />
      <link rel="canonical" href={SITE_META.canonical} />

      {/* Language & locale */}
      <meta httpEquiv="content-language" content="es-ar" />
      <html lang="es-AR" />

      {/* Robots */}
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="inmoApp" />
      <meta property="og:url" content={SITE_META.canonical} />
      <meta property="og:title" content={SITE_META.ogTitle} />
      <meta property="og:description" content={SITE_META.ogDescription} />
      <meta property="og:image" content={SITE_META.ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={SITE_META.locale} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SITE_META.twitterHandle} />
      <meta name="twitter:title" content={SITE_META.ogTitle} />
      <meta name="twitter:description" content={SITE_META.ogDescription} />
      <meta name="twitter:image" content={SITE_META.ogImage} />

      {/* Performance hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link rel="dns-prefetch" href="https://images.unsplash.com" />

      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
    </>
  );
};
