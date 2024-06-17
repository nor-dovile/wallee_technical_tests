class Messages {
  constructor() {
    this.messagesClass = '.messages'
  }

  getMessageText() {
    return cy.get(this.messagesClass)
      .children('.message-success')
      .should('be.visible')
      .children()
      .first()
      .invoke('text')
  }
}

export default new Messages()
