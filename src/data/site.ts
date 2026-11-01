// Fonte única dos dados do Bunitu's Burger. Tudo que aparece no site sai daqui.
// // PREENCHER = dado que o dono ainda precisa confirmar.

const SITE_URL_PADRAO = "https://bunitusburger.com.br"; // PREENCHER: domínio final

// Aceita valor vazio, sem "https://" ou com barra no fim; se ainda for inválido, usa o padrão (evita quebrar o build).
function urlDoSite(bruto = ""): string {
  let v = bruto.trim().replace(/\/+$/, "");
  if (!v) return SITE_URL_PADRAO;
  if (!/^https?:\/\//i.test(v)) v = `https://${v}`;
  try { return new URL(v).origin; } catch { return SITE_URL_PADRAO; }
}

export const SITE_URL = urlDoSite(process.env.NEXT_PUBLIC_SITE_URL);

export const site = {
  nome: "Bunitu's Burger",
  slogan: "Feio é passar fome.",
  descricao:
    "Hamburgueria em Santa Cruz do Rio Pardo com burger na chapa e pão brioche. Nota 4,8 no Google. Av. Tiradentes, 529. Terça a domingo, 19h às 23h. Peça pelo app!",
  // App de pedidos do cliente (UTM do site para separar dos pedidos do Instagram)
  appUrl: "https://bunitusburger.bvxtecnologia.com.br/?utm_source=site&utm_medium=landing&utm_campaign=bunitus",
  instagram: "https://www.instagram.com/bunitusburger/",
  instagramUser: "@bunitusburger",
  whatsapp: "5514996323292",
  telefone: "(14) 99632-3292",
  telefoneHref: "tel:+5514996323292",
  endereco: {
    rua: "Av. Tiradentes, 529",
    bairro: "Centro",
    cidade: "Santa Cruz do Rio Pardo",
    uf: "SP",
    cep: "18900-000",
  },
  geo: { lat: -22.9027789, lng: -49.6255487 },
  googlePlaceId: "ChIJc3BtPhBrwJQRMaUlYFKD46E",
  google: { nota: "4,8", notaNum: 4.8, avaliacoes: 30 },
  // Terça (2) a domingo (0), 19h às 23h. Segunda (1) fechado.
  horario: { abre: 19 * 60, fecha: 23 * 60, fechadoNoDia: 1 },
  cnpj: "", // PREENCHER
};

export const waLink = (texto = "Olá, Bunitu's! Vim pelo site.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(texto)}`;

const enderecoQuery = encodeURIComponent(
  `${site.endereco.rua} - ${site.endereco.bairro}, ${site.endereco.cidade} - ${site.endereco.uf}, ${site.endereco.cep}`
);
export const mapsVer = `https://www.google.com/maps/search/?api=1&query=${enderecoQuery}&query_place_id=${site.googlePlaceId}`;
export const mapsRota = `https://www.google.com/maps/dir/?api=1&destination=${enderecoQuery}&destination_place_id=${site.googlePlaceId}`;
export const mapsEmbed = `https://www.google.com/maps?q=${enderecoQuery}&output=embed`;
