import User from "../models/user.js";
import jwt from "jsonwebtoken";

//registerUser
async function registerUser(req, res, next) {
  try {
    const user = await User.create(req.body);
    res.status(201).send(user);
  } catch (err) {
    next(err);
  }
}

//login User
async function loginUser(req, res, next) {
  const password = req.body.password;
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).send({ message: "not a user" });
    }

    if (!user.validatePassword(password)) {
      return res.status(401).send({ message: "Unauthorized" });
    }
    const secret = "travel"
    const token = jwt.sign({ userId: user._id }, secret, {
      expiresIn: "12h",
    });
    res.status(202).send({ token, message: "Login successful" });
  } catch (err) {
    next(err);
  }
}

export default { registerUser, loginUser };
