import Page from './page';

class SearchPage extends Page {

        get closeBtn() {
            return $("//button[@class='_2KpZ6l _2doB4z']");
        }
        get searchProd() {
            return $("//div[text()='Grocery']"); //findElements
            //return $$("//div[text()='Grocery']")[0]; //findElements
        }
        get searchGro() {
            return $("//span[text()='Login']");
        }

        get searchUser() {
            return $("//span[text()='Enter Email/Mobile number']/preceding::input[1]");
        }
        get searchPass() {
            return $("//span[text()='Enter Password']/preceding::input[1]");
        }
        //const loginBtn = $("//span[text()='Login']/../..//button");

        get searchBtn() {
            return $("//span[text()='Login']/../..//button");
        }

   open() {
       super.open('https://www.flipkart.com/');
   }
}

export default new SearchPage();
