// src/app/LocationSection.tsx
'use client'
import React from 'react'

export default function LocationSection(): JSX.Element {
    return (
        // CAMBIO: Se pinta con el fondo CLARO para contrastar con la sección anterior
        <section className="bg-[var(--color-fondo)] py-20 px-4 text-[var(--color-texto)]">
            <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
                {/* Columna 1: Detalles del Evento */}
                <div className="order-2 md:order-1">
                    <h2 id="ubicacion-title" className="text-4xl md:text-5xl font-serif mb-4 text-[var(--color-texto)]">
                        Un Lugar Excepcional
                    </h2>
                    <h3 className="text-2xl font-serif mb-8 text-[var(--color-acento-dorado)]">
                        Salón Ambar Rossell Palace
                    </h3>

                    <div className="space-y-4">
                        <div className="flex items-start gap-4 p-4 rounded-lg border border-[var(--color-texto)]/20">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--color-acento-dorado)]/20 text-[var(--color-acento-dorado)] text-lg">
                                📍
                            </div>
                            <div>
                                <p className="text-sm text-[var(--color-texto)]/70">Dirección</p>
                                <p className="font-medium">Av. Emiliano Zapata 344</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 rounded-lg border border-[var(--color-texto)]/20">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--color-acento-dorado)]/20 text-[var(--color-acento-dorado)] text-lg">
                                🅿️
                            </div>
                            <div>
                                <p className="text-sm text-[var(--color-texto)]/70">Entrada y Parqueo</p>
                                <p className="font-medium">Entrada por Calle Uxmal 344</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Columna 2: Mapa (placeholder con fondo oscuro sutil) */}
                <div className="order-1 md:order-2 mt-8 md:mt-0">
                    <div
                        role="img"
                        aria-label="Placeholder para mapa de Google"
                        className="h-96 md:h-full w-full bg-[var(--color-marron-suave)]/30 rounded-lg border border-[var(--color-acento-dorado)]/30 flex items-center justify-center text-[var(--color-texto)]/70"
                    >
                        Contenedor de mapa (Google Maps) — placeholder
                    </div>
                </div>
            </div>
        </section>
    )
}