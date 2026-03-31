import { colors, fontFamily, maxWidth, spacing } from '../theme';
import { useMediaQuery } from '../hooks/useMediaQuery';
import logoImg from '../assets/logo-prancheta.png';

export default function Footer() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const wrap = {
    backgroundColor: colors.black,
    color: colors.white,
    paddingTop: spacing.lg,
    paddingBottom: spacing.lg,
    paddingLeft: isMobile ? spacing.sm : spacing.lg,
    paddingRight: isMobile ? spacing.sm : spacing.lg,
    borderTop: `1px solid ${colors.border}`,
    fontFamily,
  };

  const inner = {
    maxWidth,
    margin: '0 auto',
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'space-between',
    gap: spacing.md,
    alignItems: isMobile ? 'flex-start' : 'center',
  };

  const brandRow = {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    marginBottom: 8,
  };

  const small = {
    fontSize: 13,
    opacity: 0.72,
    lineHeight: 1.5,
    color: colors.muted,
  };

  const links = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: spacing.sm,
  };

  const link = {
    color: colors.white,
    textDecoration: 'none',
    fontSize: 14,
    fontWeight: 600,
    opacity: 0.88,
  };

  return (
    <footer style={wrap}>
      <div style={inner}>
        <div>
          <div style={brandRow}>
            <img src={logoImg} alt="" style={{ height: 36, width: 'auto' }} />
            <div style={{ fontWeight: 800, fontSize: 17 }}>
              Josias <span style={{ color: colors.accent }}>·</span> SOPE
            </div>
          </div>
          <div style={small}>
            Landing institucional — sistema inovador de gestão.
            <br />© {new Date().getFullYear()} — Todos os direitos reservados.
          </div>
        </div>
        <nav style={links}>
          <a href="#hero" style={link}>
            Início
          </a>
          <a href="#sobre" style={link}>
            Sobre
          </a>
          <a href="#sope" style={link}>
            SOPE
          </a>
          <a href="#sistema" style={link}>
            Sistema
          </a>
          <a href="#depoimentos" style={link}>
            Depoimentos
          </a>
          <a href="#contato" style={link}>
            Contato
          </a>
        </nav>
      </div>
    </footer>
  );
}
