import { expect } from "@playwright/test";

export class TransferFundsPage {
  constructor(page) {
    this.page = page;
    this.amount = page.locator('input[type="text"]'); // ✅ fixed
    this.fromAccount = page.locator("select#fromAccountId");
    this.toAccount = page.locator("select#toAccountId");
    this.transferBtn = page.getByRole("button", { name: "Transfer" });
    this.resultMsg = page.locator("#showResult");
  }

  async transfer(amount, fromAccountNumber) {
    await this.toAccount.waitFor({ state: "visible" });

    await this.amount.fill(amount.toString());
    await this.fromAccount.selectOption(fromAccountNumber);

    const options = await this.toAccount.locator("option").all();
    let toAccount = null;
    for (const option of options) {
      const value = await option.getAttribute("value");
      if (value && value !== fromAccountNumber) {
        toAccount = value;
        break;
      }
    }

    await this.toAccount.selectOption(toAccount);
    await expect(this.transferBtn).toBeEnabled();
    await this.transferBtn.click();

    await expect(this.resultMsg).toHaveText(/Transfer Complete/);
  }
}

