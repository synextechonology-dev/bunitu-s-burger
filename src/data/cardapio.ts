// Cardápio de APRESENTAÇÃO: sem preço (o pedido é feito no app).
// Nomes e ingredientes: PREENCHER/confirmar com o dono. Itens sem foto mostram um espaço reservado.

export type Categoria = "lanche" | "porcao" | "bebida" | "doce";
export type Tag = { txt: string; cls: "top" | "veg" | "novo" | "apimentado" };
export type Item = {
  id: string;
  cat: Categoria;
  nome: string;
  ing: string;
  foto?: string; // foto grande sem fundo (topo, polaroid, quiz)
  mini?: string; // miniatura do seletor do topo
  peek?: string; // versão média que "espia" na borda do topo
  bacon?: boolean;
  duplo?: boolean;
  picancia?: "suave" | "medio" | "apimentado";
  tags: Tag[];
};

const img = (id: string) => ({
  foto: `/img/burger-${id}.webp`,
  mini: `/img/burger-${id}-mini.webp`,
  peek: `/img/burger-${id}-peek.webp`,
});

export const cardapio: Item[] = [
  { id: "classico", cat: "lanche", nome: "Bunitu's Clássico", ing: "Pão brioche, burger, cheddar cremoso, bacon, alface, tomate e maionese de ervas.", bacon: true, picancia: "suave", ...img("classico"), tags: [{ txt: "Mais pedido", cls: "top" }] },
  { id: "bacon", cat: "lanche", nome: "Bunitu's Bacon", ing: "Pão brioche com gergelim, burger, cheddar cremoso, bacon crocante e cebola caramelizada.", bacon: true, picancia: "medio", ...img("bacon"), tags: [] },
  { id: "salada", cat: "lanche", nome: "Bunitu's Salada", ing: "Pão brioche com gergelim, burger, alface crespa, tomate-cereja e maionese de ervas.", picancia: "suave", ...img("salada"), tags: [{ txt: "Leve", cls: "veg" }] },
  { id: "onion", cat: "lanche", nome: "Bunitu's Onion", ing: "Pão brioche, burger, cheddar, bacon crocante, onion ring empanado e molho ranch.", bacon: true, picancia: "medio", ...img("onion"), tags: [{ txt: "Novo", cls: "novo" }] },
  { id: "duplo", cat: "lanche", nome: "Duplo Bruto", ing: "Dois burgers de 150 g, cheddar duplo, bacon e picles.", bacon: true, duplo: true, picancia: "medio", tags: [{ txt: "Fome grande", cls: "novo" }] },
  { id: "apimentado", cat: "lanche", nome: "Feio Apimentado", ing: "Pão brioche, frango empanado crocante com pimenta calabresa, cheddar cremoso, alface, tomate e maionese picante.", picancia: "apimentado", ...img("apimentado"), tags: [{ txt: "Apimentado", cls: "apimentado" }] },
  { id: "verde", cat: "lanche", nome: "Bunitu's Verde", ing: "Burger de grão-de-bico, queijo prato, alface, tomate e maionese verde.", tags: [{ txt: "Vegetariano", cls: "veg" }] },
  { id: "bunitinho", cat: "lanche", nome: "Bunitinho", ing: "Burger 90 g, queijo prato e ketchup. Pra quem está começando.", tags: [] },
  { id: "batata", cat: "porcao", nome: "Batata frita", ing: "Batata crocante com sal e páprica.", tags: [] },
  { id: "batata-cheddar-bacon", cat: "porcao", nome: "Batata cheddar e bacon", ing: "Batata com cheddar cremoso e bacon picado.", tags: [] },
  { id: "onion-rings", cat: "porcao", nome: "Onion rings", ing: "Anéis de cebola empanados com maionese da casa.", tags: [] },
  { id: "bebidas", cat: "bebida", nome: "Sucos e refrigerantes", ing: "Suco natural de laranja, limão ou maracujá, refrigerantes e água.", tags: [] },
  { id: "brownie", cat: "doce", nome: "Brownie com sorvete", ing: "Brownie quente com uma bola de sorvete de creme.", tags: [] },
];

export const categorias: { id: "todos" | Categoria; nome: string }[] = [
  { id: "todos", nome: "Todos" },
  { id: "lanche", nome: "Lanches" },
  { id: "porcao", nome: "Porções" },
  { id: "bebida", nome: "Bebidas" },
  { id: "doce", nome: "Sobremesas" },
];

// Ordem do carrossel do topo (só lanches com foto)
export const destaqueIds = ["bacon", "classico", "salada", "onion", "apimentado"] as const;
export const destaques = destaqueIds.map((id) => cardapio.find((i) => i.id === id)!);
export const porId = (id: string) => cardapio.find((i) => i.id === id)!;
