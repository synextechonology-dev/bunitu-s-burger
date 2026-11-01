import { site, waLink } from "@/data/site";

export default function Rodape() {
  return (
    <>
      <footer className="ftr">
        <div className="wrap ftr-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <span className="brand-name">BUNITU'S<small>BURGER</small></span>
            <p>Hambúrguer artesanal na chapa em Santa Cruz do Rio Pardo. Pedidos pelo nosso app.</p>
            <div className="redes">
              <a href="https://www.instagram.com/bunitusburger/" target="_blank" rel="noopener" aria-label="Instagram do Bunitu's Burger"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5"></rect><circle cx="12" cy="12" r="4"></circle></svg></a>
              <a href={waLink()} target="_blank" rel="noopener" aria-label="WhatsApp"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 20l1.3-3.9A8 8 0 1 1 8 18.7L4 20Z"></path></svg></a>
            </div>
          </div>
          <nav aria-label="Rodapé">
            <h2>Navegue</h2>
            <ul>
              <li><a href="#cardapio">Cardápio</a></li>
              <li><a href="#espaco">O espaço</a></li>
              <li><a href="#como-pedir">Como pedir</a></li>
              <li><a href="#onde">Onde estamos</a></li>
            </ul>
          </nav>
          <div>
            <h2>Contato</h2>
            <ul>
              <li><a href="tel:+5514996323292">(14) 99632-3292</a></li>
              <li><a href="https://www.instagram.com/bunitusburger/" target="_blank" rel="noopener">@bunitusburger</a></li>
              <li><span>Av. Tiradentes, 529 · Centro</span></li>
            </ul>
          </div>
        </div>
        <div className="wrap ftr-base">
          <span>© 2026 Bunitu's Burger</span>
          {site.cnpj ? <span>CNPJ {site.cnpj}</span> : null}
          <a href="/politica-de-privacidade">Política de privacidade</a>
          <a href="/politica-de-privacidade#cookies">Cookies</a>
          <span>Site por Synex</span>
        </div>
      </footer>
    </>
  );
}
