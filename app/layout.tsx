import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VITZ Monitoramento e Facilities",
  description:
    "Empresa em Curitiba especializada em monitoramento 24h, portaria, controle de acesso e facilities. Soluções profissionais para empresas, condomínios e ambientes corporativos.",
  keywords: [
    "monitoramento 24h",
    "portaria",
    "controle de acesso",
    "facilities",
    "monitoramento Curitiba",
    "VITZ Monitoramento",
  ],
  authors: [{ name: "VITZ Monitoramento e Facilities" }],
  openGraph: {
    title: "VITZ Monitoramento e Facilities",
    description:
      "Soluções em monitoramento 24h, portaria e facilities em Curitiba.",
    url: "https://www.vitzmonitoramento.com.br",
    siteName: "VITZ Monitoramento e Facilities",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "VITZ Monitoramento e Facilities",
    image: "https://www.vitzmonitoramento.com.br/images/logo_vitz-2.png",
    telephone: "+5541995502824",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Curitiba",
      addressRegion: "PR",
      addressCountry: "BR",
    },
    url: "https://www.vitzmonitoramento.com.br",
  };

  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>

      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6SNBHTB4B0"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6SNBHTB4B0');
          `}
        </Script>

        <div className="page">{children}</div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
