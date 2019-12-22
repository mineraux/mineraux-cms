const mongoose = require('mongoose')
const Schema = mongoose.Schema

const fieldSchema = new Schema({
  pageID: {
    type: Schema.Types.ObjectId,
    ref: 'Page',
  },
  type: {
    type: String,
    required: true
  },
  order: {
    type: Number,
    required: true
  },
  content: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Field', fieldSchema)