import Ubicaciones from "../../models/ubicaciones.js"

export async function insertarUbicaciones(datos) {
    try {
        await Ubicaciones.bulkCreate(datos)
    } catch (error) {
        console.log('No se pudo cargar la base de datos!')
    }
}