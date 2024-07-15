import Ubicaciones from '../models/ubicaciones.js'

// Obtener todas las ubicaciones
export const getUbicaciones = async (req, res) => {
    try {
        const ubicaciones = await Ubicaciones.findAll()
        res.json(ubicaciones)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Crear una nueva ubicación
export const createUbicacion = async (req, res) => {
    try {
        const { provincia, ciudad, barrio, altura } = req.body
        const nuevaUbicacion = await Ubicaciones.create({ provincia, ciudad, barrio, altura })
        res.status(201).json(nuevaUbicacion)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Eliminar una ubicación según su ID
export const deleteUbicacion = async (req, res) => {
    try {
        const ubicacionEliminada = await Ubicaciones.destroy({
            where: {idUbicacion: req.params.id}
        })
        if (ubicacionEliminada) {
            res.status(202).json({message: 'Ubicación eliminada correctamente'})
        } else {
            res.status(404).json({message: 'No se encontró la Ubicación con el ID seleccionado'})
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
