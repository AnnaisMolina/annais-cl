// note-detail.jsx — vista de detalle de una nota individual

const { useMemo: useMemoND } = React;

/* ─────────────────────────────────────────────────────────
   INLINE LINKS
   Permite escribir links en cualquier texto usando la sintaxis:
     [texto del link](note:id-de-la-nota)
     [texto del link](resource:id-del-recurso)
     [texto del link](section:about | notes | resources | home)
     [texto del link](https://link-externo.com)
   ───────────────────────────────────────────────────────── */
function renderInline(text, openNote, goto) {
  if (typeof text !== 'string') return text;
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = [];
  let lastIdx = 0;
  let match;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIdx) {
      parts.push(text.slice(lastIdx, match.index));
    }
    const label = match[1];
    const target = match[2];

    if (target.startsWith('note:')) {
      const id = target.slice(5);
      parts.push(
        <a
          key={'k' + key++}
          className="nd-link"
          href="#"
          onClick={(e) => { e.preventDefault(); openNote && openNote(id); }}
        >{label}</a>
      );
    } else if (target.startsWith('resource:')) {
      parts.push(
        <a
          key={'k' + key++}
          className="nd-link"
          href="#"
          onClick={(e) => { e.preventDefault(); goto && goto('resources'); }}
        >{label}</a>
      );
    } else if (target.startsWith('section:')) {
      const sec = target.slice(8);
      parts.push(
        <a
          key={'k' + key++}
          className="nd-link"
          href="#"
          onClick={(e) => { e.preventDefault(); goto && goto(sec); }}
        >{label}</a>
      );
    } else if (target.startsWith('http')) {
      parts.push(
        <a
          key={'k' + key++}
          className="nd-link nd-link-ext"
          href={target}
          target="_blank"
          rel="noreferrer"
        >{label} <span className="nd-link-arrow">↗</span></a>
      );
    } else {
      parts.push(<span key={'k' + key++}>{label}</span>);
    }
    lastIdx = match.index + match[0].length;
  }
  if (lastIdx < text.length) parts.push(text.slice(lastIdx));
  return parts.length > 0 ? parts : text;
}

function NoteBlock({ block, openNote, goto }) {
  const ri = (t) => renderInline(t, openNote, goto);
  switch (block.type) {
    case 'lead':
      return <p className="nd-lead">{ri(block.text)}</p>;
    case 'p':
      return <p className="nd-p">{ri(block.text)}</p>;
    case 'h2':
      return <h2 className="nd-h2">{ri(block.text)}</h2>;
    case 'h3':
      return <h3 className="nd-h3">{ri(block.text)}</h3>;
    case 'quote':
      return (
        <blockquote className="nd-quote">
          <p>{ri(block.text)}</p>
          {block.attr ? <cite className="mono">— {block.attr}</cite> : null}
        </blockquote>
      );
    case 'list':
      return (
        <ul className="nd-list">
          {block.items.map((it, i) => <li key={i}>{ri(it)}</li>)}
        </ul>
      );
    case 'olist':
      return (
        <ol className="nd-olist">
          {block.items.map((it, i) => <li key={i}>{ri(it)}</li>)}
        </ol>
      );
    case 'aside':
      return (
        <aside className="nd-aside">
          <span className="nd-aside-mark mono">Nota al margen</span>
          <p>{ri(block.text)}</p>
        </aside>
      );
    case 'code':
      return (
        <pre className="nd-code mono" data-lang={block.lang || ''}>
          {block.lang ? <span className="nd-code-lang">{block.lang}</span> : null}
          <code>{block.text}</code>
        </pre>
      );
    case 'img':
      return (
        <figure className={'nd-img' + (block.size === 'wide' ? ' nd-img-wide' : '')}>
          <img src={block.src} alt={block.alt || ''} />
          {block.caption ? (
            <figcaption className="mono">{ri(block.caption)}</figcaption>
          ) : null}
        </figure>
      );
    case 'hr':
      return <hr className="nd-hr" />;
    default:
      return null;
  }
}

