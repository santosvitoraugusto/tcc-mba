export async function preencherCampoInteligente(
  page,
  opcoes,
  valor
) {
  for (const seletor of opcoes) {
    try {
      const elemento = page.locator(seletor);

      if (await elemento.count()) {
        await elemento.fill(valor);

        console.log(`Seletor encontrado: ${seletor}`);

        return true;
      }
    } catch (erro) {
      console.log(`Falha no seletor: ${seletor}`);
    }
  }

  throw new Error('Nenhum seletor encontrado');
}