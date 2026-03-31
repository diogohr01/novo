import {
  colors,
  fontFamily,
  maxWidth,
  radii,
  sectionPaddingDark,
  spacing,
} from '../theme';
import { useMediaQuery } from '../hooks/useMediaQuery';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeading from '../components/SectionHeading';

export default function EntrepreneurSection() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const wrap = {
    ...sectionPaddingDark(isMobile),
    fontFamily,
    background: `linear-gradient(135deg, ${colors.black} 0%, #0d2137 50%, #0a1628 100%)`,
    borderTop: `1px solid ${colors.border}`,
  };

  const inner = {
    maxWidth,
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '1.1fr 0.9fr',
    gap: isMobile ? spacing.lg : spacing.xl,
    alignItems: 'start',
  };

  const p = {
    fontSize: 16,
    lineHeight: 1.75,
    color: colors.muted,
    margin: 0,
    marginBottom: spacing.sm,
  };

  const stats = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: spacing.sm,
  };

  const stat = {
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderRadius: radii.md,
    padding: spacing.md,
    border: `1px solid ${colors.border}`,
  };

  const statVal = {
    fontSize: 26,
    fontWeight: 800,
    color: colors.accent,
  };

  const statLab = {
    fontSize: 13,
    color: colors.muted,
    marginTop: 6,
    lineHeight: 1.4,
  };

  return (
    <section id="visao" style={wrap}>
      <div style={inner}>
        <ScrollReveal direction="left">
          <div>
            <SectionHeading
              eyebrow="Visão empreendedora"
              title="Da excelência técnica ao produto que escala"
              subtitle="Mentalidade de inovação com pé no chão: método, feedback e entrega contínua."
              isMobile={isMobile}
            />
            <p style={p}>
              Empreender, para Josias, é aplicar método onde outros veem caos: entender
              dores reais, validar hipóteses e iterar com responsabilidade. O SOPE nasce
              dessa postura — menos promessa vazia, mais evolução constante do sistema e do
              atendimento.
            </p>
            <p style={{ ...p, marginBottom: 0 }}>
              A visão combina rigor técnico do SENAI com mentalidade de dono: métricas,
              proximidade com o cliente e melhoria contínua — para que a gestão acompanhe o
              ritmo do mercado.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={100}>
          <div style={stats}>
            <div style={stat}>
              <div style={statVal}>360°</div>
              <div style={statLab}>Visão integrada da operação</div>
            </div>
            <div style={stat}>
              <div style={statVal}>+</div>
              <div style={statLab}>Produto vivo, em evolução</div>
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
        </ScrollReveal>
      </div>
    </section>
  );
}
