import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { casos, categoriaColors } from "@/lib/casos";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata = { title: "Observatorio — Civismo Digital" };

export default function ObservatorioPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-ink-950">
        <div className="bg-ink-900 pt-32 pb-16 border-b border-ink-800">
          <div className="container-max">
            <span className="tag-pill bg-electric-500/10 border border-electric-500/20 text-electric-400 mb-4">Observatorio</span>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
              Casos <span className="text-electric-400">documentados</span>
            </h1>
            <p className="text-ink-400 text-lg max-w-2xl leading-relaxed">
              Registro verificado de casos de daño digital masivo. Personas, empresas, instituciones y
              procesos democráticos afectados por afirmaciones falsas difundidas masivamente.
            </p>
          </div>
        </div>

        <div className="container-max py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {casos.map((caso, i) => (
              <AnimateOnScroll key={caso.id} delay={i * 0.07}>
                <div className="card-dark h-full flex flex-col gap-4 hover:border-electric-500/40 transition-colors">
                  <span className={`tag-pill border w-fit ${categoriaColors[caso.categoria]}`}>
                    {caso.categoria}
                  </span>
                  <h3 className="font-heading font-bold text-white text-base leading-snug">{caso.titulo}</h3>
                  <p className="text-ink-400 text-sm leading-relaxed flex-1">{caso.descripcion}</p>
                  <div className="pt-3 border-t border-ink-700 flex flex-col gap-1">
                    <span className="text-signal-400 text-xs font-bold">{caso.impacto}</span>
                    <div className="flex items-center justify-between">
                      <span className="text-ink-500 text-xs">{caso.pais} · {caso.año}</span>
                      {caso.fuente && <span className="text-ink-600 text-xs italic">{caso.fuente}</span>}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
