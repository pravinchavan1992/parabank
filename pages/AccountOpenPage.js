import { expect } from '@playwright/test';

export class OpenAccountPage {
  constructor(page) {
    this.page = page;
    this.accountType = page.locator('select#type');
    this.fromAccountId = page.locator('#fromAccountId');
    this.openAccountBtn = page.getByRole('button', { name: 'Open New Account' })
    this.newAccountId = page.locator('#newAccountId');
  }

  async openSavingsAccount(accountType) {
    const [response] = await Promise.all([
      this.page.waitForResponse(
        (res) =>
          res.url().includes("/accounts") &&
          res.status() === 200
      ),
      this.openAccountBtn.click(),
    ]);
    expect(response.ok()).toBeTruthy();
    await this.accountType.selectOption(accountType);
    await expect(this.openAccountBtn).toBeVisible();
    await this.openAccountBtn.click({ force: true });
    await expect(this.newAccountId).toBeVisible();
    const accountId = await this.newAccountId.innerText();
    await expect(this.newAccountId, `New ${accountType} Account ID should be visible`).toBeVisible();
    return accountId.trim();
  }
}
