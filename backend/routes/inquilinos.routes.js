import express from 'express'
import { getInquilinos, createInquilino, deleteInquilino, findOneInquilino } from '../controllers/inquilinos.controllers.js'

const router = express.Router()

router.get('/inquilinos', getInquilinos)
router.get('/inquilinos/:id', findOneInquilino)
router.post('/inquilinos', createInquilino)
router.delete('/inquilinos/:id', deleteInquilino)

export default router