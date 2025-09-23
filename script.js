function showMessage() {
  const messages = [
    "I love you ❤️",
    "You make me the happiest person",
    "Can’t wait to see you again 💕",
    "You’re my forever",
    "I miss you more than you know :(",
    "I'm counting down till summer",
    "I can't wait to give you a hug",
    "You're worth losing any amount of sleep over",
    "I would give you anything just to see you smile",
    "I'll always be here for you"
  ];
  const random = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById("surprise").innerText = random;
}
