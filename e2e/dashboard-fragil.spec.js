import { test, expect } from '@playwright/test';

test('busca frágil no dashboard', async ({ page }) => {
  await page.goto('http://localhost:5173');

  await page.locator('input').nth(2)
    .fill('admin@test.com');

  await page.locator('input').nth(3)
    .fill('123');

  await page.locator('button').nth(0)
    .click();

  await expect(page).toHaveURL(/dashboard/);

  await page.locator('input').nth(0)
    .fill('Mouse');

  await expect(
    page.getByText('Mouse Logitech')
  ).toBeVisible();
});