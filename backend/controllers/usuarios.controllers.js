import Usuarios from '../models/usuarios.js'

// Obtener todos los usuarios
export const getUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuarios.findAll()
        res.status(201).json(usuarios)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Crear un nuevo usuario
export const createUsuario = async (req, res) => {
    try {
        const { nombreUsuario, contrasenia, correo, nroTelefono } = req.body
        const nuevoUsuario = await Usuarios.create({ nombreUsuario, contrasenia, correo, nroTelefono })
        res.status(201).json(nuevoUsuario)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


// Eliminar un usuarios según su ID
export const deleteUsuario = async (req, res) => {
    try {
        const usuarioEliminado = await Usuarios.destroy({
            where: { idUsuario: req.params.id }
        })
        if (usuarioEliminado) {
            res.status(200).json({ message: 'Usuario eliminado correctamente' })
        } else {
            res.status(404).json({ message: 'No se encontró el Usuario con el ID seleccionado' })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Encontrar UN usuario por nombre y contraseña
export const findUsuario = async (req, res) => {
    try {
        const usuarioEncontrado = await Usuarios.findOne({
            where: {nombreUsuario: req.params.nombre}
        })
        if (usuarioEncontrado) {
            res.json(usuarioEncontrado)
        } else {
            res.status(404).json({ message: 'No se encontró el Usuario con el nombre ingresado' })
        }
    } catch (error) {
        res.status(500).json({error: error.message})
        
    }
} 