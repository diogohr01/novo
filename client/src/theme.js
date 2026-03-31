export const colors = {
  primary: '#0A66C2',
  dark: '#111111',
  black: '#000000',
  white: '#FFFFFF',
  accent: '#00C853',
  muted: '#a3a3a3',
  mutedDark: '#5c5c5c',
  lightBg: '#f4f7fb',
  border: '#2a2a2a',
  borderLight: '#e0e7ef',
  card: '#161616',
  cardElevated: '#1a1a1a',
  glass: 'rgba(255,255,255,0.88)',
  glassBorder: 'rgba(255,255,255,0.35)',
};

export const spacing = {
  xs: 8,
  sm: 16,
  md: 24,
  lg: 40,
  xl: 64,
  xxl: 96,
};

export const maxWidth = 1120;

export const radii = {
  sm: 10,
  md: 16,
  lg: 20,
  xl: 24,
  pill: 999,
};

export const shadows = {
  card: '0 8px 32px rgba(0,0,0,0.45)',
  glowGreen: '0 0 40px rgba(0,200,83,0.25)',
  nav: '0 8px 32px rgba(0,0,0,0.35)',
};

export const fontFamily =
  "'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

export function sectionPadding(isMobile) {
  return {
    paddingLeft: isMobile ? spacing.sm : spacing.lg,
    paddingRight: isMobile ? spacing.sm : spacing.lg,
    paddingTop: isMobile ? spacing.xl : spacing.xxl,
    paddingBottom: isMobile ? spacing.xl : spacing.xxl,
  };
}

export function sectionPaddingDark(isMobile) {
  return {
    ...sectionPadding(isMobile),
    backgroundColor: colors.black,
    color: colors.white,
  };
}
