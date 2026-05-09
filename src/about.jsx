// about.jsx

function About({ goto }) {
  return (
    <main className="about" data-screen-label="02 About">
      <header className="about-head">
        <p className="block-eyebrow mono">Sobre mí</p>
        <h1 className="about-title">
          Hago ciencia con datos.<br/>
        De la <em>academia</em>, a la <em>industria</em>.
        </h1>
      </header>

      <section className="about-grid">
        <div className="about-photo-col">
          <figure className="about-photo">
            <img src="assets/annais.jpg" alt="Annais Molina" />
            <figcaption className="mono">
              <span>Annais Molina Barra</span>
              <span>Santiago / Concepción · CL</span>
            </figcaption>
          </figure>
          <ul className="about-side mono">
            <li><span className="lbl">Hoy</span><span>Analista de datos en Entel</span></li>
            <li><span className="lbl">Investigación</span><span>CATA — Radiowood</span></li>
            <li><span className="lbl">Formación</span><span>Astronomía</span></li>
            <li><span className="lbl">Idiomas</span><span>Español, English</span></li>
          </ul>
        </div>

        <div className="about-prose">
          <p className="lead-drop">
            <span className="dropcap">S</span>oy astrónoma de formación, analista y científica
            de datos en la práctica. Mi trabajo se mueve entre dos mundos que,
            visto de cerca, son el mismo: trabajar con datos para entender el mundo (y cosmos) que nos rodea.
          </p>
          <p>
            Durante el día trabajo como analista de datos en Entel,
            una empresa de telecomunicaciones en Chile, donde aplico modelos,
            métricas y mucho SQL para entender comportamientos de millones de
            personas. Por las tardes (y algunas noches) hago investigación en el
            Centro de Astrofísica y Tecnologías Afines (CATA),
            en un proyecto de transferencia tecnológica llamado Radiowood.
          </p>
          <p>
            Este sitio es un laboratorio personal en donde te contaré mi experiencia y aprendizajes.
            Aquí publico lo que aprendo al cruzarme con un paper interesante, una técnica nueva, una historia
            de la IA mal contada, o simplemente algo que me pareció bonito.
            También dejo recursos —cheatsheets, notebooks, plantillas— que me
            hubiera gustado tener cuando estaba transicionando hacia este
            mundo.
          </p>
          <p>
            Pronto voy a abrir un espacio para asesorías 1:1:
            transición de carrera, revisión de CV, armado de portafolio, y
            preparación para procesos técnicos. Si te interesa, suscríbete al
            boletín y te aviso primero.
          </p>

          <hr className="about-rule" />

          <h2 className="about-h2">Línea de tiempo</h2>
          <ol className="timeline">
            <li>
              <span className="tl-year mono">2026</span>
              <div>
                <strong>Annaismolina.cl</strong>
                <p>Lanzamiento del sitio personal para que sepas mas de mi. Mi blog, recursos y aprendizaje.</p>
              </div>
            </li>
            <li>
              <span className="tl-year mono">2026</span>
              <div>
                <strong>CATA · Radiowood</strong>
                <p>Data Scientist en un proyecto de transferencia tecnológica.</p>
              </div>
            </li>
            <li>
              <span className="tl-year mono">2025</span>
              <div>
                <strong>Entel</strong>
                <p>Analista de datos - Aplicación de modelos y métricas para entender comportamientos de usuarios.</p>
              </div>
            </li>
              <li>
              <span className="tl-year mono">2025</span>
              <div>
                <strong>Astronomía y ciencia de datos</strong>
                <p>Finalización de mi carrera: Tesis de astroinformática.</p>
              </div>
            </li>
          </ol>

          <hr className="about-rule" />

          <h2 className="about-h2">Hablemos</h2>
          <ul className="contact">
            <li><span className="mono lbl">Instagram</span><a href="https://instagram.com/astroannais" target="_blank" rel="noreferrer">@astroannais ↗</a></li>
            <li><span className="mono lbl">LinkedIn</span><a href="https://www.linkedin.com/in/annaismolinab/" target="_blank" rel="noreferrer">in/annaismolinab ↗</a></li>
            <li><span className="mono lbl">Email</span><a href="mailto:hola@annaismolina.cl">hola@annaismolina.cl ↗</a></li>
          </ul>
        </div>
      </section>
    </main>
  );
}

window.About = About;
