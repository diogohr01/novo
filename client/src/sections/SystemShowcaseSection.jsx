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
import dashboardImg from '../assets/dashboard.jpg';

export default function SystemShowcaseSection() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [hover, setHover] = useState(false);

  const wrap = {
    ...sectionPaddingDark(isMobile),
    fontFamily,
    backgroundColor: colors.cardElevated,
    borderTop: `1px solid ${colors.border}`,
  };

  const inner = { maxWidth, margin: '0 auto' };

  const grid = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '0.95fr 1.05fr',
    gap: isMobile ? spacing.lg : spacing.xl,
    alignItems: 'center',
  };

  const card = {
    backgroundColor: colors.card,
    borderRadius: radii.xl,
    padding: isMobile ? spacing.md : spacing.lg,
    border: `1px solid ${colors.border}`,
    boxShadow: shadows.card,
  };

  const btn = {
    display: 'inline-block',
    marginTop: spacing.md,
    padding: '14px 28px',
    borderRadius: radii.pill,
    fontWeight: 700,
    fontSize: 15,
    textDecoration: 'none',
    backgroundColor: hover ? '#09d95e' : colors.accent,
    color: colors.black,
    transform: hover ? 'scale(1.04)' : 'scale(1)',
    boxShadow: hover ? shadows.glowGreen : 'none',
    transition: 'transform 0.2s, background-color 0.2s, box-shadow 0.2s',
  };

  return (
    <section id="sistema" style={wrap}>
      <div style={inner}>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Sistema"
            title="Controle total: veja acessos, cliques e resultados"
            subtitle="Sistema gerencial para decisões mais rápidas e eficientes — com dados em tempo real."
            centered
            isMobile={isMobile}
          />
        </ScrollReveal>

        <div style={grid}>
          <ScrollReveal direction="left">
            <div style={card}>
              <h3
                style={{
                  fontSize: isMobile ? 20 : 22,
                  fontWeight: 800,
                  color: colors.accent,
                  margin: 0,
                  marginBottom: spacing.sm,
                  lineHeight: 1.3,
                }}
              >
                Painel que mostra o que importa
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: 15,
                  lineHeight: 1.65,
                  color: colors.muted,
                }}
              >
                Oferecemos um sistema completo de gestão onde você monitora em tempo
                real visitas ao site, produtos ou serviços mais clicados e desempenho
                geral — para decidir com mais segurança e agilidade.
              </p>
              <a
                href="#depoimentos"
                style={btn}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                Saiba mais
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={80}>
            <div
              style={{
                borderRadius: radii.lg,
                overflow: 'hidden',
                border: `1px solid ${colors.border}`,
                boxShadow: shadows.glowGreen,
              }}
            >
              <img
                src={dashboardImg}
                alt="Dashboard SOPE com métricas e produtos visitados"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={120}>
          <div
            style={{
              marginTop: spacing.xl,
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: spacing.md,
            }}
          >
            {[
              {
                title: 'Gestão completa',
                text: 'Finanças, estoque, vendas e clientes em um só lugar — centralizado e fácil de usar.',
              },
              {
                title: 'Relatórios e métricas',
                text: 'Relatórios automáticos sobre desempenho, acessos e indicadores-chave do negócio.',
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  padding: spacing.md,
                  borderRadius: radii.md,
                  backgroundColor: colors.card,
                  border: `1px solid ${colors.border}`,
                }}
              >
                <div style={{ fontWeight: 700, color: colors.accent, marginBottom: 8 }}>
                  {item.title}
                </div>
                <p style={{ margin: 0, color: colors.muted, fontSize: 15, lineHeight: 1.6 }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: spacing.md }}>
            <div
              style={{
                padding: spacing.md,
                borderRadius: radii.md,
                border: `1px solid ${colors.border}`,
              }}
            >
              <div style={{ fontWeight: 700, color: colors.accent, marginBottom: 8 }}>
                Segurança e acessos
              </div>
              <p style={{ margin: 0, color: colors.muted, fontSize: 15, lineHeight: 1.6 }}>
                Permissões por usuário, controle do que cada perfil vê e dados da empresa
                protegidos.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
