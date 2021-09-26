import SearchPage from '../pageobjects/grocery.page';

describe('Flipkart Grocerys product search', () => {

    it('should open the mail url and verify the title', () => {
        
        SearchPage.open();
        browser.pause(5000)
        expect(browser).toHaveTitle('Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!');

        //should close the login page
        SearchPage.closeBtn.click();

        //Open Groceries produts
        SearchPage.searchProd.click();

        //Login Grocery page
        SearchPage.searchGro.click();
        browser.pause(5000);

        //Input username
        SearchPage.searchUser.addValue('Thamizhleo');

        //Input Password
        SearchPage.searchPass.addValue('Thamizh');
        
        //Using Login button to verify Login
        SearchPage.searchBtn.click();
        
browser.pause(3000);

    });  
    
});
