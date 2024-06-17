class StoreMenu {
  constructor() {
    this.menuId = '#store\\.menu'
  }

  getStoreMenu() {
    return cy.get(this.menuId)
  }

  getMenuListElements() {
    return this.getStoreMenu()
      .find('nav')
      .find('ul')
      .children('li')
  }

  getWhatsNewItem() {
    return this.getMenuListElements()
      .eq(0)
      .children('a')
  }

  getWomanItem() {
    return this.getMenuListElements()
      .eq(1)
      .children('a')
  }

  getMenItem() {
    return this.getMenuListElements()
      .eq(2)
      .children('a')
  }

  getGearItem() {
    return this.getMenuListElements()
      .eq(3)
      .children('a')
  }

  getTrainingItem() {
    return this.getMenuListElements()
      .eq(4)
      .children('a')
  }

  getSaleItem() {
    return this.getMenuListElements()
      .eq(5)
      .children('a')
  }
}

export default new StoreMenu()
