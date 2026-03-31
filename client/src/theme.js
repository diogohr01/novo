export const colors = {
  primary: '#0A66C2',
  dark: '#111',
  white: '#FFF',
  accent: '#00C853',
  muted: '#5c5c5c',
  lightBg: '#f4f7fb',
  border: '#e0e7ef',
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

export function sectionPadding(isMobile) {
  return {
    paddingLeft: isMobile ? spacing.sm : spacing.lg,
    paddingRight: isMobile ? spacing.sm : spacing.lg,
    paddingTop: isMobile ? spacing.lg : spacing.xl,
    paddingBottom: isMobile ? spacing.lg : spacing.xl,
  };
}
