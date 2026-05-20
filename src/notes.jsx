// notes.jsx — listado de notas

const { useState: useStateNotes, useMemo: useMemoNotes } = React;

function Notes({ NOTES, TAGS, openNote }) {
  const [active, setActive] = useStateNotes('Todos');
  const [view, setView] = useStateNotes('list'); // 'list' | 'index'

  const filtered = useMemoNotes(() => (
    active === 'Todos' ? NOTES : NOTES.filter(n => n.tag === active)
  ), [active, NOTES]);

  return (
    <main className="notes" data-screen-label="03 Notas">
      <header className="notes-head">
        <div>
          <p className="block-eyebrow mono">§ Bitácora</p>
          <h1 className="notes-title">
            Notas, lecturas y<br/>
            anotaciones al margen.
          </h1>
          <p className="notes-sub">
            Un blog propio. Papers comentados, conceptos técnicos, historia
            de la IA, recomendaciones, y algunas cosas raras que encuentro
            mientras trabajo.
          </p>
        </div>
        <div className="notes-counter mono">
          <span className="big-num">{String(NOTES.length).padStart(2, '0')}</span>
          <span>entradas en total</span>
        </div>
      </header>

      <div className="notes-toolbar">
        <ul className="tag-row mono" role="tablist">
          {TAGS.map(tag => (
            <li key={tag}>
              <button
                className={'tag-chip' + (active === tag ? ' is-on' : '')}
                onClick={() => setActive(tag)}
              >
                {tag}
                {active === tag && (
                  <span className="chip-count">
                    {tag === 'Todos' ? NOTES.length : NOTES.filter(n => n.tag === tag).length}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
        <div className="view-switch mono">
          <button className={view === 'list' ? 'is-on' : ''} onClick={() => setView('list')}>Lista</button>
          <button className={view === 'index' ? 'is-on' : ''} onClick={() => setView('index')}>Índice</button>
        </div>
      </div>

      {view === 'list' ? (
        <ol className="notes-list">
          {filtered.map((n, i) => (
            <li key={n.id} className="notes-list-item" onClick={() => openNote && openNote(n.id)}>
              <div className="nl-rail mono">
                <span className="nl-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="nl-kind">{n.kind}</span>
              </div>
              <div className="nl-body">
                <h3 className="nl-title">{n.title}</h3>
                <p className="nl-excerpt">{n.excerpt}</p>
                <div className="nl-meta mono">
                  <span>{n.date}</span>
                  <span className="dot">·</span>
                  <span>{n.minutes} min de lectura</span>
                  <span className="dot">·</span>
                  <span className="nl-tag">#{n.tag}</span>
                </div>
              </div>
              <button
                className="nl-read mono"
                aria-label={`Leer ${n.title}`}
                onClick={(e) => { e.stopPropagation(); openNote && openNote(n.id); }}
              >
                Leer <span className="arrow">→</span>
              </button>
            </li>
          ))}
        </ol>
      ) : (
        <table className="notes-index mono">
          <thead>
            <tr>
              <th>N°</th>
              <th>Título</th>
              <th>Tipo</th>
              <th>Tag</th>
              <th className="ta-r">Min</th>
              <th className="ta-r">Fecha</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((n, i) => (
              <tr key={n.id} onClick={() => openNote && openNote(n.id)}>
                <td className="muted">{String(i + 1).padStart(3, '0')}</td>
                <td className="ni-title">{n.title}</td>
                <td>{n.kind}</td>
                <td>#{n.tag}</td>
                <td className="ta-r">{n.minutes}</td>
                <td className="ta-r muted">{n.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}

window.Notes = Notes;
