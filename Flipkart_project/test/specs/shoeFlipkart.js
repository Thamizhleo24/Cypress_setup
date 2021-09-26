import ShoePage from '../pageobjects/shoe.page';

describe('Flipkart shoe product search', () => {

    before(() => {
        ShoePage.open();
    });
    
    it('should open the mail url and verify the title', () => {
        ShoePage.open();
        expect(browser).toHaveTitle('Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!');
        
        //should close the login page        
        ShoePage.closeIcon.click();

        //Open Fashion product
        ShoePage.fashionPro.moveTo();        

        ShoePage.menFwear.waitForDisplayed({ timeout: 2000}); // Explicit wait

        //Move to Men's Footwear       
        ShoePage.menFwear.moveTo();
        
        //Move to All Footwear
        ShoePage.footAll.moveTo();
        ShoePage.footAll.click();

        //Selct shoes size and filter        
        ShoePage.shoeSize.click();

        //And using dropdown to select the minimum value of shoe's       
        ShoePage.dropdown.click();
        ShoePage.dropdown.selectByAttribute('value', '2000');
        
        browser.pause(5000);
      
    });  
    
});
