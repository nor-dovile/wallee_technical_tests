class CartIcon {
  constructor() {
    this.cartWrapper = '.minicart-wrapper'
    this.showCart = '.showcart'
    this.miniCartContentWrapper = '#minicart-content-wrapper'
  }

  getCartWrapper() {
    return cy.get(this.cartWrapper)
      .children(this.showCart)
  }

  getCartNumberOfItems() {
    return cy.get(this.cartWrapper)
      .children('.showcart')
      .children('.counter')
      .children('.counter-number')
      .invoke('text')
  }

  clickOnIcon() {
    return this.getCartWrapper()
      .click()
  }

  clickProceedToCheckout() {
    return cy.get(this.miniCartContentWrapper)
      .children('.block-content')
      .children('.actions')
      .children('.primary')
      .children('button')
      .click()
  }
}

export default new CartIcon()
