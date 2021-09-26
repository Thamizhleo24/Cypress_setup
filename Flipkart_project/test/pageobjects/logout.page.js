import Page from './page';

class LogoutPage extends Page {

    get closeIcon() {
        return $("//button[@class='_2KpZ6l _2doB4z']");
    }

    open() {
        super.open('https://www.flipkart.com/');
    }

}

export default new MobilePage();