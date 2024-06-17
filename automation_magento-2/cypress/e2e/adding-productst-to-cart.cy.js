import cartIcon from '../pom/cartIcon'
import productCard from '../pom/productCard'
import messages from '../pom/messages'

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})

describe('The user should be able to add products to their cart', () => {
  beforeEach(() => {
    cy.visit('/women.html')
  })

  it('User should be able to add an item to the cart from the Woman section', () => {
    // add the first item to the cart
    productCard.selectSize(0, 'S')
    productCard.selectColor(0, 'Purple')
    productCard.addToCart(0)

    cy.wait(500);

    // check the success message is showed
    messages.getMessageText()
      .then((text) => {
        expect(text).to.match(/You added .* to your /)
      })

    // check the correct number is showed in the chart
    cartIcon.getCartNumberOfItems()
      .then((text) => {
        expect(text).to.match(/1/)
      })

    // add the second item to the cart
    productCard.selectSize(1, 'S')
    productCard.selectColor(1, 'Purple')
    productCard.addToCart(1)

    // check the success message is showed
    messages.getMessageText()
      .then((text) => {
        expect(text).to.match(/You added .* to your /)
      })

    // wait, the cart icon is updating the value
    cy.wait(1000);

    // check the correct number is showed in the chart
    cartIcon.getCartNumberOfItems()
      .then((text) => {
        expect(text).to.match(/2/)
      })
  })
})
