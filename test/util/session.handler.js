const XLSX = require('xlsx')

class sessionHandler{

    cookies

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


        this.cookies.push(await browser.getCookies['ESTSAUTHLIGHT'])
        this.cookies.push(await browser.getCookies(['ESTSAUTHPRESISTENT']))
        this.cookies.push(await browser.getCookies(['ESTSAUTH']))
        this.cookies.push(await browser.getCookies(['SSOCOOKIEPULLED']))

    }

    async saveSessionToExcelSheet(){

        console.log(this.cookies)
//         let fileLocation = './test/testdata/TestDataWrite.xlsx'
//
//         const file = XLSX.readFile(fileLocation)
//
//         const ws = XLSX.utils.json_to_sheet(data)
//
//         XLSX.utils.book_append_sheet(file,ws,"Car")
//
// // Writing to our file
//         XLSX.writeFile(file,fileLocation)
    }

}

module.exports = new sessionHandler()