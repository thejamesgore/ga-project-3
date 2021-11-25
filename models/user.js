import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import mongooseHidden from 'mongoose-hidden'
import mongooseUniqueValidator from 'mongoose-unique-validator'

const user = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
})

user.virtual('createdCountries', {
  ref: 'Country', // References the country model
  localField: '_id', // _id on current user model
  foreignField: 'createdBy', // field to check against id
})

user.pre('save', function (next) {
  this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync())
  next()
})

user.methods.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}

user.plugin(mongooseUniqueValidator)
user.plugin(mongooseHidden({ defaultHidden: { password: true, email: true } }))

const User = mongoose.model('user', user)

export default User
