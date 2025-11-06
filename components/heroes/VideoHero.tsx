/**
 * Video Hero Component
 *
 * Hero mit Background Video
 * Verwendung: High-End Sites, Fitness, Lifestyle
 */

import React from 'react';
import Link from 'next/link';
import { ThemeConfig } from '@/config/theme.config';

export interface VideoHeroProps {
  headline: string;
  subheadline?: string;
  description?: string;
  cta?: {
    text: string;
    href: string;
  };
  videoUrl: string; // MP4 URL
  posterImage?: string; // Fallback Image
  overlayOpacity?: number; // 0-100
  theme: ThemeConfig;
}

export default function VideoHero({
  headline,
  subheadline,
  description,
  cta,
  videoUrl,
  posterImage,
  overlayOpacity = 50,
  theme,
}: VideoHeroProps) {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={posterImage}
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

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
              className="text-sm md:text-base font-medium uppercase tracking-widest"
              style={{
                color: theme.colors.accent,
                fontFamily: theme.fonts.body,
              }}
            >
              {subheadline}
            </p>
          )}

          <h1
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
            style={{
              color: '#ffffff',
              fontFamily: theme.fonts.heading,
            }}
          >
            {headline}
          </h1>

          {description && (
            <p
              className="text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl mx-auto"
              style={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontFamily: theme.fonts.body,
              }}
            >
              {description}
            </p>
          )}

          {cta && (
            <div className="pt-8">
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

      {/* Mute/Unmute Button (optional) */}
      <button
        className="absolute bottom-8 right-8 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
        aria-label="Toggle sound"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
          />
        </svg>
      </button>
    </section>
  );
}
