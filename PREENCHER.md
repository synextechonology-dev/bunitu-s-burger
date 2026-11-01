# O que falta para publicar o Bunitu's Burger

## 🔴 Bloqueia a publicação
| Item | Onde trocar |
|---|---|
| Domínio final | `.env.local` → `NEXT_PUBLIC_SITE_URL` (e na Vercel) |
| 3 avaliações reais mais recentes do Google, com nome e data | `src/components/Avaliacoes.tsx` |
| Respostas: opção vegetariana, formas de pagamento, bairros de entrega | `src/data/faq.ts` (mudar `confirmado` para `true`) |
| Confirmar o pula-pula (existe? é grátis?) | `src/data/faq.ts` |
| CNPJ | `src/data/site.ts` → `cnpj` (aparece no rodapé e na política) |
| Revisar a política de privacidade com o dono | `src/app/politica-de-privacidade/page.tsx` |

## 🟠 Conteúdo provisório
| Item | Onde trocar |
|---|---|
| Nomes e ingredientes reais dos 5 lanches com foto (nomes atuais criados a partir das fotos) | `src/data/cardapio.ts` |
| Lanches sem foto (Duplo Bruto, Verde, Bunitinho, porções, bebidas, sobremesa): confirmar se existem e mandar fotos | `src/data/cardapio.ts` + `public/img` |
| Fotos reais do espaço (salão, chapa, fachada) | `src/components/Espaco.tsx` |
| Origem das fotos dos lanches e do vídeo: se forem de banco ou de IA, trocar por fotos reais do Bunitu's | `public/img`, `public/video` |
| Facebook (se existir) | `src/data/site.ts` + `DadosEstruturados.tsx` (sameAs) |

## 🟢 Depois de publicar
- GA4: `NEXT_PUBLIC_GA_ID` (os botões do app já disparam o evento `clique_pedir_app`). Antes, trocar o aviso de cookies por consentimento
- Search Console e Bing: `GOOGLE_SITE_VERIFICATION` / `BING_SITE_VERIFICATION` + enviar `/sitemap.xml`
- Atualizar a nota do Google em `site.ts` de tempos em tempos (vai no JSON-LD)
- Perfil da Empresa no Google: adicionar o link do site
