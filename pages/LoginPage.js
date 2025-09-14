import { expect } from '@playwright/test';
import { RegistrationPage } from './RegistrationPage.js';
import { HomePage } from './HomePage.js';

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.locator('input[name="username"]');
    this.password = page.locator('input[name="password"]');
    this.loginBtn = page.getByRole('button', { name: 'Log In' });
    this.registerLink = page.getByRole('link', { name: 'Register' });
  }

  async login({username, password}) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginBtn.click();
    return new HomePage(this.page);
  }

  async navigateToRegistration() {
    await this.registerLink.click();
    await expect.soft(this.page).toHaveTitle('ParaBank | Register for Free Online Account Access');
    await expect.soft(this.page).toHaveURL("https://parabank.parasoft.com/parabank/register.htm");
    return new RegistrationPage(this.page);
  }
}
