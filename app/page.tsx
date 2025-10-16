import Link from 'next/link';
import Image from 'next/image';
import PinterestImage from '@/components/PinterestImage';
import { getPosts, getCategories } from '@/lib/wordpress';
import { Post, Category } from '@/types';
import { siteConfig } from '@/config/site.config';

// Enable ISR (Incremental Static Regeneration)
export const revalidate = 60; // seconds

export default async function Home() {
  // Daten von WordPress holen (Server-Side)
  const posts = await getPosts();
  const categories = await getCategories();

  // Nur die ersten 9 Posts für die Homepage
  const latestPosts = posts.slice(0, 9);

  return (
    <div className="min-h-screen">
      {/* Hero Section - Großer Willkommens-Bereich */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center bg-gradient-to-br from-secondary via-background to-secondary overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 text-[#3E2723] leading-tight">
            {siteConfig.site.name}
          </h1>
          <p className="text-xl md:text-2xl text-[#3E2723] mb-8 font-light leading-relaxed max-w-2xl mx-auto">
            {siteConfig.site.tagline}
          </p>
          <p className="text-lg md:text-xl text-[#3E2723]/90 mb-10 leading-relaxed">
            Your daily dose of fashion inspiration, beauty tips, and lifestyle trends. Join us as we explore the latest in style and substance.
          </p>
          <Link
            href="/about"
            className="inline-block bg-primary hover:bg-accent text-[#3E2723] font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Learn More
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-[#3E2723]/60"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-12 text-text">
            Explore Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Beauty Category */}
            <Link
              href="/category/beauty"
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-secondary to-background"
            >
              <div className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <span className="text-4xl">💄</span>
                </div>
                <h3 className="font-playfair text-2xl font-semibold mb-3 text-text group-hover:text-primary transition-colors">
                  Beauty
                </h3>
                <p className="text-text/70 text-sm line-clamp-2">
                  Discover the latest beauty trends, skincare tips, and makeup tutorials
                </p>
                <div className="mt-4 text-primary font-semibold group-hover:underline">
                  Explore →
                </div>
              </div>
            </Link>

            {/* Outfits Category */}
            <Link
              href="/category/outfits"
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-secondary to-background"
            >
              <div className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <span className="text-4xl">👗</span>
                </div>
                <h3 className="font-playfair text-2xl font-semibold mb-3 text-text group-hover:text-primary transition-colors">
                  Outfits
                </h3>
                <p className="text-text/70 text-sm line-clamp-2">
                  Find stylish outfit inspiration for every occasion and season
                </p>
                <div className="mt-4 text-primary font-semibold group-hover:underline">
                  Explore →
                </div>
              </div>
            </Link>

            {/* Nails Category */}
            <Link
              href="/category/nails"
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-secondary to-background"
            >
              <div className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <span className="text-4xl">💅</span>
                </div>
                <h3 className="font-playfair text-2xl font-semibold mb-3 text-text group-hover:text-primary transition-colors">
                  Nails
                </h3>
                <p className="text-text/70 text-sm line-clamp-2">
                  Explore creative nail art designs, tutorials, and nail care tips
                </p>
                <div className="mt-4 text-primary font-semibold group-hover:underline">
                  Explore →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-text">
              Latest Posts
            </h2>
            <p className="text-text/70 text-lg">
              Discover our newest content and stay inspired
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post: Post) => (
              <article
                key={post.slug}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              >
                <Link href={`/${post.categories.nodes[0]?.slug || 'post'}/${post.slug}`}>
                  {post.featuredImage?.node?.sourceUrl && (
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <PinterestImage
                        src={post.featuredImage.node.sourceUrl}
                        alt={post.featuredImage.node.altText || post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    {post.categories.nodes.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.categories.nodes.slice(0, 2).map((category: Category) => (
                          <span
                            key={category.slug}
                            className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full"
                          >
                            {category.name}
                          </span>
                        ))}
                      </div>
                    )}
                    <h3 className="font-playfair text-2xl font-semibold mb-3 text-text group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <div
                        className="text-text/70 text-sm line-clamp-3 mb-4"
                        dangerouslySetInnerHTML={{ __html: post.excerpt }}
                      />
                    )}
                    <div className="flex items-center justify-between text-sm text-text/60">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                      <span className="text-primary font-semibold group-hover:underline">
                        Read More →
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* View All Posts Button */}
          <div className="text-center mt-12">
            <Link
              href="/category/all"
              className="inline-block bg-primary hover:bg-accent text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View All Posts
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-text">
            Stay Connected
          </h2>
          <p className="text-text/70 text-lg mb-8">
            Join our community and never miss a post. Get the latest updates delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full border-2 border-primary/20 focus:border-primary focus:outline-none transition-colors"
            />
            <button className="bg-primary hover:bg-accent text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-text/60 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
}

// Helper function to get category icons
function getCategoryIcon(categoryName: string): string {
  const icons: { [key: string]: string } = {
    Fashion: '👗',
    Beauty: '💄',
    Lifestyle: '✨',
    Travel: '✈️',
    Food: '🍽️',
    Fitness: '💪',
    Tech: '💻',
    Home: '🏡',
    DIY: '🛠️',
    Parenting: '👶',
    Outfits: '👗',
    Nails: '💅',
  };

  // Find matching icon (case-insensitive)
  const matchedKey = Object.keys(icons).find(
    (key) => key.toLowerCase() === categoryName.toLowerCase()
  );

  return matchedKey ? icons[matchedKey] : '📝';
}
