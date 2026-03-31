import { useState } from 'react';
import {
  colors,
  fontFamily,
  maxWidth,
  radii,
  shadows,
  spacing,
} from '../theme';
import { contact } from '../constants/contact';
import { useMediaQuery } from '../hooks/useMediaQuery';
import ScrollReveal from '../components/ScrollReveal';

export default function CTASection() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [primaryHover, setPrimaryHover] = useState(false);
  const [secondaryHover, setSecondaryHover] = useState(false);

  const wrap = {
    background: `linear-gradient(180deg, ${colors.black} 0%, #0a1f16 100%)`,
    color: colors.white,
    paddingTop: isMobile ? spacing.xl : spacing.xxl,
    paddingBottom: isMobile ? spacing.xl : spacing.xxl,
    paddingLeft: isMobile ? spacing.sm : spacing.lg,
    paddingRight: isMobile ? spacing.sm : spacing.lg,
    borderTop: `1px solid ${colors.border}`,
    fontFamily,
  };

  const inner = {
    maxWidth,
    margin: '0 auto',
    textAlign: 'center',
  };

  const row = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    gap: spacing.sm,
    justifyContent: 'center',
    alignItems: 'center',
  };

  const primary = {
    display: 'inline-block',
    padding: '16px 32px',
    borderRadius: radii.pill,
    fontWeight: 700,
    fontSize: 16,
    textDecoration: 'none',
    backgroundColor: primaryHover ? colors.white : colors.accent,
    color: primaryHover ? colors.black : colors.black,
    border: 'none',
    cursor: 'pointer',
    transform: primaryHover ? 'scale(1.04)' : 'scale(1)',
    boxShadow: primaryHover ? shadows.glowGreen : 'none',
    transition: 'transform 0.2s, background-color 0.2s, box-shadow 0.2s',
  };

  const secondary = {
    display: 'inline-block',
    padding: '16px 32px',
    borderRadius: radii.pill,
    fontWeight: 700,
    fontSize: 16,
    textDecoration: 'none',
    backgroundColor: secondaryHover ? 'rgba(10,102,194,0.25)' : 'transparent',
    color: colors.white,
    border: `2px solid ${colors.primary}`,
    cursor: 'pointer',
    transform: secondaryHover ? 'scale(1.03)' : 'scale(1)',
    transition: 'transform 0.2s, background-color 0.2s',
  };

  return (
    <section id="cta-final" style={wrap}>
      <div style={inner}>
        <ScrollReveal>
          <h2
            style={{
              fontSize: isMobile ? 26 : 36,
              fontWeight: 800,
              margin: 0,
              marginBottom: spacing.sm,
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
            }}
          >
            Pronto para profissionalizar sua gestão com o SOPE?
          </h2>
          <p
            style={{
              fontSize: 17,
              color: colors.muted,
              maxWidth: 560,
              margin: '0 auto',
              marginBottom: spacing.lg,
              lineHeight: 1.65,
            }}
          >
            Fale com a equipe, tire dúvidas e descubra como adaptar a solução ao seu
            contexto — com seriedade, suporte próximo e tecnologia sob medida.
          </p>
          <div style={row}>
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={primary}
              onMouseEnter={() => setPrimaryHover(true)}
              onMouseLeave={() => setPrimaryHover(false)}
            >
              Falar no WhatsApp
            </a>
            <a
              href="#sope"
              style={secondary}
              onMouseEnter={() => setSecondaryHover(true)}
              onMouseLeave={() => setSecondaryHover(false)}
            >
              Revisitar o SOPE
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
