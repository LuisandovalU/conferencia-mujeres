'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { registerAttendee, type RegistrationData } from '@/app/actions/register'
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react'

/**
 * Esquema de validación para el formulario (debe coincidir con el del servidor).
 */
const schema = z.object({
    firstName: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
    lastName: z.string().min(2, "El apellido debe tener al menos 2 caracteres"),
    email: z.string().email("Correo electrónico inválido"),
    phone: z.string().optional(),
})

/**
 * Componente RegistrationForm: Maneja la inscripción de usuarias.
 * 
 * Tecnologías integradas:
 * - React Hook Form: Gestión eficiente de estados de formulario sin re-renders innecesarios.
 * - Zod: Validación de esquemas robusta y compartida con el servidor.
 * - Sonner/Radix: (A través de estilos personalizados) para feedback visual.
 * 
 * @returns {JSX.Element} Un formulario interactivo con estados de carga y éxito.
 */
export function RegistrationForm() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [errorMessage, setErrorMessage] = useState('')

    const { register, handleSubmit, formState: { errors }, reset } = useForm<RegistrationData>({
        resolver: zodResolver(schema)
    })

    const onSubmit = async (data: RegistrationData) => {
        setStatus('loading')
        try {
            const result = await registerAttendee(data)
            if (result.success) {
                setStatus('success')
                reset()
            } else {
                setStatus('error')
                setErrorMessage(result.error || 'Ocurrió un error inesperado')
            }
        } catch (e) {
            setStatus('error')
            setErrorMessage('Error de conexión con el servidor')
        }
    }

    /* Estado de Éxito: Se muestra después de un registro satisfactorio */
    if (status === 'success') {
        return (
            <div className="text-center p-8 space-y-4 animate-fade-in bg-white rounded-3xl border border-beige-200">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
                <h3 className="font-serif text-2xl text-coffee-dark">¡Registro Exitoso!</h3>
                <p className="text-coffee-dark/60 font-light">
                    Tu lugar ha sido reservado. Te hemos enviado un correo de confirmación con los detalles del evento.
                    <br /><br />
                    ¡Nos vemos pronto!
                </p>
                <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-coffee-light font-bold text-sm uppercase tracking-widest hover:underline"
                >
                    Registrar a otra persona
                </button>
            </div>
        )
    }

    /* Formulario Principal */
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
                {/* Campo: Nombre */}
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-coffee-medium ml-1">Nombre</label>
                    <input
                        {...register('firstName')}
                        placeholder="Ana"
                        className={`w-full bg-beige-50/50 border ${errors.firstName ? 'border-red-400' : 'border-beige-200'} rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-coffee-light/20 transition-all text-coffee-dark placeholder:text-coffee-light/30`}
                    />
                    {errors.firstName && <p className="text-[10px] text-red-500 ml-1">{errors.firstName.message}</p>}
                </div>
                {/* Campo: Apellido */}
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-coffee-medium ml-1">Apellido</label>
                    <input
                        {...register('lastName')}
                        placeholder="Morales"
                        className={`w-full bg-beige-50/50 border ${errors.lastName ? 'border-red-400' : 'border-beige-200'} rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-coffee-light/20 transition-all text-coffee-dark placeholder:text-coffee-light/30`}
                    />
                    {errors.lastName && <p className="text-[10px] text-red-500 ml-1">{errors.lastName.message}</p>}
                </div>
            </div>

            {/* Campo: Correo Electrónico */}
            <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-coffee-medium ml-1">Correo Electrónico</label>
                <input
                    {...register('email')}
                    type="email"
                    placeholder="ana@ejemplo.com"
                    className={`w-full bg-beige-50/50 border ${errors.email ? 'border-red-400' : 'border-beige-200'} rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-coffee-light/20 transition-all text-coffee-dark placeholder:text-coffee-light/30`}
                />
                {errors.email && <p className="text-[10px] text-red-500 ml-1">{errors.email.message}</p>}
            </div>

            {/* Campo: Teléfono */}
            <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-coffee-medium ml-1">Teléfono (Opcional)</label>
                <input
                    {...register('phone')}
                    placeholder="+502 0000 0000"
                    className="w-full bg-beige-50/50 border border-beige-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-coffee-light/20 transition-all text-coffee-dark placeholder:text-coffee-light/30"
                />
            </div>

            {/* Alerta de Error: Se muestra si el servidor devuelve un error */}
            {status === 'error' && (
                <div className="flex items-center gap-2 p-3 bg-red-50 text-red-600 rounded-lg text-sm border border-red-100 animate-shake">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errorMessage}</span>
                </div>
            )}

            {/* Botón de Envío */}
            <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-coffee-dark text-beige-100 py-4 rounded-xl font-bold tracking-wide hover:bg-coffee-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all flex justify-center items-center gap-2 shadow-lg shadow-coffee-dark/10"
            >
                {status === 'loading' ? (
                    <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        PROCESANDO...
                    </>
                ) : (
                    'FINALIZAR REGISTRO'
                )}
            </button>
        </form>
    )
}
