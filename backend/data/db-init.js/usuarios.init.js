import Usuarios from "../../models/usuarios.js"

export async function insertarUsuarios(datos) {
    try {
        await Usuarios.bulkCreate(datos)
    } catch (error) {
        console.log('No se pudo cargar la base de datos! (Usuarios)')
    }
}