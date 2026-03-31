import { useState } from 'react';
import { colors, maxWidth, spacing } from '../theme';
import { useMediaQuery } from '../hooks/useMediaQuery';

export default function CTASection() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [primaryHover, setPrimaryHover] = useState(false);
  const [secondaryHover, setSecondaryHover] = useState(false);

  const wrap = {
    backgroundColor: colors.white,
    paddingTop: isMobile ? spacing.lg : spacing.xl,
    paddingBottom: isMobile ? spacing.lg : spacing.xl,
    paddingLeft: isMobile ? spacing.sm : spacing.lg,
    paddingRight: isMobile ? spacing.sm : spacing.lg,
    borderTop: `1px solid ${colors.border}`,
  };

  const inner = {
    maxWidth,
    margin: '0 auto',
    textAlign: 'center',
  };

  const h2 = {
    fontSize: isMobile ? 24 : 32,
    fontWeight: 800,
    color: colors.dark,
    margin: 0,
    marginBottom: spacing.sm,
  };

  const sub = {
    fontSize: 16,
    color: colors.muted,
    maxWidth: 560,
    margin: '0 auto',
    marginBottom: spacing.lg,
    lineHeight: 1.65,
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
    padding: '14px 28px',
    borderRadius: 10,
    fontWeight: 700,
    fontSize: 16,
    textDecoration: 'none',
    backgroundColor: primaryHover ? '#0958a8' : colors.primary,
    color: colors.white,
    border: 'none',
    cursor: 'pointer',
  };

  const secondary = {
    display: 'inline-block',
    padding: '14px 28px',
    borderRadius: 10,
    fontWeight: 700,
    fontSize: 16,
    textDecoration: 'none',
    backgroundColor: secondaryHover ? colors.lightBg : colors.white,
    color: colors.dark,
    border: `2px solid ${colors.border}`,
    cursor: 'pointer',
  };

  return (
    <section id="contato" style={wrap}>
      <div style={inner}>
        <h2 style={h2}>Pronto para profissionalizar sua gestão?</h2>
        <p style={sub}>
          Converse sobre o SOPE, tire dúvidas e descubra como adaptar a solução
          ao seu contexto — com a mesma seriedade que o SENAI aplica à formação
          e à indústria.
        </p>
        <div style={row}>
          <a
            href="#depoimentos"
            style={primary}
            onMouseEnter={() => setPrimaryHover(true)}
            onMouseLeave={() => setPrimaryHover(false)}
          >
            Ver depoimentos
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
      </div>
    </section>
  );
}
