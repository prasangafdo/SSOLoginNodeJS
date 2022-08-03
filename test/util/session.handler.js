class sessionHandler{

    async getSessionCookiesFromBrowser(){
        console.log(await browser.getCookies())
    }
}

module.exports = new sessionHandler()
