import { mongoose } from "mongoose";
import mongooseUniqueValidator from "mongoose-Unique-Validator";

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true, maxlength: 300 },
  rating: { type: Number, required: true, min: 1, max: 5 },
});

const placeSchema = new mongoose.schema({
  country: { type: String, required: true },
  city: String,
  yearVisited: Number,
  comments: [commentSchema],
});

placesSchema.plugin(mongooseUniqueValidator);

const Place = mongoose.model("Place", placeSchema);

export default Place;
//update
