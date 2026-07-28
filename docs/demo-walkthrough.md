# Roteiro de demonstração — Vent Rio Equipamentos

Este roteiro existe para que uma pessoa avaliando o portfólio consiga entender a entrega em poucos minutos, sem depender de uma leitura extensa do código.

## Avaliação em dois minutos

1. Abra [ventrio.ind.br](https://www.ventrio.ind.br/) e observe como as categorias industriais e comerciais aparecem antes da seleção de um produto específico.
2. Percorra **Soluções por Aplicação** e siga para **Produtos**. A navegação parte da necessidade — galpão, climatização, obra, evento ou exaustão — e conduz ao catálogo.
3. Abra um produto para observar a separação entre interface, dados de catálogo e especificações técnicas.
4. Reduza a janela ou use o modo responsivo. Navegação, CTAs e leitura de catálogo continuam disponíveis em mobile.

## O que procurar no código

| Pergunta de revisão | Onde observar |
| --- | --- |
| Como o catálogo escala? | `src/data/`, `src/components/ProductDetail.jsx` e `src/components/ProductTechnicalSpecs.jsx` |
| Como a navegação e páginas foram separadas? | `src/pages/` e `src/components/` |
| Como estado transversal é tratado? | `src/contexts/ThemeContext.jsx` e `src/contexts/QuoteContext.jsx` |
| Como o conteúdo é preparado para idioma? | `src/i18n/` |
| Como a cópia pública evita tocar na operação? | `scripts/verify-portfolio-release.mjs` e `docs/portfolio-release.md` |

## Prova e limites

As imagens deste repositório são capturas do site publicado em 28 de julho de 2026. O case study comprova interface, estrutura de front-end e apresentação pública; não declara métricas comerciais, acessos ou resultados de conversão. A cópia do repositório não envia e-mails nem leads para a empresa.
