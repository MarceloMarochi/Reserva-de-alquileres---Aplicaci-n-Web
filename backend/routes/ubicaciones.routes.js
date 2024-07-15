import express from 'express'
import { getUbicaciones, createUbicacion,deleteUbicacion } from '../controllers/ubicaciones.controllers.js'

const router = express.Router()

router.get('/ubicaciones', getUbicaciones)
router.post('/ubicaciones', createUbicacion)
router.delete('/ubicaciones/:id', deleteUbicacion)

export default router
