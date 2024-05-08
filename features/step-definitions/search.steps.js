const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const LoginPage = require('../pageobjects/home.page');
const SearchPage = require('../pageobjects/search.page');
const ListPage = require('../pageobjects/list.page');

const pages = {
    search: SearchPage,
    login: LoginPage,
    list: ListPage
}

When(/^I search the product (.*)$/, async (product) => {
    await SearchPage.search(product)
});
Then(/^I print on console total results$/, async() => {
    await ListPage.printTotalResults();

});



