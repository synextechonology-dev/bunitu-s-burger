"use client";
import { useState } from "react";
import { site } from "@/data/site";
import { porId } from "@/data/cardapio";

type Pontos = Record<string, number>;
const PERGUNTAS: { q: string; o: [string, Pontos][] }[] = [
  { q: "Que fome é essa?", o: [["Fome de leão", { onion: 2, bacon: 1 }], ["Fome de gente normal", { classico: 2, bacon: 1 }], ["Quero algo mais leve", { salada: 3 }]] },
  { q: "E o bacon?", o: [["Sem bacon não é lanche", { bacon: 2, onion: 2, classico: 1 }], ["Tanto faz", { classico: 1, apimentado: 1 }], ["Prefiro sem", { salada: 2, apimentado: 1 }]] },
  { q: "Pimenta?", o: [["Quanto mais, melhor", { apimentado: 4 }], ["Só um toque", { bacon: 1, onion: 1 }], ["Nada de pimenta", { classico: 1, salada: 1 }]] },
];
const ORDEM = ["bacon", "classico", "salada", "onion", "apimentado"];

export default function Quiz() {
  const [resp, setResp] = useState<number[]>([]);
  const pronto = resp.length >= PERGUNTAS.length;
  let resultado = null;
  if (pronto) {
    const pts: Pontos = {};
    resp.forEach((k, n) => Object.entries(PERGUNTAS[n].o[k][1]).forEach(([id, v]) => (pts[id] = (pts[id] ?? 0) + v)));
    const melhor = ORDEM.reduce((a, b) => ((pts[b] ?? 0) > (pts[a] ?? 0) ? b : a), ORDEM[0]);
    resultado = porId(melhor);
  }
  const P = PERGUNTAS[resp.length];

  return (
    <section id="quiz" className="quiz sec" aria-labelledby="titulo-quiz">
      <div className="wrap quiz-in">
        <div className="sec-head">
          <p className="label">Quiz rápido</p>
          <h2 id="titulo-quiz" className="h2">Qual Bunitu&apos;s é você?</h2>
          <p className="lead">3 perguntas, 10 segundos. A gente diz qual lanche tem a sua cara.</p>
        </div>
        <div className="quiz-card" aria-live="polite">
          {!pronto && P && (
            <>
              <p className="quiz-passo">Pergunta {resp.length + 1} de {PERGUNTAS.length}</p>
              <div className="quiz-barra" aria-hidden="true"><span style={{ width: `${Math.round((resp.length / PERGUNTAS.length) * 100)}%` }} /></div>
              <h3 className="quiz-q">{P.q}</h3>
              <div className="quiz-opcoes">
                {P.o.map(([txt], k) => (
                  <button key={txt} type="button" className="quiz-op" onClick={() => setResp((r) => [...r, k])}>{txt}</button>
                ))}
              </div>
            </>
          )}
          {pronto && resultado && (
            <div className="quiz-res">
              <img src={resultado.foto} alt={`${resultado.nome}: ${resultado.ing}`} width={900} height={870} loading="lazy" decoding="async" />
              <div className="quiz-res-txt">
                <p className="quiz-passo">Seu lanche é o</p>
                <h3 className="quiz-nome">{resultado.nome}</h3>
                <p className="quiz-ing">{resultado.ing}</p>
                <div className="quiz-acoes">
                  <a href={site.appUrl} className="btn-app" target="_blank" rel="noopener" data-evento="clique_pedir_app">Pedir pelo app</a>
                  <button type="button" className="quiz-refaz" onClick={() => setResp([])}>Refazer o quiz</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
