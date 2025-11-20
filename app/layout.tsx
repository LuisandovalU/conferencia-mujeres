import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Dancing_Script } from "next/font/google";
import "./globals.css";

// Configuramos la fuente elegante (Títulos)
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-sans" });
const dancing = Dancing_Script({ subsets: ["latin"], variable: "--font-script" }); // Nueva fuente cursiva

export const metadata: Metadata = {
    title: "Conferencia de Mujeres | Un Lugar Excepcional",
    description: "Una Velada Transformadora | Noviembre 23",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
        {/* Aplicamos todas las variables de fuentes al body */}
        <body className={`${playfair.variable} ${montserrat.variable} ${dancing.variable} font-sans antialiased`}>
        {children}
        </body>
        </html>
    );
}