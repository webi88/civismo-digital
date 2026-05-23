import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, Globe, BookOpen, Gavel } from "lucide-react";

export const metadata = { title: "Documentación — Civismo Digital" };

const DOCS = [
  { categoria: "Jurisprudencia", icon: Gavel, color: "text-electric-400 bg-electric-500/10", items: [
    "Defamation Act 2013 — Reino Unido",
    "Tribunal Regional de Berlín — Daño digital, 2022",
    "SCOTUS: NY Times v. Sullivan — Estándar malicia real",
    "CJEU: Google Spain v. AEPD — Derecho al olvido",
  ]},
  { categoria: "Legislación y Regulación", icon: FileText, color: "text-signal-400 bg-signal-500/10", items: [
    "Digital Services Act — Unión Europea 2022",
    "Online Safety Act — Reino Unido 2023",
    "NetzDG — Alemania (análisis crítico)",
    "GDPR — Implicaciones para contenido difamatorio",
  ]},
  { categoria: "Investigación Académica", icon: BookOpen, color: "text-purple-400 bg-purple-500/10", items: [
    "MIT Media Lab: Difusión viral de desinformación",
    "Reuters Institute: Confianza en medios digitales 2024",
    "OMS: Impacto psicológico del hostigamiento digital",
    "CIDE: Responsabilidad civil digital en México",
  ]},
  { categoria: "Derecho Comparado", icon: Globe, color: "text-amber-400 bg-amber-500/10", items: [
    "Análisis comparado: EUA, UK, España, Alemania, UE",
    "CIDH: Libertad de expresión en América Latina",
    "Canada: Online Harms Act — avances 2024",
    "Australia: Online Safety Act — modelo de plataformas",
  ]},
];

export default function DocumentacionPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-ink-950">
        <div className="bg-ink-900 pt-32 pb-16 border-b border-ink-800">
          <div className="container-max">
            <span className="tag-pill bg-electric-500/10 border border-electric-500/20 text-electric-400 mb-4">Centro de Documentación</span>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
              Documentación y referencia
            </h1>
            <p className="text-ink-400 text-lg max-w-2xl">
              Jurisprudencia, legislación comparada, investigación académica y análisis sobre responsabilidad digital.
            </p>
          </div>
        </div>
        <div className="container-max py-16">
          <div className="grid md:grid-cols-2 gap-6">
            {DOCS.map(({ categoria, icon: Icon, color, items }) => (
              <div key={categoria} className="card-dark">
                <div className={`w-10 h-10 rounded-xl ${color.split(" ")[1]} flex items-center justify-center mb-4`}>
                  <Icon className={`w-5 h-5 ${color.split(" ")[0]}`} />
                </div>
                <h2 className="font-heading font-bold text-white text-lg mb-4">{categoria}</h2>
                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-ink-400 text-sm">
                      <FileText className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-ink-600" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-ink-600 text-xs mt-5 italic">Documentos disponibles próximamente en descarga PDF</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
