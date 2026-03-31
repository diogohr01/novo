import { colors, maxWidth, spacing } from '../theme';
import { useMediaQuery } from '../hooks/useMediaQuery';

export default function Footer() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const wrap = {
    backgroundColor: colors.dark,
    color: colors.white,
    paddingTop: spacing.lg,
    paddingBottom: spacing.lg,
    paddingLeft: isMobile ? spacing.sm : spacing.lg,
    paddingRight: isMobile ? spacing.sm : spacing.lg,
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

  const brand = {
    fontWeight: 800,
    fontSize: 18,
    marginBottom: 6,
  };

  const small = {
    fontSize: 13,
    opacity: 0.75,
    lineHeight: 1.5,
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
    opacity: 0.9,
  };

  return (
    <footer style={wrap}>
      <div style={inner}>
        <div>
          <div style={brand}>
            Josias <span style={{ color: colors.accent }}>·</span> SOPE
          </div>
          <div style={small}>
            Landing institucional — sistema inovador de gestão.
            <br />
            © {new Date().getFullYear()} — Todos os direitos reservados.
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
          <a href="#depoimentos" style={link}>
            Depoimentos
          </a>
        </nav>
      </div>
    </footer>
  );
}
