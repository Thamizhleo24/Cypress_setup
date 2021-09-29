/// <reference types="cypress" />

describe('Login the Ebay site', () => 
{
    it('Login and Verify Title of the page should passedand', () => 
    {
      cy.visit('https://www.ebay.com/');
      cy.title().should('eq','Electronics, Cars, Fashion, Collectibles & More | eBay');

      cy.get('[href="https://signin.ebay.com/ws/eBayISAPI.dll?SignIn&ru=https%3A%2F%2Fwww.ebay.com%2F"]').click();
      cy.title().should('eq','Sign in or Register | eBay');
      cy.get('#userid').type('Thamizhleo24@gmail.com');
      cy.get('#signin-continue-btn').click();
      cy.get('[type=password]').type('Thamizh#0210');
      cy.get('#kmsi-checkbox').check();
      cy.get('#sgnBt').click();
      cy.title().should('eq','Electronics, Cars, Fashion, Collectibles & More | eBay');

    });
});