# Bunitu's Burger — contexto para o Claude Code

Landing page de **apresentação** da hamburgueria Bunitu's Burger (Santa Cruz do Rio Pardo – SP), feita pela **Synex**.
Etapa C5 do Playbook da Synex: código a partir da prévia aprovada no Claude Design (C2).

## Regras do projeto (não quebrar)
- **Sem preço e sem pedido no site.** Todo CTA leva ao app de pedidos do cliente (`site.appUrl`, com UTM do site). Exceção à stack padrão da Synex: aqui não há pedido via WhatsApp; o WhatsApp é só contato.
- **Não inventar dados.** Endereço, telefone, horário, nota do Google, Instagram e link do app já estão confirmados em `src/data/site.ts`. Tudo marcado `PREENCHER` ainda falta confirmar com o dono.
- **Avaliações:** só texto real do Google, com nome e data. Nunca depoimento inventado.
- **Visual:** é o da prévia aprovada. Não redesenhar. O CSS está em `src/app/globals.css` (extraído da prévia) e as classes dos componentes batem com ele.
- Identidade (manual do cliente): Preto Tag #1B1918, Laranja Spray #F2671F, Reboco #ECE4D6 (textura), Tijolo #8E3B22, Mostarda #D8B13C, Menta #8ED8CC. Fontes: Anton (títulos, caixa alta), Caveat Brush (só o destaque "fome."), Barlow (texto), Barlow Condensed (botões e etiquetas).
- Respeitar `prefers-reduced-motion` em toda animação nova.
- LGPD: banner de cookies + `/politica-de-privacidade`. Se ativar o GA4, trocar o aviso por consentimento (aceitar/recusar) antes de carregar o script.

## Stack
Next.js 15 (App Router) · React 19 · TypeScript · CSS global (sem Tailwind) · deploy na Vercel · GitHub.

## Estrutura
- `src/data/site.ts`: dados da loja, links do app, WhatsApp e Maps, `SITE_URL`
- `src/data/cardapio.ts`: lanches (sem preço), categorias e ordem do carrossel do topo
- `src/data/faq.ts`: perguntas frequentes (`confirmado: false` não entra no JSON-LD)
- `src/lib/horario.ts`: "Aberto agora" no fuso de Brasília
- `src/components/`: uma seção por arquivo (Topo = barra + hero, Cardapio, Quiz, Faq, Onde etc.)
- `src/app/`: layout (metadata, fontes, GA4 opcional), page, robots, sitemap, not-found, politica-de-privacidade, ícones
- `public/img` e `public/video`: fotos recortadas em WebP, texturas, selo, vídeo da chapa, imagem de compartilhamento

## Para adicionar um lanche
1. Coloque `burger-<id>.webp` (900 px, fundo transparente), `burger-<id>-mini.webp` (160 px) e `burger-<id>-peek.webp` (360 px) em `public/img`.
2. Acrescente o item em `cardapio.ts` (use `...img("<id>")`).
3. Para aparecer no topo, inclua o id em `destaqueIds`.

## Primeiros passos
```bash
npm install
cp .env.example .env.local   # ajuste o domínio
npm run dev                  # http://localhost:3000
npm run build                # conferir antes do deploy
```

## Checklist da C5 (marcar na Central Synex)
- [ ] `npm run build` sem erro
- [ ] Testar em 360 px, 768 px e 1440 px (sem rolagem horizontal)
- [ ] PageSpeed no celular: desempenho ≥ 90, acessibilidade 100, SEO 100
- [ ] Domínio na Vercel + `NEXT_PUBLIC_SITE_URL`
- [ ] Search Console: verificação + envio do sitemap
- [ ] Resolver os itens de `PREENCHER.md`
