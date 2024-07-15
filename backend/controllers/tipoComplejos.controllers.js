import TipoComplejos from '../models/tipoComplejos.js'

// Obtener todos los tipos de complejos
export const getTipoComplejos = async (req, res) => {
    try {
        const tipoComplejos = await TipoComplejos.findAll()
        res.json(tipoComplejos)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Crear un nuevo tipo de complejo
export const createTipoComplejo = async (req, res) => {
    try {
        const { nombre } = req.body
        const nuevoTipoComplejo = await TipoComplejos.create({ nombre })
        res.status(201).json(nuevoTipoComplejo)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Eliminar un tipo de complejo según su ID
export const deleteTipoComplejo = async (req, res) => {
    try {
        const tipoComplejoEliminado = await TipoComplejos.destroy({
            where: {idTipoComplejo: req.params.id}
        })
        if (tipoComplejoEliminado) {
            res.status(202).json({message: 'Tipo de Complejo eliminado correctamente'})
        } else {
            res.status(404).json({message: 'No se encontró el Tipo de Complejo con el ID seleccionado'})
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
