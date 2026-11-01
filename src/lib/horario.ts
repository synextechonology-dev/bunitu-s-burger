import { site } from "@/data/site";

export type Status = { aberto: boolean; titulo: string; sub: string };

// Calcula aberto/fechado no fuso de Brasília, independente do fuso de quem visita.
export function statusAgora(agora = new Date()): Status {
  const partes: Record<string, string> = {};
  new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Sao_Paulo",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })
    .formatToParts(agora)
    .forEach((p) => (partes[p.type] = p.value));
  const dias: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  const dia = dias[partes.weekday] ?? agora.getDay();
  const min = (parseInt(partes.hour, 10) % 24) * 60 + parseInt(partes.minute, 10);
  const { abre, fecha, fechadoNoDia } = site.horario;
  const abreHoje = dia !== fechadoNoDia;

  if (abreHoje && min >= abre && min < fecha) return { aberto: true, titulo: "Aberto agora", sub: "· até 23h" };
  if (abreHoje && min < abre) return { aberto: false, titulo: "Fechado", sub: "· abre hoje às 19h" };
  if (dia === 0 || dia === fechadoNoDia) return { aberto: false, titulo: "Fechado", sub: "· abre terça às 19h" };
  return { aberto: false, titulo: "Fechado", sub: "· abre amanhã às 19h" };
}
