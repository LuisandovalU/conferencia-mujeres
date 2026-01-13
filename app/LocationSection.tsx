// src/app/LocationSection.tsx
'use client'
import React from 'react'

/**
 * Componente LocationSection que muestra información sobre el lugar del evento.
 * Incluye detalles de la dirección y un marcador de posición para la integración de Google Maps.
 * 
 * @returns {JSX.Element} La sección de ubicación renderizada.
 */
export default function LocationSection() {
    return (
        /* Utiliza un fondo beige claro para contrastar con las secciones adyacentes */
        <section id="ubicacion" className="bg-white py-24 px-6 text-coffee-dark border-t border-beige-200 overflow-hidden">
            <div className="grid gap-16 md:grid-cols-2 max-w-6xl mx-auto items-center">
                {/* Columna 1: Detalles del Evento (Nombre del lugar e información de la dirección) */}
                <div className="order-2 md:order-1 animate-fade-right">
                    <h2 id="ubicacion-title" className="text-5xl md:text-6xl font-serif mb-6 tracking-tight text-coffee-dark">
                        Un Lugar Excepcional
                    </h2>
                    <h3 className="text-2xl font-serif mb-10 text-coffee-light italic">
                        Salón Ambar Rossell Palace
                    </h3>

                    <div className="space-y-6">
                        {/* Tarjeta de Dirección */}
                        <div className="flex items-start gap-5 p-6 rounded-2xl border border-beige-200 bg-beige-50/50 hover:border-coffee-light/30 transition-colors">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-coffee-dark text-beige-100 text-lg shadow-inner">
                                📍
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-coffee-medium mb-1">Dirección</p>
                                <p className="font-medium text-lg">Av. Emiliano Zapata 344</p>
                            </div>
                        </div>

                        {/* Tarjeta de Entrada/Parqueo */}
                        <div className="flex items-start gap-5 p-6 rounded-2xl border border-beige-200 bg-beige-50/50 hover:border-coffee-light/30 transition-colors">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-coffee-dark text-beige-100 text-lg shadow-inner">
                                🅿️
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-coffee-medium mb-1">Entrada y Parqueo</p>
                                <p className="font-medium text-lg">Entrada por Calle Uxmal 344</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Columna 2: Marcador de posición del mapa (Contenedor visual para Google Maps) */}
                <div className="order-1 md:order-2 animate-fade-left">
                    <div
                        role="img"
                        aria-label="Placeholder para mapa de Google"
                        className="h-96 md:h-[500px] w-full bg-beige-100 rounded-[2.5rem] border border-beige-300 flex items-center justify-center text-coffee-medium/50 font-serif italic text-xl shadow-inner relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-coffee-dark opacity-0 group-hover:opacity-5 transition-opacity" />
                        Google Maps
                    </div>
                </div>
            </div>
        </section>
    )
}