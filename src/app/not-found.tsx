import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Página não encontrada | Bunitu's Burger", robots: { index: false } };

export default function NaoEncontrada() {
  return (
    <div className="bb">
      <main className="sec">
        <div className="wrap" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
          <img src="/img/selo-bunitus.png" alt="Bunitu's Burger" width={140} height={131} />
          <p className="label">Erro 404</p>
          <h1 className="h2">Essa página passou do ponto.</h1>
          <p className="lead">O endereço não existe mais. Bora voltar pra chapa?</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            <a className="btn" href="/#cardapio">Ver os lanches</a>
            <a className="btn ghost" href="/#onde">Onde estamos</a>
            <a className="btn ghost" href={site.appUrl} target="_blank" rel="noopener">Pedir pelo app</a>
          </div>
        </div>
      </main>
    </div>
  );
}
