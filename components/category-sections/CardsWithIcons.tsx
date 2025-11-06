/**
 * Category Cards with Icons
 *
 * Category-Section mit Icons pro Kategorie
 * Verwendung: Alle Nischen, besonders Fashion & Lifestyle
 */

import React from 'react';
import Link from 'next/link';
import { ThemeConfig } from '@/config/theme.config';

export interface Category {
  name: string;
  slug: string;
  description?: string;
  icon?: string; // Emoji oder Unicode-Symbol
  postCount?: number;
}

export interface CardsWithIconsProps {
  categories: Category[];
  title?: string;
  columns?: 2 | 3 | 4;
  theme: ThemeConfig;
}

export default function CardsWithIcons({
  categories,
  title = 'Explore Categories',
  columns = 3,
  theme,
}: CardsWithIconsProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <section
      className="py-16 lg:py-24"
      style={{ backgroundColor: theme.colors.secondary }}
    >
      <div
        className="mx-auto px-6 lg:px-10"
        style={{ maxWidth: theme.spacing.container }}
      >
        {/* Section Title */}
        {title && (
          <div className="mb-12 text-center">
            <h2
              className="text-3xl lg:text-4xl font-bold"
              style={{
                color: theme.colors.text,
                fontFamily: theme.fonts.heading,
              }}
            >
              {title}
            </h2>
          </div>
        )}

        {/* Category Grid */}
        <div className={`grid grid-cols-1 ${gridCols[columns]} gap-6`}>
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className="group"
            >
              <div
                className="p-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{
                  backgroundColor: theme.colors.background,
                  borderRadius: theme.borderRadius.lg,
                  border: `2px solid ${theme.colors.background}`,
                }}
              >
                {/* Icon */}
                {category.icon && (
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${theme.colors.accent}15`,
                      borderRadius: theme.borderRadius.md,
                    }}
                  >
                    <span className="text-3xl">{category.icon}</span>
                  </div>
                )}

                {/* Category Name */}
                <h3
                  className="text-xl font-bold mb-2"
                  style={{
                    color: theme.colors.text,
                    fontFamily: theme.fonts.heading,
                  }}
                >
                  {category.name}
                </h3>

                {/* Description */}
                {category.description && (
                  <p
                    className="text-sm mb-3"
                    style={{
                      color: theme.colors.textSecondary,
                      fontFamily: theme.fonts.body,
                    }}
                  >
                    {category.description}
                  </p>
                )}

                {/* Post Count */}
                {category.postCount !== undefined && (
                  <p
                    className="text-sm font-medium"
                    style={{
                      color: theme.colors.accent,
                      fontFamily: theme.fonts.body,
                    }}
                  >
                    {category.postCount} {category.postCount === 1 ? 'Post' : 'Posts'}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
