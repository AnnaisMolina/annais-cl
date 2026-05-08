// resources.jsx — biblioteca de recursos

const { useState: useStateRes, useMemo: useMemoRes } = React;

const KIND_GLYPH = {
  PDF: '◢',
  Notebook: '⌘',
  Video: '▶',
  Curso: '◉',
  Guía: '§',
};

function Resources({ RESOURCES }) {
  const kinds = useMemoRes(() => ['Todos', ...Array.from(new Set(RESOURCES.map(r => r.kind)))], [RESOURCES]);
  const [active, setActive] = useStateRes('Todos');

  const filtered = useMemoRes(() => (
    active === 'Todos' ? RESOURCES : RESOURCES.filter(r => r.kind === active)
  ), [active, RESOURCES]);

  return (
    <main className="resources" data-screen-label="04 Recursos">
      <header className="res-head">
        <p className="block-eyebrow mono">§ Caja de herramientas</p>
        <h1 className="res-title">
          Recursos, plantillas<br/>
          y atajos.
        </h1>
        <p className="res-sub">
          Cosas que escribí, edité o curé para que tu camino en data
          science sea menos peleado que el mío. Gratis, en español, y
          en formatos editables siempre que se pueda.
        </p>
      </header>

      <nav className="res-filters mono" aria-label="Filtros por tipo">
        {kinds.map(k => (
          <button
            key={k}
            className={'tag-chip' + (active === k ? ' is-on' : '')}
            onClick={() => setActive(k)}
          >
            {k !== 'Todos' && <span className="kind-glyph">{KIND_GLYPH[k] || '·'}</span>}
            {k}
          </button>
        ))}
      </nav>

      <ul className="res-bigrid">
        {filtered.map((r, i) => (
          <li key={r.id} className="res-bigcard">
            <div className="res-bigcard-rail">
              <span className="kind-glyph mono">{KIND_GLYPH[r.kind] || '·'}</span>
              <span className="res-bigcard-num mono">/{String(i + 1).padStart(2, '0')}</span>
            </div>
            <div className="res-bigcard-body">
              <div className="res-bigcard-top mono">
                <span>{r.kind}</span>
                <span className="dot">·</span>
                <span>{r.tag}</span>
              </div>
              <h3 className="res-bigcard-title">{r.title}</h3>
              <p className="res-bigcard-desc">{r.desc}</p>
              <div className="res-bigcard-foot mono">
                <span>{r.meta}</span>
                <button className="link-arrow">
                  Descargar <span className="arrow">↓</span>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <aside className="shop-teaser">
        <div className="shop-teaser-tag mono">Próximamente</div>
        <h2 className="shop-teaser-title">
          Asesorías 1:1, cursos y workshops.
        </h2>
        <p className="shop-teaser-body">
          Estoy preparando un espacio para acompañar transiciones a data
          science: revisión de CV, armado de portafolio, mock interviews
          y mentorías. Si te interesa, suscríbete al boletín y te aviso
          primero.
        </p>
        <div className="shop-teaser-stamps mono">
          <span>· Mentorías 1:1</span>
          <span>· Workshops grabados</span>
          <span>· Plantillas premium</span>
        </div>
      </aside>
    </main>
  );
}

window.Resources = Resources;
