const Field = require('../../models/field')
const Page = require('../../models/page')
const { transformField } = require('./utils');


module.exports = {
  fields: async () => {
    try {
      const fields = await Field.find()
      return fields.map(field => {
        return transformField(field)
      })
    } catch (err) {
      throw err
    }
  },
  createField: async (args) => {
    const field = new Field({
      type: args.fieldInput.type,
      order: args.fieldInput.order,
      value: args.fieldInput.value,
      linkedPage: args.fieldInput.linkedPageId
    })

    let createdField;
    try {
      const result = await field.save()
      createdField = transformField(result)
      const linkedPage = await Page.findById(args.fieldInput.linkedPageId)

      if (!linkedPage) {
        throw new Error('Linked page not found')
      }

      linkedPage.linkedFields.push(field)
      await linkedPage.save()

      return createdField

    } catch (err) {
      throw err
    }
  }
}