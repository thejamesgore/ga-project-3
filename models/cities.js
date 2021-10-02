import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-Unique-Validator";

const citiesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  country: [{ type: mongoose.Types.ObjectId, ref: Country }],
});

citiesSchema.plugin(mongooseUniqueValidator);

const Cities = mongoose.model("Cities", citiesSchema);

export default Cities;
