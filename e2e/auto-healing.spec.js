import { test, expect } from '@playwright/test';

import {
  preencherCampoInteligente
} from '../utils/smartLocator.js';

test('recuperar localização do campo após alteração de identificador', async ({ page }) => {
  await page.goto('http://localhost:5173');

  /*
   * O primeiro seletor representa um identificador anterior
   * que não existe mais na interface.
   *
   * Caso ele não seja encontrado, a estratégia tenta
   * automaticamente as opções seguintes.
   */
  await preencherCampoInteligente(
    page,
    [
      '[data-testid="input-email"]',
      '[data-testid="campo-email"]',
      'input[placeholder="Digite seu email"]'
    ],
    'admin@test.com'
  );

  await preencherCampoInteligente(
    page,
    [
      '[data-testid="campo-senha"]',
      '[data-testid="input-senha"]',
      'input[type="password"]'
    ],
    '123'
  );

  await page.getByTestId('botao-login')
    .click();

  await expect(
    page.getByText('Login realizado com sucesso!')
  ).toBeVisible();

  await expect(page).toHaveURL(/dashboard/);
});