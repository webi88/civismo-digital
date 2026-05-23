import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { ShieldOff, Scale, FileCheck, AlertTriangle, CheckCircle } from "lucide-react";

export const metadata = { title: "Propuesta Legislativa — Civismo Digital" };

const ELEMENTOS = [
  { letra: "A", titulo: "Daño comprobable", desc: "Económico, reputacional, profesional, familiar, institucional o psicológico. Con evidencia verificable.", color: "text-electric-400" },
  { letra: "B", titulo: "Afirmación verificable de hecho", desc: "No opinión. No crítica. No interpretación. Sino afirmación objetiva susceptible de prueba.", color: "text-signal-400" },
  { letra: "C", titulo: "Ausencia de sustento verificable razonable", desc: "No basta equivocarse. Debe existir negligencia grave, temeridad o desprecio evidente por la verificación.", color: "text-amber-400" },
  { letra: "D", titulo: "Falsedad comprobable", desc: "Con evidencia pública, resolución judicial o pruebas objetivas verificadas.", color: "text-purple-400" },
  { letra: "E", titulo: "Intención manifiesta de destrucción reputacional", desc: "Conducta de hostigamiento reputacional digital o amplificación dolosa de falsedad verificable.", color: "text-rose-400" },
];

const MEDIDAS = [
  "Banner contextual en la publicación",
  "Cuadro de contexto con datos verificados",
  "Nota de resolución judicial adjunta",
  "Advertencia informativa al lector",
];

export default function PropuestaPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-ink-950">
        <div className="bg-ink-900 pt-32 pb-16 border-b border-ink-800">
          <div className="container-max max-w-3xl">
            <span className="tag-pill bg-signal-500/10 border border-signal-500/20 text-signal-400 mb-4">Propuesta Legislativa</span>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mt-3 mb-5">
              Bases para una discusión nacional
            </h1>
            <p className="text-ink-400 text-lg leading-relaxed">
              Modernizar el régimen mexicano de responsabilidad civil para reconocer el impacto del
              daño digital masivo derivado de afirmaciones falsas o negligentemente difundidas.
            </p>
          </div>
        </div>

        <div className="container-max max-w-3xl py-16 space-y-14">
          {/* Objetivo */}
          <AnimateOnScroll>
            <div className="card-dark">
              <h2 className="font-heading text-2xl font-bold text-white mb-4">Objetivo General</h2>
              <p className="text-ink-300 leading-relaxed text-lg">
                Modernizar el régimen mexicano de responsabilidad civil para reconocer el impacto
                del <strong className="text-white">daño digital masivo</strong> derivado de
                afirmaciones falsas o negligentemente difundidas mediante sistemas de comunicación
                masiva descentralizada.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Principios */}
          <AnimateOnScroll>
            <h2 className="font-heading text-2xl font-bold text-white mb-6">Principios Rectores</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: ShieldOff, color: "text-electric-400 bg-electric-500/10", title: "Sin censura previa", desc: "Ninguna autoridad podrá autorizar expresión, bloquear publicaciones preventivamente ni monitorear opiniones." },
                { icon: Scale,     color: "text-signal-400 bg-signal-500/10",    title: "Responsabilidad civil solamente", desc: "Nunca penal. El Estado no persigue. Solo acción entre particulares mediante acreditación judicial." },
                { icon: FileCheck, color: "text-green-400 bg-green-500/10",      title: "Protección reforzada", desc: "Periodismo, investigación, crítica política, sátira, opinión, debate público y denuncia sustentada." },
                { icon: AlertTriangle, color: "text-amber-400 bg-amber-500/10",  title: "Estándares estrictos de prueba", desc: "Acción civil solo bajo estándares altos: daño real, afirmación verificable, falsedad comprobable." },
              ].map(({ icon: Icon, color, title, desc }) => (
                <div key={title} className="card-dark flex gap-4">
                  <div className={`w-10 h-10 rounded-xl ${color.split(" ")[1]} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                    <Icon className={`w-5 h-5 ${color.split(" ")[0]}`} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-sm mb-1">{title}</h3>
                    <p className="text-ink-400 text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Elementos necesarios */}
          <AnimateOnScroll>
            <h2 className="font-heading text-2xl font-bold text-white mb-6">Elementos necesarios para acción civil</h2>
            <div className="space-y-4">
              {ELEMENTOS.map((el, i) => (
                <AnimateOnScroll key={el.letra} delay={i * 0.07}>
                  <div className="card-dark flex gap-5 items-start">
                    <span className={`font-heading text-3xl font-bold ${el.color} flex-shrink-0 w-8 text-center leading-none mt-1`}>{el.letra}</span>
                    <div>
                      <h3 className="font-heading font-bold text-white mb-1">{el.titulo}</h3>
                      <p className="text-ink-400 text-sm leading-relaxed">{el.desc}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Medidas reparatorias */}
          <AnimateOnScroll>
            <div className="relative rounded-2xl border border-electric-500/30 bg-gradient-to-br from-ink-900 to-electric-900/20 p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-electric-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <h2 className="font-heading text-2xl font-bold text-white mb-2">Medidas Reparatorias: la innovación clave</h2>
                <p className="text-electric-400 font-semibold text-sm mb-5">Contextualización judicial, no remoción automática</p>
                <p className="text-ink-300 leading-relaxed mb-6">
                  En lugar de eliminar contenidos —lo que afecta la libertad, el archivo histórico y la
                  trazabilidad— proponemos que jueces puedan ordenar la inserción de un aviso contextual:
                </p>
                <div className="bg-ink-800 rounded-xl p-5 border border-electric-500/25 mb-6">
                  <p className="text-electric-200 text-sm italic font-body leading-relaxed">
                    &ldquo;Determinadas afirmaciones contenidas en esta publicación fueron declaradas
                    falsas por resolución judicial firme dentro del expediente X.&rdquo;
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {MEDIDAS.map((m) => (
                    <div key={m} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-electric-400 flex-shrink-0 mt-0.5" />
                      <span className="text-ink-300 text-sm">{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </main>
      <Footer />
    </>
  );
}
