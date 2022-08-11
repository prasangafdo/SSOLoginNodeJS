// const XLSX = require('xlsx')
//
// class sessionHandler{
//
//     value1
//     value2
//     value3
//     value4
//
//     async getSessionCookiesFromBrowser(){
//         let url = "TEST"
//         while (!url.includes('login.live.com')){
//             await browser.pause(4000)
//             url = await browser.getUrl()
//         }
//         let allCookies = await browser.getCookies()
//         console.log('allCookies',allCookies)
//         // console.log('ESTSAUTHLIGHT',await browser.getCookies['ESTSAUTHLIGHT'])
//         // console.log('ESTSAUTHPRESISTENT',await browser.getCookies(['ESTSAUTHPRESISTENT']))
//         // console.log('ESTSAUTH',await browser.getCookies(['ESTSAUTH']))
//         // console.log('SSOCOOKIEPULLED',await browser.getCookies(['SSOCOOKIEPULLED']))
//
//         // let cookie1 = await browser.getCookies['ESTSAUTHLIGHT']
//         // let cookie2 = await browser.getCookies(['__Host-MSAAUTH'])
//         let cookie2 = allCookies
//         // let cookie3 = await browser.getCookies(['ESTSAUTH'])
//         // let cookie4 = await browser.getCookies(['SSOCOOKIEPULLED'])
//
//         console.log(cookie2[0])
//         // console.log(cookie3[0])
//         // console.log(cookie4[0])
//
//         // this.value1 = cookie1[0]?.value;
//         this.value2 = cookie2[0].value;
//         // this.value3 = cookie3[0].value;
//         // this.value4 = cookie4[0].value;
//     }
//
//     async saveSessionToExcelSheet(){
//
//         // console.log('ESTSAUTHLIGHT',this.value1)
//         console.log('__Host-MSAAUTH',this.value2)
//         // console.log('ESTSAUTH',this.value3)
//         // console.log('SSOCOOKIEPULLED',this.value4)
//         let fileLocation = './test/testdata/TestData.xlsx'
//
//         const file = XLSX.readFile(fileLocation)
//
//         const ws = XLSX.utils.json_to_sheet(this.value2)
//
//         XLSX.utils.book_append_sheet(file,ws,"Car")
//
// // Writing to our file
//         XLSX.writeFile(file,fileLocation)
//     }
//
// }
//
// module.exports = new sessionHandler()

const XLSX = require("xlsx");
const LoginPage = require('../pageobjects/login.page');

class SessionHandler{

    value1;
    value2;
    value3;
    value4;

    async setSessionOnBrowser(){

        let url = 'msp'

        while (!url.includes('login.microsoftonline.com')){
            await browser.pause(4000)
            url = await browser.getUrl()
            console.log('==========> User is still did not navigate to SSO login screen')
        }

        const sessionKey1 = 'ESTSAUTHLIGHT';
        const sessionKey2 = 'ESTSAUTHPERSISTENT';
        const sessionKey3 = 'ESTSAUTH';
        const sessionKey4 = 'SSOCOOKIEPULLED';

        await browser.pause(5000);
        // await browser.waitUntil(LoginPage.lblEmail.isDisplayed())
        await browser.setCookies([
            {name:sessionKey1, value: this.value1},
            {name:sessionKey2, value: this.value2},
            {name:sessionKey3, value: this.value3},
            {name:sessionKey4, value: this.value4}

        ]);
        await browser.pause(5000);
        await browser.refresh();
        await browser.pause(10000);

        console.log('>>>>>>>>>>>>>>>>>>>>>>Session restored.');
    }

    getSessionFromExcel(){

        const workbook = XLSX.readFile('./test/resources/session.xlsx');

        const sheetNames = workbook.SheetNames;
        // const totalSheets = sheetNames.length;
        // console.log('=========',totalSheets);

        const tempData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetNames[0]]);

        console.log(tempData);

        // console.log(tempData[0]?.ESTSAUTHLIGHT);

        this.value1 = tempData[0]?.ESTSAUTHLIGHT;
        this.value2 = tempData[0]?.ESTSAUTHPERSISTENT;
        this.value3 = tempData[0]?.ESTSAUTH;
        this.value4 = tempData[0]?.SSOCOOKIEPULLED;
    }

    async extractSessionFromBrowser(browser){
        const cookie1 = await browser.getCookies(['ESTSAUTHLIGHT']);
        const cookie2 = await browser.getCookies(['ESTSAUTHPERSISTENT']);
        const cookie3 = await browser.getCookies(['ESTSAUTH']);
        const cookie4 = await browser.getCookies(['SSOCOOKIEPULLED']);

        this.value1 = cookie1[0].value;
        this.value2 = cookie2[0].value;
        this.value3 = cookie3[0].value;
        this.value4 = cookie4[0].value;

        console.log('=========>ESTSAUTHLIGHT: ',this.value1);
        console.log('=========>ESTSAUTHPERSISTENT: ',this.value2);
        console.log('=========>ESTSAUTH: ',this.value3);
        console.log('=========>SSOCOOKIEPULLED: ',this.value4);
    }

    async saveUpdatedCookiesToExcel(){
        let data = [{
            ESTSAUTHLIGHT: this.value1,
            ESTSAUTHPERSISTENT: this.value2,
            ESTSAUTH: this.value3,
            SSOCOOKIEPULLED: this.value4}
        ]

        const ws = XLSX.utils.json_to_sheet(data)
        // const workbook = XLSX.utils.book_new()
        const workbook = XLSX.readFile('./test/resources/session.xlsx')
        // XLSX.utils.book_append_sheet(workbook, ws, 'SessionData')
        workbook.Sheets['SessionData'] = ws;
        XLSX.writeFile(workbook, './test/resources/session.xlsx')
        console.log("========> Session saved to the excel sheet")
    }

    //Create new func - handle session

// module.exports = setSession;

}
module.exports = new SessionHandler;