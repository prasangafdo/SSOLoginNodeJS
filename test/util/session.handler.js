const XLSX = require('xlsx')

class sessionHandler{

    value1
    value2
    value3
    value4

    async getSessionCookiesFromBrowser(){
        let url = "TEST"
        while (!url.includes('login.live.com')){
            await browser.pause(4000)
            url = await browser.getUrl()
        }
        // console.log(await browser.getCookies())
        // console.log('ESTSAUTHLIGHT',await browser.getCookies['ESTSAUTHLIGHT'])
        // console.log('ESTSAUTHPRESISTENT',await browser.getCookies(['ESTSAUTHPRESISTENT']))
        // console.log('ESTSAUTH',await browser.getCookies(['ESTSAUTH']))
        // console.log('SSOCOOKIEPULLED',await browser.getCookies(['SSOCOOKIEPULLED']))

        // let cookie1 = await browser.getCookies['ESTSAUTHLIGHT']
        let cookie2 = await browser.getCookies(['ESTSAUTHPRESISTENT'])
        let cookie3 = await browser.getCookies(['ESTSAUTH'])
        let cookie4 = await browser.getCookies(['SSOCOOKIEPULLED'])

        console.log(cookie2[0])
        console.log(cookie3[0])
        console.log(cookie4[0])

        // this.value1 = cookie1[0]?.value;
        this.value2 = cookie2[0].value;
        this.value3 = cookie3[0].value;
        this.value4 = cookie4[0].value;
    }

    async saveSessionToExcelSheet(){

        // console.log('ESTSAUTHLIGHT',this.value1)
        console.log('ESTSAUTHPRESISTENT',this.value2)
        console.log('ESTSAUTH',this.value3)
        console.log('SSOCOOKIEPULLED',this.value4)
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