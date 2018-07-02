context('Location', () => {
    beforeEach(() => {
      cy.visit('localhost:3000')
    })
  
    it('cy.hash() - get the current URL hash', () => {
      cy.hash().should('be.empty')
    })
  
    it('cy.location() - get window.location', () => {
      cy.location().should((location) => {
        expect(location.hash).to.be.empty
      })
    })
  
    it('cy.url() - get the current URL', () => {
      cy.url().should('eq', 'http://localhost:3000/')
    })
  })

context('Stuff should load', () => {
    beforeEach(() => {
        cy.visit('localhost:3000')
    })
    it('should have working links', () => {
        cy.get('a').contains('Candidate Information').click()
        cy.url().should('eq', 'http://localhost:3000/candidates')
    })
    it('should load info', () => {
        cy.visit('http://localhost:3000/candidates')
        cy.get('.meta').find('button').should('have.class', 'blue')
    })
})

context('Map should exist', () => {
    beforeEach(() => {
        cy.visit('localhost:3000')
    })
    it('should go to map', () => {
        cy.get('a').contains('Voter Resources').click()
        cy.url().should('eq', 'http://localhost:3000/resources')
    })
    it('should have a map', () => {
        cy.visit('http://localhost:3000/resources')
        cy.get('.map').find('iframe')
    })
    it('should have more info', () => {
        cy.visit('http://localhost:3000/resources')
        cy.get('.resourceList').find('.siteList').find('li').should('have.length', '4')
    })
})