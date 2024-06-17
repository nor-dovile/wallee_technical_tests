class ProductCard {
  constructor() {
    this.productCardsClass = '.product-items'
  }

  getItem(index) {
    return cy.get(this.productCardsClass)
      .children('li')
      .eq(index)
  }

  selectSize(index, size) {
    return this.getItem(index)
      .children('.product-item-info')
      .children('.product-item-details')
      .children('[class^="swatch-opt-"]') 
      .children('.size') 
      .contains(size) 
      .click()
  }

  selectColor(index, color) {
    return this.getItem(index)
      .children('.product-item-info')
      .children('.product-item-details')
      .children('[class^="swatch-opt-"]') 
      .children('.color') 
      .find(`div[aria-label="${color}"]`)
      .click()
  }

  addToCart(index) {

    // Hover on product to show the add to cart button
    this.getItem(index)
      .children('.product-item-info')
      .children('.product-item-details')
      .trigger('mouseover')

    cy.wait(500);

    // click in add to cart button
    return this.getItem(index)
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
  }
}

export default new ProductCard()
