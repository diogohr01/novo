import { useState } from 'react';
import { colors, fontFamily, radii, spacing } from '../theme';
import { useTestimonials } from '../context/TestimonialsContext';
import { useMediaQuery } from '../hooks/useMediaQuery';

export default function TestimonialForm() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { addTestimonial } = useTestimonials();
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [localError, setLocalError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [btnHover, setBtnHover] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLocalError(null);
    setSuccess(false);
    if (!name.trim() || !message.trim()) {
      setLocalError('Preencha nome e mensagem.');
      return;
    }
    setSubmitting(true);
    try {
      await addTestimonial({ name: name.trim(), message: message.trim() });
      setName('');
      setMessage('');
      setSuccess(true);
    } catch {
      setLocalError('Não foi possível enviar. Tente novamente.');
    } finally {
      setSubmitting(false);
    }
  }

  const field = {
    width: '100%',
    boxSizing: 'border-box',
    padding: '12px 14px',
    borderRadius: radii.sm,
    border: `1px solid ${colors.border}`,
    fontSize: 15,
    marginBottom: spacing.sm,
    outline: 'none',
    fontFamily,
    backgroundColor: colors.cardElevated,
    color: colors.white,
  };

  const labelStyle = {
    display: 'block',
    fontWeight: 600,
    fontSize: 14,
    color: colors.muted,
    marginBottom: 6,
  };

  const btn = {
    padding: '12px 22px',
    borderRadius: radii.pill,
    fontWeight: 700,
    fontSize: 15,
    cursor: submitting ? 'wait' : 'pointer',
    border: 'none',
    backgroundColor: btnHover ? colors.white : colors.accent,
    color: btnHover ? colors.black : colors.black,
    opacity: submitting ? 0.75 : 1,
    width: isMobile ? '100%' : 'auto',
    transform: btnHover && !submitting ? 'scale(1.02)' : 'scale(1)',
    transition: 'transform 0.2s, background-color 0.2s',
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginTop: spacing.md,
        padding: spacing.md,
        backgroundColor: colors.card,
        borderRadius: radii.lg,
        border: `1px solid ${colors.border}`,
        maxWidth: 520,
        fontFamily,
      }}
    >
      <div
        style={{
          fontWeight: 700,
          color: colors.white,
          marginBottom: spacing.sm,
          fontSize: 18,
        }}
      >
        Envie seu depoimento
      </div>
      <p
        style={{
          margin: 0,
          marginBottom: spacing.sm,
          color: colors.muted,
          fontSize: 14,
          lineHeight: 1.5,
        }}
      >
        Quer reconhecer o impacto do Josias ou do SOPE? Sua mensagem pode inspirar outras
        equipes.
      </p>
      <label style={labelStyle} htmlFor="t-name">
        Nome
      </label>
      <input
        id="t-name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={field}
        placeholder="Seu nome ou empresa"
        autoComplete="name"
      />
      <label style={labelStyle} htmlFor="t-msg">
        Mensagem
      </label>
      <textarea
        id="t-msg"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ ...field, minHeight: 100, resize: 'vertical' }}
        placeholder="Conte sua experiência em poucas linhas"
      />
      {(localError || success) && (
        <div
          style={{
            fontSize: 14,
            marginBottom: spacing.sm,
            color: success ? colors.accent : '#ff6b6b',
            fontWeight: 600,
          }}
        >
          {success ? 'Depoimento enviado com sucesso!' : localError}
        </div>
      )}
      <button
        type="submit"
        disabled={submitting}
        style={btn}
        onMouseEnter={() => setBtnHover(true)}
        onMouseLeave={() => setBtnHover(false)}
      >
        {submitting ? 'Enviando…' : 'Publicar depoimento'}
      </button>
    </form>
  );
}
