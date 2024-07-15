import express from 'express'
import { getDetallesAlquileres, createDetalleAlquier, deleteDetalleAlquiler } from '../controllers/detallesAlquileres.controllers.js'

const router = express.Router()

router.get('/detalles', getDetallesAlquileres)
router.post('/detalles', createDetalleAlquier)
router.delete('/detalles/:id', deleteDetalleAlquiler)

export default router

