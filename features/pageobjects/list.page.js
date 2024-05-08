const { $ } = require('@wdio/globals')
const Page = require('./page');

class ListPage extends Page {
    
    get list() {
        return $('.content-container')
    }
    get totalResult() {
        return $('//h1/span[1]').getText();
    }
    
    async printTotalResults() {
        const value = await this.totalResult;
        console.log( await "*************************el resultado es***************************" + value);
        
         
    }

    open () {
        return super.open('list');
    }
}

module.exports = new ListPage();