import { useState } from 'react';
import {
  colors,
  fontFamily,
  maxWidth,
  radii,
  sectionPaddingDark,
  shadows,
  spacing,
} from '../theme';
import { useMediaQuery } from '../hooks/useMediaQuery';
import ScrollReveal from '../components/ScrollReveal';
import responsivoImg from '../assets/responsivo.jpg';

export default function ResponsiveSection() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [hover, setHover] = useState(false);

  const wrap = {
    ...sectionPaddingDark(isMobile),
    fontFamily,
    borderTop: `1px solid ${colors.border}`,
  };

  const inner = { maxWidth, margin: '0 auto' };

  const grid = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '1.05fr 0.95fr',
    gap: isMobile ? spacing.lg : spacing.xl,
    alignItems: 'center',
  };

  const card = {
    backgroundColor: colors.card,
    borderRadius: radii.xl,
    padding: isMobile ? spacing.md : spacing.lg,
    border: `1px solid ${colors.border}`,
    boxShadow: shadows.card,
  };

  const btn = {
    display: 'inline-block',
    marginTop: spacing.md,
    padding: '14px 28px',
    borderRadius: radii.pill,
    fontWeight: 700,
    fontSize: 15,
    textDecoration: 'none',
    backgroundColor: hover ? colors.white : colors.accent,
    color: hover ? colors.black : colors.black,
    transform: hover ? 'scale(1.04)' : 'scale(1)',
    boxShadow: hover ? shadows.glowGreen : 'none',
    transition: 'transform 0.2s, background-color 0.2s, box-shadow 0.2s',
  };

  return (
    <section id="responsive" style={wrap}>
      <div style={inner}>
        <div style={grid}>
          <ScrollReveal direction="left">
            <div
              style={{
                borderRadius: radii.lg,
                overflow: 'hidden',
                border: `1px solid ${colors.border}`,
              }}
            >
              <img
                src={responsivoImg}
                alt="Sites e sistema SOPE em vários dispositivos"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={100}>
            <div style={card}>
              <h2
                style={{
                  fontSize: isMobile ? 24 : 30,
                  fontWeight: 800,
                  color: colors.accent,
                  margin: 0,
                  marginBottom: spacing.sm,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                }}
              >
                Seu site perfeito em qualquer tela.
              </h2>
              <p
                style={{
                  margin: 0,
                  fontSize: 16,
                  lineHeight: 1.65,
                  color: colors.muted,
                }}
              >
                Desenvolvemos sites que se adaptam automaticamente a qualquer dispositivo,
                garantindo uma navegação fluida e agradável em celulares, tablets e
                computadores — com a mesma identidade forte da sua marca.
              </p>
              <a
                href="#contato"
                style={btn}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                Saiba mais
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
