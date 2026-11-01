import { site, SITE_URL } from "@/data/site";
import { faq } from "@/data/faq";

// JSON-LD só com informação visível e verdadeira. Atualize a nota do Google antes de cada deploy (ou remova aggregateRating).
export default function DadosEstruturados() {
  const e = site.endereco;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Restaurant",
        "@id": `${SITE_URL}/#restaurante`,
        name: site.nome,
        url: SITE_URL,
        logo: `${SITE_URL}/img/selo-bunitus.png`,
        image: `${SITE_URL}/img/og-bunitus-burger.jpg`,
        description: "Hamburgueria em Santa Cruz do Rio Pardo com burger na chapa e pão brioche.",
        servesCuisine: ["Hambúrguer", "Lanches"],
        priceRange: "$$",
        telephone: "+55 14 99632-3292",
        address: { "@type": "PostalAddress", streetAddress: `${e.rua} - ${e.bairro}`, addressLocality: e.cidade, addressRegion: e.uf, postalCode: e.cep, addressCountry: "BR" },
        geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
        areaServed: e.cidade,
        openingHoursSpecification: [
          { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "19:00", closes: "23:00" },
        ],
        aggregateRating: { "@type": "AggregateRating", ratingValue: String(site.google.notaNum), reviewCount: String(site.google.avaliacoes) },
        hasMap: `https://www.google.com/maps/place/?q=place_id:${site.googlePlaceId}`,
        sameAs: [site.instagram],
      },
      { "@type": "WebSite", "@id": `${SITE_URL}/#site`, url: SITE_URL, name: site.nome, inLanguage: "pt-BR", publisher: { "@id": `${SITE_URL}/#restaurante` } },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#pagina`,
        url: SITE_URL,
        name: "Hamburgueria em Santa Cruz do Rio Pardo | Bunitu's Burger",
        isPartOf: { "@id": `${SITE_URL}/#site` },
        about: { "@id": `${SITE_URL}/#restaurante` },
        inLanguage: "pt-BR",
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.filter((f) => f.confirmado).map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
