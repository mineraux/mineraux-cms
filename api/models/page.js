const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pageSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  linkedFields: {
    type: [Schema.Types.ObjectId],
    ref: 'Field',
  }
})

module.exports = mongoose.model('Page', pageSchema)