import AnimateOnScroll from "./AnimateOnScroll";
import { User, Building2, Landmark, Vote, TrendingDown } from "lucide-react";

const STATS = [
  { value: "73%", label: "de víctimas de hostigamiento digital reportan impacto en su salud mental", source: "OMS 2023" },
  { value: "40M", label: "de pesos en pérdidas por campaña de desinformación empresarial en México", source: "Caso documentado 2023" },
  { value: "3", label: "casos de suicidio vinculados a campañas digitales coordinadas en Europa con sentencia civil", source: "Jurisprudencia 2021-2024" },
  { value: "24h", label: "es suficiente para destruir una reputación construida en décadas, según estudios de difusión viral", source: "MIT Media Lab" },
];

const CATEGORIAS = [
  { icon: User,        label: "Personas",             desc: "Daño reputacional, pérdida laboral, daño psicológico verificable" },
  { icon: Building2,   label: "Empresas",             desc: "Contratos perdidos, inversión detenida, imagen corporativa destruida" },
  { icon: Landmark,    label: "Instituciones",        desc: "Pérdida de confianza ciudadana, parálisis operativa" },
  { icon: Vote,        label: "Función Pública",      desc: "Campañas falsas que desvirtúan procesos de rendición de cuentas" },
  { icon: TrendingDown,"label": "Procesos Democráticos", desc: "Narrativas coordinadas que distorsionan decisiones colectivas" },
];

export default function ElProblemaSection() {
  return (
    <section id="el-problema" className="section-padding section-light">
      <div className="container-max">
        <AnimateOnScroll className="text-center mb-16">
          <span className="tag-pill bg-signal-500/10 border border-signal-500/20 text-signal-600 mb-4">
            El Problema
          </span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-ink-900 mt-3 mb-5">
            El daño digital masivo es{" "}
            <span className="text-signal-600">real y documentado</span>
          </h2>
          <p className="text-ink-600 text-lg max-w-2xl mx-auto leading-relaxed">
            No hablamos de susceptibilidades. Hablamos de daños económicos, laborales, psicológicos
            e institucionales verificables, causados por afirmaciones falsas difundidas masivamente.
          </p>
        </AnimateOnScroll>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {STATS.map((stat, i) => (
            <AnimateOnScroll key={i} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-6 border border-ink-200 shadow-sm h-full flex flex-col">
                <p className="font-heading text-4xl font-bold text-signal-500 mb-3">{stat.value}</p>
                <p className="text-ink-700 text-sm leading-relaxed flex-1">{stat.label}</p>
                <p className="text-ink-400 text-xs mt-3 font-semibold">{stat.source}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Categories */}
        <AnimateOnScroll>
          <h3 className="font-heading text-2xl font-bold text-ink-900 mb-6 text-center">
            Quiénes son afectados
          </h3>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {CATEGORIAS.map(({ icon: Icon, label, desc }, i) => (
            <AnimateOnScroll key={label} delay={i * 0.08}>
              <div className="bg-white rounded-2xl p-5 border border-ink-200 hover:border-signal-300 hover:shadow-md transition-all h-full flex flex-col items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-signal-500/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-signal-600" />
                </div>
                <p className="font-heading font-bold text-ink-900 text-sm">{label}</p>
                <p className="text-ink-500 text-xs leading-relaxed">{desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
