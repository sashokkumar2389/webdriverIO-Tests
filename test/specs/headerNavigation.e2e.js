const HeaderPage = require('../pageobjects/header.page');
const NavigationHelper = require('../utils/help.wrapper');

describe('SurveyMonkey Developer Header Navigation', () => {

    beforeEach(async () => {
        await HeaderPage.open();
    });

    afterEach(async () => {
        const currentUrl = await browser.getUrl();
        if (!currentUrl.startsWith('https://developer.surveymonkey.com')) {
            await browser.url('https://developer.surveymonkey.com/');
            const newUrl = await browser.getUrl();
            expect(newUrl).toContain('https://developer.surveymonkey.com');
        }
    });

    it('should click Home link', async () => {
        await HeaderPage.clickHome();
        const url = await browser.getUrl();
        expect(url).toContain('https://developer.surveymonkey.com');
    });

    it('should click My Apps link and verify redirection', async () => {
        await NavigationHelper.verifyRedirectAndReturn(
            async () => await HeaderPage.clickApps(),
            'auth-us.surveymonkey.com/login'
        );
    });

    it('should click Docs link', async () => {
        await HeaderPage.clickDocs();
        const url = await browser.getUrl();
        expect(url).toContain('/api/v3/#SurveyMonkey-Api');
    });

    it('should click FAQ link', async () => {
        await HeaderPage.clickFAQ();
        const url = await browser.getUrl();
        expect(url).toContain('/faq');
    });

    it('should click Sign in and return to home', async () => {
        await NavigationHelper.verifyRedirectAndReturn(
            async () => await HeaderPage.clickSignIn(),
            'auth-us.surveymonkey.com/login'
        );
    });

    it('should click Sign up and return to home', async () => {
        await NavigationHelper.verifyRedirectAndReturn(
            async () => await HeaderPage.clickSignUp(),
            'auth-us.surveymonkey.com/login'
        );
    });

});
