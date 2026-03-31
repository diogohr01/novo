import { colors, fontFamily, spacing } from '../theme';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
  accentColor = colors.accent,
  isMobile = false,
}) {
  return (
    <div
      style={{
        fontFamily,
        marginBottom: spacing.lg,
        textAlign: centered ? 'center' : 'left',
        maxWidth: centered ? 720 : 'none',
        marginLeft: centered ? 'auto' : 0,
        marginRight: centered ? 'auto' : 0,
      }}
    >
      {eyebrow && (
        <div
          style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: accentColor,
            marginBottom: spacing.sm,
          }}
        >
          {eyebrow}
        </div>
      )}
      <h2
        style={{
          fontSize: isMobile ? 26 : 36,
          fontWeight: 800,
          color: colors.white,
          margin: 0,
          marginBottom: subtitle ? spacing.sm : 0,
          letterSpacing: '-0.03em',
          lineHeight: 1.15,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            margin: 0,
            fontSize: 16,
            lineHeight: 1.65,
            color: colors.muted,
            maxWidth: centered ? 560 : 640,
            marginLeft: centered ? 'auto' : 0,
            marginRight: centered ? 'auto' : 0,
          }}
        >
          {subtitle}
        </p>
      )}
      {centered && (
        <div
          style={{
            width: 48,
            height: 3,
            borderRadius: 2,
            backgroundColor: accentColor,
            marginTop: spacing.md,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
      )}
    </div>
  );
}
