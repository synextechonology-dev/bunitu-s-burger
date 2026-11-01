import { site, waLink } from "@/data/site";

export default function ComoPedir() {
  return (
    <>
      
      <section id="como-pedir" className="pedir sec" aria-labelledby="titulo-pedir">
        <div className="wrap">
          <div className="sec-head">
            <p className="label">Como pedir</p>
            <h2 id="titulo-pedir" className="h2">Dois jeitos de matar a fome.</h2>
          </div>
          <ol className="passos" style={{ listStyle: 'none', margin: '0', padding: '0' }}>
            <li className="passo"><span className="n" aria-hidden="true">1</span><div><h3>Vem comer aqui</h3><p>Chega, senta e pede no balcão. O lanche sai quente da chapa direto pra mesa.</p></div></li>
            <li className="passo"><span className="n" aria-hidden="true">2</span><div><h3>Ou peça pelo app</h3><p>Escolha no nosso app e receba em casa ou retire aqui.</p><p style={{ marginTop: '14px' }}><a href={site.appUrl} className="btn" target="_blank" rel="noopener" data-evento="clique_pedir_app">Pedir pelo app</a></p></div></li>
          </ol>
        </div>
      </section>
    </>
  );
}
