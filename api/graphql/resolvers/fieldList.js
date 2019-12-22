const Field = require('../../models/field')
const Page = require('../../models/page')

const page = async pageID => {
  try {
    const page = await Page.findById(pageID)
    return {
      ...page._doc,
      _id: page.id,
      fieldList: field.bind(this, page.fieldList)
    }
  } catch (err) {
    throw err
  }
}

const field = async fieldID => {
  try {
    const field = await Page.findById(fieldID)
    return {
      ...field._doc,
      _id: field.id,
      pageID: page.bind(this, field.pageID)
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
          order: field.order,
          content: field.content,
          pageID: field.pageID
        }
      })
    } catch (err) {
      throw err
    }
  },
  createField: async args => {
    const field = new Field({
      type: args.fieldInput.type,
      order: args.fieldInput.order,
      content: args.fieldInput.content,
      pageID: args.fieldInput.pageID
    })

    let createdField

    try {
      const result = await field.save()
      createdField = {
        ...result._doc,
        _id: result._doc._id.toString(),
        type: args.fieldInput.type,
        order: args.fieldInput.order,
        content: args.fieldInput.content,
        pageID: page.bind(this, result._doc.fieldList)
      }

      const linkedPage = await Page.findById(args.fieldInput.pageID)

      linkedPage.fieldList = [...linkedPage.fieldList, field]
      await linkedPage.save()

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