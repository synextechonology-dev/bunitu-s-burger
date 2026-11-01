import Intro from "@/components/Intro";
import Topo from "@/components/Topo";
import Faixa from "@/components/Faixa";
import Beneficios from "@/components/Beneficios";
import Cardapio from "@/components/Cardapio";
import Quiz from "@/components/Quiz";
import ComoPedir from "@/components/ComoPedir";
import Espaco from "@/components/Espaco";
import Avaliacoes from "@/components/Avaliacoes";
import Faq from "@/components/Faq";
import Onde from "@/components/Onde";
import Rodape from "@/components/Rodape";
import BarraApp from "@/components/BarraApp";
import Cookies from "@/components/Cookies";
import DadosEstruturados from "@/components/DadosEstruturados";

export default function Home() {
  return (
    <div className="bb">
      <DadosEstruturados />
      <Intro />
      <a href="#cardapio" className="sr">Pular para o cardápio</a>
      <main>
        <Topo />
        <Faixa />
        <Beneficios />
        <Cardapio />
        <Quiz />
        <ComoPedir />
        <Espaco />
        <Avaliacoes />
        <Faq />
        <Onde />
      </main>
      <Rodape />
      <BarraApp />
      <Cookies />
    </div>
  );
}
