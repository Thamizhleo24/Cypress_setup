/// <reference types="cypress" />
import LoginPage from '../pageObject.js/loginFlip'

describe('Login the Flipkart site using pageobject', () => 
{
    it('Login and Verify Title of the page should passed', () => 
    {
      const loginSite = new LoginPage();

      loginSite.visit(); //Open URL
      loginSite.submit(); // Click Login Button
      loginSite.fillEmail('9500659610') //Enter Email or Mobile number
      loginSite.fillPass('Thamizh#0210') //Enter password
      loginSite.btn(); //Enter login button
      
      /* Using Assertion to validate title of the Login page */
      cy.title().should('eq','Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!');
    });
});