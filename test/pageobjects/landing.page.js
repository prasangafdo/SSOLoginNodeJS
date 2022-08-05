const Page = require('./page');

class LandingPage extends Page {

    get lblUserEmail() {
        return $("//span[@class='css-264 x-hidden-focus']");
    }
}

module.exports = new LandingPage();
