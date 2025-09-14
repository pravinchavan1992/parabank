// @ts-check
import { expect } from "@playwright/test";
import { LoginPage } from "./LoginPage.js";
import { OpenAccountPage } from "./AccountOpenPage.js";
import { AccountsOverviewPage } from "./AccountOverviewPage.js";
import { TransferFundsPage } from "./TransferFundPage.js";
import { BillPayPage } from "./BillPayPage.js";

export class HomePage {
  constructor(page) {
    this.page = page;
    this.navMenu = page.locator("#leftPanel a"); // global nav
    this.accountServicesLink = page.locator("#leftPanel").getByRole("link");

    this.totalBalance = page.getByRole('cell', { name: 'Total' }).locator('following-sibling::td/b');
  
  }

  expectedMenus = {
    "Open New Account": "ParaBank | Open Account",
    "Accounts Overview": "ParaBank | Accounts Overview",
    "Transfer Funds": "ParaBank | Transfer Funds",
    "Bill Pay": "ParaBank | Bill Pay",
    "Find Transactions": "ParaBank | Find Transactions",
    "Update Contact Info": "ParaBank | Update Profile",
    "Request Loan": "ParaBank | Loan Request",
    "Log Out": "ParaBank | Welcome | Online Banking",
  };

  async verifyNavigationMenu() {
    await expect(this.accountServicesLink).toHaveCount(
      Object.keys(this.expectedMenus).length
    );

    for (const menu of Object.keys(this.expectedMenus)) {
      await this.navigateTo(menu)
      await expect.soft(this.page).toHaveTitle(this.expectedMenus[menu]);
    }
  }
  async navigateTo(menuName) {
    const menuElement = this.page.getByRole('link', { name: menuName });
    await expect(menuElement, `Menu '${menuName}' should be visible`).toBeVisible();
    await menuElement.click();
  }
  
  async logout() {
    await this.navigateTo("Log Out");
    return new LoginPage(this.page);
  }
  async navigateToSavingAccountPage() {
    await this.navigateTo("Open New Account");
    return new OpenAccountPage(this.page);
  }

  async navigateToAccountOverviewPage() {
    await this.navigateTo("Accounts Overview");
    return new AccountsOverviewPage(this.page);
  }

  async navigateToTransferFund() {
    await this.navigateTo("Transfer Funds");
    return new TransferFundsPage(this.page);
  }

  async navigateToBillPay() {
    await this.navigateTo("Bill Pay");
    return new BillPayPage(this.page);
  }
  async getTotalAmmount() {
    const totalText = await this.totalBalance.innerText();
    const totalAmount = parseFloat(totalText.replace(/[^0-9.-]+/g,""));
    return totalAmount;
  }

}
