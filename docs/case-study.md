# Estudo de caso — Vent Rio Equipamentos

## Contexto

A Vent Rio trabalha com uma linha ampla de ventilação, exaustão, climatização e locação. O projeto precisava apresentar essa variedade sem dispersar a pessoa usuária em uma navegação excessivamente técnica ou longa.

## Objetivo de produto

Criar uma presença institucional clara para apoiar a descoberta de soluções por uso, categoria e produto, dando visibilidade à capacidade industrial, à locação e aos caminhos de atendimento.

## Abordagem de design

### Arquitetura de informação

- Home com contexto de negócio, aplicações, produtos em destaque, locação, processo e CTA de contato.
- Navegação para produtos, ventiladores, exaustores, empresa, qualidade, downloads e contato.
- Páginas de produto estruturadas por dados e especificações reutilizáveis.

### Interface

- Hierarquia visual voltada a catálogos com muitas famílias de produto.
- Cartões de aplicação que conectam uma necessidade operacional à solução disponível.
- CTA de orçamento, WhatsApp e locação distribuídos de forma contextual.
- Componentes responsivos com legibilidade preservada em telas menores.

### Implementação

O front-end foi construído em React, com dados de catálogo separados da interface. Contextos tratam tema e orçamento; i18next mantém as traduções; e os componentes cobrem header, footer, breadcrumbs, busca, produto, especificações e widgets de contato.

## O que é comprovável neste repositório

- Interface React/Vite com build reproduzível.
- Layout responsivo registrado em capturas reais do site publicado.
- Catálogo e especificações organizados como dados.
- Estrutura de tradução PT-BR e inglês.
- Lint e build disponíveis no projeto e em CI.

## Limites do case study

Não há alegação de métricas de conversão, SEO, acessos, faturamento ou resultados comerciais. Integrações de e-mail, transporte e deploy foram removidas desta cópia pública. O objetivo é documentar uma entrega real de design e front-end, sem expor a operação da empresa.

## Links

- Produção: <https://www.ventrio.ind.br/>
- Capturas: [desktop](screenshots/home-desktop.png), [mobile](screenshots/home-mobile.png) e [soluções](screenshots/solutions-desktop.png)
