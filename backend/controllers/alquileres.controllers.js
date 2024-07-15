import AsyncQueue from 'sequelize/lib/dialects/mssql/async-queue'
import Alquileres from '../models/alquileres.js'
import { where } from 'sequelize'

// Obtener todos los alquileres
export const getAlquileres = async (req, res) => {
    try {
        const alquileres = await Alquileres.findAll()
        res.json(alquileres)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Crear un nuevo alquiler
export const createAlquiler = async (req, res) => {
    try {
        const { fechaDesde, fechaHasta, idComplejo, idDetalleAlquiler } = req.body
        const nuevoAlquiler = await Alquileres.create({ fechaDesde, fechaHasta, idComplejo, idDetalleAlquiler  })
        res.status(201).json(nuevoAlquiler)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Eliminar un alquiler según su ID
export const deleteAlquiler = async (req, res) => {
    try {
        const alquilerEliminado = await Alquileres.destroy({
            where: {idAlquiler: req.params.id}
        })
        if (alquilerEliminado) {
            res.status(202).json({message: 'Alquiler eliminado correctamente'})
        } else {
            res.status(404).json({message: 'No se encontró el Alquiler con el ID seleccionado'})
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Modificar el Estado de un alquiler existente
export const modificarAlquiler = async (req, res) => {
    try {
        const alquilerModif = await Alquileres.update({
            where: {idAlquiler: req.params.id}
        })

        if (alquilerModif) {
            res.status(202).json({message: 'Alquiler modificado correctamente'})
        } else {
            res.status(404).json({message: 'No se encontró el Alquiler con el ID seleccionado'})
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
