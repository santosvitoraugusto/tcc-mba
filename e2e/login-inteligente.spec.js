import { test, expect } from '@playwright/test';

import {
  preencherCampoInteligente
} from '../utils/smartLocator.js';

test('login inteligente com fallback', async ({ page }) => {
  await page.goto('http://localhost:5173');

  await preencherCampoInteligente(
    page,
    [
      '[data-testid="input-email"]',
      '[data-testid="campo-email"]',
      'input[placeholder="Email corporativo"]',
      'input[placeholder="Digite seu email"]'
    ],
    'admin@test.com'
  );

  await preencherCampoInteligente(
    page,
    [
      '[data-testid="input-senha"]',
      'input[type="password"]'
    ],
    '123'
  );

  await page.click('[data-testid="botao-login"]');

  await expect(
    page.locator('[data-testid="mensagem-login"]')
  ).toHaveText('Login realizado com sucesso!');
});