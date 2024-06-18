class Shipping {

  fillUpEmail(email) {
    cy.get('#customer-email').type(email)
  }

  fillUpFirstName() {
    return cy.get('#shipping-new-address-form')
      .find('input[name="firstname"]').type('Dovile')
  }

  fillUpLastName() {
    return cy.get('#shipping-new-address-form')
      .find('input[name="lastname"]').type('Espinoza')
  }

  fillUpStreetAddress() {
    return cy.get('#shipping-new-address-form')
      .find('input[name="street[0]"]').type('somewhere in Vilnius')
  }

  selectCountry() {
    return cy.get('#shipping-new-address-form')
      .find('select[name="country_id"]').select('Lithuania')
  }

  fillUpProvidence() {
    return cy.get('#shipping-new-address-form')
      .find('select[name="region_id"]').select('Vilniaus Apskritis')
  }
  
  fillUpCity() {
    return cy.get('#shipping-new-address-form')
      .find('input[name="city"]').type('Vilnius')
  }

  fillUpPostalCode() {
    return cy.get('#shipping-new-address-form')
      .find('input[name="postcode"]').type('12345')
  }

  fillUpPhoneNumber() {
    return cy.get('#shipping-new-address-form')
      .find('input[name="telephone"]').type('+37011111111')
  }

  selectShippingMethod() {
    return cy.get('#checkout-shipping-method-load')
      .children('table')
      .children('tbody')
      .children('tr')
      .first()
      .click()
  }

  checkRequiredFieldErrorOnEmail() {
    return cy.get('#customer-email-error')
      .invoke('text')
      .then((text) => {
        expect(text).to.match(/This is a required field./)
      })
  }

  checkRequiredFieldErrorOnFirstName () {
    return cy.get('div._error[name="shippingAddress.firstname"]')
      .should('be.visible')
      .contains('This is a required field.')
  }

  checkRequiredFieldErrorOnLastName () {
    return cy.get('div._error[name="shippingAddress.lastname"]')
      .should('be.visible')
      .contains('This is a required field.')
  }

  checkRequiredFieldErrorOnProvidence () {
    return cy.get('div._error[name="shippingAddress.region_id"]')
      .should('be.visible')
      .contains('This is a required field.')
  }

  checkRequiredFieldErrorOnAdress () {
    return cy.get('div._error[name="shippingAddress.street.0"]')
      .should('be.visible')
      .contains('This is a required field.')
  }
  

  checkRequiredFieldErrorOnCity () {
    return cy.get('div._error[name="shippingAddress.city"]')
      .should('be.visible')
      .contains('This is a required field.')
  }

  checkRequiredFieldErrorOnPostcode () {
    return cy.get('div._error[name="shippingAddress.postcode"]')
      .should('be.visible')
      .contains('This is a required field.')
  }

  checkRequiredFieldErrorOnPhone () {
    return cy.get('div._error[name="shippingAddress.telephone"]')
      .should('be.visible')
      .contains('This is a required field.')
  }

  checkShippingMethodErrorIsVisible() {
    return cy.get('#checkout-step-shipping_method')
      .contains('The shipping method is missing. Select the shipping method and try again')
      .should('be.visible')
  }

  clickOnNext() {
    return cy.get('#shipping-method-buttons-container')
      .children('.primary')
      .children('button')
      .click()
  }
}

export default new Shipping()
