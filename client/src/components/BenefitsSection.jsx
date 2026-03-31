import { colors, maxWidth, sectionPadding, spacing } from '../theme';
import { useMediaQuery } from '../hooks/useMediaQuery';

const items = [
  {
    title: 'Visibilidade',
    text: 'Indicadores e status em um painel único — menos ruído, mais clareza.',
  },
  {
    title: 'Padronização',
    text: 'Rotinas repetíveis e auditáveis, com menos dependência de “jeitinho”.',
  },
  {
    title: 'Velocidade',
    text: 'Menos retrabalho e handoffs — a equipe foca no que gera valor.',
  },
  {
    title: 'Escalabilidade',
    text: 'Estrutura pensada para crescer sem perder controle.',
  },
];

export default function BenefitsSection() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const wrap = {
    backgroundColor: colors.white,
    ...sectionPadding(isMobile),
  };

  const inner = { maxWidth, margin: '0 auto' };

  const h2 = {
    fontSize: isMobile ? 26 : 34,
    fontWeight: 800,
    color: colors.dark,
    margin: 0,
    marginBottom: spacing.sm,
    textAlign: isMobile ? 'left' : 'center',
  };

  const sub = {
    fontSize: 16,
    color: colors.muted,
    textAlign: isMobile ? 'left' : 'center',
    maxWidth: 640,
    margin: '0 auto',
    marginBottom: spacing.lg,
    lineHeight: 1.6,
  };

  const grid = {
    display: 'grid',
    gridTemplateColumns: isMobile
      ? '1fr'
      : 'repeat(2, minmax(0, 1fr))',
    gap: spacing.md,
  };

  const card = {
    borderRadius: 16,
    padding: spacing.md,
    border: `1px solid ${colors.border}`,
    background: `linear-gradient(180deg, ${colors.white} 0%, ${colors.lightBg} 100%)`,
  };

  const num = {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: colors.primary,
    color: colors.white,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 800,
    fontSize: 15,
    marginBottom: spacing.sm,
  };

  return (
    <section id="beneficios" style={wrap}>
      <div style={inner}>
        <h2 style={h2}>Benefícios que sustentam resultados</h2>
        <p style={sub}>
          O SOPE foi pensado para organizações que querem profissionalizar a
          gestão sem abrir mão de pragmatismo — do chão de fábrica ao escritório.
        </p>
        <div style={grid}>
          {items.map((it, i) => (
            <div key={it.title} style={card}>
              <div style={num}>{i + 1}</div>
              <div
                style={{
                  fontWeight: 700,
                  color: colors.dark,
                  marginBottom: spacing.xs,
                  fontSize: 18,
                }}
              >
                {it.title}
              </div>
              <p style={{ margin: 0, color: colors.muted, lineHeight: 1.65 }}>
                {it.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
