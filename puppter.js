const puppeteer = require('puppeteer-extra')
puppeteer.use(require('puppeteer-extra-plugin-anonymize-ua')())
puppeteer.use(
  require('puppeteer-extra-plugin-font-size')({ defaultFontSize: 18 })
)
;(async () => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  await page.goto('http://example.com', { waitUntil: 'domcontentloaded' })
  await browser.close()
})()