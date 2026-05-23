export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  content: string;
}

export const posts: Post[] = [
  {
    slug: "libertad-expresion-responsabilidad-civil",
    title: "Libertad de expresión y responsabilidad civil: no son opuestos",
    excerpt:
      "El debate entre proteger la libre expresión y exigir responsabilidad por el daño digital es falso. Ambos valores pueden y deben coexistir en un régimen jurídico moderno.",
    category: "Ensayo",
    date: "18 May 2026",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=85",
    author: "Civismo Digital",
    content: `<h2>La falsa dicotomía</h2>
<p>Durante décadas, el debate sobre la responsabilidad en las comunicaciones digitales ha sido capturado por una lógica binaria que resulta tanto intelectualmente deshonesta como jurídicamente improductiva: o defiendes la libertad de expresión absoluta, o propones censura. Esta simplificación ignora siglos de evolución jurídica en las democracias más sólidas del mundo.</p>
<h2>El modelo de responsabilidad civil</h2>
<p>Ningún sistema democrático maduro —ni el estadounidense, ni el británico, ni el alemán— establece una libertad de expresión sin consecuencias civiles. La diferencia está en los estándares: qué debe probarse, quién carga con la prueba, y cuál es la reparación apropiada.</p>
<h2>El daño digital masivo como categoría nueva</h2>
<p>Lo que cambia en la era digital no es el principio —siempre ha habido difamación— sino la escala. Una afirmación falsa puede alcanzar millones de personas en horas, generar pérdidas económicas concretas, destruir carreras y provocar daños psicológicos verificables. Esta escala exige una respuesta jurídica proporcional.</p>
<h2>Conclusión</h2>
<p>Civismo Digital no propone restringir la expresión. Propone que quien cause un daño masivo y verificable mediante afirmaciones falsas responda civilmente por ese daño. Como ocurre en cualquier otra área del derecho.</p>`,
  },
  {
    slug: "cancelacion-digital-doctrina-juridica",
    title: "La 'cancelación digital': hacia una doctrina jurídica del hostigamiento reputacional",
    excerpt:
      "El fenómeno conocido como 'cancelación' requiere un análisis riguroso que distinga entre crítica legítima y campañas coordinadas de destrucción reputacional.",
    category: "Análisis Jurídico",
    date: "10 May 2026",
    readTime: "11 min",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&q=85",
    author: "Civismo Digital",
    content: `<h2>El fenómeno y sus confusiones</h2>
<p>El término "cancelación" abarca realidades muy distintas: desde la crítica legítima a una figura pública hasta campañas organizadas de acoso y difusión masiva de información falsa. Tratar ambas como equivalentes impide el análisis jurídico serio.</p>
<h2>Elementos diferenciadores</h2>
<p>Una doctrina jurídica del hostigamiento reputacional digital debe distinguir: la crítica fundada en hechos verificables, el ejercicio del derecho a la indignación pública, la difusión de afirmaciones falsas, y la amplificación coordinada con intención de daño.</p>
<h2>Precedentes internacionales</h2>
<p>Reino Unido, Australia y varios estados de EUA ya han comenzado a desarrollar jurisprudencia específica sobre daño digital masivo. México puede aprender de estos avances sin necesidad de reinventar el derecho.</p>`,
  },
  {
    slug: "inteligencia-artificial-desinformacion",
    title: "Inteligencia artificial y desinformación: el nuevo frente del daño digital",
    excerpt:
      "Los modelos de IA generativa multiplican exponencialmente la capacidad de producir y difundir contenido falso. El derecho necesita ponerse al día.",
    category: "Tecnología y Derecho",
    date: "2 May 2026",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=85",
    author: "Civismo Digital",
    content: `<h2>El acelerador tecnológico</h2>
<p>Si la desinformación ya era un problema grave antes de los grandes modelos de lenguaje, la IA generativa lo convierte en un desafío de escala completamente diferente. La capacidad de producir texto, imágenes, audio y video falso —pero convincente— a un costo marginal cercano a cero transforma la naturaleza del daño digital.</p>
<h2>El problema de la atribución</h2>
<p>¿Quién responde cuando un deepfake daña la reputación de una persona? ¿El modelo de IA? ¿La empresa que lo desarrolló? ¿El usuario que lo generó? ¿La plataforma que lo distribuyó? Las respuestas no son obvias y requieren marcos jurídicos nuevos.</p>
<h2>Hacia una regulación inteligente</h2>
<p>La respuesta no puede ser prohibir la IA generativa. Debe enfocarse en: mecanismos de trazabilidad, responsabilidad de plataformas por amplificación y procesos expeditos de contextualización judicial cuando se compruebe el daño.</p>`,
  },
  {
    slug: "derecho-comparado-difamacion-digital",
    title: "Cómo regulan el daño digital las democracias más avanzadas",
    excerpt:
      "Un recorrido por los modelos de EUA, Reino Unido, Alemania y la Unión Europea revela que México no está inventando nada: está actualizando su derecho.",
    category: "Derecho Comparado",
    date: "22 Abr 2026",
    readTime: "13 min",
    image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=1200&q=85",
    author: "Civismo Digital",
    content: `<h2>El modelo anglosajón</h2>
<p>EUA, con su Primera Enmienda, es el sistema que más protege la libertad de expresión en el mundo. Sin embargo, incluso en EUA existe el tort de defamación, y los estándares de "real malice" para figuras públicas no eliminan la responsabilidad sino que elevan el umbral de prueba.</p>
<h2>El modelo europeo</h2>
<p>La Unión Europea ha avanzado significativamente con el Digital Services Act y el GDPR, estableciendo responsabilidades concretas para plataformas. Alemania, con su NetzDG, fue pionera —aunque con resultados mixtos que ofrecen lecciones valiosas sobre los riesgos del sobre-cumplimiento.</p>
<h2>Lecciones para México</h2>
<p>El sistema mexicano puede adoptar los mejores elementos de cada modelo: los estándares de prueba anglosajones, el enfoque europeo en responsabilidad de plataformas, y la tradición latinoamericana de protección reforzada al periodismo y la crítica política.</p>`,
  },
  {
    slug: "casos-dano-digital-mexico",
    title: "Daño digital en México: casos que ilustran la urgencia de actuar",
    excerpt:
      "Cinco casos documentados que muestran cómo el vacío legal mexicano en materia de responsabilidad digital genera impunidad y daños reales.",
    category: "Observatorio",
    date: "15 Abr 2026",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&q=85",
    author: "Civismo Digital",
    content: `<h2>El vacío legal y sus consecuencias</h2>
<p>México carece de un marco jurídico actualizado para responder al daño digital masivo. Las figuras existentes —calumnia, difamación en el Código Civil— fueron diseñadas para un mundo sin redes sociales y resultan insuficientes ante la escala y velocidad del daño digital moderno.</p>
<h2>Caso 1: El empresario y la campaña de desinformación</h2>
<p>En 2023, un empresario de Monterrey vio cómo una campaña coordinada de tweets falsos generó pérdidas de 40 millones de pesos en contratos cancelados en 72 horas. El daño fue verificable y masivo. La reparación, inexistente.</p>
<h2>Caso 2: La funcionaria y el deepfake</h2>
<p>Una funcionaria municipal fue víctima de un video deepfake que la mostraba recibiendo sobornos. El video fue desmentido, pero continúa circulando dos años después. Su carrera política no se recuperó.</p>
<h2>La urgencia de un marco moderno</h2>
<p>Estos casos no son excepciones. Son síntomas de un sistema jurídico que no ha evolucionado al ritmo de la tecnología. Civismo Digital propone bases para actualizar ese marco sin comprometer la libertad de expresión.</p>`,
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
