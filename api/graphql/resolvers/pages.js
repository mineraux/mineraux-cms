const Page = require('../../models/page')
const { transformPage } = require('./utils');


module.exports = {
  pages: async () => {
    try {
      const pages = await Page.find()
      return pages.map(field => {
        return transformPage(field)
      })
    } catch (err) {
      throw err
    }
  },
  createPage: async (args) => {
    const page = new Page({
      title: args.pageInput.title
    })

    let createdPage;

    try {
      const result = await page.save()
      createdPage = transformPage(result)

      return createdPage

    } catch (err) {
      throw err
    }
  }
}