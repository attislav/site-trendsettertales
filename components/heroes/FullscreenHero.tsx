/**
 * Fullscreen Hero Component
 *
 * Vollbild Hero mit Parallax-Effekt
 * Verwendung: High-Impact Sites, Fashion, Photography
 */

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ThemeConfig } from '@/config/theme.config';

export interface FullscreenHeroProps {
  headline: string;
  subheadline?: string;
  cta?: {
    text: string;
    href: string;
  };
  backgroundImage: string;
  overlayOpacity?: number; // 0-100
  scrollIndicator?: boolean;
  theme: ThemeConfig;
}

export default function FullscreenHero({
  headline,
  subheadline,
  cta,
  backgroundImage,
  overlayOpacity = 40,
  scrollIndicator = true,
  theme,
}: FullscreenHeroProps) {
  return (
    <section className="relative h-screen w-full flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Hero Background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </div>

      {/* Overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundColor: theme.colors.primary,
          opacity: overlayOpacity / 100,
        }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <div className="space-y-6">
          {subheadline && (
            <p
              className="text-sm md:text-base font-medium uppercase tracking-widest animate-fade-in"
              style={{
                color: theme.colors.accent,
                fontFamily: theme.fonts.body,
                animationDelay: '0.2s',
              }}
            >
              {subheadline}
            </p>
          )}

          <h1
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight animate-fade-in"
            style={{
              color: '#ffffff',
              fontFamily: theme.fonts.heading,
              animationDelay: '0.4s',
            }}
          >
            {headline}
          </h1>

          {cta && (
            <div className="pt-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Link
                href={cta.href}
                className="inline-block px-10 py-5 font-bold rounded-lg transition-all hover:scale-105 hover:shadow-2xl text-lg"
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

      {/* Scroll Indicator */}
      {scrollIndicator && (
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span
              className="text-xs uppercase tracking-wider"
              style={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontFamily: theme.fonts.body,
              }}
            >
              Scroll
            </span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="rgba(255, 255, 255, 0.8)"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
