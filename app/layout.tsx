import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
    title: "Conferencia de Mujeres | Cuando estoy Contigo",
    description: "Noviembre 23",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
        <body className={`${playfair.variable} ${montserrat.variable} font-sans antialiased`}>
        {children}
        </body>
        </html>
    );
}