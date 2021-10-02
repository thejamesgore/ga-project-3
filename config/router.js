import express from 'express'
import countriesController from '../controllers/countriesController.js'

// Router is reponsible for which routes are answered by which controllers
const Router = express.Router()

// base URL of this is determined by api
// here we handle everything that comes after that base
Router.route('/countries')
  .get(countriesController.getAllCountries)
  .post(countriesController.createCountry)

Router.route('/countries/:id')
  .get(countriesController.getCountry)
  .delete(countriesController.deleteCountry)

export default Router

//update
