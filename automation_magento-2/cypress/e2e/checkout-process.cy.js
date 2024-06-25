import productCard from '../pom/productCard'
import cartIcon from '../pom/cartIcon'
import shipping from '../pom/shipping'
import paymentMethod from '../pom/paymentMethod'
import account from '../pom/account'
import { faker } from '@faker-js/faker'
import messages from '../pom/messages'

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})

describe('Checkout should be completed without any errors', () => {
  beforeEach(() => {
    cy.visit('/women.html')
  })

  it('User can add items, go to checkout and finish the process', () => {
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

    // got to checkout
    cartIcon.clickOnIcon()
    cartIcon.clickProceedToCheckout()

    cy.url().should('eq', `${Cypress.env('baseUrl')}/checkout/#shipping`)
    cy.wait(1000)
    cy.reload()
    cy.reload()
    cy.wait(1000)

    // fill the shipping form
    shipping.fillUpEmail(faker.internet.email())
    shipping.fillUpFirstName()
    shipping.fillUpLastName()
    shipping.fillUpStreetAddress()
    shipping.selectCountry()
    shipping.fillUpProvidence()
    shipping.fillUpCity()
    shipping.fillUpPostalCode()
    shipping.fillUpPhoneNumber()
    shipping.selectShippingMethod()
    shipping.clickOnNext()

    // on payment method page
    paymentMethod.selectCheckMoneyOrder()
    paymentMethod.placeOrder()

    cy.wait(1000);

    // check if process ended successfully
    cy.get('#maincontent')
      .find('.page-title-wrapper')
      .should('be.visible')
      .contains('Thank you for your purchase!')
  })
})

describe('User should be able to create an account at the end of the checkout process', () => {
  beforeEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.clearAllSessionStorage({log: true})
    cy.visit('/women.html')
  })

  it('User can create account at checkout', () => {
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

    // go to checkout
    cartIcon.clickOnIcon()
    cartIcon.clickProceedToCheckout()

    cy.wait(1000)
    cy.reload()
    cy.reload()
    cy.wait(1000)

    // fill the shipping form
    shipping.fillUpEmail(faker.internet.email())
    shipping.fillUpFirstName()
    shipping.fillUpLastName()
    shipping.fillUpStreetAddress()
    shipping.selectCountry()
    shipping.fillUpProvidence()
    shipping.fillUpCity()
    shipping.fillUpPostalCode()
    shipping.fillUpPhoneNumber()
    shipping.selectShippingMethod()
    shipping.clickOnNext()

    // select a payment method and place the order
    paymentMethod.selectCheckMoneyOrder()
    paymentMethod.placeOrder()

    cy.wait(1000);

    // check if process ended successfully
    // and select the option to create an account
    cy.get('#maincontent')
      .find('.page-title-wrapper')
      .should('be.visible')
      .contains('Thank you for your purchase!')

    cy.get('#registration')
      .contains('Create an Account')
      .click()

    // create an account
    account.fillUpPassword('Password1234')
    account.fillUpPasswordConfirmation('Password1234')
    account.clickOnCreateAccount()

    // check the success message is showed
    messages.getMessageText()
      .then((text) => {
        expect(text).to.match(/Thank you for registering with Main Website Store/)
      })
  })
})

describe('Negative scenario: User should receive warnings if required fields are missing in the shipping address form', () => {
  beforeEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.clearAllSessionStorage({log: true})
    cy.visit('/women.html')
  })

  it('User can create account at checkout', () => {
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

    // go to checkout
    cartIcon.clickOnIcon()
    cartIcon.clickProceedToCheckout()

    // click on next without filling any required field
    shipping.clickOnNext()

    // check that the warning for shipping method appears
    shipping.checkShippingMethodErrorIsVisible()

    cy.wait(1000)
    cy.reload()
    cy.reload()
    cy.wait(1000)

    // select a shipping method
    shipping.selectShippingMethod()
    shipping.clickOnNext()

    // check that the required fields errors appear in the form
    shipping.checkRequiredFieldErrorOnEmail()
    shipping.checkRequiredFieldErrorOnFirstName()
    shipping.checkRequiredFieldErrorOnLastName()
    shipping.checkRequiredFieldErrorOnAdress()
    shipping.checkRequiredFieldErrorOnProvidence()
    shipping.checkRequiredFieldErrorOnCity()
    shipping.checkRequiredFieldErrorOnPostcode()
    shipping.checkRequiredFieldErrorOnPhone()
  })
})
