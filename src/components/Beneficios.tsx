export default function Beneficios() {
  return (
    <>
      
      <section className="beneficios" aria-labelledby="titulo-ben">
        <h2 id="titulo-ben" className="sr">Por que escolher o Bunitu's Burger</h2>
        <ul className="wrap ben-grid">
          <li className="ben">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3c2 3-2 4 0 7M8 5c1.5 2-1.5 3 0 5M16 5c1.5 2-1.5 3 0 5"></path><rect x="3" y="13" width="18" height="5" rx="1"></rect><path d="M6 18v3M18 18v3"></path></svg>
            <h3>Na chapa, na hora</h3>
            <p>Nada fica esperando pronto. O burger só vai pra chapa quando seu pedido chega.</p>
          </li>
          <li className="ben">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12a8 6 0 0 1 16 0Z"></path><path d="M3 15h18"></path><path d="M4 18h16a1 1 0 0 1-1 2H5a1 1 0 0 1-1-2Z"></path></svg>
            <h3>Pão brioche</h3>
            <p>Macio, levemente doce e selado na manteiga antes de montar.</p>
          </li>
          <li className="ben">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="6" cy="17" r="2.5"></circle><circle cx="18" cy="17" r="2.5"></circle><path d="M8.5 17h7M3.5 17V8h9v9M12.5 11h4l3 3v3"></path></svg>
            <h3>Aqui ou em casa</h3>
            <p>Senta com a turma no salão ou peça pelo app e receba em Santa Cruz.</p>
          </li>
          <li className="ben">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 9h16M4 9l1.5-4h13L20 9M5 9v11h14V9"></path><path d="M10 20v-5h4v5"></path></svg>
            <h3>Feito em Santa Cruz</h3>
            <p>Hamburgueria daqui, com cara de bairro e lanche caprichado.</p>
          </li>
        </ul>
      </section>
    </>
  );
}
