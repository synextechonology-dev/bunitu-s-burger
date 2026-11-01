import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Política de privacidade | Bunitu's Burger",
  description: "Como o site do Bunitu's Burger trata dados e cookies, conforme a LGPD.",
  alternates: { canonical: "/politica-de-privacidade" },
};

// RASCUNHO: revisar com o dono (e, se possível, com o contador/advogado) antes de publicar. Campos PREENCHER.
export default function Privacidade() {
  return (
    <div className="bb">
      <main className="sec">
        <article className="wrap" style={{ maxWidth: 760, display: "flex", flexDirection: "column", gap: 18 }}>
          <a className="link" href="/">← Voltar ao site</a>
          <h1 className="h2">Política de privacidade</h1>
          <p>Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>
          <h2 className="h2" style={{ fontSize: 26 }}>Quem somos</h2>
          <p>{site.nome}, {site.endereco.rua}, {site.endereco.bairro}, {site.endereco.cidade} – {site.endereco.uf}. {site.cnpj ? `CNPJ ${site.cnpj}.` : "CNPJ: [PREENCHER]."} Contato: {site.telefone}.</p>
          <h2 className="h2" style={{ fontSize: 26 }}>Quais dados coletamos</h2>
          <p>Este site não tem formulário e não pede dados pessoais. Os pedidos são feitos no app de pedidos, que tem a sua própria política. Ao clicar em WhatsApp ou Instagram, você sai deste site e passa a seguir as regras dessas plataformas.</p>
          <h2 id="cookies" className="h2" style={{ fontSize: 26 }}>Cookies</h2>
          <p>Usamos só armazenamento essencial no seu navegador: lembrar que você já viu a abertura do site e que fechou o aviso de cookies. [PREENCHER se o Google Analytics for ativado: descrever a medição de audiência e oferecer a opção de recusar.]</p>
          <h2 className="h2" style={{ fontSize: 26 }}>Mapa</h2>
          <p>A seção &quot;Onde estamos&quot; mostra um mapa do Google Maps, que pode coletar dados conforme a política do Google.</p>
          <h2 className="h2" style={{ fontSize: 26 }}>Seus direitos</h2>
          <p>Você pode pedir informações sobre dados pessoais pelo telefone {site.telefone}.</p>
        </article>
      </main>
    </div>
  );
}
