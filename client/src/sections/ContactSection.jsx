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
import { contact } from '../constants/contact';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeading from '../components/SectionHeading';
import logoImg from '../assets/logo-prancheta.png';

export default function ContactSection() {
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
    gap: spacing.xl,
    alignItems: 'start',
  };

  const greenCard = {
    backgroundColor: colors.accent,
    color: colors.black,
    borderRadius: radii.xl,
    padding: isMobile ? spacing.md : spacing.lg,
    boxShadow: shadows.glowGreen,
  };

  const row = {
    display: 'flex',
    gap: spacing.sm,
    alignItems: 'flex-start',
    marginBottom: spacing.md,
  };

  const iconCircle = {
    width: 40,
    height: 40,
    borderRadius: '50%',
    backgroundColor: 'rgba(0,0,0,0.12)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  };

  const label = {
    fontWeight: 700,
    fontSize: 13,
    marginBottom: 4,
    opacity: 0.85,
  };

  const value = {
    fontSize: 15,
    fontWeight: 600,
    lineHeight: 1.5,
    margin: 0,
  };

  return (
    <section id="contato" style={wrap}>
      <div style={inner}>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Contato"
            title="Entre em contato com a SOPE"
            subtitle="Transforme o futuro da sua empresa com um parceiro técnico próximo e confiável."
            centered
            isMobile={isMobile}
          />
        </ScrollReveal>

        <div style={grid}>
          <ScrollReveal direction="left">
            <div style={greenCard}>
              <h3
                style={{
                  margin: 0,
                  marginBottom: spacing.md,
                  fontSize: 22,
                  fontWeight: 800,
                }}
              >
                Informações de contato
              </h3>

              <div style={row}>
                <div style={iconCircle} aria-hidden>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div style={label}>Nossa localização</div>
                  <p style={value}>
                    {contact.addressLine}
                    <br />
                    {contact.city}
                  </p>
                </div>
              </div>

              <div style={row}>
                <div style={iconCircle} aria-hidden>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <div style={label}>Número de telefone</div>
                  <a
                    href={`tel:+${contact.phoneDigits}`}
                    style={{ ...value, color: colors.black, textDecoration: 'none' }}
                  >
                    {contact.phoneDisplay}
                  </a>
                </div>
              </div>

              <div style={{ ...row, marginBottom: 0 }}>
                <div style={iconCircle} aria-hidden>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <div style={label}>Email</div>
                  <a
                    href={`mailto:${contact.email}`}
                    style={{ ...value, color: colors.black, textDecoration: 'none', wordBreak: 'break-all' }}
                  >
                    {contact.email}
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={80}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: isMobile ? 'flex-start' : 'center',
                justifyContent: 'center',
                minHeight: isMobile ? 'auto' : 280,
                padding: spacing.md,
              }}
            >
              <img
                src={logoImg}
                alt="SOPE"
                style={{
                  width: isMobile ? 140 : 180,
                  height: 'auto',
                  opacity: 0.9,
                  filter: 'drop-shadow(0 8px 24px rgba(0,200,83,0.2))',
                }}
              />
              <p
                style={{
                  marginTop: spacing.md,
                  color: colors.muted,
                  fontSize: 15,
                  lineHeight: 1.6,
                  textAlign: isMobile ? 'left' : 'center',
                  maxWidth: 360,
                }}
              >
                SOPE — Sistema Online Para Empresa. Sites e sistemas que fazem seu
                negócio evoluir.
              </p>
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: spacing.sm,
                  color: colors.accent,
                  fontWeight: 700,
                  textDecoration: 'none',
                  fontSize: 15,
                }}
              >
                Iniciar conversa no WhatsApp →
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
