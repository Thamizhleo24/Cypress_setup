/// <reference types="cypress" />

describe('Filter the Laptps in Ebay', () => 
{
  before(function(){
    cy.fixture('dataBase').then(function(data){
      this.data=data

    });
  });
    it('Verify Title of the page should passed', () => 
    {
      cy.visit('https://www.ebay.com/');
      cy.title().should('eq','Electronics, Cars, Fashion, Collectibles & More | eBay');

      /* Input the search box to find Laptop products */
      cy.get("#gh-ac").type("Laptops");
      cy.get("#gh-btn").click();
    
      /* Filter 8 GB ROM specification */
      cy.get('[aria-label="8 GB"]').click();
    
      /* Filter 15 inch" display */
      cy.get('[aria-label="15-15.9 in"]').click();
      cy.get('[aria-label="HP"]').click();
    });
});