import { useState } from 'react';
import { colors, maxWidth, spacing } from '../theme';
import { useMediaQuery } from '../hooks/useMediaQuery';

export default function HeroSection() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [ctaHover, setCtaHover] = useState(false);

  const wrap = {
    background: `linear-gradient(135deg, ${colors.dark} 0%, #1a2a3a 50%, ${colors.primary} 120%)`,
    color: colors.white,
    paddingTop: isMobile ? spacing.xl : spacing.xxl,
    paddingBottom: isMobile ? spacing.xl : spacing.xxl,
    paddingLeft: isMobile ? spacing.sm : spacing.lg,
    paddingRight: isMobile ? spacing.sm : spacing.lg,
  };

  const inner = {
    maxWidth,
    margin: '0 auto',
  };

  const badge = {
    display: 'inline-block',
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: colors.accent,
    marginBottom: spacing.sm,
  };

  const h1 = {
    fontSize: isMobile ? 32 : 48,
    lineHeight: 1.1,
    fontWeight: 800,
    margin: 0,
    marginBottom: spacing.md,
    letterSpacing: '-0.03em',
  };

  const sub = {
    fontSize: isMobile ? 16 : 18,
    lineHeight: 1.6,
    maxWidth: 560,
    opacity: 0.92,
    marginBottom: spacing.lg,
  };

  const cta = {
    display: 'inline-block',
    padding: '14px 28px',
    borderRadius: 10,
    fontWeight: 700,
    fontSize: 16,
    textDecoration: 'none',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: ctaHover ? colors.white : colors.accent,
    color: ctaHover ? colors.dark : colors.white,
    boxShadow: ctaHover
      ? '0 8px 24px rgba(0,0,0,0.2)'
      : '0 8px 24px rgba(0,200,83,0.35)',
  };

  return (
    <section id="hero" style={wrap}>
      <div style={inner}>
        <span style={badge}>SENAI · empreendedorismo · gestão</span>
        <h1 style={h1}>
          Da excelência técnica à inovação em gestão com o SOPE
        </h1>
        <p style={sub}>
          Josias constrói pontes entre a formação de excelência do SENAI e a
          realidade das organizações — com o SOPE, um sistema pensado para
          transformar dados em decisões e rotinas em resultados.
        </p>
        <a
          href="#sope"
          style={cta}
          onMouseEnter={() => setCtaHover(true)}
          onMouseLeave={() => setCtaHover(false)}
        >
          Conhecer o SOPE
        </a>
      </div>
    </section>
  );
}
