"use client";

import { useState } from "react";
import { ShieldCheck } from "lucide-react";

export default function LogoMark({ scrolled = false }: { scrolled?: boolean }) {
  const [imgError, setImgError] = useState(false);
  const src = "/logo-civismo-digital.png";

  return (
    <div className="flex items-center gap-2.5">
      {!imgError ? (
        <img
          key={src}
          src={src}
          alt="Civismo Digital"
          className="h-9 w-auto object-contain"
          onError={() => setImgError(true)}
        />
      ) : (
        <>
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-electric-500 to-electric-700 flex items-center justify-center shadow-md flex-shrink-0">
            <ShieldCheck className="w-5 h-5 text-white" />
          </div>
          <div className="leading-tight">
            <span className={`block font-heading font-bold text-sm tracking-wide uppercase ${scrolled ? "text-ink-900" : "text-white"}`}>
              Civismo
            </span>
            <span className="block font-heading font-bold text-electric-400 text-sm tracking-wider uppercase -mt-0.5">
              Digital
            </span>
          </div>
        </>
      )}
    </div>
  );
}
