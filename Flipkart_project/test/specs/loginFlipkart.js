import LoginPage from '../pageobjects/login.page';
import LogoutPage from '../pageobjects/logout.page';

describe('Flipkart Login page', () => {

   
    it('should open the mail url and verify the title', () => {

        LoginPage.open();
        expect(browser).toHaveTitle('Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!');
 
        LoginPage.login();
        //should close the login page        
        //LoginPage.inputUsername.addValue();
        
        //LoginPage.inputPassword.addValue();

        //LoginPage.btnSubmit.click();
        browser.pause(10000);
    });  
    
});
