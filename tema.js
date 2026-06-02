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
