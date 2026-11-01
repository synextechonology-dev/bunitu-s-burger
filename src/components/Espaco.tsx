export default function Espaco() {
  return (
    <>
      
      <section id="espaco" className="sec" aria-labelledby="titulo-espaco">
        <div className="wrap espaco-grid">
          <div className="mosaico">
            <figure className="foto grande"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"></rect><circle cx="9" cy="10" r="2"></circle><path d="M21 16l-5-5-8 8"></path></svg><figcaption>Foto do salão com as mesas</figcaption></figure>
            <figure className="foto"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"></rect><circle cx="9" cy="10" r="2"></circle><path d="M21 16l-5-5-8 8"></path></svg><figcaption>Foto da chapa em ação</figcaption></figure>
            <figure className="foto"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"></rect><circle cx="9" cy="10" r="2"></circle><path d="M21 16l-5-5-8 8"></path></svg><figcaption>Foto da fachada</figcaption></figure>
          </div>
          <div className="espaco-txt">
            <p className="label">O espaço</p>
            <h2 id="titulo-espaco" className="h2">Vem comer quente, <span className="mark">aqui na chapa.</span></h2>
            <p className="lead">Mesa pra turma toda, som ambiente e o cheiro da chapa logo na entrada. Chegou, sentou, pediu.</p>
            <ul className="lista-check">
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg>Mesas pra família e pra galera</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg>Lanche servido direto da chapa</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg>Balcão de retirada pra quem tá com pressa</li>
            </ul>
            <div><a href="#onde" className="btn ghost">Ver endereço e horário</a></div>
          </div>
        </div>
      </section>
    </>
  );
}
