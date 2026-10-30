# VÉLO — Mobilidade em outro ritmo

Catálogo digital de veículos elétricos leves: scooters, patinetes, e-bikes, triciclos, monociclos e mopeds.

## Documentação

- [VÉLO: marca e produto](VELO.md) — proposta, público, escopo, direção visual e princípios de conteúdo.
- [Arquitetura e estrutura](docs/ARQUITETURA.md) — implementação atual, responsabilidades dos arquivos, estado, publicação e limitações conhecidas.

## Ver o site

O GitHub Pages publica automaticamente o conteúdo de `dist/` a cada atualização da branch `main`.

## Executar localmente

Abra `dist/index.html` no navegador. O projeto não precisa de dependências ou etapa de build.

## Estrutura

- `dist/index.html`: página e estrutura principal.
- `dist/site.css`: identidade visual, layout mobile-first, breakpoints e movimento.
- `dist/catalog.css`: interações e estilos do catálogo.
- `dist/catalog.js`: modelos, filtros, busca, comparação, favoritos e seleção de produtos.
- `docs/ARQUITETURA.md`: referência técnica do projeto como está implementado.
- `VELO.md`: briefing persistente da marca e do produto.
- `.openai/hosting.json`: configuração do projeto Sites.

As imagens e algumas especificações vêm de páginas de fabricantes e revendedores. O endereço de referência de cada modelo está associado no catálogo; confirme preço, versão, disponibilidade e ficha técnica diretamente com a loja.
