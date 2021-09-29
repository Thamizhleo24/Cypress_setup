describe('My FirstTest', () => 
{
    it('Verify Title of the page should passed', () => 
    {
      cy.visit('https://www.flipkart.com/');
      /* Given correct title to validate the Ebay page */
      cy.title().should('eq','Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!')
    });

  it('Verify Title of the page should failed', () => 
  {
    cy.visit('https://www.flipkart.com/');
    /* Given incorrect title to validate the Ebay page */
    cy.title().should('eq','Online Shopping Site for Mobiles Best Offers!')
  });
});