import jwt from "jsonwebtoken";
import User from "../models/user.js";
const secret = "travel";
import dotenv from "dotenv";
dotenv.config();

//make sure that the user making the request has a valid token
async function secureRoute(req, res, next) {
  try {
    //get the token from the headers
    const authToken = req.headers.authorization;

    //if there is no token or the string doesnt start with Bearer, return anathorised
    if (!authToken || !authToken.startsWith("Bearer")) {
      return res
        .status(401)
        .send({ message: "Not authorized to perform this funciton" });
    }

    //strip the Bearer part of the token out as it doesnt hold any data

    const token = authToken.replace("Bearer ", "");

    console.log("🤖 AUTHTOKEN" + " " + authToken);
    console.log("🤖 STRIPPED TOKEN" + " " + token);

    //try to extract the data on the token using the secret. Also handles errors

    console.log("The secret is ", secret);

    jwt.verify(token, process.env.SECRET, async (err, data) => {
      if (err) {
        return res.status(401).send({ message: "Unauthorized" });
      }

      console.log("RESPONSE FROM JWT IS ", data);

      //find the user by id using the id on the token (set in the user controller)

      const user = await User.findById(data.userId);

      if (!user) {
        return res.status(404).send({ message: "User not found" });
      }

      //object level permissions - we will come back to this later
      req.currentUser = user;

      next();
    });
  } catch (err) {
    console.log(err);
    return res.status(401).send({ message: "Unauthorized user!!" });
  }
}

export default secureRoute;
