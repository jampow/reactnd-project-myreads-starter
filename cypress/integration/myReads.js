
context('My Reads Flow', () => {
  before(() => {
    cy.visit('/')
  })

  it('should load some books', () => {
    cy.get('.book')
    .should('have.length', 7)
  })

  it('should mark the book with the shelf', () => {
    cy.get('.book:last select')
    .should('have.value', 'read')
  })

  it('should go to the search page', () => {
    cy.get('.open-search a').click()
    cy.url()
    .should('equal', Cypress.config('baseUrl') + '/search')
  })

  it('should bring some books after search', () => {
    cy.get('.search-books-bar input')
      .type('history')
      .get('.book')
      .should('have.length', 20)
  })

  it('should put a book on the shelf', () => {
    cy.get('.book:first select')
      .select('read')
      .get('.close-search')
      .click()
      .get('.book')
      .should('have.length', 8)
  })

  it('should remove the last book', () => {
    cy.get('.book:last select')
      .select('none')
      .get('.book')
      .should('have.length', 7)
  })
})
