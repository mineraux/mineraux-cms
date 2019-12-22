const DataLoader = require('dataloader')
const Field = require('../../models/field')
const Page = require('../../models/page')

const fieldLoader = new DataLoader(fieldIds => {
  return fields(fieldIds)
})

const pageLoader = new DataLoader(pageIds => {
  return Page.find({ _id: { $in: pageIds } })
})

const fields = async fieldIds => {
  try {
    const fields = await Field.find({ _id: { $in: fieldIds }});

    fields.sort((a, b) => {
      return (
        fieldIds.indexOf(a._id.toString()) - fieldIds.indexOf(b._id.toString())
      );
    });

    return fields.map(field => {
      return transformField(field)
    })
  } catch (err) {
    throw err
  }
}

const field = async fieldId => {
  try {
    const field = await fieldLoader.load(fieldId.toString())
    return field
  } catch (err) {
    throw err
  }
}

const page = async pageId => {
  try {
    const page = await pageLoader.load(pageId.toString())
    return {
      ...page._doc,
      _id: page.id,
      linkedFields: () => fieldLoader.loadMany(page._doc.linkedFields)
    }
  } catch (err) {
    throw err
  }
}

const transformField = field => {
  return {
    ...field._doc,
    _id: field.id,
    type: field.type,
    order: field.order,
    content: field.content,
    linkedPage: page.bind(this, field.linkedPage)
  }
}

const transformPage = page => {
  return {
    ...page._doc,
    _id: page.id,
    title: page.title,
    linkedFields: fields.bind(this, page.linkedFields)
  }
}

exports.transformField = transformField
exports.transformPage = transformPage