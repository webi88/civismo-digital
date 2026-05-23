import Link from "next/link";
import { ShieldCheck } from "lucide-react";

const LINKS = [
  { label: "¿Qué es?",    href: "/#que-es" },
  { label: "El Problema", href: "/#el-problema" },
  { label: "Observatorio",href: "/observatorio" },
  { label: "Propuesta",   href: "/propuesta" },
  { label: "Carta",       href: "/carta" },
  { label: "Blog",        href: "/blog" },
  { label: "Documentación", href: "/documentacion" },
  { label: "Quiénes somos", href: "/quienes-somos" },
];

export default function Footer() {
  return (
    <footer className="bg-ink-950 border-t border-ink-800">
      <div className="container-max py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-electric-500 to-electric-700 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="block font-heading font-bold text-white text-sm tracking-wide uppercase">Civismo</span>
                <span className="block font-heading font-bold text-electric-400 text-sm -mt-0.5 tracking-wider uppercase">Digital</span>
              </div>
            </div>
            <p className="text-ink-500 text-xs leading-relaxed max-w-xs">
              Iniciativa ciudadana por una conversación pública libre y responsable en la era digital.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {LINKS.map((l) => (
              <Link key={l.label} href={l.href} className="text-ink-500 hover:text-electric-400 text-xs transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-ink-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-ink-600 text-xs">
            © {new Date().getFullYear()} Civismo Digital · civismodigital.mx
          </p>
          <p className="text-ink-700 text-xs">
            Desarrollado por{" "}
            <a href="https://webi.mx" target="_blank" rel="noopener noreferrer" className="text-ink-600 hover:text-ink-400 transition-colors">
              webi.mx
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
