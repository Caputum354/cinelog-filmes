# CineLog

Catálogo pessoal de filmes assistidos, redesenhado como uma experiência editorial de cinema. O projeto transforma uma página originalmente composta por HTML sem estilos em uma interface responsiva com hero visual, grade de pôsteres, filtros, busca instantânea e modal de detalhes.

## O que foi melhorado

- Nova identidade visual com estética de revista de cinema, tipografia editorial e paleta de alto contraste.
- Hero com banner, chamada principal e acesso rápido ao catálogo.
- Cards organizados em grade responsiva, com destaque para o primeiro filme.
- Layout adaptado para celulares, tablets e desktops.
- Busca por título sem recarregar a página.
- Filtros por **Todos**, **Ação**, **Aventura** e **Clássicos**.
- Modal acessível com pôster, gênero, descrição e número do filme.
- HTML semântico, meta description, `alt` descritivo nas imagens, foco visível e suporte a redução de movimento.
- Imagens carregadas com `loading="lazy"` nos cards para reduzir o custo inicial da página.

## Estrutura

```text
.
├── index.html       # Estrutura e conteúdo do catálogo
├── style.css        # Identidade visual, layout e responsividade
├── script.js        # Busca, filtros e modal de detalhes
├── README.md
└── img/             # Pôsteres, banner e favicon
```

## Como executar

O projeto não exige Node.js, framework ou etapa de build. Basta abrir `index.html` no navegador. Para executar com um servidor local:

```bash
python3 -m http.server 8000
```

Depois, visite [http://localhost:8000](http://localhost:8000).

## Como adicionar um filme

Duplique um elemento `.movie-card` em `index.html` e atualize os atributos `data-title`, `data-genre`, `data-number`, `data-image`, `data-description` e `data-meta`. O JavaScript usa esses dados para alimentar a busca, os filtros e o modal automaticamente.

Os gêneros aceitos pelos filtros atuais são `ação`, `aventura` e `clássico`. Para criar um filtro novo, adicione um botão com o atributo `data-filter` correspondente e use o mesmo valor no atributo `data-genre` dos cards.

## Tecnologias

- HTML5
- CSS3
- JavaScript moderno sem dependências
- Google Fonts: Manrope, Playfair Display e DM Mono

## Publicação

Por ser um site estático, o projeto pode ser publicado no GitHub Pages, Netlify ou Vercel. No GitHub Pages, selecione a branch `main` e a pasta raiz do repositório em **Settings > Pages**.

## Observação

Os pôsteres e imagens foram mantidos a partir do material original enviado para o projeto. Verifique direitos de uso antes de publicar o catálogo em ambiente público.
