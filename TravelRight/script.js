const destinations = [
  { img: 'https://source.unsplash.com/400x250/?hongkong', title: 'Jakarta → Hongkong', price: 'IDR 14.093.982' },
  { img: 'https://source.unsplash.com/400x250/?batam', title: 'Jakarta → Batam', price: 'IDR 1.335.332' },
  { img: 'https://source.unsplash.com/400x250/?bali', title: 'Jakarta → Denpasar Bali', price: 'IDR 1.148.320' },
  { img: 'https://source.unsplash.com/400x250/?singapore', title: 'Jakarta → Singapura', price: 'IDR 495.740' },
];

const popular = [
  { img: 'https://source.unsplash.com/400x250/?safari', title: 'Taman Safari Indonesia', price: 'IDR 120.000' },
  { img: 'https://source.unsplash.com/400x250/?seaworld', title: 'Seaworld Ancol', price: 'IDR 85.198' },
  { img: 'https://source.unsplash.com/400x250/?zoo', title: 'Bali Safari & Marine Park', price: 'IDR 93.500' },
  { img: 'https://source.unsplash.com/400x250/?dufan', title: 'Dunia Fantasi (Dufan)', price: 'IDR 177.487' },
];

const abroad = [
  { img: 'https://source.unsplash.com/400x250/?singapore-garden', title: 'Gardens by The Bay', price: 'IDR 237.113' },
  { img: 'https://source.unsplash.com/400x250/?sydney', title: 'Go City: Sydney Explorer Pass', price: 'IDR 1.186.860' },
  { img: 'https://source.unsplash.com/400x250/?disneyland', title: 'Hong Kong Disneyland', price: 'IDR 443.957' },
  { img: 'https://source.unsplash.com/400x250/?universal', title: 'Universal Studios Singapore', price: 'IDR 125.558' },
];

function renderCards(list, containerId) {
  const container = document.getElementById(containerId);
  list.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${item.img}" alt="${item.title}">
      <div class="card-content">
        <h4>${item.title}</h4>
        <p class="price">${item.price}</p>
      </div>`;
    container.appendChild(card);
  });
}

renderCards(destinations, 'destinations-list');
renderCards(popular, 'popular-list');
renderCards(abroad, 'abroad-list');
