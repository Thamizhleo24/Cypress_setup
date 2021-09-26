import Page from './page';

class ShoePage extends Page {

    get closeIcon() {
        return $("//button[@class='_2KpZ6l _2doB4z']");
    }

    get fashionPro() {
        return $("//div[text()='Fashion']");
    }
    
    get menFwear() {
        return $("//a[text()='Men Footwear']");
    }

    get footAll() {
        return $("//a[text()='All']");
    }
   
    get shoeSize() {
        return $("//div[text()='Size - UK/India']");
    }
    
    get dropdown() {
        return $("//div[@class='_3uDYxP']//following::option[contains(text(),'2000')]");
    }
    get shoesCategoryList() {
        return $$("//span[contains(text(),'products of')]");
    }

    open() {
        super.open('https://www.flipkart.com/');
    }

}

export default new ShoePage();
