'use server'

/**
 * Los 'Server Actions' son una característica de Next.js que permite ejecutar funciones
 * de forma segura en el servidor. Esto elimina la necesidad de crear rutas de API manuales
 * y reduce la cantidad de Javascript enviado al cliente.
 */

import { z } from 'zod'
import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

/**
 * Esquema de validación para el registro utilizando Zod.
 * Validar en el servidor es CRUCIAL para prevenir ataques o datos corruptos,
 * incluso si el cliente ya validó los datos.
 */
const RegistrationSchema = z.object({
    firstName: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
    lastName: z.string().min(2, "El apellido debe tener al menos 2 caracteres"),
    email: z.string().email("Correo electrónico inválido"),
    phone: z.string().optional(),
})

export type RegistrationData = z.infer<typeof RegistrationSchema>

/**
 * Server Action para registrar una nueva asistente.
 * 
 * Por qué usar Server Actions aquí:
 * 1. Seguridad: La lógica de la base de datos nunca se expone al cliente.
 * 2. Simplicidad: Se puede llamar como si fuera una función local en el formulario.
 * 3. Integración con Next.js: Permite limpiar cachés automáticamente con revalidatePath.
 * 
 * @param data Datos de la asistente recogidos en el formulario.
 * @returns Un objeto con el resultado de la operación (éxito o mensaje de error).
 */
export async function registerAttendee(data: RegistrationData) {
    try {
        // 1. Validar datos en el servidor por seguridad (Defensa en profundidad)
        const validatedData = RegistrationSchema.parse(data)

        // 2. Verificar duplicados para evitar múltiples registros de la misma persona
        const existing = await prisma.registration.findUnique({
            where: { email: validatedData.email }
        })

        if (existing) {
            return { error: "Este correo electrónico ya está registrado." }
        }

        // 3. Persistencia en base de datos PostgreSQL vía Prisma
        const registration = await prisma.registration.create({
            data: {
                ...validatedData,
                status: "PENDING" // Por defecto el estado es pendiente hasta confirmar pago
            }
        })

        // 4. Limpieza de caché para asegurar que la UI muestre datos actualizados
        revalidatePath('/')

        return { success: true, data: registration }

    } catch (error) {
        console.error("Error en registro:", error)

        // Manejo específico de errores de validación de Zod
        if (error instanceof z.ZodError) {
            return { error: "Datos de formulario inválidos." }
        }

        // Error genérico para no exponer detalles técnicos al usuario final
        return { error: "Ocurrió un error al procesar tu registro. Por favor intenta de nuevo." }
    }
}
