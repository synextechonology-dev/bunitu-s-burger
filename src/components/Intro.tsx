"use client";
import { useEffect, useRef, useState } from "react";

// Abertura (mesma do Rei do iPhone, com o selo do Bunitu's). Aparece uma vez por visita (sessionStorage).
export default function Intro() {
  const [fase, setFase] = useState<"off" | "on" | "skip">("off");

  const mostrar = useRef<boolean | null>(null); // decide uma vez só (o Strict Mode do dev roda o efeito duas vezes)

  useEffect(() => {
    if (mostrar.current === null) {
      let visto = false;
      try { visto = sessionStorage.getItem("bunitus-intro") === "1"; sessionStorage.setItem("bunitus-intro", "1"); } catch {}
      mostrar.current = !visto;
    }
    if (!mostrar.current) return;
    setFase("on");
    const t = setTimeout(() => setFase("off"), 2600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (fase !== "skip") return;
    const t = setTimeout(() => setFase("off"), 600);
    return () => clearTimeout(t);
  }, [fase]);

  if (fase === "off") return null;
  return (
    <div className={`intro ${fase === "skip" ? "skip" : ""}`} aria-hidden="true" onClick={() => setFase("skip")}>
      <div className="door">
        <div className="door-in">
          <span className="in-logo">
            <img className="in-sym" src="/img/selo-bunitus.png" alt="" width={240} height={224} />
            <span className="in-wm">Feio é passar <em>fome.</em></span>
            <span className="in-line" />
          </span>
        </div>
      </div>
    </div>
  );
}
