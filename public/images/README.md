# 🖼️ Site Images

This directory contains all images used by the generated site.

---

## 📁 Required Images

### 1. Hero Background
**File:** `hero-bg.jpg` or `hero-bg.webp`
- **Size:** 1920x1080px (16:9) or larger
- **Format:** JPG or WebP
- **Description:** Main background image for the homepage hero section
- **Style:** Should match your site's niche (fashion, fitness, food, tech, etc.)

### 2. Category Images
**Files:** `category-{slug}.jpg`
- **Size:** 900x600px (3:2 ratio)
- **Format:** JPG
- **Quantity:** 3-5 images
- **Examples:**
  - `category-fashion.jpg`
  - `category-beauty.jpg`
  - `category-lifestyle.jpg`
- **Description:** Used on category pages and homepage category grid
- **Style:** Niche-specific, professional, high-quality

### 3. Author Portrait (Optional)
**File:** `author-portrait.jpg`
- **Size:** 400x400px (1:1 square)
- **Format:** JPG
- **Description:** Author photo displayed on About page and post bylines
- **Style:** Professional headshot or portrait

### 4. Placeholder Post Images (Optional)
**Files:** `post-{number}.jpg`
- **Size:** 900x600px (3:2 ratio)
- **Format:** JPG
- **Quantity:** 3-5 images
- **Examples:**
  - `post-1.jpg`
  - `post-2.jpg`
  - `post-3.jpg`
- **Description:** Fallback images for posts without featured images
- **Style:** Generic but niche-appropriate

### 5. Logo (Optional)
**File:** `logo.png` or `logo.svg`
- **Size:** Flexible (typically 200-400px wide)
- **Format:** PNG (with transparency) or SVG
- **Description:** Site logo, used in header and footer
- **Style:** Matches brand identity

---

## 🎨 Image Guidelines

### Pinterest Optimization
- **Aspect Ratio:** Use 3:2 or 2:3 for Pinterest
- **Size:** At least 900x600px for horizontal images
- **Quality:** High-resolution, crisp, and clear
- **Style:** Visually appealing, consistent with niche

### SEO Best Practices
- Use descriptive file names (e.g., `fashion-summer-trends.jpg` instead of `IMG_1234.jpg`)
- Keep file sizes under 500KB (compress using TinyPNG, ImageOptim, etc.)
- Use WebP format for better performance where possible

### Brand Consistency
- Maintain consistent color palette across all images
- Use similar photography style (e.g., bright/airy, dark/moody, minimalist)
- Apply consistent filters or editing style

---

## 🤖 AI Image Generation (Phase 2.5)

In a future version, images will be automatically generated using AI:
- **Service:** Ideogram, Midjourney, or DALL-E
- **Process:** Generator UI will create niche-appropriate images
- **Customization:** Based on site style, colors, and niche
- **Output:** All required images generated automatically

Until then, images must be added manually or sourced from:
- Stock photo sites (Unsplash, Pexels, Pixabay)
- Custom photography
- Purchased stock images
- AI tools (manual generation)

---

## 📝 Adding Images

### During Site Generation
The generator will copy a basic set of placeholder images, but you should replace them with niche-specific images after deployment.

### Manual Addition
1. Place images in this directory (`public/images/`)
2. Reference them in your site config or content:
   ```typescript
   hero: {
     backgroundImage: "/images/hero-bg.jpg"
   }
   ```
3. Redeploy your site or commit to Git

### WordPress Featured Images
Featured images are managed in WordPress and served via the WordPress API. They don't need to be placed in this directory.

---

## ⚠️ Important Notes

- **DO NOT** commit large image files (>1MB) to Git if avoidable
- **DO** compress images before adding them
- **DO** use descriptive file names
- **DO NOT** include copyrighted images without permission
- **DO** use WebP format for better performance
- **DO** include alt text in your content for accessibility

---

**Version:** 1.0.0
**Last Updated:** 2025-01-16
