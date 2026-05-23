"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PenLine, CheckCircle } from "lucide-react";

const TEXTO_CARTA = `Nosotros, los abajo firmantes, declaramos nuestro respaldo a los principios del Civismo Digital:

1. Defendemos la libertad de expresión amplia, el debate público robusto, la crítica política, la sátira, el periodismo de investigación y el derecho al disenso.

2. Reconocemos que la comunicación masiva descentralizada ha generado nuevos desafíos: el daño reputacional masivo, la amplificación negligente de falsedades y las campañas coordinadas de destrucción digital generan impactos reales y verificables sobre personas, empresas, instituciones y procesos democráticos.

3. Sostenemos que la libertad de expresión no pierde valor cuando se exige responsabilidad civil por el daño causado mediante afirmaciones falsas y negligentemente difundidas. Por el contrario: una conversación pública libre requiere estándares mínimos de responsabilidad.

4. Respaldamos una discusión nacional seria sobre cómo modernizar el régimen mexicano de responsabilidad civil digital, sin censura, sin control estatal, sin delitos de opinión.`;

export default function CartaPage() {
  const [nombre, setNombre] = useState("");
  const [perfil, setPerfil] = useState("");
  const [email, setEmail] = useState("");
  const [firmado, setFirmado] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setFirmado(true);
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-ink-50">
        <div className="bg-ink-950 pt-32 pb-16">
          <div className="container-max max-w-3xl">
            <span className="tag-pill bg-signal-500/10 border border-signal-500/20 text-signal-400 mb-4">Carta por el Civismo Digital</span>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
              Una declaración pública
            </h1>
            <p className="text-ink-400 text-lg">
              Suma tu nombre a quienes defienden una conversación pública libre y responsable.
            </p>
          </div>
        </div>

        <div className="container-max max-w-3xl py-12 space-y-8">
          {/* Carta text */}
          <div className="bg-white rounded-2xl p-8 border border-ink-200 shadow-sm">
            <h2 className="font-heading font-bold text-ink-900 text-xl mb-5">Texto de la Carta</h2>
            <div className="whitespace-pre-line text-ink-700 leading-relaxed text-sm font-body">
              {TEXTO_CARTA}
            </div>
          </div>

          {/* Form */}
          {firmado ? (
            <div className="bg-electric-50 border border-electric-200 rounded-2xl p-8 text-center">
              <CheckCircle className="w-12 h-12 text-electric-500 mx-auto mb-4" />
              <h3 className="font-heading font-bold text-ink-900 text-xl mb-2">¡Gracias, {nombre}!</h3>
              <p className="text-ink-600">Tu firma ha sido registrada. Tu voz se suma a esta iniciativa.</p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-8 border border-ink-200 shadow-sm">
              <h2 className="font-heading font-bold text-ink-900 text-xl mb-2 flex items-center gap-2">
                <PenLine className="w-5 h-5 text-signal-500" /> Firma la Carta
              </h2>
              <p className="text-ink-500 text-sm mb-6">Tu firma es pública. Tu email no se publicará.</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-ink-700 mb-1.5">Nombre completo *</label>
                  <input
                    type="text" required value={nombre} onChange={(e) => setNombre(e.target.value)}
                    className="w-full px-4 py-2.5 border border-ink-300 rounded-xl text-ink-900 bg-ink-50 focus:outline-none focus:ring-2 focus:ring-electric-400 focus:border-transparent text-sm"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-ink-700 mb-1.5">Perfil / Profesión</label>
                  <input
                    type="text" value={perfil} onChange={(e) => setPerfil(e.target.value)}
                    className="w-full px-4 py-2.5 border border-ink-300 rounded-xl text-ink-900 bg-ink-50 focus:outline-none focus:ring-2 focus:ring-electric-400 focus:border-transparent text-sm"
                    placeholder="Ej. Periodista, Jurista, Ciudadano..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-ink-700 mb-1.5">Email *</label>
                  <input
                    type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 border border-ink-300 rounded-xl text-ink-900 bg-ink-50 focus:outline-none focus:ring-2 focus:ring-electric-400 focus:border-transparent text-sm"
                    placeholder="tu@email.com"
                  />
                </div>
                <button
                  type="submit" disabled={loading}
                  className="btn-primary w-full justify-center mt-2 disabled:opacity-60"
                >
                  {loading ? "Registrando..." : <><PenLine className="w-4 h-4" /> Firmar la Carta</>}
                </button>
              </form>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
