import { colors, maxWidth, sectionPadding, spacing } from '../theme';
import { useMediaQuery } from '../hooks/useMediaQuery';

export default function SopeSection() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const wrap = {
    backgroundColor: colors.lightBg,
    ...sectionPadding(isMobile),
  };

  const inner = { maxWidth, margin: '0 auto' };

  const label = {
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: colors.accent,
    marginBottom: spacing.sm,
  };

  const h2 = {
    fontSize: isMobile ? 26 : 34,
    fontWeight: 800,
    color: colors.dark,
    margin: 0,
    marginBottom: spacing.md,
  };

  const p = {
    fontSize: 16,
    lineHeight: 1.75,
    color: colors.muted,
    margin: 0,
    marginBottom: spacing.sm,
  };

  const highlight = {
    borderLeft: `4px solid ${colors.primary}`,
    paddingLeft: spacing.md,
    marginTop: spacing.md,
    fontSize: 17,
    fontWeight: 600,
    color: colors.dark,
    lineHeight: 1.6,
  };

  return (
    <section id="sope" style={wrap}>
      <div style={inner}>
        <div style={label}>Sistema SOPE</div>
        <h2 style={h2}>Gestão moderna, desenhada para evoluir com você</h2>
        <p style={p}>
          O <strong style={{ color: colors.dark }}>SOPE</strong> é um sistema
          inovador de gestão que centraliza o essencial, reduz atrito operacional
          e coloca indicadores e fluxos no mesmo lugar — para decisões mais
          rápidas e equipes mais alinhadas.
        </p>
        <p style={p}>
          Mais do que software, é uma proposta de organização: padronizar o
          melhor, medir com clareza e permitir que gestores acompanhem a
          operação sem perder a visão estratégica. Ideal para quem busca escala
          com governança e agilidade com responsabilidade.
        </p>
        <div style={highlight}>
          SOPE traduz complexidade em fluxos claros — para você liderar com
          dados, não com suposições.
        </div>
      </div>
    </section>
  );
}
