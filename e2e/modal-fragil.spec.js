import { test, expect } from '@playwright/test';

test('modal frágil usando estrutura e texto', async ({ page }) => {
  await page.goto('http://localhost:5173');

  await page.locator('input').nth(2)
    .fill('admin@test.com');

  await page.locator('input').nth(3)
    .fill('123');

  await page.locator('button').nth(0)
    .click();

  await expect(page).toHaveURL(/dashboard/);

  await page.getByText('Novo Produto', { exact: true })
    .click();

  await page
    .getByPlaceholder('Descrição do produto')
    .fill('Teclado Mecânico');

  await page
    .getByPlaceholder('Quantidade')
    .fill('10');

  await page
    .getByText('Confirmar', { exact: true })
    .click();

  await expect(
    page.getByRole('heading', { name: 'Novo Produto' })
  ).not.toBeVisible();
});