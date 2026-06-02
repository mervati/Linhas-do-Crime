const Tema = {

  carregar: function() {
    const salvo = localStorage.getItem("ldc_tema") || "matrix";
    document.body.classList.remove("matrix", "academia");
    document.body.classList.add(salvo);
    this.atualizarBotoes(salvo);
  },

  alternar: function() {
    const atual = document.body.classList.contains("academia") ? "academia" : "matrix";
    const proximo = atual === "matrix" ? "academia" : "matrix";
    document.body.classList.remove("matrix", "academia");
    document.body.classList.add(proximo);
    localStorage.setItem("ldc_tema", proximo);
    this.atualizarBotoes(proximo);
  },

  atualizarBotoes: function(tema) {
    document.querySelectorAll(".btn-tema").forEach(function(btn) {
      btn.textContent = tema === "matrix" ? "🪶 Academia" : "💻 Matrix";
      btn.title = tema === "matrix" ? "Mudar para tema Academia" : "Mudar para tema Matrix";
    });
  }

};

const Zoom = {

  NIVEIS: ["normal", "menos", "mais"],
  ROTULOS: { normal: "A", menos: "A−", mais: "A+" },
  TITULOS: { normal: "Tamanho normal", menos: "Texto menor", mais: "Texto maior" },

  carregar: function() {
    const salvo = localStorage.getItem("ldc_zoom") || "normal";
    this.aplicar(salvo);
  },

  ciclar: function() {
    const atual = localStorage.getItem("ldc_zoom") || "normal";
    const idx   = this.NIVEIS.indexOf(atual);
    const prox  = this.NIVEIS[(idx + 1) % this.NIVEIS.length];
    this.aplicar(prox);
  },

  aplicar: function(nivel) {
    document.body.classList.remove("zoom-menos", "zoom-mais");
    if (nivel !== "normal") document.body.classList.add("zoom-" + nivel);
    localStorage.setItem("ldc_zoom", nivel);
    this.atualizarBotao(nivel);
  },

  atualizarBotao: function(nivel) {
    const btn = document.getElementById("btn-zoom");
    if (!btn) return;
    btn.textContent = this.ROTULOS[nivel] || "A";
    btn.title       = this.TITULOS[nivel] || "Tamanho do texto";
  }

};
