const { Schema, model } = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const schema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minLength: 5,
  },
  phone: {
    type: String,
    minLength: 5,
  },
  street: {
    type: String,
    required: true,
    minLength: 5,
  },
  city: {
    type: String,
    required: true,
    minLength: 3,
  },
})

schema.plugin(uniqueValidator)
module.exports = model('Person', schema)
