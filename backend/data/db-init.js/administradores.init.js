import Administradores from "../../models/administradores.js"

export async function insertarAdministradores(datos) {
    try {
        await Administradores.bulkCreate(datos)
    } catch (error) {
        console.log('No se pudo cargar la base de datos! (Administradores)')
    }
}