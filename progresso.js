const Progresso = {

  // Salva o nome e gênero do jogador
  salvarJogador: function(nome, genero) {
    const jogador = { nome: nome, genero: genero };
    localStorage.setItem("ldc_jogador", JSON.stringify(jogador));
  },

  // Retorna { nome, genero } ou null se não existir
  carregarJogador: function() {
    const dados = localStorage.getItem("ldc_jogador");
    return dados ? JSON.parse(dados) : null;
  },

  // Retorna a lista de IDs dos casos já concluídos
  casosConcluidos: function() {
    const dados = localStorage.getItem("ldc_concluidos");
    return dados ? JSON.parse(dados) : [];
  },

  // Marca um caso como concluído
  concluirCaso: function(casoId) {
    const lista = this.casosConcluidos();
    if (!lista.includes(casoId)) {
      lista.push(casoId);
      localStorage.setItem("ldc_concluidos", JSON.stringify(lista));
    }
  },

  // Verifica se um caso está desbloqueado no modo história
  // O primeiro caso sempre está desbloqueado
  // Os demais só desbloqueiam se o anterior foi concluído
  estaDesbloqueado: function(casoId, listaDeCasos) {
    const index = listaDeCasos.indexOf(casoId);
    if (index === 0) return true;
    const anterior = listaDeCasos[index - 1];
    return this.casosConcluidos().includes(anterior);
  },

  // Salva o estado atual de um caso (pistas vistas, acusação feita, etc.)
  salvarEstadoCaso: function(casoId, estado) {
    localStorage.setItem("ldc_caso_" + casoId, JSON.stringify(estado));
  },

  // Retorna o estado salvo de um caso, ou um estado inicial vazio
  carregarEstadoCaso: function(casoId) {
    const dados = localStorage.getItem("ldc_caso_" + casoId);
    if (dados) return JSON.parse(dados);

    // Estado inicial quando o caso ainda não foi tocado
    return {
      pistasVistas: [],
      acusacao: null,
      concluido: false
    };
  },

  // Apaga tudo (útil para resetar o jogo)
  resetarTudo: function() {
    const chaves = Object.keys(localStorage);
    chaves.forEach(function(chave) {
      if (chave.startsWith("ldc_")) {
        localStorage.removeItem(chave);
      }
    });
  }

};
