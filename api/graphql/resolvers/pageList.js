const Page = require('../../models/page')

module.exports = {

  pageList: async () => {
    try {
      const pageList = await Page.find()
      return pageList.map(page => {
        return {
          ...page._doc,
          _id: page.id,
          title: page.title,
          fieldList: page.fieldList,
        }
      })
    } catch (err) {
      throw err
    }
  },
  createPage: async args => {
    const page = new Page({
      title: args.pageInput.title,
      fieldList: args.pageInput.fieldList,
    })

    let createdPage

    try {
      const result = await page.save()
      createdPage = {
        ...result._doc,
        _id: result._doc._id.toString(),
        title: args.pageInput.title,
        fieldList: args.pageInput.fieldList,
      }

      return createdPage
    } catch (err) {
      throw err
    }
  },
  deletePage: async args => {
    try {
      const page = await Page.findById(args.pageId)
      await Page.deleteOne({
        _id: args.pageId
      })
      return page
    } catch (err) {
      throw err
    }
  }
}