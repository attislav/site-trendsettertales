/**
 * Split Hero Component
 *
 * Hero-Section mit Bild links oder rechts
 * Verwendung: Fashion, Lifestyle, Beauty Sites
 */

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ThemeConfig } from '@/config/theme.config';

export interface SplitHeroProps {
  headline: string;
  subheadline?: string;
  description?: string;
  cta?: {
    text: string;
    href: string;
  };
  imageUrl?: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right';
  theme: ThemeConfig;
}

export default function SplitHero({
  headline,
  subheadline,
  description,
  cta,
  imageUrl = '/images/hero-default.jpg',
  imageAlt = 'Hero Image',
  imagePosition = 'right',
  theme,
}: SplitHeroProps) {
  const contentOrder = imagePosition === 'left' ? 'lg:order-2' : 'lg:order-1';
  const imageOrder = imagePosition === 'left' ? 'lg:order-1' : 'lg:order-2';

  return (
    <section
      className="relative py-20 lg:py-32"
      style={{ backgroundColor: theme.colors.background }}
    >
      <div
        className="mx-auto px-6 lg:px-10"
        style={{ maxWidth: theme.colors.container }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className={`${contentOrder} space-y-6`}>
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

            {cta && (
              <div className="pt-4">
                <Link
                  href={cta.href}
                  className="inline-block px-8 py-4 font-semibold rounded-lg transition-all hover:scale-105 hover:shadow-lg"
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

          {/* Image */}
          <div className={`${imageOrder} relative`}>
            <div
              className="relative w-full aspect-[4/5] overflow-hidden"
              style={{ borderRadius: theme.borderRadius.lg }}
            >
              <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
