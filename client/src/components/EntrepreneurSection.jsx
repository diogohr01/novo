import { colors, maxWidth, sectionPadding, spacing } from '../theme';
import { useMediaQuery } from '../hooks/useMediaQuery';

export default function EntrepreneurSection() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const wrap = {
    background: `linear-gradient(90deg, ${colors.dark} 0%, #1e3a5f 100%)`,
    color: colors.white,
    ...sectionPadding(isMobile),
  };

  const inner = {
    maxWidth,
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '1.1fr 0.9fr',
    gap: isMobile ? spacing.md : spacing.xl,
    alignItems: 'center',
  };

  const label = {
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: colors.accent,
    marginBottom: spacing.sm,
  };

  const h2 = {
    fontSize: isMobile ? 24 : 30,
    fontWeight: 800,
    margin: 0,
    marginBottom: spacing.md,
    lineHeight: 1.2,
  };

  const p = {
    fontSize: 16,
    lineHeight: 1.75,
    opacity: 0.92,
    margin: 0,
    marginBottom: spacing.sm,
  };

  const stats = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: spacing.sm,
  };

  const stat = {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 14,
    padding: spacing.md,
    border: '1px solid rgba(255,255,255,0.12)',
  };

  const statVal = {
    fontSize: 28,
    fontWeight: 800,
    color: colors.accent,
  };

  const statLab = {
    fontSize: 13,
    opacity: 0.85,
    marginTop: 4,
  };

  return (
    <section id="visao" style={wrap}>
      <div style={inner}>
        <div>
          <div style={label}>Visão empreendedora</div>
          <h2 style={h2}>
            Do ambiente acadêmico-industrial à construção de produto
          </h2>
          <p style={p}>
            Empreender, para Josias, é aplicar método onde outros veem caos:
            entender dores reais, validar hipóteses e iterar com responsabilidade.
            O SOPE nasce dessa postura — menos promessa vazia, mais entrega
            contínua.
          </p>
          <p style={{ ...p, marginBottom: 0 }}>
            A visão combina rigor técnico do SENAI com mentalidade de dono: métricas,
            feedback e melhoria constante — para que a gestão acompanhe o ritmo do
            mercado.
          </p>
        </div>
        <div style={stats}>
          <div style={stat}>
            <div style={statVal}>360°</div>
            <div style={statLab}>Visão integrada da operação</div>
          </div>
          <div style={stat}>
            <div style={statVal}>+</div>
            <div style={statLab}>Evolução contínua do produto</div>
          </div>
          <div style={stat}>
            <div style={statVal}>OKR</div>
            <div style={statLab}>Foco em outcomes, não só tarefas</div>
          </div>
          <div style={stat}>
            <div style={statVal}>∞</div>
            <div style={statLab}>Escalabilidade com governança</div>
          </div>
        </div>
      </div>
    </section>
  );
}
