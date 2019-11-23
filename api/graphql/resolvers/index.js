const userListResolver = require('./userList')
const fieldListResolver = require('./fieldList')

const RootResolver = {
  ...userListResolver,
  ...fieldListResolver
}

module.exports = RootResolver