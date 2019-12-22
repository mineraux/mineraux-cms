const mongoose = require('mongoose')
const Schema = mongoose.Schema

const fieldSchema = new Schema({
  type: {
    type: String,
    required: true
  },
  linkedPage: {
    type: Schema.Types.ObjectId,
    ref: 'Page',
  }
})

module.exports = mongoose.model('Field', fieldSchema)