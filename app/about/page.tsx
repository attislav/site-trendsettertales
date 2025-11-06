import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] bg-gradient-to-br from-[#2C3E50] via-[#34495E] to-[#2C3E50] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#C9A885] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#C9A885] rounded-full blur-3xl"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
          <div className="max-w-3xl">
            <p className="text-[#C9A885] font-montserrat text-sm tracking-[0.3em] uppercase mb-4">About Emma</p>
            <h1 className="font-playfair text-5xl md:text-7xl text-[#F8F9FA] mb-6 leading-tight">
              Where Elegance<br />Meets Intention
            </h1>
            <p className="font-montserrat text-[#F8F9FA]/90 text-lg md:text-xl leading-relaxed max-w-2xl">
              A Copenhagen-based fashion curator helping women discover their signature style through Scandinavian minimalism and timeless elegance.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction with Image */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-[#C9A885]/20 rounded-2xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/author-portrait.jpg"
                  alt="Emma Sterling - Fashion & Beauty Curator"
                  width={600}
                  height={750}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-[#2C3E50] text-[#F8F9FA] p-8 rounded-2xl shadow-xl max-w-xs">
                <p className="font-playfair text-2xl italic leading-relaxed">
                  "Elegance is not about being noticed, it's about being remembered."
                </p>
              </div>
            </div>
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl text-[#2C3E50] mb-6">
                Meet Emma Sterling
              </h2>
              <p className="font-montserrat text-[#2C3E50]/80 text-lg leading-relaxed mb-6">
                Emma Sterling is a Copenhagen-based fashion curator and beauty enthusiast who bridges Scandinavian minimalism with modern elegance. With over a decade in the fashion industry, she helps women in their 30s and beyond discover their signature style through timeless pieces and sophisticated beauty rituals.
              </p>
              <p className="font-montserrat text-[#2C3E50]/80 text-lg leading-relaxed mb-8">
                Her approach is deeply rooted in Scandinavian philosophy—less is more, quality over quantity, and beauty that enhances rather than masks. Emma believes that true style comes from understanding yourself, not chasing every trend.
              </p>
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-[#C9A885]"></div>
                <p className="font-montserrat text-[#C9A885] text-sm tracking-wider uppercase">Fashion & Beauty Curator</p>
                <div className="h-px flex-1 bg-[#C9A885]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Story Section */}
      <section className="py-20 px-6 bg-[#F8F9FA]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C9A885] font-montserrat text-sm tracking-[0.3em] uppercase mb-4">The Journey</p>
            <h2 className="font-playfair text-4xl md:text-5xl text-[#2C3E50] mb-6">
              A Story of Discovery
            </h2>
          </div>
          
          <div className="space-y-12">
            <div className="bg-[#FFFFFF] p-10 rounded-2xl shadow-lg border-l-4 border-[#C9A885]">
              <h3 className="font-playfair text-2xl text-[#2C3E50] mb-4">The Beginning</h3>
              <p className="font-montserrat text-[#2C3E50]/80 text-lg leading-relaxed">
                Emma's journey into fashion began unexpectedly during a rainy afternoon in Stockholm, where she stumbled into a vintage boutique and discovered a 1960s Marimekko dress that changed everything. That moment sparked a fascination with how clothing could tell stories and transform confidence. After studying fashion design in Copenhagen and working with several Nordic brands, she realized her true calling wasn't just creating fashion—it was helping women curate wardrobes that reflected their evolving identities.
              </p>
            </div>

            <div className="bg-[#FFFFFF] p-10 rounded-2xl shadow-lg border-l-4 border-[#C9A885]">
              <h3 className="font-playfair text-2xl text-[#2C3E50] mb-4">The Turning Point</h3>
              <p className="font-montserrat text-[#2C3E50]/80 text-lg leading-relaxed">
                Turning 30 was a pivotal moment for Emma. She noticed how the fashion industry often overlooked women entering this exciting decade, treating it as if style should suddenly become conservative or invisible. Instead, Emma experienced her 30s as a time of clarity and confidence, where she finally understood what worked for her body, lifestyle, and values. This insight inspired her to create TrendsetterTales, a space where elegance meets practicality, and where sustainable choices don't mean sacrificing style.
              </p>
            </div>

            <div className="bg-[#FFFFFF] p-10 rounded-2xl shadow-lg border-l-4 border-[#C9A885]">
              <h3 className="font-playfair text-2xl text-[#2C3E50] mb-4">Today</h3>
              <p className="font-montserrat text-[#2C3E50]/80 text-lg leading-relaxed">
                Today, Emma splits her time between her minimalist apartment in Copenhagen's Vesterbro district and travels throughout Scandinavia, discovering emerging designers and time-tested beauty secrets. Whether she's exploring clean beauty brands in Copenhagen, hunting for the perfect cashmere sweater, or sharing her morning skincare ritual, Emma brings an authenticity that resonates with women who want to look polished without the pressure of perfection. Her mission is simple: to prove that style after 30 isn't about following rules—it's about writing your own.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C9A885] font-montserrat text-sm tracking-[0.3em] uppercase mb-4">Expertise</p>
            <h2 className="font-playfair text-4xl md:text-5xl text-[#2C3E50] mb-6">
              What I Bring to the Table
            </h2>
            <p className="font-montserrat text-[#2C3E50]/70 text-lg max-w-2xl mx-auto">
              Over a decade of experience curating timeless style and sustainable beauty solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-[#F8F9FA] to-[#FFFFFF] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#C9A885]/20">
              <div className="w-16 h-16 bg-gradient-to-br from-[#C9A885] to-[#D4B896] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-[#FFFFFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <h3 className="font-playfair text-2xl text-[#2C3E50] mb-4">Scandinavian Fashion Curation</h3>
              <p className="font-montserrat text-[#2C3E50]/70 leading-relaxed">
                Expert guidance in Nordic minimalism and timeless wardrobe essentials that transcend trends.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-[#F8F9FA] to-[#FFFFFF] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#C9A885]/20">
              <div className="w-16 h-16 bg-gradient-to-br from-[#C9A885] to-[#D4B896] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-[#FFFFFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-playfair text-2xl text-[#2C3E50] mb-4">Sustainable Wardrobe Building</h3>
              <p className="font-montserrat text-[#2C3E50]/70 leading-relaxed">
                Creating eco-conscious capsule wardrobes that combine ethics with aesthetics seamlessly.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-[#F8F9FA] to-[#FFFFFF] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#C9A885]/20">
              <div className="w-16 h-16 bg-gradient-to-br from-[#C9A885] to-[#D4B896] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-[#FFFFFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-playfair text-2xl text-[#2C3E50] mb-4">Clean Beauty & Skincare</h3>
              <p className="font-montserrat text-[#2C3E50]/70 leading-relaxed">
                Curating effective, non-toxic beauty routines that enhance natural radiance and confidence.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-[#F8F9FA] to-[#FFFFFF] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#C9A885]/20">
              <div className="w-16 h-16 bg-gradient-to-br from-[#C9A885] to-[#D4B896] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-[#FFFFFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-playfair text-2xl text-[#2C3E50] mb-4">Minimalist Style Coaching</h3>
              <p className="font-montserrat text-[#2C3E50]/70 leading-relaxed">
                Personal guidance in discovering your signature style through intentional, quality choices.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-[#F8F9FA] to-[#FFFFFF] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#C9A885]/20">
              <div className="w-16 h-16 bg-gradient-to-br from-[#C9A885] to-[#D4B896] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-[#FFFFFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="font-playfair text-2xl text-[#2C3E50] mb-4">Timeless Accessory Selection</h3>
              <p className="font-montserrat text-[#2C3E50]/70 leading-relaxed">
                Mastering the art of investment pieces and accessories that elevate any ensemble.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-[#2C3E50] to-[#34495E] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 md:col-span-3 lg:col-span-1">
              <div className="w-16 h-16 bg-[#C9A885] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-[#2C3E50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-playfair text-2xl text-[#F8F9FA] mb-4">Philosophy of Less</h3>
              <p className="font-montserrat text-[#F8F9FA]/80 leading-relaxed">
                Embracing the Scandinavian ethos of quality over quantity in every aspect of style and beauty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#2C3E50] to-[#34495E] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C9A885] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C9A885] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <p className="text-[#C9A885] font-montserrat text-sm tracking-[0.3em] uppercase mb-4">Recognition</p>
            <h2 className="font-playfair text-4xl md:text-5xl text-[#F8F9FA] mb-6">
              Milestones & Achievements
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-[#FFFFFF]/5 backdrop-blur-sm rounded-2xl border border-[#C9A885]/20">
              <div className="w-20 h-20 bg-[#C9A885] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[#2C3E50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-playfair text-2xl text-[#F8F9FA] mb-4">Industry Recognition</h3>
              <p className="font-montserrat text-[#F8F9FA]/80 leading-relaxed">
                Featured in Nordic Style Magazine's '30 Under 40' Influencers
              </p>
            </div>

            <div className="text-center p-8 bg-[#FFFFFF]/5 backdrop-blur-sm rounded-2xl border border-[#C9A885]/20">
              <div className="w-20 h-20 bg-[#C9A885] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[#2C3E50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-playfair text-2xl text-[#F8F9FA] mb-4">Brand Collaborations</h3>
              <p className="font-montserrat text-[#F8F9FA]/80 leading-relaxed">
                Collaborated with sustainable Scandinavian fashion brands including Arket and Filippa K
              </p>
            </div>

            <div className="text-center p-8 bg-[#FFFFFF]/5 backdrop-blur-sm rounded-2xl border border-[#C9A885]/20">
              <div className="w-20 h-20 bg-[#C9A885] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[#2C3E50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-playfair text-2xl text-[#F8F9FA] mb-4">Community Impact</h3>
              <p className="font-montserrat text-[#F8F9FA]/80 leading-relaxed">
                Built a community of 50,000+ women embracing intentional style
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Quote Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <svg className="w-24 h-24 text-[#C9A885]/20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <div className="pt-16 pb-8">
              <p className="font-playfair text-3xl md:text-4xl text-[#2C3E50] italic leading-relaxed mb-8">
                Elegance is not about being noticed, it's about being remembered.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C9A885] to-transparent mx-auto mb-6"></div>
              <p className="font-montserrat text-[#2C3E50]/70 text-lg">
                This philosophy guides everything at TrendsetterTales—from wardrobe curation to beauty rituals, we focus on creating lasting impressions through authentic, intentional style choices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-[#F8F9FA]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-4xl md:text-5xl text-[#2C3E50] mb-6">
            Let's Create Your Signature Style
          </h2>
          <p className="font-montserrat text-[#2C3E50]/70 text-lg mb-10 max-w-2xl mx-auto">
            Join our community of women who are redefining style after 30. Discover curated fashion insights, clean beauty secrets, and the art of intentional living.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-block bg-[#2C3E50] text-[#F8F9FA] font-montserrat px-8 py-4 rounded-full hover:bg-[#34495E] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Get In Touch
            </a>
            <a href="/blog" className="inline-block bg-[#C9A885] text-[#2C3E50] font-montserrat px-8 py-4 rounded-full hover:bg-[#D4B896] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Explore Articles
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
