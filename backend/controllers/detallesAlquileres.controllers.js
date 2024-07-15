import DetallesAlquileres from '../models/detallesAlquileres.js'

// Obtener todos los detalles de alquileres
export const getDetallesAlquileres = async (req, res) => {
    try {
        const detalles = await DetallesAlquileres.findAll()
        res.json(detalles)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Crear un nuevo detalle de alquiler
export const createDetalleAlquier = async (req, res) => {
    try {
        console.log('Entra al controler')
        const { idInquilino, precioTotal, cantidadNoches } = req.body
        const nuevoDetalle = await DetallesAlquileres.create({ idInquilino, precioTotal, cantidadNoches })
        res.status(201).json(nuevoDetalle)
    } catch (error) {
        res.status(501).json({ error: error.message })
    }
}

// Eliminar un detalle de alquiler según su ID
export const deleteDetalleAlquiler = async (req, res) => {
    try {
        const detalleEliminar = await DetallesAlquileres.destroy({
            where: {idDetalleAlquiler: req.params.id}
        })
        if (detalleEliminar) {
            res.status(202).json({message: 'Detalle de Alquiler eliminado correctamente'})
        } else {
            res.status(404).json({message: 'No se encontró el Detalle de Alquiler con el ID seleccionado'})
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}