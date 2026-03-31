import { useState } from 'react';
import { colors, maxWidth, spacing } from '../theme';
import { useMediaQuery } from '../hooks/useMediaQuery';

const navLinks = [
  { href: '#hero', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#sope', label: 'SOPE' },
  { href: '#beneficios', label: 'Benefícios' },
  { href: '#visao', label: 'Visão' },
  { href: '#depoimentos', label: 'Depoimentos' },
];

export default function Navbar() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  const barStyle = {
    position: 'sticky',
    top: 0,
    zIndex: 50,
    backgroundColor: colors.white,
    borderBottom: `1px solid ${colors.border}`,
    boxShadow: '0 2px 12px rgba(17,17,17,0.06)',
  };

  const inner = {
    maxWidth,
    margin: '0 auto',
    padding: `${spacing.sm}px ${isMobile ? spacing.sm : spacing.lg}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.sm,
  };

  const brand = {
    fontWeight: 800,
    fontSize: isMobile ? 18 : 20,
    color: colors.dark,
    letterSpacing: '-0.02em',
  };

  const accent = { color: colors.primary };

  const linkBase = (i) => ({
    color: hovered === i ? colors.primary : colors.dark,
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: 14,
    padding: '8px 10px',
    borderRadius: 8,
    transition: 'color 0.15s ease',
  });

  return (
    <header style={barStyle}>
      <div style={inner}>
        <a
          href="#hero"
          style={{ textDecoration: 'none', color: 'inherit' }}
          onClick={() => setOpen(false)}
        >
          <div style={brand}>
            Josias <span style={accent}>· SOPE</span>
          </div>
        </a>

        {!isMobile && (
          <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
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
              border: `1px solid ${colors.border}`,
              background: colors.white,
              borderRadius: 8,
              padding: '8px 12px',
              fontWeight: 700,
              cursor: 'pointer',
              color: colors.dark,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = colors.lightBg;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = colors.white;
            }}
          >
            {open ? 'Fechar' : 'Menu'}
          </button>
        )}
      </div>

      {isMobile && open && (
        <nav
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: `0 ${spacing.sm}px ${spacing.sm}px`,
            gap: 4,
            borderTop: `1px solid ${colors.border}`,
          }}
        >
          {navLinks.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                ...linkBase(i),
                padding: '12px 8px',
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
