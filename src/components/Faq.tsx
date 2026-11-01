import { faq } from "@/data/faq";

export default function Faq() {
  return (
    <section id="duvidas" className="sec faq" aria-labelledby="titulo-faq">
      <div className="wrap faq-in">
        <div className="sec-head">
          <p className="label">Dúvidas</p>
          <h2 id="titulo-faq" className="h2">Perguntas frequentes</h2>
        </div>
        <div className="faq-lista">
          {faq.map((f, i) => (
            <details key={f.q} open={i === 0}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
