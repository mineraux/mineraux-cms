const User = require('../../models/user')
const Field = require('../../models/field')

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
  userList: async () => {
    try {
      const userList = await User.find()
      
      return userList.map(user => {
        return {
          ...user._doc,
          _id: user.id,
          name: user.name,
        }
      })
    } catch (err) {
      throw err
    }
  },
  singleUser: async args => {
    try {
      const user = await User.findById(args.userId)
      return user
    } catch (err) {
      throw err
    }
  },
  createUser: async args => {
    const user = new User({
      name: args.userInput.name,
    })

    let createdUser

    try {
      const result = await user.save()
      createdUser = {
        ...result._doc,
        _id: result._doc._id.toString(),
        name: args.userInput.name
      }

      return createdUser
    } catch (err) {
      throw err
    }
  },
  deleteUser: async args => {
    try {
      const user = await User.findById(args.userId)
      await User.deleteOne({
        _id: args.userId
      })
      return user
    } catch (err) {
      throw err
    }
  },
}