import { site, mapsEmbed, mapsVer, mapsRota } from "@/data/site";

export default function Onde() {
  return (
    <>
      
      <section id="onde" className="sec" aria-labelledby="titulo-onde">
        <div className="wrap">
          <div className="sec-head">
            <p className="label">Onde estamos</p>
            <h2 id="titulo-onde" className="h2">Onde a chapa fica.</h2>
          </div>
          <div className="onde-grid">
            <div className="info">
              <div>
                <h3>Endereço</h3>
                <address style={{ fontStyle: 'normal' }}>Av. Tiradentes, 529 · Centro<br />Santa Cruz do Rio Pardo – SP</address>
              </div>
              <div>
                <h3>Horário</h3>
                <table className="horas">
                  <caption className="sr">Horário de funcionamento</caption>
                  <tbody>
                    <tr><th scope="row">Segunda</th><td>Fechado</td></tr>
                    <tr><th scope="row">Terça a domingo</th><td>19h às 23h</td></tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h3>Telefone</h3>
                <a className="link" href="tel:+5514996323292">(14) 99632-3292</a>
              </div>
              <div className="info-actions">
                <a className="btn" href={site.appUrl} target="_blank" rel="noopener" data-evento="clique_pedir_app">Pedir pelo app</a>
                <a className="btn ghost" aria-label="Como chegar ao Bunitu's Burger pelo Google Maps" href={mapsRota} target="_blank" rel="noopener">Como chegar</a>
              </div>
            </div>
            <div className="mapa mapa-real">
              <iframe
                title="Mapa do Bunitu's Burger: Av. Tiradentes, 529, Centro, Santa Cruz do Rio Pardo"
                src={mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a className="mapa-card" href={mapsVer} target="_blank" rel="noopener">
                <strong>Bunitu's Burger</strong>
                <span>Av. Tiradentes, 529 · Centro · 18900-000</span>
                <span className="mapa-abrir">Abrir no Google Maps ↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
