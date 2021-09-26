import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $("//span[text()='Enter Email/Mobile number']/preceding::input[1]") }
    get inputPassword () { return $("//span[text()='Enter Password']/preceding::input[1]") }
    get btnSubmit () { return $("//span[text()='Login']/../..//button") }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue('Thamizhleo24@gmail.com');
        await this.inputPassword.setValue('Thamizhleo');
        await this.btnSubmit.click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('https://www.flipkart.com/');
    }
}

export default new LoginPage();
