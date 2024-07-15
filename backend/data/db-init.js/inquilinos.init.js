import Inquilinos from "../../models/inquilinos.js"

export async function insertarInquilinos(datos) {
    try {
        await Inquilinos.bulkCreate(datos)
    } catch (error) {
        console.log('No se pudo cargar la base de datos! (Inquilinos)')
    }
}