import { mongoose } from "mongoose";
import mongooseUniqueValidator from "mongoose-Unique-Validator";

const placeSchema = new mongoose.schema({});

const Place = mongoose.model("Place", placeSchema);

export default Place;
//update
