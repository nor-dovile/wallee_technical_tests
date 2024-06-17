import storeMenu from '../pom/storeMenu'
import mainContent from '../pom/mainContent'

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})

describe('User should be able to navigate to different pages on the website', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('User should be able to visit Whats new page', () => {
    storeMenu
      .getWhatsNewItem()
      .click()

    cy.url()
      .should('eq', `${Cypress.env('baseUrl')}/what-is-new.html`)

    mainContent
      .getTitle()
      .should('be.visible')
      .contains('What\'s New')
  })

  it('User should be able to visit the Woman page', () => {
    storeMenu
      .getWomanItem()
      .should('be.visible')
      .click()

    cy.url()
      .should('eq', `${Cypress.env('baseUrl')}/women.html`)

    mainContent
      .getTitle()
      .should('be.visible')
      .contains('Women')
  })

  it('User should be able to visit the Men page', () => {
    storeMenu
      .getMenItem()
      .should('be.visible')
      .click()

    cy.url()
      .should('eq', `${Cypress.env('baseUrl')}/men.html`)

    mainContent
      .getTitle()
      .should('be.visible')
      .contains('Men')
  })

  it('User should be able to visit the Gear page', () => {
    storeMenu
      .getGearItem()
      .should('be.visible')
      .click()

    cy.url()
      .should('eq', `${Cypress.env('baseUrl')}/gear.html`)

    mainContent
      .getTitle()
      .should('be.visible')
      .contains('Gear')
  })

  it('User should be able to visit the Training page', () => {
    storeMenu
      .getTrainingItem()
      .should('be.visible')
      .click()

    cy.url()
      .should('eq', `${Cypress.env('baseUrl')}/training.html`)

    mainContent
      .getTitle()
      .should('be.visible')
      .contains('Training')
  })

  it('User should be able to visit the Sale page', () => {
    storeMenu
      .getSaleItem()
      .should('be.visible')
      .click()

    cy.url()
      .should('eq', `${Cypress.env('baseUrl')}/sale.html`)

    mainContent
      .getTitle()
      .should('be.visible')
      .contains('Sale')
  })
})
