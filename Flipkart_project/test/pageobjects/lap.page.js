import Page from './page';

class SearchLap extends Page {

        get closeIcon() {
            return $("//button[@class='_2KpZ6l _2doB4z']");
        }
        get electPro() {
            return $("//div[text()='Electronics']");
        }
        get moveLap() {
            return $("//a[text()='Laptop and Desktop']");
        }

        get lapPro() {
            return $("//a[text()='Laptops']");
        }
        get viewAll() {
            return $("//span[text()='VIEW ALL']");
        }
        //const loginBtn = $("//span[text()='Login']/../..//button");

        get lapBrand() {
            return $("//div[text()='Brand']");
        }

        get brandHp() {
            return $("//div[text()='Brand']//following::div[5]");
        }

   open() {
       super.open('https://www.flipkart.com/');
   }
}

export default new SearchLap();
