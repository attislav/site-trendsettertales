import Image from 'next/image';
import { siteConfig } from '@/config/site.config';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `About | ${siteConfig.site.name}`,
  description: siteConfig.site.description,
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      {/* Hero Section mit Portrait */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Author Portrait */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-2xl border-4 border-accent">
              <Image
                src="/user-images/author-portrait.png"
                alt={`${siteConfig.site.name} - Fashion & Lifestyle`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-primary mb-4">
            Hi, I'm Emma Sterling
          </h1>
          <p className="text-xl md:text-2xl text-text/80 mb-6">
            Fashion Enthusiast & Lifestyle Creator
          </p>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              My Story
            </h2>
            <div className="space-y-6 text-lg text-text/90 leading-relaxed">
              <p>
                Welcome to {siteConfig.site.name}! I'm Emma, a passionate fashion and lifestyle creator dedicated
                to bringing you the latest trends and timeless inspiration. What started as a personal style journal
                has grown into a vibrant community where fashion meets storytelling.
              </p>
              <p>
                With over 8 years of experience in the fashion industry, I've learned that true style isn't about
                following every trend—it's about finding what makes you feel confident and authentic. My mission is
                to make high-end style accessible to everyone, regardless of budget or background.
              </p>
              <p>
                On this blog, you'll find carefully curated outfit inspiration, honest product reviews, and insider tips
                I've gathered throughout my journey. I'm committed to sustainable fashion choices, timeless pieces, and
                helping you discover your unique style that tells your story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-secondary/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            What I Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-playfair text-xl font-bold text-primary mb-3">Authenticity</h3>
              <p className="text-text/80">
                Every review, every recommendation comes from personal experience. I only share what I truly love.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="font-playfair text-xl font-bold text-primary mb-3">Sustainability</h3>
              <p className="text-text/80">
                Fashion should be beautiful and responsible. I promote conscious shopping and timeless style.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-playfair text-xl font-bold text-primary mb-3">Community</h3>
              <p className="text-text/80">
                This is a space for all of us to share, learn, and inspire each other. Your voice matters here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-6">
            Let's Connect
          </h2>
          <p className="text-lg text-text/80 mb-8">
            I'd love to hear from you! Whether you have questions, collaboration ideas, or just want to say hi,
            don't hesitate to reach out.
          </p>
          <a
            href="mailto:hey@trendsettertales.com"
            className="inline-block bg-accent hover:bg-accent/80 text-white font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
