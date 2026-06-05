# 🔍 Linhas do Crime

<p align="center">
  <img src="https://img.shields.io/badge/versão-1.5.1-brightgreen?style=flat" />
  <img src="https://img.shields.io/badge/status-ativo-brightgreen?style=flat" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/dependências-nenhuma-brightgreen?style=flat" />
</p>

Jogo de dedução lógica baseado no livro **Murdle**, onde o(a) jogador(a) assume o papel de detetive e deve cruzar pistas, descartar suspeitos e apontar o culpado, a arma e o local do crime usando o Caderno de Anotações.

---

## Telas do Jogo

**Tela Inicial** — galeria animada com todas as imagens dos casos rolando em 3 faixas, filtro temático (Matrix verde / Academia sépia), hover revela cor original. Formulário de identificação com nome, gênero e escolha de modo.

**Introdução Cinematográfica** — tela preta com narração em áudio sincronizada ao texto. Frases aparecem com efeito de digitação no ritmo exato da narração. Música ambiente em loop com fade out ao final.

**Seleção de Modo** — Modo História (casos desbloqueados em sequência) e Modo Livre (todos disponíveis). Lista de casos com status de conclusão.

---

## Como Jogar

1. **Identifique-se** — Digite seu nome e escolha seu gênero. A narração se adapta automaticamente.
2. **Escolha o modo** — *Modo História* (casos em ordem, com introdução cinematográfica) ou *Modo Livre* (qualquer caso disponível).
3. **Analise as pistas** — Clique em uma pista para destacar visualmente os suspeitos, armas e locais relacionados.
4. **Use o Caderno de Anotações** — Cruze as informações no grid lógico:
   - `[ ]` Vazio → `✕` Descarte → `✓` Confirmado
   - Ao confirmar uma célula, os descartes são preenchidos automaticamente.
5. **Formule a acusação** — Clique em *Formular Acusação pelo Caderno* e declare o seu veredito.

> 💡 Cada suspeito possui apenas uma arma e esteve em um único local.

---

## Funcionalidades

- **Introdução cinematográfica** com narração em áudio sincronizada (karaoke), música ambiente e efeito de digitação
- **Narração por caso** — áudio toca automaticamente ao abrir cada caso, com botão 🔊 para pausar
- **Galeria animada** na tela inicial — 3 faixas infinitas com filtros temáticos e hover em cor real
- **Flexão de gênero automática** — marcadores `[nome]`, `[Detetive]` e `palavra(a)` adaptam o texto
- **Efeito de máquina de escrever** na narração do caso ao carregar
- **Spotlight nas pistas** — cartões não relacionados escurecem, relacionados acendem com glow
- **Preview de imagem** — hover sobre foto exibe imagem real em tamanho maior
- **Caderno de Anotações** com grid lógico (Suspeitos×Armas, Suspeitos×Locais, Locais×Armas) e auto-preenchimento
- **Dois temas visuais** alternáveis: *Matrix* (terminal verde/preto) e *Academia* (pergaminho, madeira e latão)
- **Controle de zoom** — três tamanhos de fonte para adaptação a diferentes monitores
- **Progresso salvo** em `localStorage` — nome, gênero, casos concluídos e estado do caderno
- **Modo História** com introdução e desbloqueio sequencial de casos

---

## Casos Disponíveis

| Número | Título | Status |
|---|---|---|
| #20260001 | Morte na Inauguração | ✅ Disponível |
| #20260002 | A Premiação Mortal | ✅ Disponível |
| #20260003 | O Apito Fora do Tempo | ✅ Disponível |

---

## Estrutura de Arquivos

```
Linhas-do-Crime/
├── index.html              # Tela inicial com galeria animada e versão dinâmica
├── intro.html              # Introdução cinematográfica com narração
├── jogo.html               # Tela principal do jogo
├── marcador.html           # Ferramenta auxiliar para gerar timestamps
├── versao.js               # Versão atual do jogo (fonte única)
├── style.css               # Estilos — tema Matrix e tema Academia
├── motor.js                # Motor do jogo (renderização, pistas, acusação)
├── caderno.js              # Caderno de Anotações (grid lógico)
├── progresso.js            # Progresso em localStorage
├── tema.js                 # Alternância de temas e controle de zoom
├── casos/
│   ├── registro.js         # Lista ordenada dos casos
│   ├── 20260001.js         # Dados do caso #20260001
│   └── 20260002.js         # Dados do caso #20260002
└── assets/
    ├── audio/              # Áudios: intro, casos e música ambiente
    └── imagens/locais/     # Imagens dos suspeitos, armas e locais (18 imagens)
```

---

## Tecnologias

- HTML5, CSS3 e JavaScript puro — sem frameworks ou dependências externas
- Fontes: [Share Tech Mono](https://fonts.google.com/specimen/Share+Tech+Mono) e [VT323](https://fonts.google.com/specimen/VT323) (Matrix) / [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) (Academia)
- Armazenamento: `localStorage` do navegador
- Áudio: HTML5 `<audio>` com suporte a MP3 e M4A

---

## Changelog

### v1.5.1 — 2026-06-04
- Narração em áudio do caso #20260003 "O Apito Fora do Tempo" adicionada

### v1.5.0 — 2026-06-04
- Caso #20260003 "O Apito Fora do Tempo" — assassinato no Maracanã com 3 suspeitos, 4 pistas e 9 novas imagens

### v1.4.0 — 2026-06-02
- Versão dinâmica na tela inicial lida de `versao.js` (fonte única, sempre sincronizada com o README)
- Versão exibida abaixo do painel em fonte preta, fora da caixa para não interferir no layout

### v1.3.0 — 2026-06-02
- Introdução cinematográfica com narração sincronizada, música ambiente e efeito de digitação
- Narração automática por caso com botão de mudo no cabeçalho
- Correção de letras cortadas no karaoke (completar frase anterior antes de iniciar nova)
- Galeria animada da tela inicial com faixas infinitas e hover em cor real

### v1.2.0 — 2026-06-02
- Galeria animada infinita na tela inicial com filtros temáticos
- Correção do scroll no GitHub Pages
- Controle de zoom com três níveis de fonte
- Faixa do meio da galeria corrigida

### v1.1.0 — 2026-06-02
- Caso #20260002 "A Premiação Mortal"
- Efeito de máquina de escrever na narração
- Caderno com acusação direta pelo grid lógico
- Sistema de temas Matrix e Academia

### v1.0.0 — 2026-06-02
- Lançamento com caso #20260001 "Morte na Inauguração"
- Caderno de Anotações com grid lógico
- Progresso em localStorage
- Flexão de gênero automática
