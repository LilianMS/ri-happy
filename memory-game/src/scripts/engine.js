const emojis = [
    "🐱",
    "🐱",
    "🦝",
    "🦝",
    "🦊",
    "🦊",
    "🐶",
    "🐶",
    "🐵",
    "🐵",
    "🦁",
    "🦁",
    "🐯",
    "🐯",
    "🐮",
    "🐮",
];

let openCards = [];

let spawnEmojis = emojis.sort(() => Math.random() > 0.5 ? 2 : -1);

for(let i = 0; i < emojis.length; i++) {
  const card = document.createElement('div');
  card.className = 'item';
  card.innerHTML = spawnEmojis[i];
  card.onclick = handleClick;
  document.querySelector('.game').appendChild(card);
}

function handleClick() {
  if(openCards.length < 2) {
    this.classList.add('cardOpen');
    openCards.push(this);
  }
  if(openCards.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  if(openCards[0].innerHTML === openCards[1].innerHTML) {
    openCards.forEach(card => card.classList.add('cardMatch')); // no lugar de openCards[0] e openCards[1] eu posso usar o forEach para percorrer o array e adicionar a classe cardMatch
  }else {
    openCards.forEach(card => card.classList.remove('cardOpen')); // openCards[0].classList.remove("boxOpen"); e openCards[1].classList.remove("boxOpen");
  }
  openCards = [];

  if (document.querySelectorAll('.cardMatch').length === emojis.length) {
    alert("Você venceu !");
  }
}


// function handleClick() {
//   if(openCards.length < 2) {
//     this.classList.add('cardOpen');
//     openCards.push(this);
//   }
//   if(openCards.length === 2) {
//     if(openCards[0].innerHTML === openCards[1].innerHTML) {
//       openCards.forEach(card => card.classList.add('cardMatch'));
//       openCards = [];
//     } else {
//       setTimeout(() => {
//         openCards.forEach(card => card.classList.remove('cardOpen'));
//         openCards = [];
//       }, 500);
//     }
//   }
// }