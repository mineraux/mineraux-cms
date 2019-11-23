const Field = require('../../models/field')
const User = require('../../models/user')

const user = async userId => {
  try {
    const user = await User.findById(userId)
    return {
      ...user._doc,
      _id: user.id,
      name: user.name
    }
  } catch (err) {
    throw err
  }
}

const field = async fieldId => {
  try {
    const field = await Field.findById(fieldId)
    return {
      ...field._doc,
      _id: field.id,
      type: field.type,
      order: field.order
    }
  } catch (err) {
    throw err
  }
}
module.exports = {

  fieldList: async () => {
    try {
      const fieldList = await Field.find()
      return fieldList.map(field => {
        return {
          ...field._doc,
          _id: field.id,
          type: field.type,
          order: field.order
        }
      })
    } catch (err) {
      throw err
    }
  },
  createField: async args => {
    const field = new Field({
      type: args.fieldInput.type,
      order: args.fieldInput.order
    })

    let createdField

    try {
      const result = await field.save()
      createdField = {
        ...result._doc,
        _id: result._doc._id.toString(),
        type: args.fieldInput.type,
        order: args.fieldInput.order
      }

      return createdField
    } catch (err) {
      throw err
    }
  },
  deleteField: async args => {
    try {
      const field = await Field.findById(args.fieldId)
      await Field.deleteOne({
        _id: args.fieldId
      })
      return field
    } catch (err) {
      throw err
    }
  }
}