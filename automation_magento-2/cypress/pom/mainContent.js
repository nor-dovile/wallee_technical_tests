class MainContent {
  constructor() {
    this.contentTitleId = '#page-title-heading'
  }

  getTitle() {
    return cy.get(this.contentTitleId)
      .find('span')
  }
}

export default new MainContent()
