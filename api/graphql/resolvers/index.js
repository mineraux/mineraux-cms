const userListResolver = require('./userList')
const fieldsResolver = require('./fields')
const pagesResolver = require('./pages')

const RootResolver = {
  ...userListResolver,
  ...fieldsResolver,
  ...pagesResolver
}

module.exports = RootResolver