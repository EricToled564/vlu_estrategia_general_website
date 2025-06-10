
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VLU Hospitality - Estrategia General",
  description: "Estrategia General y Análisis de Mercado para VLU Hospitality - Hoteles Boutique de Lujo en México",
  keywords: "VLU, hospitality, estrategia, hoteles boutique, lujo, México, Tequesquitengo, Acapulco",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
