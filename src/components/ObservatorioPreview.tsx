import AnimateOnScroll from "./AnimateOnScroll";
import Link from "next/link";
import { casos, categoriaColors } from "@/lib/casos";
import { ArrowRight, Database } from "lucide-react";

export default function ObservatorioPreview() {
  const preview = casos.slice(0, 3);
  return (
    <section id="observatorio" className="section-padding bg-ink-900">
      <div className="container-max">
        <AnimateOnScroll className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="tag-pill bg-electric-500/10 border border-electric-500/20 text-electric-400 mb-4">
              Observatorio
            </span>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white mt-3">
              Casos{" "}
              <span className="text-electric-400">documentados</span>
            </h2>
            <p className="text-ink-400 mt-3 max-w-xl leading-relaxed">
              Registros verificados de daño digital masivo. Este observatorio es un recurso
              vivo — crece con cada caso documentado.
            </p>
          </div>
          <Link href="/observatorio" className="btn-outline flex-shrink-0">
            Ver todos los casos <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-3 gap-5 mb-8">
          {preview.map((caso, i) => (
            <AnimateOnScroll key={caso.id} delay={i * 0.1}>
              <div className="card-dark h-full flex flex-col gap-4 hover:border-electric-500/40 transition-colors">
                <span className={`tag-pill border w-fit ${categoriaColors[caso.categoria]}`}>
                  {caso.categoria}
                </span>
                <h3 className="font-heading font-bold text-white text-base leading-snug">
                  {caso.titulo}
                </h3>
                <p className="text-ink-400 text-sm leading-relaxed flex-1">{caso.descripcion}</p>
                <div className="pt-3 border-t border-ink-700 flex items-center justify-between">
                  <span className="text-signal-400 text-xs font-bold">{caso.impacto}</span>
                  <span className="text-ink-500 text-xs">{caso.pais} · {caso.año}</span>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll>
          <div className="flex items-center gap-3 p-4 rounded-xl border border-electric-500/20 bg-electric-500/5">
            <Database className="w-5 h-5 text-electric-400 flex-shrink-0" />
            <p className="text-ink-400 text-sm">
              El Observatorio documenta casos de personas, empresas, instituciones y procesos democráticos afectados
              por daño digital masivo verificable.{" "}
              <Link href="/observatorio" className="text-electric-400 hover:text-electric-300 font-semibold">
                Ver archivo completo →
              </Link>
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
