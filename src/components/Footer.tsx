import Link from "next/link";

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
            <div className="mb-4">
              <img
                src="/logo-civismo-digital.png"
                alt="Civismo Digital"
                className="h-12 w-auto object-contain"
              />
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
