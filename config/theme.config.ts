/**
 * Theme Configuration
 *
 * Diese Config wird vom Generator dynamisch generiert basierend auf:
 * - Nische (fashion, fitness, food, tech)
 * - AI-generierte Design-Entscheidungen
 * - User-Präferenzen
 */

export interface ThemeConfig {
  colors: {
    primary: string;      // Hauptfarbe
    secondary: string;    // Sekundärfarbe
    accent: string;       // Akzentfarbe
    background: string;   // Hintergrund
    text: string;         // Text-Farbe
    textSecondary: string; // Sekundärer Text
  };
  fonts: {
    heading: string;      // Google Font für Überschriften
    body: string;         // Google Font für Body Text
  };
  spacing: {
    container: string;    // Max-width des Containers
    sectionPadding: string; // Padding für Sections
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
  };
}

// Preset-Themes (werden vom Generator verwendet)
export const fashionTheme: ThemeConfig = {
  colors: {
    primary: '#000000',
    secondary: '#f5f5f4',
    accent: '#f59e0b',
    background: '#fafaf9',
    text: '#0f172a',
    textSecondary: '#64748b',
  },
  fonts: {
    heading: 'Playfair Display',
    body: 'Montserrat',
  },
  spacing: {
    container: '1200px',
    sectionPadding: '80px 0',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
};

export const fitnessTheme: ThemeConfig = {
  colors: {
    primary: '#16a34a',   // Green
    secondary: '#ea580c', // Orange
    accent: '#f97316',
    background: '#ffffff',
    text: '#1e293b',
    textSecondary: '#475569',
  },
  fonts: {
    heading: 'Oswald',
    body: 'Roboto',
  },
  spacing: {
    container: '1200px',
    sectionPadding: '80px 0',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
  },
};

export const foodTheme: ThemeConfig = {
  colors: {
    primary: '#92400e',   // Brown
    secondary: '#fed7aa', // Peach
    accent: '#f97316',    // Orange
    background: '#fffbeb',
    text: '#292524',
    textSecondary: '#78716c',
  },
  fonts: {
    heading: 'Merriweather',
    body: 'Open Sans',
  },
  spacing: {
    container: '1200px',
    sectionPadding: '80px 0',
  },
  borderRadius: {
    sm: '6px',
    md: '12px',
    lg: '20px',
  },
};

export const techTheme: ThemeConfig = {
  colors: {
    primary: '#0ea5e9',   // Blue
    secondary: '#64748b', // Gray
    accent: '#3b82f6',
    background: '#f8fafc',
    text: '#0f172a',
    textSecondary: '#64748b',
  },
  fonts: {
    heading: 'Inter',
    body: 'Inter',
  },
  spacing: {
    container: '1200px',
    sectionPadding: '80px 0',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
  },
};

// Default Theme (Fallback)
export const defaultTheme = fashionTheme;

// Helper: Get theme by preset name
export function getThemeByPreset(preset: 'fashion' | 'fitness' | 'food' | 'tech'): ThemeConfig {
  const themes = {
    fashion: fashionTheme,
    fitness: fitnessTheme,
    food: foodTheme,
    tech: techTheme,
  };

  return themes[preset] || defaultTheme;
}
