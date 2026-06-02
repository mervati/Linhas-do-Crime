const Caderno = {

  caso: null,
  estado: null,

  // ─────────────────────────────────────────
  // INICIALIZAÇÃO
  // ─────────────────────────────────────────

  iniciar: function(caso) {
    this.caso = caso;
    if (!Motor.estado.caderno) {
      Motor.estado.caderno = { sa: {}, sl: {}, la: {} };
    }
    this.estado = Motor.estado.caderno;
  },

  abrir: function() {
    this.renderizar();
    document.getElementById("modal-caderno").classList.remove("oculto");
  },

  fechar: function() {
    document.getElementById("modal-caderno").classList.add("oculto");
    this.ocultarTooltip();
  },

  // ─────────────────────────────────────────
  // TOOLTIP
  // ─────────────────────────────────────────

  mostrarTooltip: function(texto, e) {
    const t = document.getElementById("caderno-tooltip");
    if (!t) return;
    t.textContent = texto;
    t.classList.remove("oculto");
    t.classList.add("visivel");
    this.moverTooltip(e);
  },

  moverTooltip: function(e) {
    const t = document.getElementById("caderno-tooltip");
    if (!t || t.classList.contains("oculto")) return;
    const m = 14;
    let x = e.clientX + m;
    let y = e.clientY + m;
    if (x + 220 > window.innerWidth)  x = e.clientX - 220 - m;
    if (y + 36  > window.innerHeight) y = e.clientY - 36  - m;
    t.style.left = x + "px";
    t.style.top  = y + "px";
  },

  ocultarTooltip: function() {
    const t = document.getElementById("caderno-tooltip");
    if (!t) return;
    t.classList.remove("visivel");
    t.classList.add("oculto");
  },

  // ─────────────────────────────────────────
  // RENDERIZAÇÃO
  // ─────────────────────────────────────────

  renderizar: function() {
    const container = document.getElementById("caderno-conteudo");
    if (!container) return;
    container.innerHTML = "";

    const s = this.caso.suspeitos;
    const a = this.caso.armas;
    const l = this.caso.locais;

    const wrapper = document.createElement("div");
    wrapper.className = "caderno-grids";

    wrapper.appendChild(this.criarGrid("sa", "Suspeitos × Armas",  s, a));
    wrapper.appendChild(this.criarGrid("sl", "Suspeitos × Locais", s, l));
    wrapper.appendChild(this.criarGrid("la", "Locais × Armas",     l, a));

    container.appendChild(wrapper);
  },

  // Cria uma célula de cabeçalho com ícone (imagem) e tooltip
  criarThIcone: function(item) {
    const th  = document.createElement("th");
    th.className = "caderno-th-icone";

    const img = document.createElement("img");
    img.src   = item.imagem || ("assets/imagens/locais/" + item.id + ".png");
    img.alt   = item.nome;
    img.className = "caderno-icone";
    th.appendChild(img);

    th.addEventListener("mouseenter", function(e) { Caderno.mostrarTooltip(item.nome, e); });
    th.addEventListener("mousemove",  function(e) { Caderno.moverTooltip(e); });
    th.addEventListener("mouseleave", function()  { Caderno.ocultarTooltip(); });

    return th;
  },

  criarGrid: function(gridId, titulo, linhas, colunas) {
    const secao = document.createElement("div");
    secao.className = "caderno-secao";

    // Cabeçalho da seção: título + botão limpar
    const cabecalho = document.createElement("div");
    cabecalho.className = "caderno-secao-cabecalho";

    const sub = document.createElement("p");
    sub.className = "caderno-subtitulo";
    sub.textContent = titulo;
    cabecalho.appendChild(sub);

    const btnLimpar = document.createElement("button");
    btnLimpar.className = "btn-limpar-grid";
    btnLimpar.textContent = "Limpar";
    btnLimpar.addEventListener("click", function() { Caderno.limparGrid(gridId); });
    cabecalho.appendChild(btnLimpar);

    secao.appendChild(cabecalho);

    const table = document.createElement("table");
    table.className = "caderno-grid";

    // ── Cabeçalho: célula vazia no canto + ícones das colunas ──
    const thead   = document.createElement("thead");
    const trHead  = document.createElement("tr");
    const thVazio = document.createElement("th");
    thVazio.className = "caderno-th-vazio";
    trHead.appendChild(thVazio);

    colunas.forEach(function(c) {
      trHead.appendChild(Caderno.criarThIcone(c));
    });
    thead.appendChild(trHead);
    table.appendChild(thead);

    // ── Corpo: ícone da linha + células clicáveis ──
    const tbody = document.createElement("tbody");
    const self  = this;

    linhas.forEach(function(linha) {
      const tr = document.createElement("tr");
      tr.appendChild(Caderno.criarThIcone(linha));

      colunas.forEach(function(col) {
        const td  = document.createElement("td");
        const key = linha.id + "_" + col.id;

        td.dataset.grid = gridId;
        td.dataset.row  = linha.id;
        td.dataset.col  = col.id;
        td.dataset.key  = key;

        const valor = (self.estado[gridId] && self.estado[gridId][key]) || "";
        self.aplicarEstado(td, valor);

        td.addEventListener("click", function() { self.clicarCelula(td, gridId); });
        tr.appendChild(td);
      });

      tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    secao.appendChild(table);
    return secao;
  },

  // ─────────────────────────────────────────
  // INTERAÇÃO
  // ─────────────────────────────────────────

  clicarCelula: function(td, gridId) {
    const key     = td.dataset.key;
    const atual   = (this.estado[gridId] && this.estado[gridId][key]) || "";
    const proximo = atual === "" ? "X" : atual === "X" ? "V" : "";

    if (!this.estado[gridId]) this.estado[gridId] = {};
    this.estado[gridId][key] = proximo;
    this.aplicarEstado(td, proximo);

    if (proximo === "V") this.autoFill(td, gridId);

    Progresso.salvarEstadoCaso(this.caso.id, Motor.estado);
  },

  aplicarEstado: function(td, valor) {
    td.classList.remove("celula-x", "celula-v");
    if (valor === "X") {
      td.classList.add("celula-x");
      td.innerHTML = "<span>✕</span>";
    } else if (valor === "V") {
      td.classList.add("celula-v");
      td.innerHTML = "<span>✓</span>";
    } else {
      td.innerHTML = "";
    }
  },

  // ─────────────────────────────────────────
  // ACUSAÇÃO PELO CADERNO
  // ─────────────────────────────────────────

  // Lê do DOM quais células têm ✓ e retorna { suspeito, arma, local }
  lerConfirmados: function() {
    const r = { suspeito: null, arma: null, local: null };

    document.querySelectorAll(".celula-v").forEach(function(td) {
      const grid = td.dataset.grid;
      const row  = td.dataset.row;
      const col  = td.dataset.col;

      if (grid === "sa") { r.suspeito = r.suspeito || row; r.arma  = r.arma  || col; }
      if (grid === "sl") { r.suspeito = r.suspeito || row; r.local = r.local || col; }
      if (grid === "la") { r.local    = r.local    || row; r.arma  = r.arma  || col; }
    });

    return r;
  },

  // Busca o nome completo de um item pelo id
  getNome: function(tipo, id) {
    if (!id) return null;
    const listas = { suspeito: "suspeitos", arma: "armas", local: "locais" };
    const lista  = this.caso[listas[tipo]];
    const item   = lista.find(function(i) { return i.id === id; });
    return item ? item.nome : id;
  },

  // Exibe o popup de confirmação com os itens marcados com ✓
  acusarPeloCaderno: function() {
    const ids      = this.lerConfirmados();
    const nomes    = {
      suspeito: this.getNome("suspeito", ids.suspeito),
      arma:     this.getNome("arma",     ids.arma),
      local:    this.getNome("local",    ids.local)
    };

    const container = document.getElementById("popup-itens-confirmados");
    container.innerHTML = "";

    const itens = [
      { rotulo: "Suspeito",  icone: "👤", valor: nomes.suspeito },
      { rotulo: "Arma",      icone: "🔪", valor: nomes.arma     },
      { rotulo: "Local",     icone: "📍", valor: nomes.local    }
    ];

    itens.forEach(function(item) {
      const linha = document.createElement("div");
      linha.className = "popup-item" + (item.valor ? "" : " popup-item-vazio");
      linha.innerHTML =
        "<span class='popup-item-icone'>" + item.icone + "</span>" +
        "<span class='popup-item-rotulo'>" + item.rotulo + ":</span>" +
        "<span class='popup-item-valor'>" + (item.valor || "Não identificado(a)") + "</span>";
      container.appendChild(linha);
    });

    // Desativa o botão declarar se faltar algum item
    const completo = ids.suspeito && ids.arma && ids.local;
    const btnDeclarar = document.getElementById("btn-popup-declarar");
    btnDeclarar.disabled = !completo;

    const pergunta = document.getElementById("popup-pergunta");
    if (pergunta) {
      pergunta.textContent = completo
        ? "Deseja declarar esta acusação?"
        : "Preencha todos os campos antes de declarar.";
    }

    document.getElementById("popup-acusacao-caderno").classList.remove("oculto");
  },

  // ─────────────────────────────────────────
  // LIMPAR
  // ─────────────────────────────────────────

  limparGrid: function(gridId) {
    this.estado[gridId] = {};
    const self = this;
    document.querySelectorAll("td[data-grid='" + gridId + "']").forEach(function(td) {
      self.aplicarEstado(td, "");
    });
    Progresso.salvarEstadoCaso(this.caso.id, Motor.estado);
  },

  limparTudo: function() {
    this.limparGrid("sa");
    this.limparGrid("sl");
    this.limparGrid("la");
  },

  // ─────────────────────────────────────────
  // REGRA MURDLE: auto-fill com X
  // ─────────────────────────────────────────

  autoFill: function(tdConfirmado, gridId) {
    const row  = tdConfirmado.dataset.row;
    const col  = tdConfirmado.dataset.col;
    const self = this;

    document.querySelectorAll("td[data-grid='" + gridId + "']").forEach(function(td) {
      if (td === tdConfirmado) return;
      if (td.dataset.row === row || td.dataset.col === col) {
        const key   = td.dataset.key;
        const valor = (self.estado[gridId] && self.estado[gridId][key]) || "";
        if (valor === "") {
          if (!self.estado[gridId]) self.estado[gridId] = {};
          self.estado[gridId][key] = "X";
          self.aplicarEstado(td, "X");
        }
      }
    });
  }

};
