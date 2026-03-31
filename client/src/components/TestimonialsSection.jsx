import { colors, maxWidth, sectionPadding, spacing } from '../theme';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { useTestimonials } from '../context/TestimonialsContext';
import { useFetchTestimonials } from '../hooks/useFetchTestimonials';
import TestimonialForm from './TestimonialForm';

export default function TestimonialsSection() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { loading, error } = useFetchTestimonials();
  const { testimonials } = useTestimonials();

  const wrap = {
    backgroundColor: colors.lightBg,
    ...sectionPadding(isMobile),
  };

  const inner = { maxWidth, margin: '0 auto' };

  const h2 = {
    fontSize: isMobile ? 26 : 34,
    fontWeight: 800,
    color: colors.dark,
    margin: 0,
    marginBottom: spacing.sm,
  };

  const sub = {
    fontSize: 16,
    color: colors.muted,
    lineHeight: 1.6,
    marginBottom: spacing.md,
    maxWidth: 640,
  };

  const listStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.sm,
    marginBottom: spacing.lg,
  };

  const card = {
    backgroundColor: colors.white,
    borderRadius: 14,
    padding: spacing.md,
    border: `1px solid ${colors.border}`,
    boxShadow: '0 4px 16px rgba(17,17,17,0.04)',
  };

  const nameStyle = {
    fontWeight: 700,
    color: colors.primary,
    marginBottom: 6,
    fontSize: 16,
  };

  const msgStyle = {
    margin: 0,
    color: colors.dark,
    lineHeight: 1.65,
    fontSize: 15,
  };

  return (
    <section id="depoimentos" style={wrap}>
      <div style={inner}>
        <h2 style={h2}>Depoimentos</h2>
        <p style={sub}>
          Histórias reais de quem acompanha a jornada do Josias e acredita na
          proposta do SOPE. Os depoimentos abaixo são carregados da API.
        </p>

        {loading && (
          <p style={{ color: colors.muted, fontWeight: 600 }}>Carregando…</p>
        )}
        {error && !loading && (
          <p style={{ color: '#c62828', fontWeight: 600 }}>{error}</p>
        )}

        {!loading && !error && testimonials.length === 0 && (
          <p style={{ color: colors.muted, marginBottom: spacing.md }}>
            Ainda não há depoimentos. Seja o primeiro a compartilhar sua
            experiência.
          </p>
        )}

        {!loading && testimonials.length > 0 && (
          <div style={listStyle}>
            {testimonials.map((t) => (
              <article key={t.id} style={card}>
                <div style={nameStyle}>{t.name}</div>
                <p style={msgStyle}>{t.message}</p>
              </article>
            ))}
          </div>
        )}

        <TestimonialForm />
      </div>
    </section>
  );
}
