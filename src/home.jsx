// home.jsx — página de inicio
// Este archivo arma la pantalla principal del sitio.
// Está dividido en 4 bloques: Hero, Notas recientes, Recursos y Newsletter.

const { useEffect, useState } = React;

// Componente raíz de la página de inicio.
// Recibe las notas y recursos desde data.jsx y los pasa a cada sección.
function Home({ t, goto, NOTES, RESOURCES, openNote }) {
  const recentNotes = NOTES.slice(0, 3);       // solo las 3 notas más recientes
  const featuredResources = RESOURCES.slice(0, 4); // solo los 4 primeros recursos

  return (
    <main className="home" data-screen-label="01 Home">
      <Hero t={t} goto={goto} />
      <RecentNotes notes={recentNotes} goto={goto} openNote={openNote} />
      <FeaturedResources items={featuredResources} goto={goto} />
      <Newsletter />
    </main>
  );
}

/* ──────────────────────────────────────────────── HERO ──────────
   El Hero es el bloque grande de presentación que se ve primero al entrar.
   Tiene 3 variantes de diseño (split, stacked, overlap) que se eligen
   desde el panel de ajustes. Todas comparten las mismas piezas de texto.
──────────────────────────────────────────────────────────────── */

// Decide qué variante de Hero mostrar según la configuración del panel.
function Hero({ t, goto }) {
  if (t.heroLayout === 'stacked') return <HeroStacked t={t} goto={goto} />;
  if (t.heroLayout === 'overlap') return <HeroOverlap t={t} goto={goto} />;
  return <HeroSplit t={t} goto={goto} />;
}

// Línea pequeña de contexto que aparece sobre el título (número, año, ciudad).
function HeroEyebrow() {
  return (
    <div className="eyebrow">
      <span className="eyebrow-dot" />
      <span className="mono">N° 01 · 2026 · Stgo, Chile</span>
    </div>
  );
}

// Párrafo de presentación que aparece bajo el título en todas las variantes.
function HeroLede() {
  return (
    <p className="lede">
      Astrónoma y científica de datos. Escribo notas para gente curiosa y
      armo recursos para quienes están entrando al mundo de los datos.
      El lugar perfecto para aprender algo nuevo cada vez que me cruzo con un paper interesante,
      una técnica nueva, o una historia de la IA mal contada.
    </p>
  );
}

// Lista pequeña de datos rápidos: trabajo actual, investigación y qué hay en el sitio.
function HeroMeta() {
  return (
    <ul className="hero-meta mono">
      <li><span className="lbl">Día</span><span>Analista de datos · Entel</span></li>
      <li><span className="lbl">Investigación</span><span>CATA · Proyecto Radiowood</span></li>
      <li><span className="lbl">Aquí</span><span>Notas, recursos &amp; pronto, asesorías</span></li>
    </ul>
  );
}

// Variante SPLIT: texto a la izquierda, foto a la derecha (diseño por defecto).
function HeroSplit({ t, goto }) {
  return (
    <section className="hero hero-split">
      {/* Columna de texto */}
      <div className="hero-text">
        <HeroEyebrow />
        {/* Título principal con el nombre */}
        <h1 className="masthead">
          <span className="m1">Annais</span>
          <span className="m2"><em>Molina</em> Barra</span>
        </h1>
        <HeroLede />
        {/* Botones de acción */}
        <div className="hero-cta">
          <button className="btn btn-primary" onClick={() => goto('notes')}>
            Leer las notas
            <span className="arrow">→</span>
          </button>
          <button className="btn btn-ghost" onClick={() => goto('about')}>
            Sobre mí
          </button>
        </div>
        <HeroMeta />
      </div>
      {/* Columna de foto — draggable=false y onContextMenu evitan descarga fácil */}
      <div className="hero-photo-wrap">
        <figure className="hero-photo">
          <img
            src="assets/annais.jpg"
            alt="Retrato de Annais Molina al aire libre"
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
          />
        </figure>
        <div className="photo-tag mono">@astroannais</div>
      </div>
    </section>
  );
}

// Variante STACKED: título grande arriba, foto y texto lado a lado abajo.
function HeroStacked({ t, goto }) {
  return (
    <section className="hero hero-stacked">
      <HeroEyebrow />
      <h1 className="masthead masthead-xl">
        <span>Annais</span>
        <span><em>Molina</em></span>
      </h1>
      <div className="stacked-row">
        <div className="stacked-text">
          <HeroLede />
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={() => goto('notes')}>
              Leer las notas <span className="arrow">→</span>
            </button>
            <button className="btn btn-ghost" onClick={() => goto('about')}>
              Sobre mí
            </button>
          </div>
        </div>
        <figure className="hero-photo hero-photo-square">
          <img
            src="assets/annais.jpg"
            alt="Retrato de Annais Molina"
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
          />
          <figcaption className="mono"><span>Fig. 01</span></figcaption>
        </figure>
      </div>
      <HeroMeta />
    </section>
  );
}

