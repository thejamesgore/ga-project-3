import express from "express";
import countriesController from "../controllers/countriesController.js";
import commentsController from "../controllers/commentsController.js";
import citiesController from "../controllers/citiesController.js";

// Router is reponsible for which routes are answered by which controllers
const Router = express.Router();

// base URL of this is determined by api
// here we handle everything that comes after that base
Router.route("/countries")
  .get(countriesController.getAllCountries)
  .post(countriesController.createCountry);

Router.route("/countries/:id")
  .get(countriesController.getCountry)
  .delete(countriesController.deleteCountry)
  .put(countriesController.updateCountry);

Router.route("/countries/:id/comments").post(commentsController.createComment);

Router.route("/countries/:id/comments/:commentId")
  .put(commentsController.updateComment)
  .delete(commentsController.deleteComment);
  
Router.route("/cities").post(citiesController.createCity)

Router.route('/cities/:id').delete(citiesController.deleteCity)
  
  
export default Router;

//update
