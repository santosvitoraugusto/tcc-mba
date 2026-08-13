import { test, expect } from '@playwright/test';

test('login frágil com placeholder', async ({ page }) => {
  await page.goto('http://localhost:5173');

  await page
    .getByPlaceholder('Email corporativo')
    .fill('admin@test.com');

  await page
    .getByPlaceholder('Senha')
    .fill('123');

  await page
    .getByText('Entrar')
    .click();

  await expect(
    page.getByText('Login realizado com sucesso!')
  ).toBeVisible();
});