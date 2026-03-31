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
import SectionHeading from '../components/SectionHeading';
import sobreImg from '../assets/sobre.jpg';

export default function AboutSection() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const wrap = {
    ...sectionPaddingDark(isMobile),
    fontFamily,
    borderTop: `1px solid ${colors.border}`,
  };

  const inner = { maxWidth, margin: '0 auto' };

  const grid = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
    gap: isMobile ? spacing.lg : spacing.xl,
    alignItems: 'center',
  };

  const p = {
    fontSize: 16,
    lineHeight: 1.75,
    color: colors.muted,
    margin: 0,
    marginBottom: spacing.sm,
  };

  const imgStyle = {
    width: '100%',
    height: 'auto',
    display: 'block',
    borderRadius: radii.lg,
    border: `1px solid ${colors.border}`,
    boxShadow: shadows.card,
  };

  return (
    <section id="sobre" style={wrap}>
      <div style={inner}>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Sobre Josias"
            title="Raiz no SENAI, visão de quem vive a indústria"
            subtitle="Da formação técnica à construção de soluções reais para empresas que precisam evoluir com método."
            isMobile={isMobile}
          />
        </ScrollReveal>

        <div style={grid}>
          <ScrollReveal direction="left">
            <div
              style={{
                borderRadius: radii.lg,
                overflow: 'hidden',
                boxShadow: shadows.glowGreen,
              }}
            >
              <img src={sobreImg} alt="Ambiente de trabalho e SOPE" style={imgStyle} />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={80}>
            <p style={p}>
              Josias atua no ecossistema do SENAI com a mesma disciplina que define a
              instituição: excelência técnica, proximidade com a indústria e compromisso
              com quem aprende e com quem produz. Essa trajetória consolidou uma visão
              prática de processos — da sala de aula à operação — orientada por melhoria
              contínua.
            </p>
            <p style={p}>
              Vivenciando o dia a dia das equipes, ficou claro o padrão de dores:
              informações espalhadas, retrabalho e dificuldade de priorizar o que move o
              negócio. Daí nasceu o impulso empreendedor de criar o{' '}
              <strong style={{ color: colors.white }}>SOPE</strong> — um sistema online
              para empresa que traduz complexidade em fluxos claros e decisões mais
              seguras.
            </p>
            <div
              style={{
                marginTop: spacing.md,
                padding: spacing.md,
                borderRadius: radii.md,
                backgroundColor: colors.card,
                border: `1px solid ${colors.border}`,
              }}
            >
              <div style={{ fontWeight: 700, color: colors.accent, marginBottom: 8 }}>
                Por que confiar nessa jornada?
              </div>
              <p style={{ ...p, marginBottom: 0 }}>
                Porque não é teoria genérica — é experiência de quem conecta educação
                profissional, tecnologia e negócio no mesmo raciocínio.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
