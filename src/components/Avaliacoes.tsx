export default function Avaliacoes() {
  return (
    <>
      
      <section className="dark sec" aria-labelledby="titulo-aval">
        <div className="wrap">
          <div className="sec-head">
            <p className="label">Quem já comeu</p>
            <h2 id="titulo-aval" className="h2">O que falam no Google.</h2>
          </div>
          <div className="nota">
            <strong>4,8</strong>
            <div>
              <div className="estrelas" role="img" aria-label="Nota 4,8 de 5 no Google">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z"></path></svg>
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z"></path></svg>
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z"></path></svg>
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z"></path></svg>
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z"></path></svg>
              </div>
              <p style={{ fontSize: '14px', marginTop: '4px' }}>30 avaliações no Google</p>
            </div>
          </div>
          <ul className="aval-grid">
            <li className="aval"><p className="who">[Nome do cliente] · [data]</p><p>Avaliação real copiada do perfil do Google entra aqui. Nada de depoimento inventado.</p></li>
            <li className="aval"><p className="who">[Nome do cliente] · [data]</p><p>Avaliação real copiada do perfil do Google entra aqui.</p></li>
            <li className="aval"><p className="who">[Nome do cliente] · [data]</p><p>Avaliação real copiada do perfil do Google entra aqui.</p></li>
          </ul>
        </div>
      </section>
    </>
  );
}
