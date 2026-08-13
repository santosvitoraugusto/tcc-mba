import { test, expect } from '@playwright/test';

test('login com sucesso', async ({ page }) => {
  await page.goto('http://localhost:5173');

  await page.fill(
    '[data-testid="campo-email"]',
    'admin@test.com'
  );

  await page.fill(
    '[data-testid="input-senha"]',
    '123'
  );

  await page.click(
    '[data-testid="botao-login"]'
  );

  await expect(
    page.locator('[data-testid="mensagem-login"]')
  ).toHaveText('Login realizado com sucesso!');
});

test('login com erro', async ({ page }) => {
  await page.goto('http://localhost:5173');

  await page.fill(
    '[data-testid="campo-email"]',
    'teste@erro.com'
  );

  await page.fill(
    '[data-testid="input-senha"]',
    '999'
  );

  await page.click(
    '[data-testid="botao-login"]'
  );

  await expect(
    page.locator('[data-testid="mensagem-login"]')
  ).toHaveText('Email ou senha inválidos');
});