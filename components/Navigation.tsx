'use client';

import Link from 'next/link';
import { useState } from 'react';
import SearchBar from './SearchBar';
import { siteConfig } from '@/config/site.config';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-primary via-accent to-primary/90 backdrop-blur-sm border-b-2 border-accent shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Brand */}
          <Link
            href="/"
            className="flex items-center space-x-3 group"
          >
            <div className="text-3xl font-bold text-white drop-shadow-lg font-playfair tracking-wide group-hover:scale-105 transition-transform">
              {siteConfig.site.name}
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {/* Navigation Links from Config */}
            {siteConfig.navigation.header.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-white font-semibold hover:bg-white/20 transition-all duration-200 hover:scale-105"
              >
                {link.label}
              </Link>
            ))}

            {/* Search Bar */}
            <div className="ml-4">
              <SearchBar />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-white/20">
            {/* Home Link */}
            <Link
              href="/"
              className="block px-4 py-3 rounded-lg text-white font-semibold hover:bg-white/20 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            {/* About Link */}
            <Link
              href="/about"
              className="block px-4 py-3 rounded-lg text-white font-semibold hover:bg-white/20 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>

            {/* WordPress Categories */}
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="block px-4 py-3 rounded-lg text-white font-semibold hover:bg-white/20 transition-colors capitalize"
                onClick={() => setIsOpen(false)}
              >
                {category.name}
              </Link>
            ))}

            {/* Search Bar */}
            <div className="px-4 pt-2">
              <SearchBar />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
