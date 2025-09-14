// @ts-nocheck
import { expect } from "@playwright/test";
import { test } from "../fixtures/parabankFixture.js";

test("Full ParaBank UI + API Flow", async ({ user, loginPage, homePage, request }) => {
 
  // Verify navigation
  await homePage.verifyNavigationMenu();

  // Open Savings Account
  await loginPage.login({ username: user.username, password: user.password });
  const openAccountPage = await homePage.navigateToSavingAccountPage();
  user.savingAccountId = await openAccountPage.openSavingsAccount("SAVINGS");
  expect(user.savingAccountId).toBeTruthy();

  // Validate balance
  const accountsOverviewPage = await homePage.navigateToAccountOverviewPage();
  const balance = await accountsOverviewPage.getBalance(user.savingAccountId);
  expect.soft(balance).toBe(100);

  // Transfer funds
  const transferFundsPage = await homePage.navigateToTransferFund();
  await transferFundsPage.transfer(100, user.savingAccountId);
  await homePage.navigateToAccountOverviewPage();
  const updatedBalance = await accountsOverviewPage.getBalance(user.savingAccountId);
  expect(updatedBalance).toBeLessThan(balance);

  // Bill pay
  const billPayPage = await homePage.navigateToBillPay();
  await billPayPage.payBill(user, 50, user.savingAccountId);

  // API validation
  const response = await request.get(
    `/parabank/services/bank/accounts/${user.savingAccountId}/transactions/amount/100`,
    { headers: { accept: "application/json" } }
  );
  expect(response.ok()).toBeTruthy();

  const txn = (await response.json()).find(t => t.amount == 100);
  expect(txn).toBeDefined();
});
