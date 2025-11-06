/**
 * Minimal Centered Newsletter Component
 *
 * Zentrierte, minimalistische Newsletter-Anmeldung
 * Verwendung: Alle Nischen
 */

import React from 'react';
import { ThemeConfig } from '@/config/theme.config';

export interface MinimalCenteredProps {
  headline?: string;
  description?: string;
  buttonText?: string;
  placeholderText?: string;
  theme: ThemeConfig;
}

export default function MinimalCentered({
  headline = 'Stay Updated',
  description = 'Get the latest posts delivered right to your inbox.',
  buttonText = 'Subscribe',
  placeholderText = 'Enter your email',
  theme,
}: MinimalCenteredProps) {
  return (
    <section
      className="py-20 lg:py-32"
      style={{ backgroundColor: theme.colors.secondary }}
    >
      <div
        className="mx-auto px-6 lg:px-10"
        style={{ maxWidth: '600px' }}
      >
        <div className="text-center space-y-6">
          {/* Headline */}
          <h2
            className="text-3xl lg:text-4xl font-bold"
            style={{
              color: theme.colors.text,
              fontFamily: theme.fonts.heading,
            }}
          >
            {headline}
          </h2>

          {/* Description */}
          {description && (
            <p
              className="text-lg"
              style={{
                color: theme.colors.textSecondary,
                fontFamily: theme.fonts.body,
              }}
            >
              {description}
            </p>
          )}

          {/* Form */}
          <form className="mt-8 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder={placeholderText}
              required
              className="flex-1 px-5 py-4 rounded-lg border-2 transition-all focus:outline-none focus:border-opacity-100"
              style={{
                backgroundColor: theme.colors.background,
                borderColor: `${theme.colors.accent}40`,
                color: theme.colors.text,
                fontFamily: theme.fonts.body,
                borderRadius: theme.borderRadius.md,
              }}
            />
            <button
              type="submit"
              className="px-8 py-4 font-semibold rounded-lg transition-all hover:scale-105 hover:shadow-lg whitespace-nowrap"
              style={{
                backgroundColor: theme.colors.accent,
                color: '#ffffff',
                fontFamily: theme.fonts.body,
                borderRadius: theme.borderRadius.md,
              }}
            >
              {buttonText}
            </button>
          </form>

          {/* Privacy Note */}
          <p
            className="text-xs mt-4"
            style={{
              color: theme.colors.textSecondary,
              fontFamily: theme.fonts.body,
            }}
          >
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
