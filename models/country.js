import mongoose  from "mongoose";
import mongooseUniqueValidator from "mongoose-Unique-Validator";

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true, maxlength: 300 },
  rating: { type: Number, required: true, min: 1, max: 5 },
},
  { timestamp: true },
);

const countriesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: {type: String, required: true},
  yearVisited: {type: Number, required: true},
  comments: [commentSchema],
});

countriesSchema.plugin(mongooseUniqueValidator);

const Country = mongoose.model("Country", countriesSchema);

export default Country;
//update
