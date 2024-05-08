const { $ } = require('@wdio/globals')
const Page = require('./page');

class SearchPage extends Page{

    get inputSearch() {
        return $('#gh-ac');
    }

    
    get searchButton() {
        return $('#gh-btn')
    }
  
    async search(product) {
        await this.inputSearch.waitForDisplayed();
        await this.inputSearch.setValue(product);
        await this.searchButton.click();
    

    }

    open () {
    return super.open('login');
    }
}

module.exports = new SearchPage();
  