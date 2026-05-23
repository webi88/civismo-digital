"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import LogoMark from "./LogoMark";

const NAV_LINKS = [
  { label: "¿Qué es?",    href: "/#que-es" },
  { label: "El Problema", href: "/#el-problema" },
  { label: "Observatorio",href: "/observatorio" },
  { label: "Propuesta",   href: "/propuesta" },
  { label: "Blog",        href: "/blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchor = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (window.location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        sessionStorage.setItem("scrollTo", `#${id}`);
        window.location.href = "/";
      }
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container-max flex items-center justify-between h-16 lg:h-20">
          <Link href="/">
            <LogoMark scrolled={scrolled} />
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) =>
              link.href.startsWith("/#") ? (
                <button
                  key={link.label}
                  onClick={() => handleAnchor(link.href)}
                  className={`text-sm font-semibold transition-colors cursor-pointer ${
                    scrolled ? "text-ink-700 hover:text-electric-600" : "text-white/85 hover:text-electric-400"
                  }`}
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors ${
                    scrolled ? "text-ink-700 hover:text-electric-600" : "text-white/85 hover:text-electric-400"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link href="/carta" className="btn-primary text-sm px-4 py-2">
              Firma la Carta
            </Link>
          </nav>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-ink-800 hover:bg-ink-100" : "text-white hover:bg-white/10"
            }`}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-ink-950/98 backdrop-blur-sm flex flex-col pt-20 px-6"
          >
            <nav className="flex flex-col gap-2 mt-4">
              {NAV_LINKS.map((link, i) =>
                link.href.startsWith("/#") ? (
                  <motion.button
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => handleAnchor(link.href)}
                    className="text-left text-white/80 hover:text-electric-400 text-xl font-semibold py-3 border-b border-white/10 transition-colors"
                  >
                    {link.label}
                  </motion.button>
                ) : (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block text-white/80 hover:text-electric-400 text-xl font-semibold py-3 border-b border-white/10 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              )}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.06 }}
                className="mt-6"
              >
                <Link href="/carta" onClick={() => setMenuOpen(false)} className="btn-primary w-full justify-center">
                  Firma la Carta
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
