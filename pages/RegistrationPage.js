import { expect } from '@playwright/test';
import { HomePage } from './HomePage.js';
import { AccountsOverviewPage } from './AccountOverviewPage.js';

export class RegistrationPage {
  
  constructor(page) {
    this.page = page;
    this.firstName = page.locator('#customer\\.firstName');
    this.lastName = page.locator('#customer\\.lastName');
    this.address = page.locator('#customer\\.address\\.street');
    this.city = page.locator('#customer\\.address\\.city');
    this.state = page.locator('#customer\\.address\\.state');
    this.zip = page.locator('#customer\\.address\\.zipCode');
    this.phone = page.locator('#customer\\.phoneNumber');
    this.ssn = page.locator('#customer\\.ssn');
    this.username = page.locator('#customer\\.username');
    this.password = page.locator('#customer\\.password');
    this.confirm = page.locator('#repeatedPassword');
    this.registerBtn = page.getByRole('button', { name: 'Register' });

  }

  async register(user) {
    await this.firstName.fill(user.firstName);
    await this.lastName.fill(user.lastName);
    await this.address.fill(user.address);
    await this.city.fill(user.city);
    await this.state.fill(user.state);
    await this.zip.fill(user.zipCode);
    await this.phone.fill(user.phone);
    await this.ssn.fill(user.ssn);
    await this.username.fill(user.username);
    await this.password.fill(user.password);
    await this.confirm.fill(user.password);
    await this.registerBtn.click();

    await expect(this.page.locator('h1')).toHaveText(`Welcome ${user.username}`);
    return new HomePage(this.page);
  }
}
