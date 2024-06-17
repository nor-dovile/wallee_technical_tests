const { defineConfig } = require("cypress")

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return config
    },
    baseUrl: 'https://magento-2.showcase-wallee.com/',
    env: {
      baseUrl: 'https://magento-2.showcase-wallee.com'
    },
    defaultCommandTimeout: 30000,
    requestTimeout: 20000,
  },
})
