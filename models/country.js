import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-Unique-Validator";

const commentSchema = new mongoose.Schema(
  {
    text: { type: String, maxlength: 300 },
    rating: { type: Number, min: 1, max: 5 },
  },
  { timestamp: true }
);

const citiesSchema = new mongoose.Schema({
  name: { type: String },
});

const countriesSchema = new mongoose.Schema({
  // userAccount: { type: String, required: true },
  name: { type: String, required: true },
  city: [citiesSchema],
  yearVisited: { type: Number, required: true },
  comments: [commentSchema],
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
  },
});

countriesSchema.plugin(mongooseUniqueValidator);

const Country = mongoose.model("Country", countriesSchema);

export default Country;
