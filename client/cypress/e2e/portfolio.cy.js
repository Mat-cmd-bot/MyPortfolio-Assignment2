describe('Portfolio E2E Test', () => {
  it('loads the home page and navigates to Contact', () => {
    cy.visit('http://localhost:5173/')

    cy.contains('Matheyos Wolde').should('be.visible')
    cy.contains('Web Application Developer').should('be.visible')
    cy.contains('COMP229 Portfolio').should('be.visible')

    cy.contains('Contact Me').click()

    cy.url().should('include', '/contact')

    cy.screenshot('portfolio-contact-page')
  })
})