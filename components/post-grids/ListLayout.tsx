/**
 * List Layout Component
 *
 * Simple vertikale Liste mit großen Bildern
 * Verwendung: Minimalist Blogs, Text-fokussierte Sites
 */

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ThemeConfig } from '@/config/theme.config';
import { Post } from './Grid3Col';

export interface ListLayoutProps {
  posts: Post[];
  title?: string;
  showFeaturedImage?: boolean;
  showExcerpt?: boolean;
  showCategory?: boolean;
  showAuthor?: boolean;
  showDate?: boolean;
  theme: ThemeConfig;
}

export default function ListLayout({
  posts,
  title = 'All Posts',
  showFeaturedImage = true,
  showExcerpt = true,
  showCategory = true,
  showAuthor = true,
  showDate = true,
  theme,
}: ListLayoutProps) {
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
          <div className="mb-12">
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

        {/* Post List */}
        <div className="space-y-12">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group"
            >
              <Link
                href={`/post/${post.slug}`}
                className="flex flex-col md:flex-row gap-6 md:gap-8"
              >
                {/* Featured Image */}
                {showFeaturedImage && post.featuredImage && (
                  <div
                    className="relative w-full md:w-1/3 aspect-[16/10] md:aspect-[4/3] flex-shrink-0 overflow-hidden"
                    style={{ borderRadius: theme.borderRadius.md }}
                  >
                    <Image
                      src={post.featuredImage.url}
                      alt={post.featuredImage.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="flex-1 flex flex-col justify-center">
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
                    className="text-2xl lg:text-3xl font-bold mb-3 group-hover:opacity-80 transition-opacity"
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
                      className="mb-4 line-clamp-2 text-base lg:text-lg"
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
                        <span className="font-medium">{post.author.name}</span>
                        <span>·</span>
                      </>
                    )}
                    {showDate && (
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                    )}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
