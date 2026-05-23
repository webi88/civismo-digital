import AnimateOnScroll from "./AnimateOnScroll";
import Link from "next/link";
import { ArrowRight, ShieldOff, Scale, FileCheck, AlertTriangle } from "lucide-react";

const PRINCIPIOS = [
  {
    icon: ShieldOff,
    title: "Sin censura previa",
    desc: "Ninguna autoridad podrá autorizar, bloquear o monitorear expresión. Nunca.",
    color: "text-electric-400",
    bg: "bg-electric-500/10",
  },
  {
    icon: Scale,
    title: "Solo responsabilidad civil",
    desc: "Nunca penal. El Estado no persigue. Solo acción entre particulares con estándares estrictos.",
    color: "text-signal-400",
    bg: "bg-signal-500/10",
  },
  {
    icon: FileCheck,
    title: "Protección reforzada",
    desc: "Periodismo, sátira, crítica política, denuncia sustentada y debate público: protección total.",
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    icon: AlertTriangle,
    title: "Daño comprobable",
    desc: "No basta sentirse ofendido. Debe existir daño económico, reputacional o psicológico verificable.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
];

export default function PropuestaSection() {
  return (
    <section id="propuesta" className="section-padding bg-ink-950">
      <div className="container-max">
        <AnimateOnScroll className="text-center mb-4">
          <span className="tag-pill bg-signal-500/10 border border-signal-500/20 text-signal-400 mb-4">
            Propuesta Legislativa
          </span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white mt-3 mb-5">
            Bases para una{" "}
            <span className="text-signal-400">discusión nacional</span>
          </h2>
          <p className="text-ink-400 text-lg max-w-2xl mx-auto leading-relaxed mb-3">
            No proponemos una ley lista para aprobar. Proponemos bases para un debate serio sobre
            cómo modernizar el régimen mexicano de responsabilidad civil digital.
          </p>
          <p className="text-electric-400 text-sm font-semibold">
            México no está inventando discutir esto — lo hacen EUA, UK, España, Alemania y la UE.
          </p>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 my-14">
          {PRINCIPIOS.map(({ icon: Icon, title, desc, color, bg }, i) => (
            <AnimateOnScroll key={title} delay={i * 0.1}>
              <div className="card-dark h-full flex flex-col gap-4">
                <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <h3 className={`font-heading font-bold text-base ${color}`}>{title}</h3>
                <p className="text-ink-400 text-sm leading-relaxed flex-1">{desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Innovation highlight */}
        <AnimateOnScroll>
          <div className="relative rounded-2xl border border-electric-500/20 bg-gradient-to-br from-ink-900 to-electric-900/20 p-8 lg:p-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-electric-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative max-w-2xl">
              <span className="tag-pill bg-electric-500/15 border border-electric-500/30 text-electric-300 mb-5">
                Elemento innovador
              </span>
              <h3 className="font-heading text-2xl font-bold text-white mb-4 mt-3">
                Contextualización judicial, no remoción de contenidos
              </h3>
              <p className="text-ink-300 leading-relaxed mb-4">
                En lugar de eliminar publicaciones, proponemos que los jueces puedan ordenar
                un <strong className="text-white">banner de contexto</strong> en contenidos
                declarados falsos judicialmente:
              </p>
              <div className="bg-ink-800 rounded-xl p-4 border border-electric-500/20 mb-6">
                <p className="text-electric-300 text-sm italic font-body">
                  &ldquo;Determinadas afirmaciones contenidas en esta publicación fueron declaradas
                  falsas por resolución judicial firme dentro del expediente X.&rdquo;
                </p>
              </div>
              <p className="text-ink-400 text-sm mb-6">
                Esto protege la libertad, el archivo histórico y la trazabilidad — pero introduce responsabilidad real.
              </p>
              <Link href="/propuesta" className="btn-primary">
                Leer propuesta completa <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
