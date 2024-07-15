import Complejos from "../../models/complejos.js"

export async function insertarComplejos(datos) {
    try {
        await Complejos.bulkCreate(datos)
    } catch (error) {
        console.log('No se pudo cargar la base de datos!')
    }
}
