"use client";
import { useEffect, useState } from "react";

// LGPD: o site só usa cookies essenciais. Se o GA4 for ativado, este aviso precisa virar consentimento (aceitar/recusar).
export default function Cookies() {
  const [ver, setVer] = useState(false);
  useEffect(() => {
    try { setVer(localStorage.getItem("bunitus-cookies") !== "ok"); } catch { setVer(true); }
  }, []);
  if (!ver) return null;
  return (
    <div className="cookies" role="region" aria-label="Aviso de cookies">
      <p>Este site usa só cookies essenciais pra funcionar. Saiba mais na <a href="/politica-de-privacidade">Política de privacidade</a>.</p>
      <button type="button" className="btn sm" onClick={() => { try { localStorage.setItem("bunitus-cookies", "ok"); } catch {} setVer(false); }}>Entendi</button>
    </div>
  );
}
