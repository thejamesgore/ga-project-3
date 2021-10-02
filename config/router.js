import express from 'express'
import { getAllPlaces } from '../controllers/placesController.js'

// Router is reponsible for which routes are answered by which controllers
const router = express.Router()

// base URL of this is determined by api
// here we handle everything that comes after that base
router.route('/places').get(getAllPlaces)

export default router

//update