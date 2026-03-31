import { colors, maxWidth, sectionPadding, spacing } from '../theme';
import { useMediaQuery } from '../hooks/useMediaQuery';

export default function AboutSection() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const wrap = {
    backgroundColor: colors.white,
    ...sectionPadding(isMobile),
  };

  const inner = { maxWidth, margin: '0 auto' };

  const label = {
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: colors.primary,
    marginBottom: spacing.sm,
  };

  const h2 = {
    fontSize: isMobile ? 26 : 34,
    fontWeight: 800,
    color: colors.dark,
    margin: 0,
    marginBottom: spacing.md,
    letterSpacing: '-0.02em',
  };

  const p = {
    fontSize: 16,
    lineHeight: 1.75,
    color: colors.muted,
    margin: 0,
    marginBottom: spacing.sm,
  };

  const grid = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
    gap: isMobile ? spacing.md : spacing.lg,
    marginTop: spacing.md,
  };

  const card = {
    backgroundColor: colors.lightBg,
    borderRadius: 16,
    padding: spacing.md,
    border: `1px solid ${colors.border}`,
  };

  const cardTitle = {
    fontWeight: 700,
    color: colors.dark,
    marginBottom: spacing.xs,
    fontSize: 17,
  };

  return (
    <section id="sobre" style={wrap}>
      <div style={inner}>
        <div style={label}>Sobre Josias</div>
        <h2 style={h2}>Profissional SENAI, foco em impacto real</h2>
        <p style={p}>
          Josias atua no ecossistema do SENAI com a mesma disciplina que
          define a instituição: excelência técnica, proximidade com a indústria
          e compromisso com quem aprende e com quem produz. Ao longo da
          trajetória, consolidou uma visão prática de processos — da sala de
          aula à operação — sempre orientada por melhoria contínua.
        </p>
        <p style={p}>
          Essa vivência mostrou lacunas comuns na gestão do dia a dia:
          informações espalhadas, retrabalho e dificuldade de priorizar o que
          realmente move o negócio. Foi a partir desse diagnóstico que nasceu o
          propósito empreendedor de construir uma solução à altura dos desafios
          reais das equipes e das lideranças.
        </p>
        <div style={grid}>
          <div style={card}>
            <div style={cardTitle}>Raiz técnica</div>
            <p style={{ ...p, marginBottom: 0 }}>
              Formação e prática alinhadas às demandas do mercado, com
              linguagem clara e aplicável.
            </p>
          </div>
          <div style={card}>
            <div style={cardTitle}>Propósito</div>
            <p style={{ ...p, marginBottom: 0 }}>
              Ajudar organizações a ganharem previsibilidade, transparência e
              velocidade na execução.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
