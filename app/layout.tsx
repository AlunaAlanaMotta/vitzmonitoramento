import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "VITZ Segurança e Facilities",
  description:
    "Empresa de segurança em Curitiba com monitoramento 24h, portaria e facilities. Proteja seu patrimônio com tecnologia e eficiência.",
  keywords: [
    "segurança empresarial",
    "monitoramento 24h",
    "portaria",
    "facilities",
    "segurança Curitiba",
  ],
  authors: [{ name: "VITZ Segurança" }],
  openGraph: {
    title: "VITZ Segurança e Facilities",
    description: "Soluções em segurança e monitoramento 24h em Curitiba.",
    url: "https://seudominio.com",
    siteName: "VITZ Segurança",
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
    name: "VITZ Segurança e Facilities",
    image: "",
    telephone: "+5541995502824",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Curitiba",
      addressRegion: "PR",
      addressCountry: "BR",
    },
    url: "https://seudominio.com",
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
        <div className="page">{children}</div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
