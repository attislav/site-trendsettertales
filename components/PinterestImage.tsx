import Image from 'next/image';

interface PinterestImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
}

/**
 * Simple wrapper around Next.js Image
 * Removed client-side error handling to work with Server Components
 */
export default function PinterestImage({
  src,
  alt,
  width = 900,
  height = 600,
  className = '',
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 45vw, 33vw",
  quality = 85,
}: PinterestImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`object-cover w-full h-full ${className}`}
      priority={priority}
      sizes={sizes}
      quality={quality}
      loading={priority ? 'eager' : 'lazy'}
    />
  );
}
