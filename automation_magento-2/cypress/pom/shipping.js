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

  clickOnNext() {
    return cy.get('#shipping-method-buttons-container')
      .children('.primary')
      .children('button')
      .click()
  }
}

export default new Shipping()
