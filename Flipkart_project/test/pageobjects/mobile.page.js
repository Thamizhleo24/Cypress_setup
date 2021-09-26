import Page from './page';

class MobilePage extends Page {

    get closeIcon() {
        return $("//button[@class='_2KpZ6l _2doB4z']");
    }
    get openMobile() {
        return $("//div[text()='Mobiles']");
    }
    get filterCategory() {
        return $("//p[text()='Shop Now']");
    }
    open() {
        super.open('https://www.flipkart.com/');
    }

}

export default new MobilePage();
