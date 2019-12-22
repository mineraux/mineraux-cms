const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pageSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  fieldList: {
    type: [Schema.Types.ObjectId],
    ref: 'Field',
  }
})

module.exports = mongoose.model('Page', pageSchema)