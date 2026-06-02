var caso20260002 = {

  id: "20260002",
  titulo: "A Premiação Mortal",

  historia: "O(a) [Detetive] foi convidado(a) para a grande Cerimônia de Premiação Científica no campus. A noite celebrava uma descoberta bilionária sobre mutações genéticas, mas o evento foi interrompido abruptamente: o Magnata da Indústria Farmacêutica, que patrocinava a pesquisa, foi encontrado morto. Com o campus isolado devido a um blecaute total na região, [nome] assume o controle dos portões, sabendo que apenas o Senador, a Professora e o Governador tinham acesso à ala restrita onde a tragédia aconteceu.",

  suspeitos: [
    {
      id: "bernardo",
      nome: "Senador Bernardo",
      imagem: "assets/imagens/locais/bernardo.png",
      altura: "1,85m",
      lateralidade: "Destro",
      olhos: "Azuis",
      detalhe: "Político influente de fala mansa e gestos medidos. Anda sempre impecável e carrega documentos importantes."
    },
    {
      id: "clarice",
      nome: "Professora Clarice",
      imagem: "assets/imagens/locais/clarice.png",
      altura: "1,62m",
      lateralidade: "Canhota",
      olhos: "Castanhos",
      detalhe: "Pesquisadora renomada e genial. Costuma gesticular bastante com a mão esquerda e tem um olhar muito focado."
    },
    {
      id: "malta",
      nome: "Governador Malta",
      imagem: "assets/imagens/locais/malta.png",
      altura: "1,75m",
      lateralidade: "Destro",
      olhos: "Verdes",
      detalhe: "Homem enérgico e impaciente. Conhecido por circular rapidamente pelos ambientes fiscalizando tudo ao redor."
    }
  ],

  armas: [
    {
      id: "estatueta",
      nome: "Estatueta de Bronze",
      imagem: "assets/imagens/locais/estatueta.png",
      peso: "Pesada",
      descricao: "Uma honraria pesada que ficava exposta sobre uma mesa de centro, perfeita para um golpe violento."
    },
    {
      id: "bisturi",
      nome: "Bisturi de Precisão",
      imagem: "assets/imagens/locais/bisturi.png",
      peso: "Leve",
      descricao: "Uma ferramenta cirúrgica levada de um laboratório adjacente. Uma única incisão precisa foi fatal."
    },
    {
      id: "fio",
      nome: "Fio de Fibra Óptica",
      imagem: "assets/imagens/locais/fio.png",
      peso: "Leve",
      descricao: "Um cabo de rede longo e resistente retirado dos equipamentos de comunicação instalados para o evento."
    }
  ],

  locais: [
    {
      id: "auditorio",
      nome: "Auditório Principal",
      imagem: "assets/imagens/locais/auditorio.png",
      ambiente: "Interno",
      descricao: "Espaço amplo com carpetes vermelhos e poltronas estofadas novas."
    },
    {
      id: "laboratorio",
      nome: "Laboratório de Biologia",
      imagem: "assets/imagens/locais/laboratorio.png",
      ambiente: "Interno",
      descricao: "Espaço esterilizado, cercado por bancadas de vidro, microscópios e chão coberto por azulejos brancos."
    },
    {
      id: "jardim",
      nome: "Jardim de Inverno",
      imagem: "assets/imagens/locais/jardim.png",
      ambiente: "Externo",
      descricao: "Área aberta e charmosa com piso de paralelepípedos e grandes vasos de terra."
    }
  ],

  pistas: [
    {
      id: "pista1",
      texto: "O suspeito que portava o Bisturi de Precisão estava no Laboratório de Biologia.",
      destaca: ["bisturi", "laboratorio"]
    },
    {
      id: "pista2",
      texto: "Quem estava no Auditório Principal tinha marcantes olhos azuis.",
      destaca: ["auditorio", "bernardo"]
    },
    {
      id: "pista3",
      texto: "A pessoa que carregava o Fio de Fibra Óptica não tinha olhos verdes.",
      destaca: ["fio", "malta"]
    },
    {
      id: "pista4",
      texto: "O assassino agiu em um ambiente interno, protegendo-se do vento frio da noite.",
      destaca: ["auditorio", "laboratorio"]
    },
    {
      id: "pista5",
      texto: "Cacos de vidro de lâminas de microscópio foram encontrados esmagados sob os sapatos da Professora Clarice.",
      destaca: ["clarice", "laboratorio"]
    }
  ],

  solucao: {
    suspeito: "clarice",
    arma: "bisturi",
    local: "laboratorio"
  }

};