function NoteDetail({ note, NOTES, goto, openNote }) {
  // navegación entre notas
  const { prev, next, related } = useMemoND(() => {
    const idx = NOTES.findIndex((n) => n.id === note.id);
    const prev = idx > 0 ? NOTES[idx - 1] : null;
    const next = idx < NOTES.length - 1 ? NOTES[idx + 1] : null;
    const related = NOTES.filter((n) => n.tag === note.tag && n.id !== note.id).slice(0, 3);
    return { prev, next, related };
  }, [note, NOTES]);

  return (
    <main className="note-detail" data-screen-label={`05 Nota: ${note.title}`}>
      <div className="nd-topbar">
        <button className="nd-back mono" onClick={() => goto('notes')}>
          <span className="arrow">←</span> Volver al archivo
        </button>
        <span className="nd-counter mono">
          Nota · {note.kind} · #{note.tag}
        </span>
      </div>

      <header className="nd-header">
        <p className="block-eyebrow mono">{note.kind} · #{note.tag}</p>
        <h1 className="nd-title">{note.title}</h1>
        <p className="nd-excerpt">{note.excerpt}</p>
        <div className="nd-byline">
          <figure className="nd-author-photo">
            <img src="assets/annais.jpg" alt="Annais Molina" />
          </figure>
          <div className="nd-byline-text">
            <span className="nd-author">Annais Molina</span>
            <span className="mono nd-byline-meta">
              {note.date} · {note.minutes} min de lectura
            </span>
          </div>
        </div>
      </header>

      <article className="nd-body">
        {note.body && note.body.length > 0 ? (
          note.body.map((block, i) => (
            <NoteBlock key={i} block={block} openNote={openNote} goto={goto} />
          ))
        ) : (
          <div className="nd-empty">
            <p className="nd-p">
              Esta nota todavía no tiene contenido completo escrito.
              Pronto la voy a desarrollar — mientras tanto, te dejo un
              resumen:
            </p>
            <blockquote className="nd-quote">
              <p>{note.excerpt}</p>
            </blockquote>
            <p className="nd-p mono nd-empty-hint">
              Para agregar el contenido, edita <code>src/data.jsx</code> y
              completa el campo <code>body</code> de esta nota.
            </p>
          </div>
        )}
      </article>

      <footer className="nd-footer">
        <div className="nd-tags">
          <span className="mono nd-tags-lbl">Etiquetas</span>
          <span className="tag-chip is-on">{note.tag}</span>
          <span className="tag-chip is-on">{note.kind}</span>
        </div>
        <div className="nd-share mono">
          <span className="nd-share-lbl">Compartir</span>
          <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(note.title)}&url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noreferrer">Twitter</a>
          <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:?subject=${encodeURIComponent(note.title)}&body=${encodeURIComponent('Te puede gustar esta nota: ' + window.location.href)}`}>Email</a>
        </div>
      </footer>

      <nav className="nd-pager">
        {prev ? (
          <button className="nd-pager-link nd-pager-prev" onClick={() => openNote(prev.id)}>
            <span className="mono">
              <span className="arrow">←</span> Anterior
            </span>
            <strong>{prev.title}</strong>
          </button>
        ) : <div />}
        {next ? (
          <button className="nd-pager-link nd-pager-next" onClick={() => openNote(next.id)}>
            <span className="mono">
              Siguiente <span className="arrow">→</span>
            </span>
            <strong>{next.title}</strong>
          </button>
        ) : <div />}
      </nav>

      {related.length > 0 && (
        <section className="nd-related">
          <header className="block-head">
            <div>
              <p className="block-eyebrow mono">También en #{note.tag}</p>
              <h2 className="block-title">Notas relacionadas</h2>
            </div>
            <button className="link-arrow mono" onClick={() => goto('notes')}>
              Ver todo <span className="arrow">→</span>
            </button>
          </header>
          <ul className="nd-related-list">
            {related.map((r) => (
              <li key={r.id} className="nd-related-item" onClick={() => openNote(r.id)}>
                <div className="nd-related-meta mono">
                  <span>{r.kind}</span>
                  <span className="dot">·</span>
                  <span>{r.minutes} min</span>
                </div>
                <h3 className="nd-related-title">{r.title}</h3>
                <p className="nd-related-excerpt">{r.excerpt}</p>
                <span className="link-arrow mono">
                  Leer <span className="arrow">→</span>
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}

window.NoteDetail = NoteDetail;
