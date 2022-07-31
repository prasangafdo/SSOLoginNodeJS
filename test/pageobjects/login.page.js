

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get txtEmail () {
        return $('#i0116');
    }

    get txtPassword () {
        return $('#i0118');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    get btnNext(){
        return $('#idSIButton9')
    }

    get chkDontShowThis(){
        return $("//input[@name='DontShowAgain']")
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.chkDontShowThis.click()
        await this.btnSubmit.click();

    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
