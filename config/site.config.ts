/**
 * Site Configuration
 *
 * This file contains all site-specific settings that can be customized
 * for different niches (Fashion, Fitness, Food, Tech, etc.)
 *
 * For the generator tool: This entire config can be generated/customized
 * based on user input and niche selection.
 */

export interface SiteConfig {
  // Basic Site Information
  site: {
    name: string;
    tagline: string;
    description: string;
    url: string;
    wordpressUrl: string;
    language: string;
    locale: string;
  };

  // Brand Identity
  brand: {
    colors: {
      primary: string;      // Main brand color
      secondary: string;    // Secondary/neutral color
      accent: string;       // Accent/highlight color
      background: string;   // Page background
      text: string;         // Text color
    };
    typography: {
      headingFont: string;  // Font for headings
      bodyFont: string;     // Font for body text
    };
  };

  // Social Media Links
  social: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    pinterest?: string;
    youtube?: string;
    tiktok?: string;
    linkedin?: string;
  };

  // Navigation Menus
  navigation: {
    header: Array<{
      label: string;
      href: string;
      external?: boolean;
    }>;
    footer: {
      sections: Array<{
        title: string;
        links: Array<{
          label: string;
          href: string;
          external?: boolean;
        }>;
      }>;
    };
  };

  // Contact Information
  contact: {
    email: string;
    phone?: string;
    address?: string;
  };

  // Hero Section (Homepage)
  hero: {
    title: string;
    subtitle: string;
    backgroundImage: string;
    cta?: {
      text: string;
      href: string;
    };
  };

  // SEO Settings
  seo: {
    defaultTitle: string;
    titleTemplate: string;
    description: string;
    keywords: string[];
    ogImage: string;
  };

  // Analytics (optional)
  analytics?: {
    googleAnalyticsId?: string;
    facebookPixelId?: string;
    pinterestTag?: string;
  };

  // Features (enable/disable specific functionality)
  features: {
    newsletter: boolean;
    comments: boolean;
    relatedPosts: boolean;
    socialSharing: boolean;
    darkMode: boolean;
  };
}

export const siteConfig: SiteConfig = {
  // Basic Site Information
  site: {
    name: 'Trendsetter Tales',
    tagline: 'Where Style Meets Story',
    description: 'Your daily dose of fashion inspiration, beauty tips, and lifestyle trends. Join us as we explore the latest in style and substance.',
    url: 'https://trendsettertales.com',
    wordpressUrl: 'https://trendsettertales.com',
    language: 'en',
    locale: 'en_US',
  },

  // Brand Identity - GELBES DESIGN
  brand: {
    colors: {
      primary: '#FFC107',      // Leuchtendes Gelb
      secondary: '#FFF8E1',    // Warmes helles Creme
      accent: '#FFB300',       // Gold/Orange Akzent
      background: '#FFFBF0',   // Sehr helles warmes Beige
      text: '#3E2723',         // Dunkles warmes Braun
    },
    typography: {
      headingFont: 'Playfair Display',  // Elegant serif for headings
      bodyFont: 'Montserrat',           // Clean sans-serif for body
    },
  },

  // Social Media Links
  social: {
    instagram: 'https://instagram.com/trendsettertales',
    pinterest: 'https://pinterest.com/trendsettertales',
    facebook: 'https://facebook.com/trendsettertales',
    twitter: 'https://twitter.com/trendsettertales',
  },

  // Navigation Menus
  navigation: {
    header: [
      { label: 'Home', href: '/' },
      { label: 'Outfits', href: '/category/outfits' },
      { label: 'Beauty', href: '/category/beauty' },
      { label: 'Nails', href: '/category/nails' },
      { label: 'About', href: '/about' },
    ],
    footer: {
      sections: [
        {
          title: 'Explore',
          links: [
            { label: 'Latest Posts', href: '/' },
            { label: 'Fashion', href: '/category/fashion' },
            { label: 'Beauty', href: '/category/beauty' },
            { label: 'Lifestyle', href: '/category/lifestyle' },
          ],
        },
        {
          title: 'About',
          links: [
            { label: 'About Us', href: '/about' },
            { label: 'Contact', href: '/contact' },
            { label: 'Advertise', href: '/advertise' },
          ],
        },
        {
          title: 'Legal',
          links: [
            { label: 'Privacy Policy', href: '/privacy' },
            { label: 'Terms of Service', href: '/terms' },
            { label: 'Disclaimer', href: '/disclaimer' },
          ],
        },
      ],
    },
  },

  // Contact Information
  contact: {
    email: 'hey@trendsettertales.com',
  },

  // Hero Section
  hero: {
    title: 'Discover Your Style',
    subtitle: 'Fashion, Beauty & Lifestyle Inspiration',
    backgroundImage: '/images/hero-bg.jpg',
    cta: {
      text: 'Explore Now',
      href: '#categories',
    },
  },

  // SEO Settings
  seo: {
    defaultTitle: 'Trendsetter Tales',
    titleTemplate: '%s | Trendsetter Tales',
    description: 'Your daily dose of fashion inspiration, beauty tips, and lifestyle trends. Discover the latest styles, beauty hacks, and life advice.',
    keywords: [
      'fashion blog',
      'beauty tips',
      'lifestyle',
      'style inspiration',
      'fashion trends',
      'beauty products',
      'fashion advice',
      'style guide',
    ],
    ogImage: '/og-image.jpg',
  },

  // Analytics
  analytics: {
    // Add your tracking IDs here
    // googleAnalyticsId: 'G-XXXXXXXXXX',
    // facebookPixelId: 'XXXXXXXXXX',
    // pinterestTag: 'XXXXXXXXXX',
  },

  // Features
  features: {
    newsletter: true,
    comments: false,
    relatedPosts: true,
    socialSharing: true,
    darkMode: false,
  },
};
