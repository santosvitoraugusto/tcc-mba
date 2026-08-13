import { test, expect } from '@playwright/test';

test('abrir modal de novo produto', async ({ page }) => {
  await page.goto('http://localhost:5173');

  await page.getByTestId('campo-email')
    .fill('admin@test.com');

  await page.getByTestId('input-senha')
    .fill('123');

  await page.getByTestId('botao-login')
    .click();

  await expect(page).toHaveURL(/dashboard/);

  await page.getByTestId('botao-novo-produto')
    .click();

  await expect(
    page.getByRole('heading', { name: 'Novo Produto' })
  ).toBeVisible();

  await page.getByTestId('input-produto')
    .fill('Teclado Mecânico');

  await page.getByTestId('input-quantidade')
    .fill('10');

  await page.getByTestId('botao-salvar')
    .click();

  await expect(
    page.getByRole('heading', { name: 'Novo Produto' })
  ).not.toBeVisible();
});