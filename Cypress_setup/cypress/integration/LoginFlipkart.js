/// <reference types="cypress" />

describe('Login the Flipkart site', () => 
{
    it('Login and Verify Title of the page should passed', () => 
    {
      cy.visit('https://www.flipkart.com/');
      cy.title().should('eq','Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!');
     
      cy.login('9500659610','Thamizh#0210')
      cy.title().should('eq','Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!');

    });
});