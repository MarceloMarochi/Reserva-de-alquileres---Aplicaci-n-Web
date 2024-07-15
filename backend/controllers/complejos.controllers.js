import Complejos from '../models/complejos.js'

// Obtener todos los complejos
export const getComplejos = async (req, res) => {
    try {
        const complejos = await Complejos.findAll()
        res.json(complejos)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Crear un nuevo complejo
export const createComplejo = async (req, res) => {
    try {
        const { nombre, estadoAlquiler, precioPorNoche, capacidad, idTipoComplejo, idUbicacion } = req.body
        const nuevoComplejo = await Complejos.create({ nombre, estadoAlquiler, precioPorNoche, capacidad, idTipoComplejo, idUbicacion })
        res.status(201).json(nuevoComplejo)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Eliminar un complejo según su ID
export const deleteComplejo = async (req, res) => {
    try {
        const complejoEliminado = await Complejos.destroy({
            where: { idComplejo: req.params.id }
        })
        if (complejoEliminado) {
            res.status(202).json({ message: 'Complejo eliminado correctamente' })
        } else {
            res.status(404).json({ message: 'No se encontró el Complejo con el ID seleccionado' })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Obtener nombre del Complejo según el ID
export const findOneComplejo = async (req, res) => {
    try {
      const complejoEncontrado = await Complejos.findOne({
        where: { idComplejo: req.params.id }
      })
      if (complejoEncontrado) {
        return res.json(complejoEncontrado)
      } else {
        res.status(404).json({
          message: "No se encontró el Complejo con el ID seleccionado"
        })
      }
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

// Modificar el Estado de un complejo
export const modificarDispComplejo = async (req, res) => {
  try {
      const complejoModif = await Complejos.update({
          where: {idComplejo: req.params.id}
      })

      if (complejoModif) {
          res.status(202).json({message: 'Complejo modificado correctamente'})
      } else {
          res.status(404).json({message: 'No se encontró el Complejo con el ID seleccionado'})
      }
  } catch (error) {
      res.status(500).json({ error: error.message })
  }
}