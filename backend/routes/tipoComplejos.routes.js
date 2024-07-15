import express from 'express'
import { getTipoComplejos, createTipoComplejo, deleteTipoComplejo } from '../controllers/tipoComplejos.controllers.js'

const router = express.Router()

router.get('/tipoComplejos', getTipoComplejos)
router.post('/tipoComplejos', createTipoComplejo)
router.delete('/tipoComplejos/:id', deleteTipoComplejo)

export default router
