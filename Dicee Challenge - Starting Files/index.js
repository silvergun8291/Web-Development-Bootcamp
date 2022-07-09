function dice() {
  var num = Math.random();
  num = num * 6;
  return Math.floor(num) + 1;
}

var player1 = dice();
var player2 = dice();

if (player1 == 1) {
  document.querySelector(".img1").setAttribute("src", "images/dice1.png");
}
else if (player1 == 2) {
  document.querySelector(".img1").setAttribute("src", "images/dice2.png");
}
else if (player1 == 3) {
  document.querySelector(".img1").setAttribute("src", "images/dice3.png");
}
else if (player1 == 4) {
  document.querySelector(".img1").setAttribute("src", "images/dice4.png");
}
else if (player1 == 5) {
  document.querySelector(".img1").setAttribute("src", "images/dice5.png");
}
else if (player1 == 6) {
  document.querySelector(".img1").setAttribute("src", "images/dice6.png");
}

if (player2 == 1) {
  document.querySelector(".img2").setAttribute("src", "images/dice1.png");
}
else if (player2 == 2) {
  document.querySelector(".img2").setAttribute("src", "images/dice2.png");
}
else if (player2 == 3) {
  document.querySelector(".img2").setAttribute("src", "images/dice3.png");
}
else if (player2 == 4) {
  document.querySelector(".img2").setAttribute("src", "images/dice4.png");
}
else if (player2 == 5) {
  document.querySelector(".img2").setAttribute("src", "images/dice5.png");
}
else if (player2 == 6) {
  document.querySelector(".img2").setAttribute("src", "images/dice6.png");
}
