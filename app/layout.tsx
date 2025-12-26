import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";

// Cargamos las fuentes y asignamos variables CSS
const dmSerif = DM_Serif_Display({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-serif",
    display: "swap",
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Cuando estoy | Conferencia de Mujeres 2025",
    description: "Un refugio en el desierto para reencontrarte con lo esencial.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" className="scroll-smooth">
        {/* Inyectamos las variables de las fuentes en el body */}
        <body className={`${dmSerif.variable} ${inter.variable} antialiased font-sans bg-sand-50 text-earth-900`}>
        {children}
        </body>
        </html>
    );
}