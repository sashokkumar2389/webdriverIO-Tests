class HeaderPage {
    // Use stable selectors: link text or href attributes

    get homeLink() {
        return $('a[href="/"]');
    }

    get appsLink() {
        return $('a[href="/apps/"]');
    }

    get docsLink() {
        return $('a=Docs'); // Use link text selector
        // Or if href is stable: $('a[href="/docs/"]')
    }

    get faqLink() {
        return $('a=FAQ'); // Use link text selector
        // Or if href is stable: $('a[href="/faq/"]')
    }

    get signInBtn() {
        return $('a.wrenchButton-0-2-25.wrenchButton-d3-0-2-71.wrenchButton--secondary');
    }

    get signUpBtn() {
        return $('a.wrenchButton-0-2-25.wrenchButton-d6-0-2-76.wrenchButton--secondary');
    }

    async clickHome() {
        await this.homeLink.click();
    }

    async clickApps() {
        await this.appsLink.click();
    }

    async clickDocs() {
        await this.docsLink.click();
    }

    async clickFAQ() {
        await this.faqLink.click();
    }

    async clickSignIn() {
        await this.signInBtn.click();
    }

    async clickSignUp() {
        await this.signUpBtn.click();
    }

    async open() {
        await browser.url('https://developer.surveymonkey.com');
    }
}

module.exports = new HeaderPage();
