/**
 * Grid 3 Column Post Layout
 *
 * Standard 3-spaltiges Post-Grid
 * Verwendung: Alle Nischen, Standard-Layout
 */

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ThemeConfig } from '@/config/theme.config';

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  featuredImage?: {
    url: string;
    alt: string;
  };
  author?: {
    name: string;
  };
  date: string;
  categories?: Array<{
    name: string;
    slug: string;
  }>;
}

export interface Grid3ColProps {
  posts: Post[];
  title?: string;
  showExcerpt?: boolean;
  showCategory?: boolean;
  showAuthor?: boolean;
  showDate?: boolean;
  theme: ThemeConfig;
}

export default function Grid3Col({
  posts,
  title = 'Latest Posts',
  showExcerpt = true,
  showCategory = true,
  showAuthor = false,
  showDate = true,
  theme,
}: Grid3ColProps) {
  return (
    <section
      className="py-16 lg:py-24"
      style={{ backgroundColor: theme.colors.background }}
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

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group cursor-pointer"
            >
              <Link href={`/post/${post.slug}`}>
                {/* Featured Image */}
                {post.featuredImage && (
                  <div
                    className="relative w-full aspect-[16/10] mb-5 overflow-hidden"
                    style={{ borderRadius: theme.borderRadius.md }}
                  >
                    <Image
                      src={post.featuredImage.url}
                      alt={post.featuredImage.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                )}

                {/* Category */}
                {showCategory && post.categories && post.categories.length > 0 && (
                  <div className="mb-3">
                    <span
                      className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wide"
                      style={{
                        backgroundColor: `${theme.colors.accent}20`,
                        color: theme.colors.accent,
                        fontFamily: theme.fonts.body,
                        borderRadius: theme.borderRadius.sm,
                      }}
                    >
                      {post.categories[0].name}
                    </span>
                  </div>
                )}

                {/* Title */}
                <h3
                  className="text-xl lg:text-2xl font-bold mb-3 group-hover:opacity-80 transition-opacity"
                  style={{
                    color: theme.colors.text,
                    fontFamily: theme.fonts.heading,
                  }}
                >
                  {post.title}
                </h3>

                {/* Excerpt */}
                {showExcerpt && post.excerpt && (
                  <p
                    className="mb-4 line-clamp-3"
                    style={{
                      color: theme.colors.textSecondary,
                      fontFamily: theme.fonts.body,
                    }}
                  >
                    {post.excerpt}
                  </p>
                )}

                {/* Meta */}
                <div
                  className="flex items-center gap-3 text-sm"
                  style={{
                    color: theme.colors.textSecondary,
                    fontFamily: theme.fonts.body,
                  }}
                >
                  {showAuthor && post.author && (
                    <>
                      <span>{post.author.name}</span>
                      <span>·</span>
                    </>
                  )}
                  {showDate && (
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </time>
                  )}
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
