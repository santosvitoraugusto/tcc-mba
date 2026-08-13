import { test, expect } from '@playwright/test';

test('login usando hierarquia estrutural', async ({ page }) => {
  await page.goto('http://localhost:5173');

  await page.locator('input').nth(1).fill('admin@test.com');

  await page.locator('input').nth(2).fill('123');

  await page.locator('button').click();

  await expect(
    page.getByText('Login realizado com sucesso!')
  ).toBeVisible();
});