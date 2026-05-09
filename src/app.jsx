// app.jsx — root, navigation, theme system, tweaks panel

const { useState: useStateApp, useEffect: useEffectApp, useMemo: useMemoApp } = React;

/* ──────────────────────────── THEME TOKENS ──────────────────────────── */

// 3 directions × dark mode: bg/fg/accent palettes
const DIRECTIONS = {
  editorial: {
    light: {
      bg: '#f3ebd9', bgAlt: '#ebe1cb', bgCard: '#fbf6ea',
      fg: '#1f1611', fgMuted: '#5b4a3c',
      rule: 'rgba(31,22,17,.16)', ruleStrong: 'rgba(31,22,17,.32)',
      accent: '#b8462a', accent2: '#9c7a3a',
      accentFg: '#fbf6ea', grain: 'rgba(31,22,17,.06)',
    },
    dark: {
      bg: '#1a140e', bgAlt: '#221a13', bgCard: '#251c14',
      fg: '#f0e5d2', fgMuted: '#a89880',
      rule: 'rgba(240,229,210,.13)', ruleStrong: 'rgba(240,229,210,.28)',
      accent: '#e08442', accent2: '#d4af6a',
      accentFg: '#1a140e', grain: 'rgba(240,229,210,.04)',
    },
  },
  tech: {
    light: {
      bg: '#f7f4eb', bgAlt: '#efeadd', bgCard: '#fdfbf3',
      fg: '#0e0d0a', fgMuted: '#4d4a40',
      rule: 'rgba(14,13,10,.16)', ruleStrong: 'rgba(14,13,10,.36)',
      accent: '#a8431f', accent2: '#6b6438',
      accentFg: '#fdfbf3', grain: 'rgba(14,13,10,.06)',
    },
    dark: {
      bg: '#0d0d0a', bgAlt: '#161512', bgCard: '#1a1916',
      fg: '#ebe7d8', fgMuted: '#968e7a',
      rule: 'rgba(235,231,216,.14)', ruleStrong: 'rgba(235,231,216,.32)',
      accent: '#d97757', accent2: '#c9a35d',
      accentFg: '#0d0d0a', grain: 'rgba(235,231,216,.04)',
    },
  },
  cosmos: {
    light: {
      bg: '#f4ecdc', bgAlt: '#e8ddc5', bgCard: '#fbf6ea',
      fg: '#1f1611', fgMuted: '#5b4a3c',
      rule: 'rgba(31,22,17,.18)', ruleStrong: 'rgba(31,22,17,.36)',
      accent: '#c14b30', accent2: '#c08a3e',
      accentFg: '#fbf6ea', grain: 'rgba(31,22,17,.06)',
    },
    dark: {
      bg: '#14110b', bgAlt: '#1c1810', bgCard: '#221d13',
      fg: '#f5ead4', fgMuted: '#a89880',
      rule: 'rgba(245,234,212,.14)', ruleStrong: 'rgba(245,234,212,.32)',
      accent: '#e08442', accent2: '#d4af6a',
      accentFg: '#14110b', grain: 'rgba(245,234,212,.04)',
    },
  },
};

const FONTS = {
  editorial: {
    display: '"Instrument Serif", Georgia, serif',
    body: '"DM Sans", system-ui, sans-serif',
    mono: '"JetBrains Mono", ui-monospace, monospace',
  },
  magazine: {
    display: '"Newsreader", Georgia, serif',
    body: '"Manrope", system-ui, sans-serif',
    mono: '"JetBrains Mono", ui-monospace, monospace',
  },
  classic: {
    display: '"Cormorant Garamond", Georgia, serif',
    body: '"Space Grotesk", system-ui, sans-serif',
    mono: '"Space Mono", ui-monospace, monospace',
  },
};

const ACCENT_OPTIONS = [
  { name: 'Terracota', light: '#b8462a', dark: '#e08442' },
  { name: 'Arcilla',   light: '#c14b30', dark: '#d97757' },
  { name: 'Ocre',      light: '#a8763a', dark: '#d4af6a' },
  { name: 'Sienna',    light: '#8a3a1d', dark: '#c14b30' },
  { name: 'Oliva',     light: '#6b6438', dark: '#a89e60' },
];

function buildTokens(t) {
  const dir = DIRECTIONS[t.direction] || DIRECTIONS.editorial;
  const mode = t.dark ? 'dark' : 'light';
  const base = { ...dir[mode] };
  // accent override
  const accent = ACCENT_OPTIONS.find(a => a.name === t.accent);
  if (accent) {
    base.accent = t.dark ? accent.dark : accent.light;
  }
  const fonts = FONTS[t.font] || FONTS.editorial;
  return {
    '--bg': base.bg,
    '--bg-alt': base.bgAlt,
    '--bg-card': base.bgCard,
    '--fg': base.fg,
    '--fg-muted': base.fgMuted,
    '--rule': base.rule,
    '--rule-strong': base.ruleStrong,
    '--accent': base.accent,
    '--accent-2': base.accent2,
    '--accent-fg': base.accentFg,
    '--grain': base.grain,
    '--font-display': fonts.display,
    '--font-body': fonts.body,
    '--font-mono': fonts.mono,
    '--fs-body': t.fontSize + 'px',
  };
}

