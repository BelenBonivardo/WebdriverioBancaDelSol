const { $ } = require('@wdio/globals')
const Page = require('./page');

class HomePage extends Page {
    
    get catalogue() {
        return $('.content-container')
    }

    async catalogueIsDisplayed() {
        (await this.catalogue).waitForDisplayed;

    }
    open () {
        return super.open('home');
    }
}

module.exports = new HomePage();
