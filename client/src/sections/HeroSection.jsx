import { useEffect, useState } from 'react';
import {
  colors,
  fontFamily,
  maxWidth,
  radii,
  shadows,
  spacing,
} from '../theme';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { useParallaxMouse } from '../hooks/useParallaxMouse';
import { useReducedMotion } from '../hooks/useReducedMotion';
import PlexusBackground from '../components/PlexusBackground';
import logoImg from '../assets/logo-prancheta.png';
import heroImg from '../assets/hero.png';

const headline = 'De trabalhador do SENAI a criador de uma solução inovadora';

export default function HeroSection() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const reduced = useReducedMotion();
  const { containerRef, offset, onMove, onLeave } = useParallaxMouse(isMobile ? 0 : 14);
  const [ctaHover, setCtaHover] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  const words = headline.split(' ');

  const wrap = {
    position: 'relative',
    minHeight: isMobile ? 'auto' : '92vh',
    background: `linear-gradient(180deg, ${colors.black} 0%, #0a1628 45%, ${colors.black} 100%)`,
    color: colors.white,
    paddingTop: isMobile ? 100 : 120,
    paddingBottom: isMobile ? spacing.xl : spacing.xxl,
    paddingLeft: isMobile ? spacing.sm : spacing.lg,
    paddingRight: isMobile ? spacing.sm : spacing.lg,
    overflow: 'hidden',
    fontFamily,
  };

  const inner = {
    maxWidth,
    margin: '0 auto',
    position: 'relative',
    zIndex: 1,
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '1.05fr 0.95fr',
    gap: isMobile ? spacing.lg : spacing.xl,
    alignItems: 'center',
  };

  const badge = {
    display: 'inline-block',
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: colors.accent,
    marginBottom: spacing.sm,
    opacity: mounted || reduced ? 1 : 0,
    transform: mounted || reduced ? 'translateY(0)' : 'translateY(12px)',
    transition: 'opacity 0.6s ease, transform 0.6s ease',
  };

  const h1 = {
    fontSize: isMobile ? 28 : 44,
    lineHeight: 1.12,
    fontWeight: 800,
    margin: 0,
    marginBottom: spacing.md,
    letterSpacing: '-0.03em',
  };

  const sub = {
    fontSize: isMobile ? 16 : 18,
    lineHeight: 1.65,
    maxWidth: 520,
    color: colors.muted,
    marginBottom: spacing.lg,
    opacity: mounted || reduced ? 1 : 0,
    transform: mounted || reduced ? 'translateY(0)' : 'translateY(16px)',
    transition: 'opacity 0.65s ease 0.15s, transform 0.65s ease 0.15s',
  };

  const cta = {
    display: 'inline-block',
    padding: '16px 32px',
    borderRadius: radii.pill,
    fontWeight: 700,
    fontSize: 16,
    textDecoration: 'none',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: ctaHover ? colors.white : colors.accent,
    color: ctaHover ? colors.black : colors.white,
    boxShadow: ctaHover ? shadows.card : shadows.glowGreen,
    transform: ctaHover ? 'scale(1.03)' : 'scale(1)',
    transition:
      'opacity 0.55s ease 0.28s, background-color 0.2s, color 0.2s, box-shadow 0.2s, transform 0.2s',
    opacity: mounted || reduced ? 1 : 0,
  };

  const visualWrap = {
    position: 'relative',
    transform: isMobile
      ? 'none'
      : `translate3d(${offset.x}px, ${offset.y}px, 0)`,
    transition: reduced ? 'none' : 'transform 0.35s ease-out',
  };

  const logoRow = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: isMobile ? 'flex-start' : 'center',
    gap: spacing.md,
    marginBottom: spacing.md,
  };

  const sopeLetters = {
    fontSize: isMobile ? 22 : 34,
    fontWeight: 700,
    letterSpacing: '0.35em',
    color: colors.white,
    textTransform: 'uppercase',
    opacity: 0.95,
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      style={wrap}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <PlexusBackground opacity={0.5} />
      <div style={inner}>
        <div>
          <span style={badge}>SENAI · empreendedorismo · SOPE</span>
          <h1 style={h1}>
            {words.map((w, i) => (
              <span
                key={`${w}-${i}`}
                style={{
                  display: 'inline-block',
                  marginRight: '0.28em',
                  color: colors.accent,
                  opacity: reduced || mounted ? 1 : 0,
                  transform:
                    reduced || mounted ? 'translateY(0)' : 'translateY(24px)',
                  transition: reduced
                    ? 'none'
                    : `opacity 0.5s ease ${80 + i * 45}ms, transform 0.55s cubic-bezier(0.22,1,0.36,1) ${80 + i * 45}ms`,
                }}
              >
                {w}
              </span>
            ))}
          </h1>
          <p style={sub}>
            Josias transforma anos de excelência no SENAI em produto: o SOPE —
            sistema online para empresa — com gestão clara, dados acionáveis e
            suporte humano. Menos atrito. Mais resultado.
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

        <div style={visualWrap}>
          <div style={logoRow}>
            <img
              src={logoImg}
              alt=""
              style={{
                width: isMobile ? 72 : 96,
                height: 'auto',
                filter: 'drop-shadow(0 12px 32px rgba(0,200,83,0.25))',
                opacity: mounted || reduced ? 1 : 0,
                transform: mounted || reduced ? 'scale(1)' : 'scale(0.92)',
                transition: 'opacity 0.7s ease 0.2s, transform 0.7s cubic-bezier(0.22,1,0.36,1) 0.2s',
              }}
            />
            <div style={sopeLetters}>S · O · P · E</div>
          </div>
          <div
            style={{
              borderRadius: radii.xl,
              overflow: 'hidden',
              border: `1px solid ${colors.border}`,
              boxShadow: shadows.card,
              opacity: mounted || reduced ? 1 : 0,
              transform: mounted || reduced ? 'translateY(0)' : 'translateY(40px)',
              transition: 'opacity 0.75s ease 0.25s, transform 0.75s cubic-bezier(0.22,1,0.36,1) 0.25s',
            }}
          >
            <img
              src={heroImg}
              alt="Destaque visual SOPE"
              style={{
                display: 'block',
                width: '100%',
                height: 'auto',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
