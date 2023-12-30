const colors = document.querySelector('#colors');
const palettes = document.querySelector('#palettes');
const colorContainer = document.querySelector('#colorContainer');
const paletteContainer = document.querySelector('#paletteContainer');

colors.addEventListener('click', function() {
  colors.style.color = 'orange';
  palettes.style.color = 'white';
  colorContainer.style.display = 'flex';
  paletteContainer.style.display = 'none';
})

palettes.addEventListener('click', function() {
  palettes.style.color = 'orange';
  colors.style.color = 'white';
  paletteContainer.style.display = 'flex';
  colorContainer.style.display = 'none';
})


const colorsArray =
  [
    '#faebd7',
    '#008000',
    '#8db600',
    '#fbceb1',
    '#00ffff',
    '#7fffd4',
    '#4b5320',
    '#e9d66b',
    '#b2beb5',
    '#87a96b',
    '#ff9966',
    '#a52a2a',
    '#a52a2a',
    '#6e7f80',
    '#ff2052',
    '#007fff',
    '#f0ffff',
    '#89cff0',
    '#a1caf1',
    '#f4c2c2',
    '#21abcd',
    '#fae7b5',
    '#ffe135',
    '#848482',
    '#98777b',
    '#bcd4e6',
    '#9f8170',
    '#5d8aa8',
    '#e32636',
    '#efdecd',
    '#e52b50',
    '#ffbf00',
    '#ff033e',
    '#9966cc',
    '#a4c639',
    '#f2f3f4',
    '#cd9575',
    '#915c83',
    '#f5f5dc',
    '#ffe4c4',
    '#3d2b1f',
    '#fe6f5e',
    '#000000',
    '#ffebcd',
    '#318ce7',
    '#ace5ee',
    '#faf0be',
    '#0000ff',
    '#a2a2d0',
    '#6699cc',
    '#0d98ba',
    '#8a2be2',
    '#8a2be2',
    '#de5d83',
    '#79443b',
    '#0095b6',
    '#e3dac9',
    '#cc0000',
    '#006a4e',
    '#873260',
    '#0070ff',
    '#b5a642',
    '#cb4154',
    '#1dacd6',
    '#66ff00',
    '#bf94e4',
    '#c32148',
    '#ff007f',
    '#08e8de',
    '#d19fe8',
    '#f4bbff',
    '#ff55a3',
    '#fb607f',
    '#004225',
    '#cd7f32',
    '#a52a2a',
    '#ffc1cc',
    '#e7feff',
    '#f0dc82',
    '#480607',
    '#800020',
    '#deb887',
    '#cc5500',
    '#e97451',
    '#8a3324',
    '#bd33a4',
    '#702963',
    '#007aa5',
    '#e03c31',
    '#536872',
    '#5f9ea0',
    '#91a3b0',
    '#006b3c',
    '#ed872d',
    '#e30022',
    '#fff600',
    '#a67b5b',
    '#4b3621',
    '#1e4d2b',
    '#a3c1ad',
    '#c19a6b',
    '#78866b',
    '#ffff99',
    '#ffef00',
    '#ff0800',
    '#e4717a',
    '#00bfff',
    '#592720',
    '#c41e3a',
    '#00cc99',
    '#ff0040',
    '#eb4c42',
    '#ff0038',
    '#ffa6c9',
    '#b31b1b',
    '#99badd',
    '#ed9121',
    '#ace1af',
    '#b2ffff',
    '#4997d0',
    '#de3163',
    '#ec3b83',
    '#007ba7',
    '#2a52be',
    '#a0785a',
    '#fad6a5',
    '#36454f',
    '#7fff00',
    '#de3163',
    '#ffb7c5',
    '#cd5c5c',
    '#d2691e',
    '#ffa700',
    '#98817b',
    '#e34234',
    '#d2691e',
    '#e4d00a',
    '#fbcce7',
    '#0047ab',
    '#d2691e',
    '#6f4e37',
    '#9bddff',
    '#002e63',
    '#8c92ac',
    '#b87333',
    '#996666',
    '#ff7f50',
    '#f88379',
    '#ff4040',
    '#893f45',
    '#fbec5d',
    '#b31b1b',
    '#9aceeb',
    '#6495ed',
    '#fff8dc',
    '#fff8e7',
    '#ffbcd9',
    '#fffdd0',
    '#dc143c',
    '#990000',
    '#be0032',
    '#00ffff',
    '#ffff31',
    '#f0e130',
    '#00008b',
    '#654321',
    '#5d3954',
    '#a40000',
    '#08457e',
    '#986960',
    '#cd5b45',
    '#008b8b',
    '#536878',
    '#b8860b',
    '#a9a9a9',
    '#013220',
    '#1a2421',
    '#bdb76b',
    '#483c32',
    '#734f96',
    '#8b008b',
    '#003366',
    '#556b2f',
    '#ff8c00',
    '#9932cc',
    '#779ecb',
    '#03c03c',
    '#966fd6',
    '#c23b22',
    '#e75480',
    '#003399',
    '#872657',
    '#8b0000',
    '#e9967a',
    '#e9967a',
    '#8fbc8f',
    '#3c1414',
    '#dadada'
  ]


