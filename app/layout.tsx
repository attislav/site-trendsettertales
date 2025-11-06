import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import ScrollToTop from "@/components/ScrollToTop";
import Analytics from "@/components/Analytics";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site.config";
import { getFooterColors } from "@/lib/colorUtils";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.seo.defaultTitle,
  description: siteConfig.seo.defaultDescription,
  keywords: ["Fashion Blog", "Beauty Tips", "Lifestyle", "Style Inspiration", siteConfig.site.name],
  authors: [{ name: `${siteConfig.site.name} Team` }],
  openGraph: {
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    type: "website",
    siteName: siteConfig.site.name,
    locale: siteConfig.site.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    handle: siteConfig.seo.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '', // Add Google Search Console verification here
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Calculate footer colors with proper contrast
  const footerColors = getFooterColors(siteConfig.brand.colors);

  return (
    <html lang={siteConfig.site.language}>
      <head>
        {/* Pinterest Domain Verification - Optional */}
        <meta name="pinterest-rich-pin" content="true" />

        {/* Dynamic Theme Colors and Fonts from site.config.ts */}
        <style dangerouslySetInnerHTML={{
          __html: `
            :root {
              --color-primary: ${siteConfig.brand.colors.primary};
              --color-secondary: ${siteConfig.brand.colors.secondary};
              --color-accent: ${siteConfig.brand.colors.accent};
              --color-background: ${siteConfig.brand.colors.background};
              --color-text: ${siteConfig.brand.colors.text};
              --color-text-secondary: ${siteConfig.brand.colors.textSecondary || siteConfig.brand.colors.text};
              --font-heading: '${siteConfig.brand.typography.headingFont}', serif;
              --font-body: '${siteConfig.brand.typography.bodyFont}', sans-serif;
            }
          `
        }} />

        {/* Custom Head Scripts - Plausible Analytics */}
        {siteConfig.customScripts?.headScripts && (
          <>
            <script
              defer
              data-domain="trendsettertales.com"
              src="https://stats.tripleadigital.de/js/script.js"
            />
          </>
        )}
      </head>
      <body className={`${playfair.variable} ${montserrat.variable} font-sans antialiased bg-bg-custom`}>
        {/* Custom Body Start Scripts */}
        {siteConfig.customScripts?.bodyStartScripts && (
          <div dangerouslySetInnerHTML={{ __html: siteConfig.customScripts.bodyStartScripts }} />
        )}

        <Analytics />
        <Navigation />
        {children}
        <ScrollToTop />
        <Footer footerColors={footerColors} />

        {/* Custom Body End Scripts */}
        {siteConfig.customScripts?.bodyEndScripts && (
          <div dangerouslySetInnerHTML={{ __html: siteConfig.customScripts.bodyEndScripts }} />
        )}
      </body>
    </html>
  );
}
