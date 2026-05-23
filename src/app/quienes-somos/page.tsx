import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Globe, BookOpen } from "lucide-react";

export const metadata = { title: "Quiénes Somos — Civismo Digital" };

const PERFILES = [
  { icon: BookOpen, label: "Especialistas en derecho", desc: "Juristas con experiencia en derecho civil, responsabilidad y libertad de expresión." },
  { icon: Globe,    label: "Comunicación y medios",   desc: "Especialistas en comunicación digital, plataformas y conversación pública." },
  { icon: Users,    label: "Academia y sociedad civil",desc: "Investigadores, académicos y organizaciones ciudadanas comprometidas con el debate público." },
];

export default function QuienesSomosPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <div className="bg-ink-950 pt-32 pb-20">
          <div className="container-max max-w-3xl">
            <span className="tag-pill bg-electric-500/10 border border-electric-500/20 text-electric-400 mb-4">Quiénes Somos</span>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mt-3 mb-6">
              Una iniciativa impulsada por especialistas en comunicación, derecho, tecnología y vida pública
            </h1>
            <p className="text-ink-400 text-xl leading-relaxed">
              Civismo Digital no es un despacho litigante ni un partido político. Es una iniciativa
              ciudadana independiente comprometida con generar un debate nacional serio, riguroso
              y plural sobre la responsabilidad digital.
            </p>
          </div>
        </div>

        <div className="section-light section-padding">
          <div className="container-max max-w-3xl space-y-14">
            <div>
              <h2 className="font-heading text-3xl font-bold text-ink-900 mb-5">Nuestra misión</h2>
              <p className="text-ink-700 text-lg leading-relaxed mb-4">
                Impulsar una conversación nacional sobre cómo proteger simultáneamente la libertad
                de expresión y los derechos fundamentales frente al daño digital masivo, a través
                de evidencia, rigor jurídico y un espacio plural de debate.
              </p>
              <p className="text-ink-700 leading-relaxed">
                No tomamos postura política. No representamos intereses particulares. No proponemos
                soluciones cerradas. Proponemos bases para que México tenga una discusión que
                las democracias más avanzadas del mundo ya están teniendo.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-3xl font-bold text-ink-900 mb-6">Quiénes participamos</h2>
              <div className="grid sm:grid-cols-3 gap-5">
                {PERFILES.map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="bg-white rounded-2xl p-6 border border-ink-200 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-electric-500/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-electric-600" />
                    </div>
                    <h3 className="font-heading font-bold text-ink-900 text-sm mb-2">{label}</h3>
                    <p className="text-ink-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-ink-900 rounded-2xl p-8 border border-ink-700">
              <h2 className="font-heading text-2xl font-bold text-white mb-4">Sobre el impulsor</h2>
              <p className="text-ink-300 leading-relaxed mb-3">
                Civismo Digital es una iniciativa impulsada por <strong className="text-white">MW Group</strong>,
                firma especializada en comunicación estratégica, inteligencia reputacional y análisis
                de conversación digital en México y América Latina.
              </p>
              <p className="text-ink-400 text-sm leading-relaxed">
                MW participa como impulsor intelectual y operativo de la iniciativa, no como parte
                interesada en su resultado legislativo. El objetivo es generar un espacio neutral
                de debate con la credibilidad que da la independencia y el rigor.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
