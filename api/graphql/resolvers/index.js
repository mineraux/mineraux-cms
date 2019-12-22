const userListResolver = require('./userList')
const fieldListResolver = require('./fieldList')
const pageListResolver = require('./pageList')

const RootResolver = {
  ...userListResolver,
  ...fieldListResolver,
  ...pageListResolver
}

module.exports = RootResolver