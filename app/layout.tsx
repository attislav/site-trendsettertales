import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import ScrollToTop from "@/components/ScrollToTop";
import Analytics from "@/components/Analytics";
import { siteConfig } from "@/config/site.config";

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
  title: {
    default: siteConfig.site.name,
    template: `%s | ${siteConfig.site.name}`,
  },
  description: siteConfig.site.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.site.name }],
  creator: siteConfig.site.name,
  openGraph: {
    type: "website",
    locale: siteConfig.site.locale,
    url: siteConfig.site.url,
    siteName: siteConfig.site.name,
    title: siteConfig.site.name,
    description: siteConfig.site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.site.name,
    description: siteConfig.site.description,
    creator: siteConfig.social.twitter
      ? `@${siteConfig.social.twitter.split("/").pop()}`
      : undefined,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.site.language} className={`${playfair.variable} ${montserrat.variable}`}>
      <head>
        <link rel="canonical" href={siteConfig.site.url} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased bg-background text-text">
        <Navigation />
        <main className="min-h-screen">{children}</main>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-primary via-accent to-primary/90 text-neutral-900 py-16 mt-20 border-t-4 border-accent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* About */}
              <div>
                <h3 className="font-playfair text-2xl font-bold mb-4 text-neutral-900">
                  {siteConfig.site.name}
                </h3>
                <p className="text-neutral-800 leading-relaxed">
                  {siteConfig.site.description}
                </p>
              </div>

              {/* Quick Links */}
              {siteConfig.navigation.footer.sections.map((section) => (
                <div key={section.title}>
                  <h3 className="font-playfair text-2xl font-bold mb-4 text-neutral-900">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.links.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          className="text-neutral-800 hover:text-neutral-950 transition-colors font-medium"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )).slice(0, 2)}

              {/* Social & Legal */}
              <div>
                <h3 className="font-playfair text-2xl font-bold mb-4 text-neutral-900">
                  Connect
                </h3>
                <div className="flex space-x-6 mb-6">
                  {siteConfig.social.pinterest && (
                    <a
                      href={siteConfig.social.pinterest}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-800 hover:text-neutral-950 transition-colors"
                      aria-label="Pinterest"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0a12 12 0 0 0-4.37 23.17c-.07-.64-.13-1.6.03-2.29l1.15-4.88s-.3-.6-.3-1.47c0-1.38.8-2.4 1.8-2.4.84 0 1.25.64 1.25 1.4 0 .85-.54 2.13-.82 3.31-.23.98.5 1.78 1.47 1.78 1.77 0 3.13-1.87 3.13-4.55 0-2.38-1.71-4.04-4.15-4.04-2.83 0-4.49 2.12-4.49 4.31 0 .85.33 1.77.74 2.27.08.1.09.18.07.28l-.27 1.12c-.04.18-.15.22-.34.13-1.25-.58-2.03-2.4-2.03-3.87 0-3.13 2.28-6.01 6.57-6.01 3.45 0 6.13 2.46 6.13 5.75 0 3.43-2.16 6.19-5.16 6.19-1.01 0-1.95-.52-2.27-1.14l-.62 2.36c-.22.87-.83 1.96-1.24 2.62A12 12 0 1 0 12 0z" />
                      </svg>
                    </a>
                  )}
                  {siteConfig.social.instagram && (
                    <a
                      href={siteConfig.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-800 hover:text-neutral-950 transition-colors"
                      aria-label="Instagram"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.42.4.61.24 1.04.52 1.5.98.46.46.74.89.98 1.5.16.45.35 1.25.4 2.42.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.4 2.42-.24.61-.52 1.04-.98 1.5-.46.46-.89.74-1.5.98-.45.16-1.25.35-2.42.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.42-.4-.61-.24-1.04-.52-1.5-.98-.46-.46-.74-.89-.98-1.5-.16-.45-.35-1.25-.4-2.42-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.24-1.97.4-2.42.24-.61.52-1.04.98-1.5.46-.46.89-.74 1.5-.98.45-.16 1.25-.35 2.42-.4 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.86.33 4.14.63c-.75.29-1.39.68-2.03 1.32C1.47 2.59 1.08 3.23.79 3.98.49 4.7.29 5.62.23 6.89.17 8.17.16 8.58.16 12s.01 3.83.07 5.11c.06 1.27.26 2.19.56 2.91.29.75.68 1.39 1.32 2.03.64.64 1.28 1.03 2.03 1.32.72.3 1.64.5 2.91.56 1.28.06 1.69.07 5.11.07s3.83-.01 5.11-.07c1.27-.06 2.19-.26 2.91-.56.75-.29 1.39-.68 2.03-1.32.64-.64 1.03-1.28 1.32-2.03.3-.72.5-1.64.56-2.91.06-1.28.07-1.69.07-5.11s-.01-3.83-.07-5.11c-.06-1.27-.26-2.19-.56-2.91-.29-.75-.68-1.39-1.32-2.03-.64-.64-1.28-1.03-2.03-1.32-.72-.3-1.64-.5-2.91-.56C15.83.01 15.42 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
                      </svg>
                    </a>
                  )}
                </div>
                <div className="space-y-2 text-sm">
                  <a
                    href="/privacy"
                    className="block text-neutral-800 hover:text-neutral-950 transition-colors"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="/terms"
                    className="block text-neutral-800 hover:text-neutral-950 transition-colors"
                  >
                    Terms of Service
                  </a>
                  <a
                    href="/disclaimer"
                    className="block text-neutral-800 hover:text-neutral-950 transition-colors"
                  >
                    Disclaimer
                  </a>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-12 pt-8 border-t border-neutral-700">
              <p className="text-center text-neutral-800">
                © {new Date().getFullYear()} {siteConfig.site.name}. All rights reserved.
              </p>
            </div>
          </div>
        </footer>

        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  );
}
