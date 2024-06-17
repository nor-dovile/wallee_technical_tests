class Account {

  fillUpPassword(password) {
    cy.get('#password')
      .type(password)
  }

  fillUpPasswordConfirmation(password) {
    return cy.get('#password-confirmation')
      .type(password)
  }

  clickOnCreateAccount() {
    return cy.get('#form-validate')
      .contains('Create an Account')
      .click()
  }
}

export default new Account()
