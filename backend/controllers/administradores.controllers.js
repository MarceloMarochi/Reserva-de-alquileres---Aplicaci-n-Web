import Administradores from "../models/administradores.js"

// Obtener todos los administradores
export const getAdministradores = async (req, res) => {
  try {
    const administradores = await Administradores.findAll()
    res.json(administradores)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Obtener rol de un administrador según su ID de Usuario
export const findOneAdministrador = async (req, res) => {
  try {
    const administradorEncontrado = await Administradores.findOne({
      where: { idUsuario: req.params.id }
    })
    if (administradorEncontrado) {
      return res.json(administradorEncontrado)
    } else {
      res.status(404).json({
        message: "No se encontró el Administrador con el ID seleccionado"
      })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Crear un nuevo administradores
export const createAdministrador = async (req, res) => {
  try {
    const { idUsuario } = req.body
    const nuevoAdministrador = await Administradores.create({ idUsuario })
    res.status(201).json(nuevoAdministrador)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Eliminar un administrador según su ID
export const deleteAdministrador = async (req, res) => {
  try {
    const administradorEliminado = await Administradores.destroy({
      where: { idAdmin: req.params.id }
    })
    if (administradorEliminado) {
      res.status(202).json({ message: "Administrador eliminado correctamente" })
    } else {
      res.status(404).json({
        message: "No se encontró el Administrador con el ID seleccionado"
      })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}