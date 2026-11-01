"use client";
import { useEffect, useState } from "react";
import { statusAgora, type Status } from "@/lib/horario";

// Calculado só no navegador (evita divergência entre o horário do servidor e o do visitante) e atualizado a cada minuto.
export function useStatus(): Status | null {
  const [st, setSt] = useState<Status | null>(null);
  useEffect(() => {
    const at = () => setSt(statusAgora());
    at();
    const t = setInterval(at, 60_000);
    return () => clearInterval(t);
  }, []);
  return st;
}
