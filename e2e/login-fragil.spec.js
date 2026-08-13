import { test, expect } from '@playwright/test';

test('login frágil com placeholder', async ({ page }) => {
  await page.goto('http://localhost:5173');

  await page
    .getByPlaceholder('Digite seu email')
    .fill('admin@test.com');

  await page
    .getByPlaceholder('Senha')
    .fill('123');

  await page
    .getByText('Acessar')
    .click();

  await expect(
    page.getByText('Login realizado com sucesso!')
  ).toBeVisible();
});