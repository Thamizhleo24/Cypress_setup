import MobilePage from '../pageobjects/mobile.page';

describe('Flipkart Mobile product search', () => {

    
    it('should open the mail url and verify the title', () => {
        MobilePage.open();
        expect(browser).toHaveTitle('Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!');
 
        //should close the login page        
        MobilePage.closeIcon.click();

        MobilePage.openMobile.click();

        MobilePage.filterCategory.click();
            
    });  
    
});
