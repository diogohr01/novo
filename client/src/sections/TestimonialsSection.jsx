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
import { useTestimonials } from '../context/TestimonialsContext';
import { useFetchTestimonials } from '../hooks/useFetchTestimonials';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeading from '../components/SectionHeading';
import TestimonialForm from '../components/TestimonialForm';

export default function TestimonialsSection() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { loading, error } = useFetchTestimonials();
  const { testimonials } = useTestimonials();

  const wrap = {
    ...sectionPaddingDark(isMobile),
    fontFamily,
    backgroundColor: colors.cardElevated,
    borderTop: `1px solid ${colors.border}`,
  };

  const inner = { maxWidth, margin: '0 auto' };

  const listStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.sm,
    marginBottom: spacing.lg,
  };

  const card = {
    backgroundColor: colors.card,
    borderRadius: radii.md,
    padding: spacing.md,
    border: `1px solid ${colors.border}`,
    boxShadow: shadows.card,
  };

  const nameStyle = {
    fontWeight: 700,
    color: colors.accent,
    marginBottom: 6,
    fontSize: 16,
  };

  const msgStyle = {
    margin: 0,
    color: colors.muted,
    lineHeight: 1.65,
    fontSize: 15,
  };

  return (
    <section id="depoimentos" style={wrap}>
      <div style={inner}>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Depoimentos"
            title="Quem acompanha a jornada reconhece o impacto"
            subtitle="Histórias reais carregadas da API — transparentes e atualizadas."
            isMobile={isMobile}
          />
        </ScrollReveal>

        {loading && (
          <p style={{ color: colors.muted, fontWeight: 600 }}>Carregando…</p>
        )}
        {error && !loading && (
          <p style={{ color: '#ff6b6b', fontWeight: 600 }}>{error}</p>
        )}

        {!loading && !error && testimonials.length === 0 && (
          <p style={{ color: colors.muted, marginBottom: spacing.md }}>
            Ainda não há depoimentos. Seja o primeiro a compartilhar sua experiência.
          </p>
        )}

        {!loading && testimonials.length > 0 && (
          <div style={listStyle}>
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.id} delay={i * 50}>
                <article style={card}>
                  <div style={nameStyle}>{t.name}</div>
                  <p style={msgStyle}>{t.message}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        )}

        <ScrollReveal delay={80}>
          <TestimonialForm />
        </ScrollReveal>
      </div>
    </section>
  );
}
