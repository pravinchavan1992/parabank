import { expect } from '@playwright/test';

export class AccountsOverviewPage {
  constructor(page) {
    this.page = page;
    this.accountsTable = page.locator('#accountTable');
  }

  async verifyAccount(accountId) {
    await expect(this.accountsTable.locator(`a:has-text("${accountId}")`)).toBeVisible();
  }

  async getBalance(accountId) {
    // Use fresh locator each time to avoid stale reference
    const row = this.page.locator(`#accountTable tr:has(a:has-text("${accountId}"))`);
    
    // Wait for row to appear
    await expect(row).toBeVisible({ timeout: 10000 });
  
    const balanceText = await row.locator('td').nth(1).innerText();
  
    // Convert string like "$100.00" to number
    const balance = parseFloat(balanceText.replace(/[^0-9.-]+/g, ""));
    return balance;
  }

  async validateBalance(accountNumber) {
    const accountRow = this.page.locator(`//a[text()='${accountNumber}']/ancestor::tr`);

    const balanceText = await accountRow.locator('td').nth(1).innerText();

    expect(balanceText).toBeTruthy();
  
    expect(balanceText).toBe('$100.00');
  
    return balanceText;
  }
}
