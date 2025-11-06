/**
 * Color Utility Functions
 * Helper functions for color contrast and accessibility
 */

/**
 * Convert hex color to RGB
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

/**
 * Calculate relative luminance of a color
 * https://www.w3.org/TR/WCAG20/#relativeluminancedef
 */
export function getLuminance(hex: string): number {
  const rgb = hexToRgb(hex);
  if (!rgb) return 0;

  const { r, g, b } = rgb;

  // Convert to sRGB
  const rsRGB = r / 255;
  const gsRGB = g / 255;
  const bsRGB = b / 255;

  // Apply gamma correction
  const rLinear = rsRGB <= 0.03928 ? rsRGB / 12.92 : Math.pow((rsRGB + 0.055) / 1.055, 2.4);
  const gLinear = gsRGB <= 0.03928 ? gsRGB / 12.92 : Math.pow((gsRGB + 0.055) / 1.055, 2.4);
  const bLinear = bsRGB <= 0.03928 ? bsRGB / 12.92 : Math.pow((bsRGB + 0.055) / 1.055, 2.4);

  // Calculate luminance
  return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
}

/**
 * Determine if a color is light or dark
 * Returns true if the color is light (needs dark text)
 */
export function isLightColor(hex: string): boolean {
  const luminance = getLuminance(hex);
  return luminance > 0.5;
}

/**
 * Get contrasting text color (white or black) for a background color
 */
export function getContrastTextColor(backgroundColor: string): string {
  return isLightColor(backgroundColor) ? '#000000' : '#ffffff';
}

/**
 * Get footer colors with proper contrast
 * Returns background and text colors for the footer
 */
export function getFooterColors(brandColors: {
  primary: string;
  secondary?: string;
  background: string;
}): {
  backgroundColor: string;
  textColor: string;
  headingColor: string;
  linkColor: string;
  linkHoverColor: string;
  borderColor: string;
} {
  // Use primary color for footer background
  const backgroundColor = brandColors.primary;
  const isLight = isLightColor(backgroundColor);

  return {
    backgroundColor,
    textColor: isLight ? '#4b5563' : '#d1d5db', // gray-600 : gray-300
    headingColor: isLight ? '#000000' : '#ffffff',
    linkColor: isLight ? '#6b7280' : '#9ca3af', // gray-500 : gray-400
    linkHoverColor: isLight ? '#000000' : '#ffffff',
    borderColor: isLight ? '#e5e7eb' : '#374151', // gray-200 : gray-700
  };
}
