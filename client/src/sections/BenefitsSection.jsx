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
import SectionHeading from '../components/SectionHeading';

const items = [
  {
    title: 'Visibilidade',
    text: 'Indicadores e status em um painel único — menos ruído, mais clareza para liderar.',
  },
  {
    title: 'Padronização',
    text: 'Rotinas repetíveis e auditáveis, com menos dependência de improviso.',
  },
  {
    title: 'Velocidade',
    text: 'Menos retrabalho e handoffs — a equipe foca no que gera valor.',
  },
  {
    title: 'Escalabilidade',
    text: 'Estrutura pensada para crescer sem perder controle e segurança.',
  },
];

export default function BenefitsSection() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [hovered, setHovered] = useState(null);

  const wrap = {
    ...sectionPaddingDark(isMobile),
    fontFamily,
    borderTop: `1px solid ${colors.border}`,
  };

  const inner = { maxWidth, margin: '0 auto' };

  const grid = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, minmax(0, 1fr))',
    gap: spacing.md,
  };

  return (
    <section id="beneficios" style={wrap}>
      <div style={inner}>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Benefícios"
            title="Resultados que se sustentam no tempo"
            subtitle="O SOPE foi pensado para organizações que querem profissionalizar a gestão com pragmatismo — do chão de fábrica ao escritório."
            centered
            isMobile={isMobile}
          />
        </ScrollReveal>

        <div style={grid}>
          {items.map((it, i) => {
            const h = hovered === i;
            return (
              <ScrollReveal key={it.title} delay={i * 70}>
                <div
                  role="presentation"
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    borderRadius: radii.lg,
                    padding: spacing.md,
                    border: `1px solid ${h ? colors.accent : colors.border}`,
                    background: h
                      ? `linear-gradient(145deg, ${colors.card} 0%, #132a1f 100%)`
                      : colors.card,
                    boxShadow: h ? shadows.glowGreen : shadows.card,
                    transform: h ? 'translateY(-4px)' : 'translateY(0)',
                    transition:
                      'border-color 0.25s, box-shadow 0.25s, transform 0.25s, background 0.25s',
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: radii.sm,
                      backgroundColor: colors.primary,
                      color: colors.white,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: 16,
                      marginBottom: spacing.sm,
                    }}
                  >
                    {i + 1}
                  </div>
                  <div
                    style={{
                      fontWeight: 700,
                      color: colors.white,
                      marginBottom: spacing.xs,
                      fontSize: 18,
                    }}
                  >
                    {it.title}
                  </div>
                  <p style={{ margin: 0, color: colors.muted, lineHeight: 1.65, fontSize: 15 }}>
                    {it.text}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
