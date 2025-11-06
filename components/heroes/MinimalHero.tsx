/**
 * Minimal Hero Component
 *
 * Minimalistischer Hero ohne Bilder - nur Text
 * Verwendung: Tech, Minimalist Blogs
 */

import React from 'react';
import Link from 'next/link';
import { ThemeConfig } from '@/config/theme.config';

export interface MinimalHeroProps {
  headline: string;
  subheadline?: string;
  description?: string;
  cta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  theme: ThemeConfig;
}

export default function MinimalHero({
  headline,
  subheadline,
  description,
  cta,
  secondaryCta,
  theme,
}: MinimalHeroProps) {
  return (
    <section
      className="py-24 lg:py-32"
      style={{ backgroundColor: theme.colors.background }}
    >
      <div
        className="mx-auto px-6 lg:px-10"
        style={{ maxWidth: theme.spacing.container }}
      >
        <div className="max-w-3xl mx-auto text-center space-y-8">
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
            className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
            style={{
              color: theme.colors.text,
              fontFamily: theme.fonts.heading,
            }}
          >
            {headline}
          </h1>

          {description && (
            <p
              className="text-lg lg:text-xl leading-relaxed"
              style={{
                color: theme.colors.textSecondary,
                fontFamily: theme.fonts.body,
              }}
            >
              {description}
            </p>
          )}

          {(cta || secondaryCta) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              {cta && (
                <Link
                  href={cta.href}
                  className="inline-block px-8 py-4 font-semibold rounded-lg transition-all hover:scale-105"
                  style={{
                    backgroundColor: theme.colors.accent,
                    color: '#ffffff',
                    fontFamily: theme.fonts.body,
                    borderRadius: theme.borderRadius.md,
                  }}
                >
                  {cta.text}
                </Link>
              )}

              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-block px-8 py-4 font-semibold rounded-lg transition-all hover:scale-105 border-2"
                  style={{
                    borderColor: theme.colors.accent,
                    color: theme.colors.accent,
                    fontFamily: theme.fonts.body,
                    borderRadius: theme.borderRadius.md,
                  }}
                >
                  {secondaryCta.text}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
