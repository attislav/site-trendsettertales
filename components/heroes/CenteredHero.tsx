/**
 * Centered Hero Component
 *
 * Zentrierter Hero mit Background Image
 * Verwendung: Alle Nischen, besonders Tech & Lifestyle
 */

import React from 'react';
import Link from 'next/link';
import { ThemeConfig } from '@/config/theme.config';

export interface CenteredHeroProps {
  headline: string;
  subheadline?: string;
  description?: string;
  cta?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  overlayOpacity?: number; // 0-100
  theme: ThemeConfig;
}

export default function CenteredHero({
  headline,
  subheadline,
  description,
  cta,
  backgroundImage,
  overlayOpacity = 50,
  theme,
}: CenteredHeroProps) {
  return (
    <section
      className="relative py-32 lg:py-40"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: theme.colors.primary,
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: theme.colors.primary,
          opacity: overlayOpacity / 100,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <div className="space-y-6">
          {subheadline && (
            <p
              className="text-sm font-medium uppercase tracking-wider"
              style={{
                color: theme.colors.accent,
                fontFamily: theme.fonts.body,
              }}
            >
              {subheadline}
            </p>
          )}

          <h1
            className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
            style={{
              color: '#ffffff',
              fontFamily: theme.fonts.heading,
            }}
          >
            {headline}
          </h1>

          {description && (
            <p
              className="text-xl lg:text-2xl leading-relaxed max-w-2xl mx-auto"
              style={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontFamily: theme.fonts.body,
              }}
            >
              {description}
            </p>
          )}

          {cta && (
            <div className="pt-6">
              <Link
                href={cta.href}
                className="inline-block px-10 py-5 font-semibold rounded-lg transition-all hover:scale-105 hover:shadow-2xl"
                style={{
                  backgroundColor: theme.colors.accent,
                  color: '#ffffff',
                  fontFamily: theme.fonts.body,
                  borderRadius: theme.borderRadius.md,
                }}
              >
                {cta.text}
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
