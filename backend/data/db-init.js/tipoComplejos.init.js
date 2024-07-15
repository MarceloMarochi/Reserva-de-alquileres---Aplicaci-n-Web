import TipoComplejos from "../../models/tipoComplejos.js"

export async function insertarTipoComplejos(datos)  {
    try {
        await TipoComplejos.bulkCreate(datos)
    } catch (error) {
        console.log('No se pudo cargar la base de datos!')
    }
}
