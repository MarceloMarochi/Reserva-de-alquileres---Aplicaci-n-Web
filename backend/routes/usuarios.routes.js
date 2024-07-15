import express from 'express'
import { getUsuarios, createUsuario, deleteUsuario, findUsuario } from '../controllers/usuarios.controllers.js'

const router = express.Router()

router.get('/usuarios', getUsuarios)
router.post('/usuarios', createUsuario)
router.delete('/usuarios/:id', deleteUsuario)
router.get('/usuarios/:nombre', findUsuario)

export default router