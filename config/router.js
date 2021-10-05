import express from "express";
import countriesController from "../controllers/countriesController.js";
import commentsController from "../controllers/commentsController.js";
import citiesController from "../controllers/citiesController.js";
import userController from '../controllers/userController.js'
import secureRoute from "../middleWare/secureRoute.js";

// Router is reponsible for which routes are answered by which controllers
const Router = express.Router();

// base URL of this is determined by api
// here we handle everything that comes after that base
Router.route("/countries")
  .get(countriesController.getAllCountries)
  .post(secureRoute, countriesController.createCountry);

Router.route("/countries/:id")
  .get(countriesController.getCountry)
  .delete(secureRoute,countriesController.deleteCountry)
  .put(secureRoute,countriesController.updateCountry);

Router.route("/countries/:id/comments").post(secureRoute, commentsController.createComment);

Router.route("/countries/:id/comments/:commentId")
  .put(secureRoute, commentsController.updateComment)
  .delete(secureRoute, commentsController.deleteComment);
  
Router.route("/cities").post(secureRoute, citiesController.createCity)
Router.route('/cities/:id').delete(secureRoute, citiesController.deleteCity)

Router.route("/register").post(userController.registerUser)
Router.route("/login").post(userController.loginUser)
  
  
export default Router;
//update
