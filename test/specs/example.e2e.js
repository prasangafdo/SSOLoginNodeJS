const LoginPage = require('../pageobjects/login.page');
const LandingPage = require('../pageobjects/landing.page');
const LoginInfo = require('../resources/login.info')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login(LoginInfo.email, LoginInfo.password);
        await expect(LandingPage.lblUserEmail).toBeExisting();
        await expect(LandingPage.lblUserEmail).toHaveTextContaining(LoginInfo.email);
    }).timeout(900000);
});


