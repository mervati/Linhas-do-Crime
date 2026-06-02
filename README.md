# 🔍 Linhas do Crime

<p align="center">
  <img src="https://img.shields.io/badge/versão-1.2.0-brightgreen?style=flat" />
  <img src="https://img.shields.io/badge/status-ativo-brightgreen?style=flat" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/dependências-nenhuma-brightgreen?style=flat" />
</p>

Jogo de dedução lógica baseado no livro **Murdle**, onde o(a) jogador(a) assume o papel de detetive e deve cruzar pistas, descartar suspeitos e apontar o culpado, a arma e o local do crime usando o Caderno de Anotações.

---

## Como Jogar

1. **Identifique-se** — Digite seu nome e escolha seu gênero. A narração se adapta automaticamente.
2. **Escolha o modo** — *Modo História* (casos em ordem, desbloqueando um a um) ou *Modo Livre* (qualquer caso disponível).
3. **Analise as pistas** — Clique em uma pista para destacar visualmente os suspeitos, armas e locais relacionados.
4. **Use o Caderno de Anotações** — Cruze as informações no grid lógico:
   - `[ ]` Vazio → `✕` Descarte → `✓` Confirmado
   - Ao confirmar uma célula, os descartes são preenchidos automaticamente.
5. **Formule a acusação** — Clique em *Formular Acusação pelo Caderno* e declare o seu veredito.

> 💡 Cada suspeito possui apenas uma arma e esteve em um único local.

---

## Funcionalidades

- **Galeria animada** na tela inicial — imagens de todos os casos rolando em 3 faixas infinitas com velocidades e direções diferentes; filtro temático (verde Matrix ou sépia Academia); cor original ao passar o mouse
- **Flexão de gênero automática** — marcadores `[nome]`, `[Detetive]` e `palavra(a)` adaptam o texto ao gênero escolhido
- **Efeito de máquina de escrever** na narração do caso ao carregar
- **Spotlight nas pistas** — ao clicar, cartões não relacionados escurecem e os relacionados acendem com glow
- **Preview de imagem** — ao passar o mouse sobre a foto de um suspeito/arma/local, exibe a imagem real em tamanho maior sem filtro
- **Caderno de Anotações** com grid lógico (Suspeitos×Armas, Suspeitos×Locais, Locais×Armas) e auto-preenchimento de descartes; acusação direta pelo caderno
- **Dois temas visuais** alternáveis: *Matrix* (terminal hacker verde/preto) e *Academia* (pergaminho, madeira e latão)
- **Progresso salvo** em `localStorage` — nome, gênero, casos concluídos e estado do caderno
- **Modo História** com desbloqueio sequencial de casos

---

## Casos Disponíveis

| Número | Título | Status |
|---|---|---|
| #20260001 | Morte na Inauguração | ✅ Disponível |
| #20260002 | A Premiação Mortal | ✅ Disponível |

---

## Estrutura de Arquivos

```
Linhas-do-Crime/
├── index.html              # Tela inicial (cadastro, modo, galeria, instruções)
├── jogo.html               # Tela do jogo
├── style.css               # Estilos — tema Matrix e tema Academia
├── motor.js                # Motor do jogo (renderização, pistas, acusação)
├── caderno.js              # Caderno de Anotações (grid lógico)
├── progresso.js            # Progresso em localStorage
├── tema.js                 # Alternância de temas
├── pixelart.js             # Pixel arts SVG (reservado)
├── casos/
│   ├── registro.js         # Lista ordenada dos casos
│   ├── 20260001.js         # Dados do caso #20260001
│   └── 20260002.js         # Dados do caso #20260002
└── assets/
    └── imagens/
        └── locais/         # Imagens dos suspeitos, armas e locais (18 imagens)
```

---

## Tecnologias

- HTML5, CSS3 e JavaScript puro — sem frameworks ou dependências externas
- Fontes: [Share Tech Mono](https://fonts.google.com/specimen/Share+Tech+Mono) e [VT323](https://fonts.google.com/specimen/VT323) (Matrix) / [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) (Academia)
- Armazenamento: `localStorage` do navegador

---

## Changelog

### v1.2.0 — 2026-06-02
- Galeria animada infinita na tela inicial com imagens dos casos, filtros por tema e hover em cor real
- Correção do scroll no GitHub Pages com position:fixed e overflow:hidden no html
- Redução das fontes para caber tudo em uma tela sem scroll
- Faixa do meio da galeria corrigida (posição inicial calculada corretamente)
- Subtítulo do tema Academia com cor legível sobre o fundo dinâmico

### v1.1.0 — 2026-06-02
- Adicionado caso #20260002 "A Premiação Mortal"
- Efeito de máquina de escrever na narração do caso
- Caderno de Anotações com acusação direta pelo grid lógico
- Sistema de temas Matrix e Academia com alternância persistida
- Spotlight nas pistas com escurecimento dos cartões não relacionados

### v1.0.0 — 2026-06-02
- Lançamento inicial com caso #20260001 "Morte na Inauguração"
- Sistema de temas Matrix e Academia
- Caderno de Anotações com grid lógico e auto-preenchimento
- Progresso salvo em localStorage
- Flexão de gênero automática na narração
