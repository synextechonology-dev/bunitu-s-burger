import type { Metadata, Viewport } from "next";
import { Anton, Caveat_Brush, Barlow, Barlow_Condensed } from "next/font/google";
import { site, SITE_URL } from "@/data/site";
import "./globals.css";

const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--f-anton", display: "swap" });
const brush = Caveat_Brush({ weight: "400", subsets: ["latin"], variable: "--f-brush", display: "swap" });
const barlow = Barlow({ weight: ["400", "500", "600", "700"], subsets: ["latin"], variable: "--f-barlow", display: "swap" });
const barlowC = Barlow_Condensed({ weight: ["500", "600", "700"], subsets: ["latin"], variable: "--f-barlow-c", display: "swap" });

const titulo = "Hamburgueria em Santa Cruz do Rio Pardo | Bunitu's Burger";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: titulo,
  description: site.descricao,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: site.nome,
    title: "Bunitu's Burger | Hamburgueria em Santa Cruz do Rio Pardo",
    description: "Burger na chapa, pão brioche e mesa pra galera. Terça a domingo, 19h às 23h. Peça pelo app.",
    images: [{ url: "/img/og-bunitus-burger.jpg", width: 1200, height: 630, alt: "Bunitu's Burger: selo e hambúrguer com bacon e cheddar" }],
  },
  twitter: {
    card: "summary_large_image",
    title: titulo,
    description: site.descricao,
    images: ["/img/og-bunitus-burger.jpg"],
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.BING_SITE_VERIFICATION ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION } : undefined,
  },
};

export const viewport: Viewport = { themeColor: "#1B1918", width: "device-width", initialScale: 1 };

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${anton.variable} ${brush.variable} ${barlow.variable} ${barlowC.variable}`}>
      <head>
        <link rel="preload" as="image" href="/img/burger-bacon.webp" fetchPriority="high" />
        {GA_ID ? (
          <>
            {/* GA4 só com o ID real em NEXT_PUBLIC_GA_ID. Ao ativar, trocar o aviso de cookies por consentimento (LGPD). */}
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA_ID}');
document.addEventListener('click',function(e){var a=e.target.closest('[data-evento]');if(a)gtag('event',a.getAttribute('data-evento'),{link_url:a.href||''})});`,
              }}
            />
          </>
        ) : null}
      </head>
      <body>{children}</body>
    </html>
  );
}
