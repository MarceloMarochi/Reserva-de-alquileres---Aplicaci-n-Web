import express from 'express'
import { getComplejos, createComplejo, deleteComplejo, findOneComplejo, modificarDispComplejo } from '../controllers/complejos.controllers.js'

const router = express.Router()

router.get('/complejos', getComplejos)
router.get('/complejos/:id', findOneComplejo)
router.post('/complejos', createComplejo)
router.delete('/complejos/:id', deleteComplejo)
router.put('/complejos/:id', modificarDispComplejo)

export default router

