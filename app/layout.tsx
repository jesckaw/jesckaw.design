import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jesckaw — Design & Creative",
  description: "Designer & Creative — crafting thoughtful digital experiences, brand identities, and visual narratives.",
  openGraph: {
    title: "Jesckaw — Design & Creative",
    description: "Designer & Creative — crafting thoughtful digital experiences.",
    url: "https://jesckaw.design",
    siteName: "Jesckaw Design",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cream text-ink font-body antialiased">{children}</body>
    </html>
  );
}
