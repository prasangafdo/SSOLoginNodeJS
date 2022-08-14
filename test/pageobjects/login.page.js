const session = require('../util/session.handler')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get txtEmail() {
        return $('#i0116');
    }

    get txtPassword() {
        return $('#i0118');
    }

    get btnSubmit () {
        return $("//input[@type='submit']");
    }

    get btnNext(){
        return $('#idSIButton9')
    }

    get chkFrequently(){
        return $('#idChkBx_SAOTCAS_TD')
    }

    get chkDontShowThis(){
        return $("//input[@name='DontShowAgain']")
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {

        /*
            * Enter email
            * click on next button
            * Enter password
            * Click on signin button
            * Click do not show this checkbox
         */

        await this.txtEmail.setValue(username)
        await this.btnNext.click()
        await this.txtPassword.waitForClickable({timeout:6000})
        await this.txtPassword.setValue(password)
        await this.btnSubmit.click()
        await this.chkFrequently.waitForClickable({timeout:5000})
        await this.chkFrequently.click()
        await this.chkFrequently.waitForDisplayed({timeout:9000, reverse:true})
        await this.chkDontShowThis.waitForDisplayed({timeout:5000})
        await this.chkDontShowThis.click()
        await this.btnSubmit.waitForDisplayed({timeout:5000})

        await session.extractSessionFromBrowser()
        await session.saveUpdatedCookiesToExcel()

        await this.btnSubmit.click()

        await session.saveSessionToExcelSheet()

    }

    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