// initializing colors
function fillColors() {
  const colorContainer = document.querySelector('#colorContainer')
  for (var i = 0; i < colorsArray.length; i++) {
    const color = `<div class="color" style="background-color: ${colorsArray[i]}"><h4 class="h4" >${colorsArray[i]}</h4></div>`;
    const parser = new DOMParser();
    const doc = parser.parseFromString(color, 'text/html');
    const colorElement = doc.body.lastChild;
    colorElement.style.border = '0.5px solid';
    colorElement.addEventListener('click', (event) => {
      const clickedColor = event.currentTarget.style.backgroundColor;
      window.navigator.clipboard.writeText(clickedColor);
    });    
    colorContainer.appendChild(colorElement);
  }
}

fillColors();


const paletteArray = [
  ['#D91480', '#5821A6', '#392259', '#44238C', '#F2B33D'],
  ['#1A0E3E', '#1F1A70', '#DB488B', '#FF83F6', '#3ED0EB'],
  ['#164F73', '#F28A2E', '#D9501E', '#BF1B1B', '#0D0D0D'],
  ['#F266C1', '#9636BF', '#038C73', '#35F242', '#ABF263'],
  ['#F24B59', '#48D904', '#AFD918', '#F2B29B', '#BF1E0F'],
  ['#D91E63', '#A6216A', '#F2B33D', '#D96F32', '#0D0D0D'],
  ['#BF0A2B', '#D91E85', '#3624A6', '#465EA6', '#122611'],
  ['#484FD9', '#6D74F2', '#F2762E', '#A66844', '#BF2B0A'],
  ['#F24182', '#F26DC4', '#D7C7D9', '#311040', '#131026'],
  ['#6D5DA6', '#4A4873', '#F2C572', '#F2A679', '#F29188'],
  ['#F24957', '#261425', '#40223E', '#6DF2F2', '#BF2A2A'],
  ['#73020C', '#40010D', '#011140', '#A60303', '#0D0D0D'],
  ['#F22EAE', '#F249E7', '#772B8C', '#221959', '#294273'],
  ['#F22294', '#F229AC', '#F285D5', '#291C59', '#41AED9'],
  ['#902EF2', '#44308C', '#F2D22E', '#F28729', '#F25F29'],
  ['#F285AD', '#D96AD1', '#9453A6', '#4A2759', '#F2A7A0'],
  ['#372A8C', '#262473', '#C4E5F2', '#04B2D9', '#022626'],
  ['#F24464', '#F266A7', '#F2ACCD', '#0DD9C4', '#D92B2B'],
  ['#590F2A', '#F21BA7', '#A61272', '#731050', '#F21BB9'],
  ['#241040', '#46328C', '#2F2D73', '#F2CB05', '#F2E6D0'],
  ['#A60A43', '#F25CA2', '#402232', '#BF7EAE', '#D9A3CA'],
  ['#F085F2', '#7937A6', '#1F3473', '#071A40', '#2450A6'],
  ['#A6033F', '#F20574', '#710373', '#B0F222', '#C7D93D'],
  ['#F2308B', '#F26BCE', '#32598C', '#F28157', '#BF3B3B'],
  ['#F25774', '#BF3BA9', '#142740', '#F2AB6D', '#F2856D'],
  ['#BF0426', '#027353', '#06BF7B', '#F2B705', '#592C1C'],
  ['#870DD9', '#7F1FBF', '#4A1B8C', '#5F4A8C', '#0D0D0D'],
  ['#D941BF', '#6E34BF', '#1D1C40', '#F2F2F2', '#F29F05'],
  ['#D93250', '#8C2A44', '#F2A172', '#F25749', '#732424'],
  ['#F2A922', '#F28B0C', '#BF1E0F', '#730202', '#F25C5C'],
  ['#6422F2', '#F2E313', '#F2CC0F', '#F28B0C', '#0D0D0D'],
  ['#F20519', '#F2505D', '#F20505', '#F2F2F2', '#0D0D0D'],
  ['#C2E5F2', '#07B2D9', '#88DFF2', '#04C4D9', '#04D9D9'],
  ['#63CAF2', '#6BD9F2', '#99F2F2', '#F2C029', '#F2CD5C'],
  ['#E8E402', '#E2FF02', '#FFEE0F', '#E8CC02', '#FFD300'],
  ['#99E2F2', '#84D930', '#A4D955', '#D9AA52', '#D95032'],
  ['#6B7330', '#BBBF34', '#F2C84B', '#F2EBDC', '#D91A1A'],
  ['#575659', '#012340', '#F2CEAE', '#BFAE9F', '#0D0D0D'],
  ['#F2B807', '#D98F07', '#BF5F0B', '#8C2703', '#F2F2F2'],
  ['#F21D2F', '#01261F', '#F29F05', '#F28907', '#F24F13'],
  ['#D9BB96', '#F2E2CE', '#592B02', '#BF7B3F', '#F2B279'],
  ['#F2B3BF', '#D9D0BF', '#A69B8F', '#BF7069', '#BF4141'],
  ['#011C40', '#0378A6', '#04B2D9', '#04D9B2', '#04D98B'],
  ['#D8D9D7', '#BFBFBD', '#F2F2F2', '#73706C', '#0D0D0D'],
  ['#F2A649', '#BF8C60', '#F2D8C2', '#D95F18', '#A6270A'],
  ['#D99B84', '#F2C6B6', '#A60303', '#730202', '#400101'],
  ['#261E17', '#594031', '#A6785D', '#F25D27', '#A64E2E'],
  ['#F0F2B6', '#F23005', '#A62103', '#590C04', '#0D0303'],
  ['#192617', '#2A4024', '#5A7340', '#9AA66D', '#BEBF8F'],
  ['#F2C46D', '#D99C52', '#A66226', '#401801', '#260B01'],
  ['#0D0608', '#152618', '#374029', '#A6916A', '#403221'],
  ['#025949', '#027353', '#BF7E04', '#F2E2C4', '#D97904'],
  ['#127369', '#10403B', '#8AA6A3', '#4C5958', '#BFBFBF'],
  ['#042940', '#005C53', '#9FC131', '#DBF227', '#D6D58E'],
  ['#012030', '#13678A', '#45C4B0', '#9AEBA3', '#DAFDBA'],
  ['#034159', '#025951', '#02735E', '#038C3E', '#0CF25D'],
  ['#10454F', '#506266', '#818274', '#A3AB78', '#BDE038'],
  ['#2A8C82', '#41BFB3', '#9BF2EA', '#275950', '#260101'],
  ['#027373', '#038C7F', '#A9D9D0', '#F2E7DC', '#0D0D0D'],
  ['#223240', '#3B8C66', '#347355', '#60BF81', '#93D94E'],
  ['#193C40', '#2E5902', '#214001', '#D96941', '#A62B1F'],
  ['#0FC2C0', '#0CABA8', '#008F8C', '#015958', '#023535'],
  ['#042326', '#0A3A40', '#0F5959', '#1D7373', '#107361'],
  ['#025E73', '#011F26', '#A5A692', '#BFB78F', '#F2A71B'],
  ['#F2668B', '#025E73', '#011F26', '#026873', '#03A688'],
  ['#36BFB1', '#038C73', '#02735E', '#014034', '#0D0D0D'],
  ['#CEF09D', '#1C646D', '#1F0802', '#38184C', '#A0CD60'],
  ['#8C1F28', '#591C21', '#044040', '#D92525', '#F2F2F2'],
  ['#154666', '#298073', '#184C78', '#438F68', '#5A9C56'],
  ['#A1A2A6', '#024959', '#F2C12E', '#F2AE30', '#593E25'],
  ['#012626', '#04BFAD', '#038C7F', '#027368', '#01403A'],
  ['#2D3E40', '#387373', '#93BFB7', '#97A6A0', '#E4F2E7'],
  ['#253659', '#03A696', '#04BF9D', '#F27457', '#BF665E'],
  ['#267365', '#F2CB05', '#F29F05', '#F28705', '#F23030'],
  ['#00747C', '#00BBC9', '#CACACA', '#878787', '#202022'],
  ['#014040', '#02735E', '#03A678', '#F27405', '#731702'],
  ['#593954', '#013440', '#026873', '#038C8C', '#038C7F'],
  ['#004C50', '#00939C', '#10ABB4', '#9C3E00', '#502000'],
  ['#025159', '#3E848C', '#7AB8BF', '#C4EEF2', '#A67458'],
  ['#BD2A2E', '#3B3936', '#B2BEBF', '#889C9B', '#486966'],
  ['#348888', '#22BABB', '#9EF8EE', '#FA7F08', '#F24405'],
  ['#520120', '#08403E', '#706513', '#B57114', '#962B09'],
  ['#FF5F5D', '#3F7C85', '#00CCBF', '#72F2EB', '#747E7E'],
  ['#151F30', '#103778', '#0593A2', '#FF7A48', '#E3371E'],
  ['#105057', '#898C8B', '#FF81D0', '#400036', '#919151'],
]


let palette = '';
// initializing palettes
function fillPalettes() {
  let paletteContainer = document.querySelector('#paletteContainer')
  for (var i = 0; i < paletteArray.length; i++) {
      palette = `
      <div class="palette ">
      <div class="palette-child" style="background-color: ${paletteArray[i][0]};"></div>
      <div class="palette-child" style="background-color: ${paletteArray[i][1]};"></div>
      <div class="palette-child" style="background-color: ${paletteArray[i][2]};"></div>
      <div class="palette-child" style="background-color: ${paletteArray[i][3]};"></div>
      <div class="palette-child" style="background-color: ${paletteArray[i][4]};"></div>
      <div style="display: none">${paletteArray[i]}</div>
      </div>

    `;
    
    const parser = new DOMParser();
    const doc = parser.parseFromString(palette, 'text/html');
    const paletteElement = doc.body.firstChild;
    paletteElement.addEventListener('click', (event)=> {
      const lastElementChild  = paletteElement.lastElementChild;
      window.navigator.clipboard.writeText(lastElementChild.innerText);
    })
    paletteContainer.appendChild(paletteElement);
  }
}


fillPalettes()


