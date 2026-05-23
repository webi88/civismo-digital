export interface Caso {
  id: string;
  titulo: string;
  descripcion: string;
  categoria: "Persona" | "Empresa" | "Institución" | "Función Pública" | "Proceso Democrático";
  impacto: string;
  año: number;
  pais: string;
  fuente?: string;
}

export const casos: Caso[] = [
  {
    id: "c1",
    titulo: "Campaña de desinformación contra empresa familiar — Monterrey, México",
    descripcion:
      "Empresa exportadora afectada por 3 semanas de tweets coordinados con información falsa sobre supuestos vínculos con actividad ilícita. Contratos cancelados sin proceso judicial alguno.",
    categoria: "Empresa",
    impacto: "~40 MXN millones en contratos perdidos",
    año: 2023,
    pais: "México",
  },
  {
    id: "c2",
    titulo: "Deepfake de funcionaria municipal — caso documentado",
    descripcion:
      "Video manipulado con IA distribuido en redes locales mostrando a una funcionaria en situación falsa de corrupción. El video sigue circulando 2 años después del desmentido oficial.",
    categoria: "Función Pública",
    impacto: "Pérdida de cargo, daño reputacional permanente",
    año: 2024,
    pais: "México",
  },
  {
    id: "c3",
    titulo: "Hostigamiento reputacional a periodista — caso internacional",
    descripcion:
      "Periodista de investigación víctima de campaña coordinada de doxxing y difusión de información personal falsa tras publicar reportaje de interés público.",
    categoria: "Persona",
    impacto: "Autocensura documentada, amenazas verificadas",
    año: 2022,
    pais: "América Latina",
  },
  {
    id: "c4",
    titulo: "Desinformación sobre inversión extranjera — impacto económico regional",
    descripcion:
      "Campaña de narrativas falsas sobre condiciones regulatorias de un estado mexicano impidió cierre de inversión extranjera directa. Daño económico regional verificable.",
    categoria: "Proceso Democrático",
    impacto: "Inversión retenida, impacto en empleo regional",
    año: 2023,
    pais: "México",
  },
  {
    id: "c5",
    titulo: "Suicidio vinculado a campaña de hostigamiento digital — caso europeo",
    descripcion:
      "Caso documentado en Alemania donde una campaña de hostigamiento y difusión de información falsa coordinada en redes sociales precedió al suicidio de la víctima. Sentencia civil estableció precedente.",
    categoria: "Persona",
    impacto: "Pérdida de vida, precedente jurídico relevante",
    año: 2021,
    pais: "Alemania",
    fuente: "Tribunal Regional de Berlín, 2022",
  },
  {
    id: "c6",
    titulo: "Narrativa falsa sobre proceso electoral — desestabilización institucional",
    descripcion:
      "Campaña organizada de desinformación sobre resultados electorales en estado mexicano generó movilizaciones basadas en datos falsos verificados posteriormente.",
    categoria: "Proceso Democrático",
    impacto: "Desestabilización institucional, pérdida de confianza ciudadana",
    año: 2024,
    pais: "México",
  },
];

export const categoriaColors: Record<string, string> = {
  "Persona": "bg-electric-500/15 text-electric-300 border-electric-500/30",
  "Empresa": "bg-signal-500/15 text-signal-300 border-signal-500/30",
  "Institución": "bg-purple-500/15 text-purple-300 border-purple-500/30",
  "Función Pública": "bg-amber-500/15 text-amber-300 border-amber-500/30",
  "Proceso Democrático": "bg-rose-500/15 text-rose-300 border-rose-500/30",
};
