import { test, expect } from '@playwright/test';

test('impedir cadastro de produto duplicado', async ({ page }) => {
  await page.goto('http://localhost:5173');

  await page.getByTestId('campo-email')
    .fill('admin@test.com');

  await page.getByTestId('input-senha')
    .fill('123');

  await page.getByTestId('botao-login')
    .click();

  await expect(page).toHaveURL(/dashboard/);

  // Primeiro cadastro
  await page.getByTestId('botao-novo-produto')
    .click();

  await page.getByTestId('input-produto')
    .fill('Teclado Mecânico');

  await page.getByTestId('input-quantidade')
    .fill('10');

  await page.getByTestId('botao-salvar')
    .click();

  await expect(
    page.getByText('Teclado Mecânico')
  ).toBeVisible();

  // Segunda tentativa com o mesmo produto
  await page.getByTestId('botao-novo-produto')
    .click();

  await page.getByTestId('input-produto')
    .fill('Teclado Mecânico');

  await page.getByTestId('input-quantidade')
    .fill('5');

  page.once('dialog', async (dialog) => {
    expect(dialog.message()).toBe('Produto já cadastrado');
    await dialog.accept();
  });

  await page.getByTestId('botao-salvar')
    .click();

  // Aguarda o processamento do cadastro duplicado
  await expect(
    page.getByTestId('botao-salvar')
  ).toHaveText('Confirmar');

  const linhasProduto = page.getByRole('row').filter({
    hasText: 'Teclado Mecânico'
  });

  await expect(linhasProduto).toHaveCount(1);
});