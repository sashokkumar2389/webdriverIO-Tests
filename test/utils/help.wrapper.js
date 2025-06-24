class NavigationHelper {
    /**
     * Verifies the browser redirects to the expected URL and navigates back to home
     * @param {Function} triggerAction - function that triggers redirect (e.g., clicking a link)
     * @param {string} expectedUrlPart - part of URL to verify after redirect
     * @param {string} returnToUrl - URL to navigate back to (default home page)
     */
    async verifyRedirectAndReturn(triggerAction, expectedUrlPart, returnToUrl = 'https://developer.surveymonkey.com/') {
        await triggerAction();

        await browser.waitUntil(
            async () => (await browser.getUrl()).includes(expectedUrlPart),
            {
                timeout: 10000,
                timeoutMsg: `Expected to be redirected to URL containing: ${expectedUrlPart}`
            }
        );

        const redirectedUrl = await browser.getUrl();
        expect(redirectedUrl).toContain(expectedUrlPart);
        console.log(`Redirected to: ${redirectedUrl}`);

        await browser.url(returnToUrl);

        const currentUrl = await browser.getUrl();
        expect(currentUrl).toContain(returnToUrl);
    }
}

module.exports = new NavigationHelper();
