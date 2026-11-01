"use client";
import { site } from "@/data/site";
import { useStatus } from "./useStatus";

// Barra fixa do celular (escondida a partir de 768 px pelo CSS)
export default function BarraApp() {
  const st = useStatus();
  return (
    <div className="barra-app">
      <span className={`barra-st ${st?.aberto ? "aberto" : "fechado"}`}><i aria-hidden="true" />{st ? st.titulo : "Ter a dom · 19h"}</span>
      <a href={site.appUrl} className="btn-app" target="_blank" rel="noopener" data-evento="clique_pedir_app">Pedir pelo app</a>
    </div>
  );
}
