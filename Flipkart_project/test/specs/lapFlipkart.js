import SearchLap from '../pageobjects/lap.page';

describe('Flipkart Laptop product search', () => {

    it('should open the mail url and verify the title', () => {
        
        SearchLap.open();
        expect(browser).toHaveTitle('Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!');
        
        //should close the login page
        SearchLap.closeIcon.click();
        
        //Open Electronic produtsss
        SearchLap.electPro.moveTo();

        //And moveto Electronic product --> Laptop and Desktop categories
        SearchLap.moveLap.moveTo();

        //And moveto Laptop and Desktop categories --> Laptops
        SearchLap.lapPro.moveTo();        
        SearchLap.lapPro.click();

        //And click view All Laptops
        SearchLap.viewAll.click();
     
        //And select Laptop brand
        SearchLap.lapBrand.click();

        //Filter Brand HP
        SearchLap.brandHp.click();

    browser.pause(5000);

    });  
    
});
