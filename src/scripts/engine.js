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
    document.querySelector('.game').appendChild(card);
  }
  