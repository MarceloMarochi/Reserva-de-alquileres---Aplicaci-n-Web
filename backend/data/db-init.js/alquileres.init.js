import Alquileres from "../../models/alquileres.js"

export async function insertarAlquileres(datos) {
    try {
        await Alquileres.bulkCreate(datos)
    } catch (error) {
        console.log('No se pudo cargar la base de datos! (Alquileres)')
    }
}