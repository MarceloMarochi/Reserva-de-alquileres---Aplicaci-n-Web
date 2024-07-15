import express from 'express'
import { getAlquileres, createAlquiler, deleteAlquiler, modificarAlquiler } from '../controllers/alquileres.controllers.js'

const router = express.Router()

router.get('/alquileres', getAlquileres)
router.post('/alquileres', createAlquiler)
router.delete('/alquileres/:id', deleteAlquiler)
router.put('/alquileres/:id')

export default router