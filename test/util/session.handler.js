class sessionHandler{

    async getSessionCookiesFromBrowser(){
        let url = "TEST"
        while (!url.includes('login.live.com')){
            await browser.pause(4000)
            url = await browser.getUrl()
        }
        console.log(await browser.getCookies())
        console.log('ESTSAUTHLIGHT',await browser.getCookies['ESTSAUTHLIGHT'])
        console.log('ESTSAUTHPRESISTENT',await browser.getCookies(['ESTSAUTHPRESISTENT']))
        console.log('ESTSAUTH',await browser.getCookies(['ESTSAUTH']))
        console.log('SSOCOOKIEPULLED',await browser.getCookies(['SSOCOOKIEPULLED']))
    }

    async saveSessionToExcelSheet(){

    }
}

module.exports = new sessionHandler()