/// <reference types="cypress" />

describe('Select the serch category in Ebay', () => 
{
    it('Verify Title of the page should Passed', () => 
    {
      cy.visit('https://www.ebay.com/');      
      cy.title().should('eq','Electronics, Cars, Fashion, Collectibles & More | eBay'); // Home page

      /* Select books category using select elements and verify title */
      cy.get('#gh-cat').select('Books');
      cy.get('#gh-btn').click();
      cy.get('#gh-cat').contains('Books & Magazines'); //Book page
 
      /* use GO element to 'go back' previous page and verify title */
      cy.go('back');
      cy.title().should('eq','Electronics, Cars, Fashion, Collectibles & More | eBay'); //Home page

      /* use GO element to 'go forward' next page and verify title */
      cy.go('forward');
      cy.get('#gh-cat').contains('Books & Magazines'); //Book page

    });

});