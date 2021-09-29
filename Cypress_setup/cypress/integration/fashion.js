/// <reference types="cypress" />

describe('Filter the Laptps in Ebay', () => 
{
    it('Verify Title of the page should passed', () => 
    {
      cy.visit('https://www.ebay.com/');
      cy.title().should('eq','Electronics, Cars, Fashion, Collectibles & More | eBay');

      cy.get('[data-currenttabindex="1"]').hover();
      cy.get('[href="https://www.ebay.com/b/Mens-Sunglasses/79720/bn_739004"]').click();
      cy.get('.btn__icon').click();
      cy.get('.icon--filter-list').click();

    });
});