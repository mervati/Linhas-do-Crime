// ─── PIXEL ART ENGINE ───────────────────────────────────────
// Constrói um SVG pixel a pixel a partir de paleta + grid de chars.
// Cada char no grid corresponde a uma cor na paleta; '.' = transparente.

function buildPixelArt(palette, rows, cell) {
  cell = cell || 5;
  var rects = '';
  for (var y = 0; y < rows.length; y++) {
    var row = rows[y];
    for (var x = 0; x < row.length; x++) {
      var c = row[x];
      if (c !== '.' && palette[c]) {
        rects += '<rect x="'+(x*cell)+'" y="'+(y*cell)+
                 '" width="'+cell+'" height="'+cell+
                 '" fill="'+palette[c]+'"/>';
      }
    }
  }
  var w = rows[0].length * cell;
  var h = rows.length  * cell;
  return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '+w+' '+h+
         '" shape-rendering="crispEdges">'+rects+'</svg>';
}

// ─── PALETA GLOBAL ──────────────────────────────────────────
var PAL = {
  // Pele
  S: '#f5c9a0', s: '#d99a70',
  // Cabelos
  H: '#4a2e0a', h: '#7a5020',  // castanho
  G: '#909090', g: '#c0c0c0',  // grisalho
  // Olhos
  E: '#8b6020',  // avelã
  e: '#2d7a2d',  // verdes
  k: '#101010',  // pupila
  // Boca
  m: '#b05050',
  // Roupas masculinas
  N: '#1e2a4a', n: '#0e1828',  // terno azul-marinho
  W: '#f0f0f0',                // camisa branca
  T: '#8b0000',                // gravata vermelha (Carlinhos)
  t: '#6b4010',                // gravata marrom (Glauco)
  // Roupa feminina/acadêmica
  A: '#2a2a2a', a: '#1a1a1a',  // roupa preta
  // Óculos
  b: '#1a1a1a',
  // Lápis
  Y: '#f0c030', y: '#b89020', L: '#404050', l: '#d0d040',
  // Mochila
  D: '#2a3848', d: '#3a5060', X: '#1a2838',
  // Cordão
  R: '#cc2020', r: '#8b1010', J: '#d4c080', j: '#a09040',
  // Campo
  O: '#2d8b2d', o: '#1a6020', F: '#f0f0f0',
  // Cantina / Reitoria (construções)
  C: '#d4c090', c: '#b09060', Q: '#c8a84b', q: '#8b6a30',
  V: '#4a90c0', v: '#2a6090',
  Z: '#e0d8b0', z: '#c0b080',
  // Preto e cinza
  B: '#1a1a1a', I: '#555555',
};

// ─── SUSPEITOS ──────────────────────────────────────────────

var PA_CARLINHOS = buildPixelArt(PAL, [
  '....HHHHHHHH....',
  '...HhHHHHHHhH...',
  '..HHSSSSSSSSHh..',
  '..HSEkSSSEkSSH..',
  '..HSSSSSSSSSH...',
  '..HSSSsSSSSSSH..',
  '..HSSSmmmSSSSH..',
  '...HSSSSSSSH....',
  '....SSSSSSSS....',
  '...NNNNNNNNNN...',
  '..NNNWWWWWNnNN..',
  '.NNNNWTTTWNNNnN.',
  '.NNNNNTTNNNNnNN.',
  'NNNNNNTTNNNNNnNN',
  'NNNNNNNNNNNNNnN.',
  'NNNNNNNNNNNNNN..',
]);

var PA_GLAUCO = buildPixelArt(PAL, [
  '...HHHHHHHHHH...',
  '..HhHHHHHHHhH...',
  '..HHSSSSSSSSHh..',
  '..HSbEkSEkbSSH..',
  '..HSbbSSSbbSSH..',
  '..HSSSsSSSSSSH..',
  '..HSSSmmSSSSSH..',
  '...HSSSSSSSH....',
  '....SSSSSSSS....',
  '...NNNNNNNNNN...',
  '..NNNWWWWWNnNN..',
  '.NNNNWtttWNNNnN.',
  '.NNNNNttNNNNnNN.',
  'NNNNNNttNNNNNnNN',
  'NNNNNNNNNNNNNN..',
  'NNNNNNNNNNNNNN..',
]);

var PA_TEREZA = buildPixelArt(PAL, [
  '..gGGGGGGGGGg...',
  '..GGgGGGGGGGGg..',
  '..GGSSSSSSSSGg..',
  '..GSekkSSkkeGG..',  // green eyes
  '..GSSSSSSSSSGH..',
  '..GSSSSsSSSSGG..',
  '..GSSSmmmSSSGG..',
  '...GSSSSSSSG....',
  '....SSSSSSSS....',
  '...AAAAAAAAAA...',
  '..AAAWWWWWAaAA..',
  '.AAAAWWWWWAAAAaA.',
  '.AAAAaAAAAAAAAa.',
  'AAAAAAAAAAAAaaA.',
  'AAAAAAAAAAAAa...',
  'AAAAAAAAAAAAA...',
]);

