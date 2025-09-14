import { test as base } from "@playwright/test";
import { generateUser } from "../utils/datagenerator.js";
import { LoginPage } from "../pages/LoginPage.js";
import { HomePage } from "../pages/HomePage.js";
import { OpenAccountPage } from "../pages/AccountOpenPage.js";
import { AccountsOverviewPage } from "../pages/AccountOverviewPage.js";
import { TransferFundsPage } from "../pages/TransferFundPage.js";
import { BillPayPage } from "../pages/BillPayPage.js";


export const test = base.extend({
  /** @type {import('../utils/datagenerator.js').ParaBankUser} */
  user: async ({ page }, use) => {
    const user = generateUser();
    await page.goto("/");
    const loginPage = new LoginPage(page);
    const regPage = await loginPage.navigateToRegistration();
    await regPage.register(user);

    await use(user);

    const homePage = new HomePage(page);
    await homePage.logout();
  },

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
});