import mongoose from 'mongoose'
import mongooseUniqueValidator from 'mongoose-Unique-Validator'

const commentSchema = new mongoose.Schema(
  {
    text: { type: String, required: true, maxlength: 300 },
    rating: { type: Number, required: true, min: 1, max: 5 },
  },
  { timestamp: true }
)

const citiesSchema = new mongoose.Schema({
  name: { type: String, required: true },
})

const countriesSchema = new mongoose.Schema({
  // userAccount: { type: String, required: true },
  name: { type: String, required: true },
  city: [citiesSchema],
  yearVisited: { type: Number, required: true },
  comments: [commentSchema],
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'user',
    required: true,
  },
})

countriesSchema.plugin(mongooseUniqueValidator)

const Country = mongoose.model('Country', countriesSchema)

export default Country