/* ──────────────────────────── DEFAULTS (editable) ──────────────────────────── */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "direction": "editorial",
  "font": "editorial",
  "accent": "Terracota",
  "fontSize": 16,
  "density": "regular",
  "dark": false,
  "heroLayout": "split"
}/*EDITMODE-END*/;

/* ──────────────────────────── NAV ──────────────────────────── */

function Nav({ section, goto }) {
  const items = [
    { id: 'home', label: 'Inicio' },
    { id: 'about', label: 'Sobre mí' },
    { id: 'notes', label: 'Notas' },
    { id: 'resources', label: 'Recursos' },
  ];
  return (
    <nav className="nav">
      <button className="nav-brand" onClick={() => goto('home')}>
        <span className="dot" />
        <em>Astroannais</em>
        <small>annaismolina.cl</small>
      </button>
      <ul className="nav-links">
        {items.map(it => (
          <li key={it.id}>
            <button
              className={section === it.id ? 'is-on' : ''}
              onClick={() => goto(it.id)}
            >
              {it.label}
            </button>
          </li>
        ))}
      </ul>
      <div className="nav-meta">
        <a href="https://instagram.com/astroannais" target="_blank" rel="noreferrer">@astroannais ↗</a>
        <a href="https://www.linkedin.com/in/annaismolinab/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
      </div>
    </nav>
  );
}

function Footer({ goto }) {
  return (
    <footer className="footer">
      <div className="footer-mark">
        Annais <em>Molina</em> · Estudio personal
      </div>
      <div className="footer-links">
        <a onClick={() => goto('about')}>Sobre mí</a>
        <a onClick={() => goto('notes')}>Notas</a>
        <a onClick={() => goto('resources')}>Recursos</a>
        <a href="mailto:hola@annaismolina.cl">Email</a>
        <a href="https://instagram.com/astroannais" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://www.linkedin.com/in/annaismolinab/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
      <div>© 2026 · Stgo, CL</div>
    </footer>
  );
}

/* ──────────────────────────── TWEAKS PANEL ──────────────────────────── */

function SitePanel({ t, setTweak }) {
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Dirección visual" />
      <TweakSelect
        label="Dirección"
        value={t.direction}
        options={[
          { value: 'editorial', label: 'Editorial cálida' },
          { value: 'tech', label: 'Tech minimal' },
          { value: 'cosmos', label: 'Cosmos (oscuro)' },
        ]}
        onChange={(v) => {
          // when picking cosmos, default to dark
          const updates = { direction: v };
          if (v === 'cosmos') updates.dark = true;
          if (v !== 'cosmos' && t.direction === 'cosmos') updates.dark = false;
          setTweak(updates);
        }}
      />
      <TweakToggle
        label="Modo oscuro"
        value={t.dark}
        onChange={(v) => setTweak('dark', v)}
      />

      <TweakSection label="Tipografía" />
      <TweakSelect
        label="Pareja"
        value={t.font}
        options={[
          { value: 'editorial', label: 'Instrument + DM Sans' },
          { value: 'magazine', label: 'Newsreader + Manrope' },
          { value: 'classic', label: 'Cormorant + Space' },
        ]}
        onChange={(v) => setTweak('font', v)}
      />
      <TweakSlider
        label="Tamaño base"
        value={t.fontSize}
        min={14} max={20} step={1} unit="px"
        onChange={(v) => setTweak('fontSize', v)}
      />

      <TweakSection label="Color de acento" />
      <TweakSelect
        label="Acento"
        value={t.accent}
        options={ACCENT_OPTIONS.map(a => a.name)}
        onChange={(v) => setTweak('accent', v)}
      />

      <TweakSection label="Densidad" />
      <TweakRadio
        label="Espaciado"
        value={t.density}
        options={['compact', 'regular', 'comfy']}
        onChange={(v) => setTweak('density', v)}
      />

      <TweakSection label="Layout del hero" />
      <TweakRadio
        label="Variante"
        value={t.heroLayout}
        options={['split', 'stacked', 'overlap']}
        onChange={(v) => setTweak('heroLayout', v)}
      />
    </TweaksPanel>
  );
}

/* ──────────────────────────── APP ──────────────────────────── */

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [section, setSection] = useStateApp('home');

  const tokens = useMemoApp(() => buildTokens(t), [t]);

  // Apply tokens + density + dark on body
  useEffectApp(() => {
    const body = document.body;
    Object.entries(tokens).forEach(([k, v]) => body.style.setProperty(k, v));
    body.dataset.dark = String(t.dark);
    body.dataset.density = t.density;
    body.dataset.direction = t.direction;
  }, [tokens, t.dark, t.density, t.direction]);

  const goto = (s) => {
    setSection(s);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  let content;
  if (section === 'about') content = <About goto={goto} />;
  else if (section === 'notes') content = <Notes NOTES={NOTES} TAGS={TAGS} />;
  else if (section === 'resources') content = <Resources RESOURCES={RESOURCES} />;
  else content = <Home t={t} goto={goto} NOTES={NOTES} RESOURCES={RESOURCES} />;

  return (
    <div className="site">
      <Nav section={section} goto={goto} />
      <div key={section} className="page-enter">
        {content}
      </div>
      <Footer goto={goto} />
      <SitePanel t={t} setTweak={setTweak} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
