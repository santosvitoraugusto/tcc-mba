import { test, expect } from '@playwright/test';

test('buscar produto no dashboard', async ({ page }) => {
  await page.goto('http://localhost:5173');

  await page.getByTestId('campo-email')
    .fill('admin@test.com');

  await page.getByTestId('input-senha')
    .fill('123');

  await page.getByTestId('botao-login')
    .click();

  await expect(page).toHaveURL(/dashboard/);

  await page.getByTestId('campo-busca')
    .fill('Mouse');

  await expect(
    page.getByText('Mouse Logitech')
  ).toBeVisible();

  await expect(
    page.getByText('Notebook Dell')
  ).not.toBeVisible();

  await expect(
    page.getByText('Monitor LG')
  ).not.toBeVisible();
});