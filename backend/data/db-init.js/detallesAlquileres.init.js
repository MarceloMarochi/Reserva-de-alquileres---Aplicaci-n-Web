import DetallesAlquileres from "../../models/detallesAlquileres.js"

export async function insertarDetallesAlquileres(datos) {
    try {
        await DetallesAlquileres.bulkCreate(datos)
    } catch (error) {
        console.log('No se pudo cargar la base de datos! (DetalesAlquileres)')
    }
}