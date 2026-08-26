import { test, expect } from '@playwright/test';

test('cadastro com sincronização robusta', async ({ page }) => {
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

  await page.getByTestId('input-produto')
    .fill('Teclado Mecânico');

  await page.getByTestId('input-quantidade')
    .fill('10');

  await page.getByTestId('botao-salvar')
    .click();

  await expect(
    page.getByTestId('botao-salvar')
  ).toHaveText('Salvando...');

  await expect(
    page.getByRole('heading', { name: 'Novo Produto' })
  ).not.toBeVisible();

  const linhaProduto = page.getByRole('row').filter({
    hasText: 'Teclado Mecânico'
  });

  await expect(linhaProduto).toBeVisible();

  await expect(
    linhaProduto.getByText('10', { exact: true })
  ).toBeVisible();
});