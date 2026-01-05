import type React from "react"
import type { Metadata } from "next"
import { Inter, DM_Serif_Display, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
})

const dmSerif = DM_Serif_Display({
    weight: ["400"],
    subsets: ["latin"],
    variable: "--font-dm-serif",
    style: ["normal", "italic"],
})

const geistMono = Geist_Mono({
    subsets: ["latin"],
    variable: "--font-geist-mono",
})

export const metadata: Metadata = {
    title: "Cuando estoy | Conferencia de Mujeres 2025",
    description: "Conferencia de Mujeres 2025 - Un espacio para ser, volver al origen.",
    generator: "v0.app",
}


/**
 * RootLayout component that wraps the entire application.
 * Defines global fonts, metadata, and structural elements like the HTML and Body tags.
 * 
 * @param {Object} props - Component properties.
 * @param {React.ReactNode} props.children - Child components to be rendered within the layout.
 * @returns {JSX.Element} The root HTML structure of the application.
 */
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="es" className="scroll-smooth">
            {/* Inject font variables and apply base styles */}
            <body className={`${inter.variable} ${dmSerif.variable} ${geistMono.variable} font-sans antialiased`}>
                {children}
                {/* Vercel Analytics for tracking page views and performance */}
                <Analytics />
            </body>
        </html>
    )
}
