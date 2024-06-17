class PaymentMethod {
  constructor() {
    this.checkMoneyOrderId = '#checkmo'
    this.placeOrderId = '#checkout-payment-method-load'
  }

  selectCheckMoneyOrder() {
    return cy.get(this.checkMoneyOrderId)
      .click()
  }

  placeOrder() {
    return cy.get(this.placeOrderId)
      .contains('Place Order')
      .click()
  }
}

export default new PaymentMethod()