// Variante OVERLAP: foto de fondo con el nombre encima, texto al costado.
function HeroOverlap({ t, goto }) {
  return (
    <section className="hero hero-overlap">
      <div className="overlap-stack">
        <figure className="hero-photo hero-photo-tall">
          <img
            src="assets/annais.jpg"
            alt="Retrato de Annais Molina"
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
          />
        </figure>
        <h1 className="masthead masthead-overlap">
          <span className="o1">Annais</span>
          <span className="o2"><em>Molina</em></span>
          <span className="o3">Barra</span>
        </h1>
      </div>
      <div className="overlap-side">
        <HeroEyebrow />
        <HeroLede />
        <div className="hero-cta">
          <button className="btn btn-primary" onClick={() => goto('notes')}>
            Leer las notas <span className="arrow">→</span>
          </button>
          <button className="btn btn-ghost" onClick={() => goto('about')}>
            Sobre mí
          </button>
        </div>
        <HeroMeta />
      </div>
    </section>
  );
}

/* ─────────────────────────────────── NOTAS RECIENTES ──────────
   Muestra las 3 notas más recientes de data.jsx en una lista vertical.
   Cada ítem tiene: número, tipo, etiqueta, tiempo de lectura, título y fecha.
   Al clickear un ítem, se abre la página de detalle de esa nota.
──────────────────────────────────────────────────────────────── */
function RecentNotes({ notes, goto, openNote }) {
  return (
    <section className="block recent-notes">
      <header className="block-head">
        <div>
          <p className="block-eyebrow mono">§ 02 — Bitácora</p>
          <h2 className="block-title">Notas recientes</h2>
        </div>
        <button className="link-arrow mono" onClick={() => goto('notes')}>
          Ver todo el archivo <span className="arrow">→</span>
        </button>
      </header>
      {/* .map() recorre el array de notas y genera un <li> por cada una */}
      <ol className="note-strip">
        {notes.map((n, i) => (
          <li
            key={n.id}
            className="note-strip-item"
            onClick={() => openNote && openNote(n.id)}
          >
            <span className="note-num mono">{String(i + 1).padStart(2, '0')}</span>
            <div className="note-strip-body">
              <div className="note-strip-meta mono">
                <span>{n.kind}</span>
                <span className="dot">·</span>
                <span>{n.tag}</span>
                <span className="dot">·</span>
                <span>{n.minutes} min</span>
              </div>
              <h3 className="note-strip-title">{n.title}</h3>
              <p className="note-strip-excerpt">{n.excerpt}</p>
            </div>
            <span className="mono note-strip-date">{n.date}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ─────────────────────────────────── RECURSOS DESTACADOS ──────
   Muestra los 4 primeros recursos de data.jsx en formato de tarjetas (grilla).
   Cada tarjeta tiene: tipo, etiqueta, título, descripción y metadatos.
──────────────────────────────────────────────────────────────── */
function FeaturedResources({ items, goto }) {
  return (
    <section className="block featured-res">
      <header className="block-head">
        <div>
          <p className="block-eyebrow mono">§ 03 — Caja de herramientas</p>
          <h2 className="block-title">Recursos destacados</h2>
        </div>
        <button className="link-arrow mono" onClick={() => goto('resources')}>
          Ir a recursos <span className="arrow">→</span>
        </button>
      </header>
      <div className="res-grid">
        {items.map((r) => (
          <article key={r.id} className="res-card">
            <div className="res-card-top mono">
              <span className="res-kind">{r.kind}</span>
              <span className="res-tag">{r.tag}</span>
            </div>
            <h3 className="res-card-title">{r.title}</h3>
            <p className="res-card-desc">{r.desc}</p>
            <div className="res-card-foot mono">
              <span>{r.meta}</span>
              <span className="arrow">↗</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────── NEWSLETTER ──────────────
   Formulario de suscripción al boletín.
   useState guarda dos valores en memoria mientras la página está abierta:
   - email: lo que el usuario escribe en el input
   - sent: si ya envió el formulario (cambia el botón a "Suscrito ✓")
──────────────────────────────────────────────────────────────── */
function Newsletter() {
  const [email, setEmail] = useState('');   // guarda el email que escribe el usuario
  const [sent, setSent] = useState(false);  // false = no enviado, true = enviado
  return (
    <section className="block newsletter">
      <div className="news-inner">
        <p className="block-eyebrow mono">§ 04 — Boletín</p>
        <h2 className="block-title news-title">
          Una carta corta cada par de semanas con lo que estoy leyendo,
          probando y pensando.
        </h2>
        {/* e.preventDefault() evita que la página se recargue al enviar */}
        <form
          className="news-form"
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
        >
          <input
            type="email"
            placeholder="tu@email.cl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary">
            {sent ? 'Suscrito ✓' : 'Suscribirme'}
          </button>
        </form>
        <p className="news-fine mono">Sin spam. Cancelas cuando quieras.</p>
      </div>
    </section>
  );
}

// Hace que Home esté disponible para el resto de la aplicación
window.Home = Home;