// ─── ARMAS ──────────────────────────────────────────────────

var PA_LAPIS = buildPixelArt(PAL, [
  '......YYYY......',
  '......YYyy......',
  '......YYYY......',
  '......YYyy......',
  '......YYYY......',
  '......YYyy......',
  '......YYYY......',
  '......YYyy......',
  '......YYYY......',
  '......YYyy......',
  '......IIII......',  // metal ring
  '......Illl......',
  '.......LLl......',  // cone
  '........Ll......',
  '.........L......',  // ponta
  '..................',
], 5);

var PA_MOCHILA = buildPixelArt(PAL, [
  '....DDDDDDDD....',
  '...DXDDDDDDXd...',
  '..DXDdDDDDdDXD..',
  '..DXDdDDDDdDXD..',
  '..DXDdddddDDXD..',  // bolso frontal
  '..DXDdDDDDdDXD..',
  '..DXDdDDDDdDXD..',
  '..DXDdddddDDXD..',
  '..DXDDDDDDDdXD..',
  '..DDDDDDDDDdDD..',
  '..DDDDDDDDDDDD..',
  '...XXXXXXXXXX...',  // alças base
  '....XX....XX....',
  '....XX....XX....',
  '....XX....XX....',
  '....Xd....dX....',
]);

var PA_CORDAO = buildPixelArt(PAL, [
  '....RR....RR....',
  '....RR....RR....',
  '.....RR..RR.....',
  '.....RR..RR.....',
  '......RRRR......',
  '.......RR.......',
  '.......RR.......',
  '.......RR.......',
  '.......RR.......',
  '......JJJJ......',
  '.....JjJJJjJ....',
  '.....JjJJJjJ....',
  '.....JjJjJjJ....',
  '.....JjJJJjJ....',
  '.....JjJJJjJ....',
  '......JJJJJ.....',
]);

// ─── LOCAIS ─────────────────────────────────────────────────

var PA_CAMPO = buildPixelArt(PAL, [
  'OOOOOOOOOOOOOOOO',
  'OoOOOOOOOOOOOoO',
  'OOOOFFFFFFFFOOOO',
  'OOOOFFOOOOOFFOOO',
  'OOOOFF.....FFOOO',
  'OOOFFFFFFFFFFF.O',
  'OOOOOOFFFFOoOOOO',
  'OoOOOOOFFOOOOOoO',
  'OOOOOOFFFFOoOOOO',
  'OOOFFFFFFFFFFF.O',
  'OOOOFF.....FFOOO',
  'OOOOFFOOOOOFFOOO',
  'OOOOFFFFFFFFOOOO',
  'OoOOOOOOOOOOOoO',
  'OOOOOOOOOOOOOOOO',
  'oooooooooooooooo',
]);

var PA_CANTINA = buildPixelArt(PAL, [
  'CCCCCCCCCCCCCCCC',
  'CcCCCCCCCCCCCcCC',
  'CCCQQQQQQQQQQCCC',
  'CCCqQQQQQQQQqCCC',
  'CCCqQQQQQQQQqCCC',
  'CCCqQqQqQqQQqCCC',
  'CCCCCCCCCCCCCcCC',
  'CCVVCCCCCCCVVCCC',
  'CCVvCCCCCCCVvCCC',
  'CCVVCCCCCCCVVCCC',
  'CCccCCCCCCCccCCC',
  'CZZZZZZZZZZZZZcC',
  'ZZZZZZZZZZZZZZzZ',
  'ZzZZZZZZZZZZZzZZ',
  'ZZZZZZZZZZZZZZZZ',
  'zzzzzzzzzzzzzzzz',
]);

var PA_REITORIA = buildPixelArt(PAL, [
  '.....QQQQQQQQ...',
  '....QqQQQQQQQq..',
  '...CCCCCCCCCCCC.',
  '..CCcCcCCCCcCcC.',
  '..CVVCCCCCCCVVC.',
  '..CVvCCCCCCCVvC.',
  '..CVVCCCCCCCVVC.',
  '..CcCcCcCcCcCcC.',
  '..CZZcCCCCZZcCC.',  // colunas
  '..CZZcCCCCZZcCC.',
  '..CZZcCCCCZZcCC.',
  '..CCCcCcCcCcCCC.',
  '..cCcCcCcCcCcCC.',
  '..CCCCCCCCCCCC..',
  '.ZZZZZZZZZZZZZZ.',
  'ZZZZZZZZZZZZZZZZ',
]);

// ─── MAPA ID → SVG ──────────────────────────────────────────
var PixelArt = {
  carlinhos: PA_CARLINHOS,
  glauco:    PA_GLAUCO,
  tereza:    PA_TEREZA,
  lapis:     PA_LAPIS,
  mochila:   PA_MOCHILA,
  cordao:    PA_CORDAO,
  campo:     PA_CAMPO,
  cantina:   PA_CANTINA,
  reitoria:  PA_REITORIA,
};
