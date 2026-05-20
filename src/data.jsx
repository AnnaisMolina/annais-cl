// data.jsx — contenido de notas y recursos del sitio
//
// Cada nota tiene un campo `body` con el contenido completo.
// El body es un array de bloques. Tipos disponibles:
//   { type: 'p',     text: '...' }                  // párrafo
//   { type: 'h2',    text: '...' }                  // subtítulo
//   { type: 'h3',    text: '...' }                  // sub-subtítulo
//   { type: 'lead',  text: '...' }                  // bajada destacada
//   { type: 'quote', text: '...', attr: '...' }     // cita destacada
//   { type: 'list',  items: ['...', '...'] }        // lista con viñetas
//   { type: 'olist', items: ['...', '...'] }        // lista numerada
//   { type: 'aside', text: '...' }                  // nota al margen
//   { type: 'code',  lang: 'python', text: '...' }  // bloque de código
//   { type: 'hr' }                                  // separador
//
// Si una nota no tiene `body`, la página de detalle muestra un mensaje
// pidiendo que se complete (no se rompe nada).

const NOTES = [
  {
    id: 'leer-paper',
    kind: 'Lectura',
    title: 'Cómo leer un paper de astrofísica sin morir en el intento',
    excerpt: 'Un método de tres pasadas para extraer lo importante sin perderse en las ecuaciones. Sirve también para papers de ML.',
    date: '12 Abr 2026',
    minutes: 8,
    tag: 'Método',
    body: [
      { type: 'lead', text: 'Leer un paper completo, de principio a fin, en orden, intentando entender cada ecuación a la primera, es la receta perfecta para no terminar de leer ningún paper en tu vida. Te cuento cómo lo hago yo.' },

      { type: 'p', text: 'Cuando empecé astronomía intentaba leer papers como si fueran novelas: párrafo a párrafo, conscientemente, sin saltarme nada. Resultado: tardaba dos semanas en uno, no entendía la mitad, y a la mitad ya se me había olvidado la introducción. Era un drama.' },

      { type: 'p', text: 'Hoy uso un método de tres pasadas que viene de una guía clásica de S. Keshav. Lo adapté para papers de astrofísica y, después, para papers de machine learning. La idea es que cada pasada tiene un objetivo distinto, y al final decides si vale la pena seguir leyendo o no.' },

      { type: 'h2', text: 'Primera pasada: 5 minutos' },

      { type: 'p', text: 'El objetivo de la primera pasada no es entender el paper. Es decidir si vale la pena entenderlo. Suena duro pero es la verdad: hay miles de papers publicados cada año en astronomía. No tienes tiempo de leerlos todos en profundidad.' },

      { type: 'p', text: 'En estos 5 minutos lees, en este orden:' },
      { type: 'olist', items: [
        'Título y abstract',
        'Introducción (rápido, en zigzag)',
        'Los headings de las secciones',
        'Las conclusiones',
        'Las referencias — solo para detectar los nombres que ya conoces',
      ] },

      { type: 'aside', text: 'No leas las ecuaciones todavía. No mires las figuras en detalle. Solo escanea.' },

      { type: 'p', text: 'Al final de los 5 minutos deberías poder responder cinco preguntas: ¿qué categoría de paper es (teórico, observacional, instrumental)? ¿en qué contexto se inscribe? ¿está bien escrito? ¿las suposiciones parecen razonables? ¿qué aportan los autores?' },

      { type: 'p', text: 'Si las respuestas son tibias, paras acá. No es desidia, es economía. Hay papers mejores esperando.' },

      { type: 'h2', text: 'Segunda pasada: 1 hora' },

      { type: 'p', text: 'Si el paper sobrevivió la primera pasada, ahora sí entras en serio. Pero todavía no entiendes cada detalle. La meta es entender el contenido principal del paper.' },

      { type: 'list', items: [
        'Lee con más atención, pero ignora las pruebas matemáticas largas.',
        'Mira las figuras y los gráficos con calma. Asegúrate de entender qué muestra cada eje y qué dice cada panel.',
        'Anota referencias que no leíste y que parecen relevantes para entender este paper.',
        'Subraya las ideas clave, no las frases bonitas.',
      ] },

      { type: 'quote', text: 'La figura buena de un paper es la que entenderías sin leer el texto. Si no es así, el problema puede ser tuyo, o puede ser del autor — y vale la pena saber distinguir.', attr: 'cualquier referee que se respete' },

      { type: 'p', text: 'Al final de esta hora deberías poder contarle el paper a un colega en cinco minutos. Si no puedes, vuelve atrás. No tiene sentido seguir hasta acá.' },

      { type: 'h2', text: 'Tercera pasada: 4–6 horas (opcional)' },

      { type: 'p', text: 'Esta pasada es para papers que vas a citar, replicar, o sobre los que vas a discutir. La mayoría de los papers no la necesitan.' },

      { type: 'p', text: 'En esta pasada virtualmente reimplementas el paper. Asumes que estás en el lugar del autor y verificas cada suposición que hace. Es lenta, es dura, y es la única manera de entender un método a fondo.' },

      { type: 'aside', text: 'Cuando hago tercera pasada, abro un cuaderno de Jupyter en paralelo y voy implementando los pasos clave. Es muy distinto leer "aplicamos PCA" que ver el output con tus propios datos.' },

      { type: 'hr' },

      { type: 'h2', text: '¿Y para papers de ML?' },

      { type: 'p', text: 'El método se traslada casi tal cual. Las diferencias prácticas:' },

      { type: 'list', items: [
        'En primera pasada, mira si hay código publicado. Eso ya te dice mucho.',
        'En segunda pasada, presta especial atención al setup experimental: qué dataset, qué métricas, qué baselines. Es donde más se hacen trampa.',
        'En tercera pasada, intenta correr el código si está disponible. Es el equivalente moderno a la reimplementación.',
      ] },

      { type: 'p', text: 'El método no es mágico. Vas a leer papers malos igual, y vas a saltarte papers buenos. Pero te va a permitir leer 10 veces más papers de los que leías antes — y eso, en la práctica, importa más.' },
    ],
  },
  {
    id: 'sesgo-seleccion',
    kind: 'Concepto',
    title: 'El sesgo de selección que nadie te explicó',
    excerpt: 'Por qué tu modelo aprende lo que tu pipeline le dejó ver, y cómo darse cuenta antes de presentar a un cliente.',
    date: '02 Abr 2026',
    minutes: 6,
    tag: 'Estadística',
    body: [
      { type: 'lead', text: 'Casi todos los errores caros que he visto en proyectos de data science no son errores del modelo. Son errores del dataset. Y casi todos los errores del dataset son una forma u otra de sesgo de selección.' },
      { type: 'p', text: 'El sesgo de selección es lo que pasa cuando los datos que ves no son representativos de la población sobre la que quieres concluir. Es trivial decirlo. Es endemoniadamente difícil detectarlo a tiempo.' },
      { type: 'h2', text: 'Tres ejemplos clásicos' },
      { type: 'p', text: 'Durante la Segunda Guerra Mundial, los aliados estudiaban los aviones que volvían de misiones para decidir dónde reforzar el blindaje. Los datos mostraban impactos concentrados en las alas y la cola. Conclusión obvia: reforcemos alas y cola.' },
      { type: 'p', text: 'Abraham Wald —un estadístico— les dijo que estaban viendo el sesgo más caro de la historia. Los aviones que volvían eran los que sobrevivían. El blindaje había que ponerlo donde no había impactos visibles: el motor, la cabina.' },
      { type: 'quote', text: 'El dataset son los aviones que vuelven. La verdad son los aviones que no.', attr: 'Wald, parafraseado' },
      { type: 'h2', text: 'Cómo detectarlo antes de que duela' },
      { type: 'olist', items: [
        'Pregúntate explícitamente: ¿qué observaciones podrían existir y no estar en mi tabla?',
        'Compara la distribución de tu dataset con la de la población objetivo.',
        'Mira los casos extremos: si tu modelo nunca ve clientes muy nuevos, va a fallar con ellos.',
        'Si puedes, simula. Genera datos sintéticos con el sesgo que sospechas.',
      ] },
      { type: 'aside', text: 'Una regla que uso: si no puedo explicarle a un colega cómo terminó cada fila en mi dataset, no estoy listo para modelar.' },
      { type: 'p', text: 'El sesgo de selección no se corrige con más datos. Se corrige sabiendo qué tipo de datos te faltan.' },
    ],
  },
  {
    id: 'historia-ia',
    kind: 'Historia',
    title: 'Una breve historia de la IA: del perceptrón a los transformers',
    excerpt: 'Cuatro inviernos, tres revoluciones y una pregunta que sigue sin respuesta. Línea de tiempo comentada.',
    date: '24 Mar 2026',
    minutes: 14,
    tag: 'IA',
  },
  {
    id: 'pca-galaxias',
    kind: 'Tutorial',
    title: 'PCA explicado con galaxias',
    excerpt: 'La descomposición en componentes principales es geometría disfrazada de álgebra. Lo demuestro con un dataset de espectros.',
    date: '10 Mar 2026',
    minutes: 11,
    tag: 'ML',
  },
  {
    id: 'book-of-why',
    kind: 'Reseña',
    title: 'Reseña: "The Book of Why" de Judea Pearl',
    excerpt: 'Causalidad para gente que vive haciendo regresiones. Lo bueno, lo discutible y para qué nivel de lector es.',
    date: '28 Feb 2026',
    minutes: 7,
    tag: 'Lectura',
  },
  {
    id: 'jwst-update',
    kind: 'Noticia',
    title: 'Notas sobre el último release del JWST',
    excerpt: 'Qué hay de nuevo en este batch público, cómo descargarlo, y un par de cosas raras que vale la pena mirar.',
    date: '14 Feb 2026',
    minutes: 5,
    tag: 'Astronomía',
  },
  {
    id: 'gradient-descent',
    kind: 'Concepto',
    title: 'Gradient descent: la intuición física',
    excerpt: 'Si entendiste cómo cae una pelota por una colina, entendiste optimización. El resto son detalles de implementación.',
    date: '02 Feb 2026',
    minutes: 6,
    tag: 'ML',
  },
  {
    id: 'p-valor',
    kind: 'Concepto',
    title: 'Por qué el p-valor no es lo que crees',
    excerpt: 'Una de las confusiones más caras de la ciencia moderna. Lo que dice, lo que no dice, y qué decir en su lugar.',
    date: '20 Ene 2026',
    minutes: 9,
    tag: 'Estadística',
  },
];

