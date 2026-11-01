"use client";
import { useState } from "react";
import { site } from "@/data/site";
import { cardapio, categorias, type Categoria, type Item } from "@/data/cardapio";
import { BurgerDesenho } from "./Icones";

const P = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
function IconeCategoria({ cat }: { cat: Categoria }) {
  if (cat === "porcao")
    return <svg className="ico" viewBox="0 0 24 24" {...P} aria-hidden="true"><path d="M6 10h12l-1.5 10h-9L6 10Z" /><path d="M8 10l-1-6M11 10V3M14 10l1-6M17 10l1.5-4" /></svg>;
  if (cat === "bebida")
    return <svg className="ico" viewBox="0 0 24 24" {...P} aria-hidden="true"><path d="M7 7h10l-1.2 13H8.2L7 7Z" /><path d="M6 7h12M12 7l2-4h3" /></svg>;
  return <svg className="ico" viewBox="0 0 24 24" {...P} aria-hidden="true"><rect x="4" y="11" width="16" height="9" rx="1.5" /><path d="M8 11a4 4 0 0 1 8 0" /><path d="M4 15h16" /></svg>;
}

function Polaroid({ it }: { it: Item }) {
  const hid = `item-${it.id}`;
  const alt = it.foto ? `${it.nome}: ${it.ing}` : `Espaço para a foto do ${it.nome}`;
  return (
    <article className="polaroid" aria-labelledby={hid}>
      <span className="fita" aria-hidden="true" />
      <div className={`pol-foto ${it.cat}`}>
        {it.foto ? (
          <img src={it.foto} alt={alt} width={900} height={870} loading="lazy" decoding="async" />
        ) : (
          <div className="pol-vazio" role="img" aria-label={alt}>
            {it.cat === "lanche" ? <BurgerDesenho duplo={it.duplo} bacon={it.bacon} /> : <IconeCategoria cat={it.cat} />}
            <span className="pol-aviso">Foto entra aqui</span>
          </div>
        )}
        {it.tags.length > 0 && (
          <div className="pol-tags">
            {it.tags.map((t) => <span key={t.txt} className={`pol-tag ${t.cls}`}>{t.txt}</span>)}
          </div>
        )}
      </div>
      <div className="pol-legenda">
        <h3 id={hid}>{it.nome}</h3>
        <p>{it.ing}</p>
      </div>
    </article>
  );
}

export default function Cardapio() {
  const [cat, setCat] = useState<"todos" | Categoria>("todos");
  const visiveis = cardapio.filter((i) => cat === "todos" || i.cat === cat);
  return (
    <section id="cardapio" className="sec" aria-labelledby="titulo-cardapio">
      <div className="wrap">
        <div className="sec-head">
          <p className="label">Cardápio</p>
          <h2 id="titulo-cardapio" className="h2">Escolha sem pressa.<br />A chapa espera.</h2>
          <p className="lead">Todo lanche vem no pão brioche, montado na hora.</p>
        </div>
        <div className="tabs" role="group" aria-label="Categorias do cardápio">
          {categorias.map((c) => (
            <button key={c.id} type="button" className={`tab ${cat === c.id ? "ativo" : ""}`} onClick={() => setCat(c.id)} aria-pressed={cat === c.id}>{c.nome}</button>
          ))}
        </div>
        <ul className="menu-grid">
          {visiveis.map((it) => <li key={it.id}><Polaroid it={it} /></li>)}
        </ul>
        <div className="menu-cta">
          <p>Bateu vontade? O pedido é pelo nosso app.</p>
          <a href={site.appUrl} className="btn" target="_blank" rel="noopener" data-evento="clique_pedir_app">Pedir pelo app</a>
        </div>
      </div>
    </section>
  );
}
