function showMessage() {
  const messages = [
    "I love you ❤️",
    "You make me the happiest person",
    "Can’t wait to see you again 💕",
    "You’re my forever"
  ];
  const random = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById("surprise").innerText = random;
}