const TAGS = ['Todos', 'ML', 'Estadística', 'Astronomía', 'IA', 'Método', 'Lectura'];

const RESOURCES = [
  {
    id: 'pandas-cheat',
    kind: 'PDF',
    title: 'Cheatsheet de pandas en español',
    desc: 'Las 60 operaciones que uso cada semana, con ejemplos. Pensado para imprimir en una hoja a doble cara.',
    meta: '2 páginas · ES',
    tag: 'Cheatsheet',
  },
  {
    id: 'notebook-portfolio',
    kind: 'Notebook',
    title: 'Plantilla de portafolio reproducible',
    desc: 'Estructura de repo que uso para mostrar proyectos: README, notebook, datos, requirements. Lista para clonar.',
    meta: 'GitHub · MIT',
    tag: 'Portafolio',
  },
  {
    id: 'sql-video',
    kind: 'Video',
    title: 'SQL para análisis de datos — desde cero',
    desc: 'Curso corto en YouTube. De SELECT a window functions con un dataset real de telecomunicaciones.',
    meta: '3 h 12 min · YouTube',
    tag: 'Curso',
  },
  {
    id: 'regresion-scratch',
    kind: 'Notebook',
    title: 'Regresión lineal desde cero',
    desc: 'Implementada sin sklearn, paso a paso, con visualizaciones interactivas. Para entender qué hay debajo del .fit().',
    meta: 'Jupyter · Python',
    tag: 'Tutorial',
  },
  {
    id: 'transicion-ds',
    kind: 'Guía',
    title: 'Cómo transicionar a data science',
    desc: 'La guía que me hubiera gustado leer hace 5 años. Roadmap, errores comunes y un checklist de portafolio.',
    meta: 'PDF · 22 páginas',
    tag: 'Carrera',
  },
  {
    id: 'astro-data',
    kind: 'Curso',
    title: 'Introducción a la astronomía de datos',
    desc: 'Cómo trabajar con FITS, catálogos y series temporales astronómicas. Material del taller que dicté en CATA.',
    meta: 'Workshop · 4 sesiones',
    tag: 'Astronomía',
  },
  {
    id: 'cv-template',
    kind: 'PDF',
    title: 'Plantillas de CV para data',
    desc: 'Tres formatos editables, según seas perfil junior, técnico senior o de research. Con ejemplos reales (anonimizados).',
    meta: '3 archivos · Figma + PDF',
    tag: 'Carrera',
  },
  {
    id: 'stats-roadmap',
    kind: 'Guía',
    title: 'Roadmap de estadística para DS',
    desc: 'Qué estudiar, en qué orden y dónde. Curado de los recursos que realmente entendí, no los que se ven bonito.',
    meta: 'Web interactiva',
    tag: 'Estudio',
  },
];

window.NOTES = NOTES;
window.TAGS = TAGS;
window.RESOURCES = RESOURCES;
