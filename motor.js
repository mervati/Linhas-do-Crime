const Motor = {

  // Caso e jogador ativos no momento
  caso: null,
  jogador: null,
  estado: null,
  pistaAtiva: null,

  // ─────────────────────────────────────────
  // PROCESSAMENTO DE TEXTO
  // ─────────────────────────────────────────

  // Substitui [nome], [Detetive] e palavra(sufixo) no texto
  processarTexto: function(texto) {
    const nome = this.jogador.nome;
    const genero = this.jogador.genero; // "M" ou "F"

    // Troca [Detetive] por "Detetive [nome]" antes de processar [nome]
    texto = texto.replace(/\[Detetive\]/g, "Detetive " + nome);

    // Troca [nome] pelo nome do jogador
    texto = texto.replace(/\[nome\]/g, nome);

    // Troca palavra(sufixo) conforme o gênero
    // Exemplo: "convidado(a)" → masculino: "convidado" / feminino: "convidada"
    texto = texto.replace(/(\w+)\(([^)]+)\)/g, function(match, base, sufixo) {
      if (genero === "M") {
        // Masculino: remove o sufixo entre parênteses
        return base;
      } else {
        // Feminino: remove as últimas letras da base (igual ao tamanho do sufixo) e adiciona o sufixo
        const novaBase = base.slice(0, base.length - sufixo.length);
        const resultado = novaBase + sufixo;
        // Preserva maiúscula se a base começava com letra maiúscula
        if (base[0] === base[0].toUpperCase() && base[0] !== base[0].toLowerCase()) {
          return resultado.charAt(0).toUpperCase() + resultado.slice(1);
        }
        return resultado;
      }
    });

    return texto;
  },

  // ─────────────────────────────────────────
  // INICIALIZAÇÃO
  // ─────────────────────────────────────────

  // Carrega um caso e monta toda a tela do jogo
  iniciar: function(caso, jogador) {
    this.caso = caso;
    this.jogador = jogador;
    this.estado = Progresso.carregarEstadoCaso(caso.id);

    this.renderizarHistoria();
    this.renderizarSuspeitos();
    this.renderizarArmas();
    this.renderizarLocais();
    this.renderizarPistas();
    this.restaurarEstado();
    this.ativarPreviewImagens();
  },

  // ─────────────────────────────────────────
  // RENDERIZAÇÃO — monta os cartões na tela
  // ─────────────────────────────────────────

  renderizarHistoria: function() {
    const el = document.getElementById("historia");
    if (!el) return;
    const texto = this.processarTexto(this.caso.historia);
    el.innerHTML = "";
    this.digitarTexto(el, texto);
  },

  digitarTexto: function(el, texto) {
    let i = 0;

    // Cursor piscando
    const cursor = document.createElement("span");
    cursor.className = "cursor-digitando";
    cursor.textContent = "▌";
    el.appendChild(cursor);

    const intervalo = setInterval(function() {
      if (i < texto.length) {
        cursor.insertAdjacentText("beforebegin", texto[i]);
        i++;
      } else {
        clearInterval(intervalo);
        // Cursor some após 2 segundos
        setTimeout(function() {
          cursor.style.opacity = "0";
          setTimeout(function() { cursor.remove(); }, 400);
        }, 2000);
      }
    }, 22);
  },

  renderizarSuspeitos: function() {
    const container = document.getElementById("suspeitos");
    if (!container) return;
    container.innerHTML = "";

    this.caso.suspeitos.forEach(function(s) {
      const card = document.createElement("div");
      card.className = "card card-suspeito";
      card.id = "card-" + s.id;

      const imgHtml = s.imagem
        ? "<div class='card-imagem'><img src='" + s.imagem + "' alt='" + s.nome + "' /></div>"
        : "<div class='card-imagem card-imagem-vazia'></div>";

      card.innerHTML =
        imgHtml +
        "<div class='card-info'>" +
          "<h3>" + s.nome + "</h3>" +
          "<ul>" +
            "<li>Altura: " + s.altura + "</li>" +
            "<li>Lateralidade: " + s.lateralidade + "</li>" +
            "<li>Olhos: " + s.olhos + "</li>" +
            (s.cabelo ? "<li>Cabelo: " + s.cabelo + "</li>" : "") +
          "</ul>" +
          "<p class='detalhe'>" + s.detalhe + "</p>" +
        "</div>";
      container.appendChild(card);
    });
  },

  renderizarArmas: function() {
    const container = document.getElementById("armas");
    if (!container) return;
    container.innerHTML = "";

    this.caso.armas.forEach(function(a) {
      const card = document.createElement("div");
      card.className = "card card-arma";
      card.id = "card-" + a.id;

      const imgHtml = a.imagem
        ? "<div class='card-imagem'><img src='" + a.imagem + "' alt='" + a.nome + "' /></div>"
        : "<div class='card-imagem card-imagem-vazia'></div>";

      card.innerHTML =
        imgHtml +
        "<div class='card-info'>" +
          "<h3>" + a.nome + "</h3>" +
          "<p class='peso'>Peso: " + a.peso + "</p>" +
          "<p>" + a.descricao + "</p>" +
        "</div>";
      container.appendChild(card);
    });
  },

  renderizarLocais: function() {
    const container = document.getElementById("locais");
    if (!container) return;
    container.innerHTML = "";

    this.caso.locais.forEach(function(l) {
      const card = document.createElement("div");
      card.className = "card card-local";
      card.id = "card-" + l.id;

      const imgHtml = l.imagem
        ? "<div class='card-imagem'><img src='" + l.imagem + "' alt='" + l.nome + "' /></div>"
        : "<div class='card-imagem card-imagem-vazia'></div>";

      card.innerHTML =
        imgHtml +
        "<div class='card-info'>" +
          "<h3>" + l.nome + "</h3>" +
          "<p class='ambiente'>Ambiente: " + l.ambiente + "</p>" +
          "<p>" + l.descricao + "</p>" +
        "</div>";
      container.appendChild(card);
    });
  },

  renderizarPistas: function() {
    const container = document.getElementById("pistas");
    if (!container) return;
    container.innerHTML = "";

    const self = this;
    this.caso.pistas.forEach(function(p) {
      const item = document.createElement("div");
      item.className = "pista";
      item.id = "pista-" + p.id;
      item.textContent = p.texto;
      item.addEventListener("click", function() {
        self.clicarPista(p.id);
      });
      container.appendChild(item);
    });
  },

  // ─────────────────────────────────────────
  // INTERAÇÃO — clique nas pistas
  // ─────────────────────────────────────────

  clicarPista: function(pistaId) {
    const pista = this.caso.pistas.find(function(p) { return p.id === pistaId; });
    if (!pista) return;

    // Marca a pista como vista visualmente
    const elPista = document.getElementById("pista-" + pistaId);
    if (elPista) elPista.classList.add("pista-vista");

    // Se clicar na mesma pista já ativa, desativa o spotlight
    if (this.pistaAtiva === pistaId) {
      this.limparDestaques();
      this.pistaAtiva = null;
      return;
    }

    this.pistaAtiva = pistaId;
    this.limparDestaques();

    // Destaca visualmente a pista clicada
    if (elPista) elPista.classList.add("pista-ativa");

    // Ativa o spotlight nas colunas de cartões
    document.querySelectorAll(".coluna-cards").forEach(function(col) {
      col.classList.add("grade-ativa");
    });

    // Destaca apenas os cartões relacionados à pista
    pista.destaca.forEach(function(id) {
      const card = document.getElementById("card-" + id);
      if (card) card.classList.add("card-destacado");
    });

    // Salva que essa pista foi vista
    if (!this.estado.pistasVistas.includes(pistaId)) {
      this.estado.pistasVistas.push(pistaId);
      Progresso.salvarEstadoCaso(this.caso.id, this.estado);
    }
  },

  limparDestaques: function() {
    document.querySelectorAll(".card-destacado").forEach(function(el) {
      el.classList.remove("card-destacado");
    });
    document.querySelectorAll(".grade-ativa").forEach(function(el) {
      el.classList.remove("grade-ativa");
    });
    document.querySelectorAll(".pista-ativa").forEach(function(el) {
      el.classList.remove("pista-ativa");
    });
  },

  // ─────────────────────────────────────────
  // ACUSAÇÃO
  // ─────────────────────────────────────────

  acusar: function(suspeitoId, armaId, localId) {
    const solucao = this.caso.solucao;
    const acertou =
      suspeitoId === solucao.suspeito &&
      armaId === solucao.arma &&
      localId === solucao.local;

    // Salva a acusação no estado
    this.estado.acusacao = { suspeitoId, armaId, localId, acertou };
    this.estado.concluido = acertou;
    Progresso.salvarEstadoCaso(this.caso.id, this.estado);

    if (acertou) {
      Progresso.concluirCaso(this.caso.id);
    }

    return acertou;
  },

  // ─────────────────────────────────────────
  // PREVIEW DE IMAGEM — hover sobre miniatura
  // ─────────────────────────────────────────

  ativarPreviewImagens: function() {
    const preview     = document.getElementById("img-preview");
    const previewFoto = document.getElementById("img-preview-foto");
    if (!preview || !previewFoto) return;

    document.querySelectorAll(".card-imagem img").forEach(function(img) {
      img.addEventListener("mouseenter", function(e) {
        previewFoto.src = img.src;
        previewFoto.alt = img.alt;
        preview.classList.remove("oculto");
        // pequeno delay para a transição de opacidade funcionar
        setTimeout(function() { preview.classList.add("visivel"); }, 10);
        Motor.moverPreview(e);
      });

      img.addEventListener("mousemove", function(e) {
        Motor.moverPreview(e);
      });

      img.addEventListener("mouseleave", function() {
        preview.classList.remove("visivel");
        setTimeout(function() { preview.classList.add("oculto"); }, 150);
      });
    });
  },

  moverPreview: function(e) {
    const preview = document.getElementById("img-preview");
    if (!preview) return;

    const margem = 16;
    const largura = 264;
    const altura  = 264;

    // Posiciona à direita do cursor; se não couber, vai para a esquerda
    let x = e.clientX + margem;
    let y = e.clientY + margem;

    if (x + largura > window.innerWidth)  x = e.clientX - largura - margem;
    if (y + altura  > window.innerHeight) y = e.clientY - altura  - margem;

    preview.style.left = x + "px";
    preview.style.top  = y + "px";
  },

  // ─────────────────────────────────────────
  // RESTAURAR ESTADO — ao voltar para um caso já iniciado
  // ─────────────────────────────────────────

  restaurarEstado: function() {
    const self = this;

    // Reaplica as pistas já vistas
    this.estado.pistasVistas.forEach(function(pistaId) {
      const el = document.getElementById("pista-" + pistaId);
      if (el) el.classList.add("pista-vista");
    });
  }

};
