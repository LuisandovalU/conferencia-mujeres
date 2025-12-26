import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Dancing_Script } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-sans" });
const dancing = Dancing_Script({ subsets: ["latin"], variable: "--font-script" });

export const metadata: Metadata = {
    title: "Conferencia de Mujeres | Cuando estoy Contigo",
    description: "Una Velada Transformadora | Noviembre 23",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
        <body className={`${playfair.variable} ${montserrat.variable} ${dancing.variable} font-sans antialiased bg-sand-100 bg-noise`}>
        {children}
        </body>
        </html>
    );
}