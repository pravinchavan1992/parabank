import { expect } from "@playwright/test";

export class BillPayPage {
  constructor(page) {
    this.page = page;
    this.payeeNameInput = page.locator('input[name="payee.name"]');
    this.addressInput = page.locator('input[name="payee.address.street"]');
    this.cityInput = page.locator('input[name="payee.address.city"]');
    this.stateInput = page.locator('input[name="payee.address.state"]');
    this.zipCodeInput = page.locator('input[name="payee.address.zipCode"]');
    this.phoneInput = page.locator('input[name="payee.phoneNumber"]');
    this.accountInput = page.locator('input[name="payee.accountNumber"]');
    this.verifyAccountInput = page.locator('input[name="verifyAccount"]');
    this.amountInput = page.locator('input[name="amount"]');
    this.fromAccountSelect = page.locator('select[name="fromAccountId"]');
    this.sendPaymentBtn = page.locator('input[value="Send Payment"]');

    this.confirmationMsg = page.locator('#rightPanel').getByText('Bill Payment Complete');
  }

  async payBill(payee, amount, fromAccountId) {
    await this.payeeNameInput.fill(`${payee.firstName} ${payee.lastName}`);
    await this.addressInput.fill(payee.address);
    await this.cityInput.fill(payee.city);
    await this.stateInput.fill(payee.state);
    await this.zipCodeInput.fill(payee.zipCode);
    await this.phoneInput.fill(payee.phone);
    await this.accountInput.fill(fromAccountId);
    await this.verifyAccountInput.fill(fromAccountId);
    await this.amountInput.fill(amount.toString());
    await this.fromAccountSelect.selectOption(fromAccountId);

    await this.sendPaymentBtn.click();

    await expect(this.confirmationMsg).toBeVisible();
  }
}
