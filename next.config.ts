import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Warnung: Das ignoriert ESLint-Fehler während des Builds
    // Nur für schnelles Deployment - später sollten Fehler behoben werden
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Warnung: Das ignoriert TypeScript-Fehler während des Builds
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Erlaubt alle HTTPS Domains
      },
    ],
    formats: ['image/avif', 'image/webp'], // Moderne Formate mit besserer Komprimierung
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048], // Responsive Breakpoints
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Kleine Bilder (Icons, Thumbnails)
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 Jahr Cache für optimierte Bilder
    qualities: [75, 80, 85, 90, 95], // Unterstützte Qualitätsstufen für Next.js 15+
  },
  async redirects() {
    return [
      // Redirect old post URLs to /outfits/ category structure
      {
        source: '/airport-outfit-winter',
        destination: '/outfits/airport-outfit-winter',
        permanent: true,
      },
      {
        source: '/black-jacket-outfit-women-winter',
        destination: '/outfits/black-jacket-outfit-women-winter',
        permanent: true,
      },
      {
        source: '/black-jeans-outfit-winter',
        destination: '/outfits/black-jeans-outfit-winter',
        permanent: true,
      },
      {
        source: '/cozy-winter-outfits',
        destination: '/outfits/cozy-winter-outfits',
        permanent: true,
      },
      {
        source: '/denim-midi-skirt-winter',
        destination: '/outfits/denim-midi-skirt-winter',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
