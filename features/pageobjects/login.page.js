const { $ } = require('@wdio/globals')
const Page = require('./page');


class LoginPage extends Page {
    
    get inputUsername () {
        return $('#userid');
    }

    get continueButton() {
        return $('#signin-continue-btn')
    }
    get inputPassword () {
        return $('#pass');
    }

    get btnSignin() {
        return $('#sgnBt');
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.continueButton.click();
        await this.inputPassword.waitForDisplayed();
        await this.inputPassword.setValue(password);
        await this.btnSignin.click();
    }

    
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
