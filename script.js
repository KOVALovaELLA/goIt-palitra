const colors = [
  { hex: '#FF0000', rgb: 'rgb(255, 0, 0)' },
  { hex: '#00FF00', rgb: 'rgb(0, 255, 0)' },
  { hex: '#0000FF', rgb: 'rgb(0, 0, 255)' },
  { hex: '#FFFF00', rgb: 'rgb(255, 255, 0)' },
  { hex: '#800080', rgb: 'rgb(128, 0, 128)' },
  { hex: '#FFA500', rgb: 'rgb(255, 165, 0)' },
  { hex: '#008000', rgb: 'rgb(0, 128, 0)' },
  { hex: '#800000', rgb: 'rgb(128, 0, 0)' },
  { hex: '#008080', rgb: 'rgb(0, 128, 128)' },
  { hex: '#800080', rgb: 'rgb(128, 0, 128)' },
  { hex: '#FF00FF', rgb: 'rgb(255, 0, 255)' },
  { hex: '#00FFFF', rgb: 'rgb(0, 255, 255)' }
];

const paletteContainer = document.querySelector('.js-palette');
const cardsMarkup = createColorCardMarkup(colors);

paletteContainer.addEventListener('click', onPaletteContainerClick);

paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup)

function createColorCardMarkup(colors) {
    return colors
        .map(({ hex, rgb }) => {
            return `
    <div class="palette js-palette">
      <div class="color-card">
        <div
          class="color-swatch"
          data-hex="${hex}" 
          data-rgb="${rgb}"
          style="background-color: ${hex}"
        ></div>
        <div class="color-meta">
          <p>HEX: ${hex}</p>
          <p>RGB: ${rgb}</p>
        </div>
      </div>
    </div>
    `
        }).join('');
}

function onPaletteContainerClick(evt) {
    
    if (!evt.target.classList .contains('color-swatch')) {
        return; 
    }  
    
    const currentActiveCard = document.querySelector('.color-card.is-active');
    if (currentActiveCard) {
        currentActiveCard.classList.remove('is-active')
    }

    const swatchEl = evt.target;
    const parentColorCard = swatchEl.closest('.color-card');
    console.log(parentColorCard)

    parentColorCard.classList.add('is-active')
    console.log(evt.target.dataset.hex);

    document.body.style.backgroundColor = evt.target.dataset.hex;

}