"use client";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { site, waLink } from "@/data/site";
import { destaques } from "@/data/cardapio";
import { IconeInstagram, IconeWhatsapp, IconePimenta, BurgerDesenho } from "./Icones";
import { useStatus } from "./useStatus";

const LINKS = [
  ["#inicio", "Início"],
  ["#cardapio", "Cardápio"],
  ["#espaco", "O espaço"],
  ["#como-pedir", "Como pedir"],
  ["#onde", "Onde estamos"],
] as const;
const NIVEIS = [
  ["apimentado", "Apimentado"],
  ["suave", "Suave"],
  ["medio", "Médio"],
] as const;

export default function Topo() {
  const [menu, setMenu] = useState(false);
  const [hero, setHero] = useState(0);
  const [resto, setResto] = useState(false); // fotos dos outros slides só depois do carregamento inicial
  const status = useStatus();
  const cabecalho = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const N = destaques.length;
  const atual = destaques[hero];
  const proximo = destaques[(hero + 1) % N];
  const anterior = () => setHero((h) => (h + N - 1) % N);
  const seguinte = () => setHero((h) => (h + 1) % N);

  useEffect(() => {
    if (hero !== 0) { setResto(true); return; }
    const liberar = () => setTimeout(() => setResto(true), 300);
    if (document.readyState === "complete") { const t = liberar(); return () => clearTimeout(t); }
    window.addEventListener("load", liberar, { once: true });
    return () => window.removeEventListener("load", liberar);
  }, [hero]);

  // Menu aberto: fecha com Esc ou ao tocar fora do cabeçalho
  useEffect(() => {
    if (!menu) return;
    const tecla = (e: KeyboardEvent) => e.key === "Escape" && setMenu(false);
    const fora = (e: PointerEvent) => { if (!cabecalho.current?.contains(e.target as Node)) setMenu(false); };
    document.addEventListener("keydown", tecla);
    document.addEventListener("pointerdown", fora);
    return () => { document.removeEventListener("keydown", tecla); document.removeEventListener("pointerdown", fora); };
  }, [menu]);

  useEffect(() => {
    const v = video.current;
    if (!v || !resto) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    v.muted = true;
    v.play().catch(() => {});
  }, [resto]);

  // 24 · Inclinar em 3D (Não Codei): o JS só mede o mouse, o CSS suaviza
  const tilt = (e: MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(700px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) translateZ(12px)`;
  };
  const tiltSai = (e: MouseEvent<HTMLDivElement>) => (e.currentTarget.style.transform = "");

  return (
    <div className="topo" id="inicio">
      <div className="topo-diag" aria-hidden="true" />
      <div className="hero-card">
        <div className="hero-video" aria-hidden="true">
          <video ref={video} className="v-alto" src="/video/chapa.mp4" poster="/video/chapa-poster.jpg" muted loop playsInline preload="metadata" />
          <span className="hero-video-tinta" />
        </div>
        <div className="card-diag" aria-hidden="true"><span /></div>

        <header className="hdr" ref={cabecalho}>
          <a href="#inicio" className="logo-bloco" aria-label="Bunitu's Burger, início">
            <img className="logo-selo" src="/img/selo-bunitus.png" alt="Bunitu's Burger" width={240} height={224} />
          </a>
          <nav aria-label="Principal">
            <ul className="nav-links">
              {LINKS.map(([href, txt], i) => (
                <li key={href}>
                  <a href={href} className={i === 0 ? "ativo" : undefined} aria-current={i === 0 ? "page" : undefined}>{txt}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hdr-actions">
            <div className="hdr-redes" aria-label="Redes sociais">
              <a href={site.instagram} target="_blank" rel="noopener" aria-label="Instagram do Bunitu's Burger"><IconeInstagram /></a>
              <a href={waLink()} target="_blank" rel="noopener" aria-label="WhatsApp do Bunitu's Burger"><IconeWhatsapp /></a>
            </div>
            <a className="pilula-app" href={site.appUrl} target="_blank" rel="noopener" data-evento="clique_pedir_app">Pedir pelo app</a>
            <button type="button" className="menu-btn" onClick={() => setMenu((m) => !m)} aria-expanded={menu} aria-controls="menu-movel" aria-label={menu ? "Fechar menu" : "Abrir menu"}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d={menu ? "M5 5l14 14M19 5L5 19" : "M3 6h18M3 12h18M3 18h18"} />
              </svg>
            </button>
          </div>
          {menu && (
            <nav id="menu-movel" className="mob-menu" aria-label="Menu">
              {LINKS.map(([href, txt]) => (
                <a key={href} className="item" href={href} onClick={() => setMenu(false)}>{txt}</a>
              ))}
              <div className="mob-redes">
                <a href={site.instagram} target="_blank" rel="noopener" aria-label="Instagram do Bunitu's Burger"><IconeInstagram /></a>
                <a href={waLink()} target="_blank" rel="noopener" aria-label="WhatsApp do Bunitu's Burger"><IconeWhatsapp /></a>
              </div>
              <a className="btn full" href={site.appUrl} target="_blank" rel="noopener" data-evento="clique_pedir_app">Pedir pelo app</a>
            </nav>
          )}
        </header>

        <section className="hero" aria-labelledby="titulo-hero">
          <div className="hero-in">
            <div className="hero-txt">
              <p className={`status ${status?.aberto ? "aberto" : "fechado"}`} role="status">
                <i aria-hidden="true" />
                {status ? (<><b>{status.titulo}</b><span>{status.sub}</span></>) : (<><b>Terça a domingo</b><span>· 19h às 23h</span></>)}
              </p>
              <h1 id="titulo-hero" className="h1">
                <span className="l1">Bunitu&apos;s Burger</span>
                <span className="l2">Feio é passar <em>fome.</em></span>
              </h1>
              <p className="hero-p">
                Hamburgueria em Santa Cruz do Rio Pardo com burger na chapa, pão brioche e lanche que enche a mão. Vem comer aqui ou peça pelo nosso app. Terça a domingo, das 19h às 23h.
              </p>
              <div className="picancia" role="group" aria-label="Nível de pimenta do lanche em destaque">
                {NIVEIS.map(([id, txt]) => (
                  <span key={id} className={`pic ${atual.picancia === id ? "on" : ""}`}><IconePimenta />{txt}</span>
                ))}
              </div>
              <div className="hero-buy">
                <a href={site.appUrl} className="btn-app" target="_blank" rel="noopener" data-evento="clique_pedir_app">Pedir pelo app</a>
                <p className="hero-nome" aria-live="polite">{atual.nome}</p>
              </div>
            </div>

            <div className="thumbs" role="group" aria-label="Escolha o lanche em destaque">
              {destaques.map((m, i) => (
                <button key={m.id} type="button" className={`thumb ${i === hero ? "sel" : ""}`} onClick={() => setHero(i)} aria-pressed={i === hero} aria-label={m.nome}>
                  {m.mini ? <img className="thumb-foto" src={m.mini} alt="" width={160} height={160} /> : <BurgerDesenho duplo={m.duplo} />}
                </button>
              ))}
            </div>

            <div className="hero-art">
              <div className="art-bg" aria-hidden="true"><span /></div>
              <div className="art" role="img" aria-label={`${atual.nome}: ${atual.ing}`}>
                <div className="fx-tilt" onMouseMove={tilt} onMouseLeave={tiltSai}>
                  {destaques.map((m, i) => {
                    const d = (i - hero + N) % N;
                    const cls = d === 0 ? "on" : d === N - 1 ? "antes" : "depois";
                    return (
                      <div key={m.id} className={`slide ${cls}`} aria-hidden="true">
                        {m.foto ? (
                          <img className="foto-burger" src={i === 0 || resto ? m.foto : undefined} alt="" width={900} height={870} loading={i === 0 ? "eager" : "lazy"} fetchPriority={i === 0 ? "high" : "auto"} decoding="async" />
                        ) : (
                          <BurgerDesenho grande duplo={m.duplo} bacon={m.bacon} />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
              {destaques.filter((m) => m.peek).map((m) => {
                const on = m.id === proximo.id;
                return (
                  <button key={m.id} type="button" className={`espiada ${on ? "on" : "off"}`} onClick={seguinte} aria-label={`Ver o próximo lanche: ${proximo.nome}`} tabIndex={on ? 0 : -1} aria-hidden={!on}>
                    <img src={m.peek} alt="" width={360} height={360} loading="lazy" decoding="async" />
                  </button>
                );
              })}
              <div className="hero-ctrls">
                <button type="button" className="seta" onClick={anterior} aria-label="Lanche anterior">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 3l-9 9 9 9" /></svg>
                </button>
                <div className="dots" aria-hidden="true">
                  {destaques.map((m, i) => <span key={m.id} className={`dot ${i === hero ? "on" : ""}`} />)}
                </div>
                <button type="button" className="seta" onClick={seguinte} aria-label="Próximo lanche">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 3l9 9-9 9" /></svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
