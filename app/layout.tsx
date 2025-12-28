import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Cuando estoy contigo | Conferencia de Mujeres 2025",
    description: "Conferencia de Mujeres 2025 - Un espacio para encontrar paz y conexión",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" className="scroll-smooth">
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link 
                href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@300;400;500;600&display=swap" 
                rel="stylesheet" 
            />
        </head>
        <body className="antialiased font-sans bg-sand-50 text-earth-900">
        {children}
        </body>
        </html>
    );
}