var caso20260003 = {

  id: "20260003",
  titulo: "A Última Final",

  historia: "O(a) [Detetive] foi convocado(a) para o Estádio do Maracanã na noite de uma grande final. Com os portões já fechados e o público dispersado após uma vitória histórica, o craque Denílson Lima — prestes a ser vendido para a Europa — permaneceu no complexo para tratar de questões contratuais de última hora. Às 23h30, os refletores do campo piscaram por uma oscilação elétrica. Minutos depois, durante a ronda de fechamento, o corpo do atleta foi encontrado sem vida. Com acesso restrito por credenciais eletrônicas, apenas três pessoas estavam nos setores internos naquele momento. [nome] isolou a área e sabe que o culpado está entre eles.",

  suspeitos: [
    {
      id: "ronaldo",
      nome: "Ronaldo Silva",
      imagem: "assets/imagens/locais/ronaldo.png",
      altura: "1,86m",
      lateralidade: "Canhoto",
      olhos: "Castanhos",
      detalhe: "Diretor de futebol do clube. Homem alto e intimidador, conhece cada contrato e cada segredo dos bastidores."
    },
    {
      id: "beatriz",
      nome: "Beatriz Souza",
      imagem: "assets/imagens/locais/beatriz.png",
      altura: "1,60m",
      lateralidade: "Destra",
      olhos: "Verdes",
      detalhe: "Médica oficial do clube. Discreta e precisa, tem acesso irrestrito a todos os setores do estádio."
    },
    {
      id: "mauricio",
      nome: "Maurício Santos",
      imagem: "assets/imagens/locais/mauricio.png",
      altura: "1,75m",
      lateralidade: "Destro",
      olhos: "Azuis",
      detalhe: "Empresário de jogadores. Negociava a transferência milionária de Denílson e tinha muito a perder com o acordo."
    }
  ],

  armas: [
    {
      id: "trofeu",
      nome: "Troféu de Bronze",
      imagem: "assets/imagens/locais/trofeu.png",
      peso: "Pesada",
      descricao: "Uma réplica maciça de uma taça antiga, com bordas cortantes na base — exposta na Tribuna de Honra como símbolo de glória."
    },
    {
      id: "faixa",
      nome: "Faixa de Isolamento",
      imagem: "assets/imagens/locais/faixa.png",
      peso: "Leve",
      descricao: "Um rolo de fita de nylon reforçada e espessa, usada para demarcar áreas restritas. Resistente o suficiente para ser usada como garrote."
    },
    {
      id: "anabolizante",
      nome: "Anabolizante Adulterado",
      imagem: "assets/imagens/locais/anabolizante.png",
      peso: "Leve",
      descricao: "Uma seringa hospitalar contendo uma superdose de substância cardíaca letal, disfarçada de suplemento de rotina."
    }
  ],

  locais: [
    {
      id: "vestiario",
      nome: "Vestiário Principal",
      imagem: "assets/imagens/locais/vestiario.png",
      ambiente: "Interno",
      descricao: "Espaço amplo com armários de madeira, macas de massagem e chuveiros ao fundo. Cheiro de linimento no ar."
    },
    {
      id: "tribuna",
      nome: "Tribuna de Honra",
      imagem: "assets/imagens/locais/tribuna.png",
      ambiente: "Interno",
      descricao: "A área VIP do estádio, com cadeiras estofadas e visão panorâmica completa do campo. Local de autoridades e patrocinadores."
    },
    {
      id: "beira",
      nome: "Beira do Gramado",
      imagem: "assets/imagens/locais/beira.png",
      ambiente: "Externo",
      descricao: "A zona técnica ao lado do banco de reservas, cercada pela grama ainda iluminada pelos refletores do estádio."
    }
  ],

  pistas: [
    {
      id: "pista1",
      texto: "A pessoa que estava na Beira do Gramado tem olhos azuis.",
      destaca: ["beira", "mauricio"]
    },
    {
      id: "pista2",
      texto: "Quem usou a Faixa de Isolamento estava no Vestiário Principal.",
      destaca: ["faixa", "vestiario"]
    },
    {
      id: "pista3",
      texto: "O suspeito que carregava o Troféu de Bronze tem olhos castanhos.",
      destaca: ["trofeu", "ronaldo"]
    },
    {
      id: "pista4",
      texto: "A pessoa de olhos verdes não estava na Tribuna de Honra.",
      destaca: ["beatriz", "tribuna"]
    }
  ],

  solucao: {
    suspeito: "ronaldo",
    arma: "trofeu",
    local: "tribuna"
  }

};
