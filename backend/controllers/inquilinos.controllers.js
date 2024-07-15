import Inquilinos from "../models/inquilinos.js"

// Obtener todos los inquilinos
export const getInquilinos = async (req, res) => {
  try {
    const inquilinos = await Inquilinos.findAll()
    res.json(inquilinos)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Obtener rol del inquilino segun el ID del Usuario
export const findOneInquilino = async (req, res) => {
  try {
    const inquilinoEncontrado = await Inquilinos.findOne({
      where: { idUsuario: req.params.id }
    })
    if (inquilinoEncontrado) {
      return res.json(inquilinoEncontrado)
    } else {
      res.status(404).json({
        message: "No se encontró el Inquilino con el ID seleccionado"
      })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Crear un nuevo inquilino
export const createInquilino = async (req, res) => {
  try {
    const { idUsuario } = req.body
    const nuevoInquilino = await Inquilinos.create({ idUsuario })
    res.status(201).json(nuevoInquilino)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Eliminar un inquilino según su ID
export const deleteInquilino = async (req, res) => {
  try {
    const inquilinoEliminado = await Inquilinos.destroy({
      where: { idInquilino: req.params.id }
    })
    if (inquilinoEliminado) {
      res.status(202).json({ message: "Inquilino eliminado correctamente" })
    } else {
      res.status(404).json({
        message: "No se encontró el Inquilino con el ID seleccionado"
      })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
