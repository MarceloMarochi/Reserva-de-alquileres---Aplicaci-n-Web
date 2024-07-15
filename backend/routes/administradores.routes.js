import express from 'express'
import { getAdministradores, createAdministrador, deleteAdministrador, findOneAdministrador} from '../controllers/administradores.controllers.js'

const router = express.Router()

router.get('/administradores', getAdministradores)
router.get('/administradores/:id', findOneAdministrador)
router.post('/administradores', createAdministrador)
router.delete('/administradores/:id', deleteAdministrador)

export default router