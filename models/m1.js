const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
  Roll: {
    type: Number,
    reqired: true,
    unique: true,
  },
  Name: {
    type: String,
    reqired: [true, 'Price must be provided'],
  },
  Phone: {
    type: String,
    default: "",
  },
})
module.exports = mongoose.model('Product', productSchema)
