var caso20260001 = {

  id: "20260001",
  titulo: "Morte na Inauguração",

  historia: "O(a) [Detetive] foi convidado(a) para a inauguração do novo bloco de pesquisas da Universidade Federal. A noite, que contava com a presença de figurões da política e da comunidade acadêmica, terminou em tragédia: o Presidente do Diretório Central dos Estudantes (DCE) foi assassinado na calada da noite. Sem comunicação com a polícia devido a uma tempestade, [nome] isolou a área e sabe que o culpado é uma das três autoridades presentes.",

  suspeitos: [
    {
      id: "carlinhos",
      nome: "Prefeito Carlinhos",
      imagem: "assets/imagens/locais/carlinhos.png",
      altura: "1,83m",
      lateralidade: "Canhoto",
      olhos: "Cor de avelã",
      cabelo: "Castanho-claro",
      detalhe: "Político regional influente que conhece os podres de todo mundo no município para garantir seu curral eleitoral."
    },
    {
      id: "glauco",
      nome: "Diretor Glauco",
      imagem: "assets/imagens/locais/glauco.png",
      altura: "1,68m",
      lateralidade: "Destro",
      olhos: "Castanho-claros",
      cabelo: "Castanho-claro",
      detalhe: "Diretor administrativo do Centro de Ciências Exatas, responsável por liberar verbas e bolsas de custeio."
    },
    {
      id: "tereza",
      nome: "Reitora Tereza",
      imagem: "assets/imagens/locais/tereza.png",
      altura: "1,65m",
      lateralidade: "Canhota",
      olhos: "Verdes",
      cabelo: "Grisalho",
      detalhe: "Autoridade máxima da universidade, sabe com precisão quanto investidores privados e pais ricos pagam por prestígio acadêmico."
    }
  ],

  armas: [
    {
      id: "lapis",
      nome: "Lápis de Desenho Técnico",
      imagem: "assets/imagens/locais/lapis.png",
      peso: "Leve",
      descricao: "Um grafite antigo com alta concentração de chumbo. Bastou uma estocada profunda para causar infecção e envenenamento fatal."
    },
    {
      id: "mochila",
      nome: "Mochila de Náilon Pesada",
      imagem: "assets/imagens/locais/mochila.png",
      peso: "Pesada",
      descricao: "Uma mochila reforçada, perfeita para carregar calhamaços de livros didáticos grossos sobre lógica — ou golpear alguém violentamente com eles."
    },
    {
      id: "cordao",
      nome: "Cordão de Crachá Oficial",
      imagem: "assets/imagens/locais/cordao.png",
      peso: "Leve",
      descricao: "Cordão grosso de tecido trançado distribuído em congressos e eventos acadêmicos. Ideal para um estrangulamento silencioso."
    }
  ],

  locais: [
    {
      id: "campo",
      nome: "Campo de Futebol",
      ambiente: "Externo",
      imagem: "assets/imagens/locais/campo.png",
      descricao: "O antigo campo do complexo esportivo que recentemente ganhou uma reforma com grama sintética da melhor qualidade."
    },
    {
      id: "cantina",
      nome: "Cantina Central",
      ambiente: "Interno",
      imagem: "assets/imagens/locais/cantina.png",
      descricao: "O estabelecimento mais movimentado e lucrativo do câmpus, com cartazes promocionais e venda de apostilas acadêmicas."
    },
    {
      id: "reitoria",
      nome: "Prédio Histórico da Reitoria",
      ambiente: "Interno",
      imagem: "assets/imagens/locais/reitoria.png",
      descricao: "O pavilhão mais antigo e malconservado da instituição, onde a tinta das paredes históricas está totalmente descascada."
    }
  ],

  pistas: [
    {
      id: "pista1",
      texto: "A pessoa que estivera no Campo de Futebol era destra.",
      destaca: ["campo", "glauco"]
    },
    {
      id: "pista2",
      texto: "O suspeito com o Lápis de Desenho Técnico se ressentia da pessoa presente no Prédio Histórico da Reitoria.",
      destaca: ["lapis", "reitoria"]
    },
    {
      id: "pista3",
      texto: "O suspeito com o Cordão de Crachá Oficial tinha belos olhos cor de avelã.",
      destaca: ["cordao", "carlinhos"]
    },
    {
      id: "pista4",
      texto: "O Diretor Glauco aparentemente andava sempre carregando uma Mochila de Náilon Pesada cheia de livros didáticos sobre lógica.",
      destaca: ["glauco", "mochila"]
    },
    {
      id: "pista5",
      texto: "O corpo do estudante foi encontrado perto de fragmentos de tinta descascada da parede.",
      destaca: ["reitoria"]
    }
  ],

  solucao: {
    suspeito: "carlinhos",
    arma: "cordao",
    local: "reitoria"
  }

};
