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
import gerenciarImg from '../assets/gerenciar.jpg';

export default function SopeSection() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const wrap = {
    ...sectionPaddingDark(isMobile),
    fontFamily,
    backgroundColor: colors.cardElevated,
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

  const highlight = {
    borderLeft: `4px solid ${colors.primary}`,
    paddingLeft: spacing.md,
    marginTop: spacing.md,
    fontSize: 17,
    fontWeight: 600,
    color: colors.white,
    lineHeight: 1.6,
  };

  return (
    <section id="sope" style={wrap}>
      <div style={inner}>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Sistema SOPE"
            title="Sistema Online Para Empresa"
            subtitle="Centralize gestão, sites e indicadores — com suporte próximo e tecnologia sob medida."
            isMobile={isMobile}
          />
        </ScrollReveal>

        <div style={grid}>
          <ScrollReveal direction="right" delay={60}>
            <div>
              <p style={p}>
                O <strong style={{ color: colors.white }}>SOPE</strong> é um sistema
                inovador de gestão que resolve o caos de planilhas soltas e ferramentas
                desconectadas. Ele coloca finanças, estoque, vendas, clientes e
                indicadores em um fluxo único — para decisões mais rápidas e equipes
                alinhadas.
              </p>
              <p style={p}>
                <strong style={{ color: colors.accent }}>Problema:</strong> retrabalho,
                falta de visibilidade e risco operacional.{' '}
                <strong style={{ color: colors.accent }}>Solução:</strong> padronizar o
                melhor, medir com clareza e acompanhar a operação sem perder a visão
                estratégica.
              </p>
              <div style={highlight}>
                Diferencial: mais de 12 anos de experiência em programação, formação em
                Engenharia da Computação e atuação em diversos setores — com suporte
                contínuo e atendimento humanizado.
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left">
            <div
              style={{
                borderRadius: radii.lg,
                overflow: 'hidden',
                border: `1px solid ${colors.border}`,
                boxShadow: shadows.card,
              }}
            >
              <img
                src={gerenciarImg}
                alt="Interface e gestão SOPE"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
