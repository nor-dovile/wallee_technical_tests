import productCard from '../pom/productCard'

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})

describe('The user should be able to add products to their cart', () => {
  beforeEach(() => {
    cy.visit('/women.html')
  })

  it('User can add items to the cart from the Woman section and cart is updated correctly', () => {

    /* add first product */

    // select size S
    cy.get('.product-items')
      .children('li')
      .eq(0)
      .children('.product-item-info')
      .children('.product-item-details') /* here its where hover is triggered */
      .children('[class^="swatch-opt-"]') 
      .children('.size') 
      .contains('S') 
      .click()

    // select color
    cy.get('.product-items')
      .children('li')
      .eq(0)
      .children('.product-item-info')
      .children('.product-item-details') /* here its where hover is triggered */
      .children('[class^="swatch-opt-"]') 
      .children('.color') 
      .find('div[aria-label="Purple"]')
      .click()


    // Hover on product
    cy.get('.product-items')
      .children('li')
      .eq(0)
      .children('.product-item-info')
      .children('.product-item-details') /* here its where hover is triggered */
      .trigger('mouseover')
      .trigger('mouseenter')
      .trigger('mousemove')

    cy.wait(500);

    // click in add to cart
    cy.get('.product-items')
      .children('li')
      .eq(0)
      .children('.product-item-info')
      .children('.product-item-details')
      .children('.product-item-inner')
      .children('.product-item-actions')
      .children('.actions-primary')
      .children('form')
      .children('button')
      .should('have.css', 'visibility', 'visible') 
      .should('be.visible')
      .click({ force: true })

    // check that success message is displayed
    cy.get('.messages')
      .children('.message-success')
      .should('be.visible')
      .children()
      .first()
      .invoke('text')
      .then((text) => {
        expect(text).to.match(/You added .* to your /)
      })

    // check that the number of items in the cart is correct for the first item
    cy.get('.minicart-wrapper')
      .children('.showcart')
      .children('.counter')
      .children('.counter-number')
      .invoke('text')
      .then((text) => {
        expect(text).to.match(/1/)
      })

    /* add second product */

    // select size S
    cy.get('.product-items')
      .children('li')
      .eq(1)
      .children('.product-item-info')
      .children('.product-item-details') /* here its where hover is triggered */
      .children('[class^="swatch-opt-"]') 
      .children('.size') 
      .contains('S') 
      .click()

    // select color
    cy.get('.product-items')
      .children('li')
      .eq(1)
      .children('.product-item-info')
      .children('.product-item-details') /* here its where hover is triggered */
      .children('[class^="swatch-opt-"]') 
      .children('.color') 
      .find('div[aria-label="Purple"]')
      .click()


    // Hover on product
    cy.get('.product-items')
      .children('li')
      .eq(1)
      .children('.product-item-info')
      .children('.product-item-details') /* here its where hover is triggered */
      .trigger('mouseover')
      .trigger('mouseenter')
      .trigger('mousemove')

    cy.wait(500);

    // click in add to cart
    cy.get('.product-items')
      .children('li')
      .eq(1)
      .children('.product-item-info')
      .children('.product-item-details')
      .children('.product-item-inner')
      .children('.product-item-actions')
      .children('.actions-primary')
      .children('form')
      .children('button')
      .should('have.css', 'visibility', 'visible') 
      .should('be.visible')
      .click({ force: true })

    // check that success message is displayed
    cy.get('.messages')
      .children('.message-success')
      .should('be.visible')
      .children()
      .first()
      .invoke('text')
      .then((text) => {
        expect(text).to.match(/You added .* to your /)
      })

    cy.wait(1000);

    // check that the number of items in the cart is correct for the first item
    cy.get('.minicart-wrapper')
      .children('.showcart')
      .children('.counter')
      .children('.counter-number')
      .invoke('text')
      .then((text) => {
        expect(text).to.match(/2/)
      })

  })
})
