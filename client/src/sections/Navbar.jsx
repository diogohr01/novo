import { useState } from 'react';
import { colors, fontFamily, maxWidth, radii, shadows, spacing } from '../theme';
import { useMediaQuery } from '../hooks/useMediaQuery';
import logoImg from '../assets/logo-prancheta.png';

const navLinks = [
  { href: '#hero', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#sope', label: 'SOPE' },
  { href: '#sistema', label: 'Sistema' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

export default function Navbar() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  const outer = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    paddingTop: isMobile ? 12 : 20,
    paddingLeft: isMobile ? spacing.sm : spacing.lg,
    paddingRight: isMobile ? spacing.sm : spacing.lg,
    pointerEvents: 'none',
    fontFamily,
  };

  const barStyle = {
    pointerEvents: 'auto',
    maxWidth: maxWidth + 80,
    margin: '0 auto',
    backgroundColor: colors.glass,
    backdropFilter: 'blur(14px)',
    WebkitBackdropFilter: 'blur(14px)',
    borderRadius: radii.pill,
    border: `1px solid ${colors.glassBorder}`,
    boxShadow: shadows.nav,
    padding: isMobile ? '10px 14px' : '12px 22px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.sm,
  };

  const brandRow = {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    textDecoration: 'none',
    color: colors.dark,
  };

  const logoStyle = {
    height: isMobile ? 32 : 36,
    width: 'auto',
    display: 'block',
  };

  const linkBase = (i) => ({
    color: hovered === i ? colors.primary : colors.dark,
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: 13,
    padding: '8px 12px',
    borderRadius: radii.pill,
    transition: 'color 0.2s ease, background-color 0.2s ease',
    whiteSpace: 'nowrap',
  });

  return (
    <header style={outer}>
      <div style={barStyle}>
        <a href="#hero" style={brandRow} onClick={() => setOpen(false)}>
          <img src={logoImg} alt="SOPE" style={logoStyle} />
          <span style={{ fontWeight: 800, fontSize: isMobile ? 15 : 16, letterSpacing: '-0.02em' }}>
            Josias <span style={{ color: colors.primary }}>·</span> SOPE
          </span>
        </a>

        {!isMobile && (
          <nav style={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            {navLinks.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                style={linkBase(i)}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {l.label}
              </a>
            ))}
          </nav>
        )}

        {isMobile && (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            style={{
              border: `1px solid ${colors.borderLight}`,
              background: colors.white,
              borderRadius: radii.sm,
              padding: '8px 14px',
              fontWeight: 700,
              cursor: 'pointer',
              color: colors.dark,
              fontFamily,
            }}
          >
            {open ? 'Fechar' : 'Menu'}
          </button>
        )}
      </div>

      {isMobile && open && (
        <nav
          style={{
            pointerEvents: 'auto',
            marginTop: 10,
            maxWidth: maxWidth + 80,
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: colors.glass,
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            borderRadius: radii.lg,
            border: `1px solid ${colors.glassBorder}`,
            padding: spacing.sm,
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            boxShadow: shadows.nav,
          }}
        >
          {navLinks.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                ...linkBase(i),
                padding: '12px 14px',
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
