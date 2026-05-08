// Static content for Annais' site — notes & resources

const NOTES = [
  {
    id: 'leer-paper',
    kind: 'Lectura',
    title: 'Cómo leer un paper de astrofísica sin morir en el intento',
    excerpt: 'Un método de tres pasadas para extraer lo importante sin perderse en las ecuaciones. Sirve también para papers de ML.',
    date: '12 Abr 2026',
    minutes: 8,
    tag: 'Método',
  },
  {
    id: 'sesgo-seleccion',
    kind: 'Concepto',
    title: 'El sesgo de selección que nadie te explicó',
    excerpt: 'Por qué tu modelo aprende lo que tu pipeline le dejó ver, y cómo darse cuenta antes de presentar a un cliente.',
    date: '02 Abr 2026',
    minutes: 6,
    tag: 'Estadística',
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
