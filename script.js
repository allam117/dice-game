const WINNER_SCORE = 10;

let activeplayer = 0;
let currentScore = 0;
const playerScore = [0, 0];

const player0el = document.querySelector(".player--0");
let scorepl0 = document.querySelector("#score--0");

let current0 = document.getElementById("current--0");
let player1el = document.querySelector(".player--1");
let scorepl1 = document.querySelector("#score--1");
let current1 = document.getElementById("current--1");
let newGame = document.querySelector(".btn--new");

let rollDice = document.querySelector(".btn--roll");
let Hold = document.querySelector(".btn--hold");
let images = document.querySelector(".dice");

function swichPlayer(score) {
  playerScore[activeplayer] += score;

  document.getElementById(`score--${activeplayer}`).innerText =
    playerScore[activeplayer];

  player0el.classList.toggle("player--active");
  player1el.classList.toggle("player--active");

  currentScore = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
}

rollDice.addEventListener("click", function () {
  images.classList.remove("hidden");
  // images.src =`./dice-imgs/dice-${random}.png`;
});

newGame.onclick = function () {
  currentScore = 0;

  for (let i = 0; i < playerScore.length; i++) playerScore[i] = 0;

  scorepl0.innerHTML = scorepl1.innerHTML = 0;
  current0.innerHTML = current1.innerHTML = 0;

  images.classList.add("hidden");
};

rollDice.onclick = function () {
  currentScore = Math.ceil(Math.random() * 6);
  images.src = `./dice-imgs/dice-${currentScore}.png`;

  if (currentScore === 1) {
    swichPlayer(0);
  }

  if (activeplayer === 0) {
    current0.innerHTML = currentScore;
  } else {
    current1.innerHTML = currentScore;
  }
};

Hold.onclick = function () {
  swichPlayer(currentScore);

  // if (activeplayer === 0) {
  //   scorepl0.innerHTML = playerScore[0];
  //   activeplayer = 1;
  //   if (scorepl0.innerHTML >= WINNER_SCORE) {
  //     scorepl0.innerHTML = "win";
  //   }
  // } else {
  //   scorepl1.innerHTML = playerScore[1];
  //   player1el.classList.remove("player--active");
  //   player0el.classList.add("player--active");
  //   activeplayer = 0;
  //   if (+scorepl1.textContent >= WINNER_SCORE) {
  //     scorepl1.innerHTML = "win";
  //     rollDice.onclick = function () {
  //       // if(scorepl1.innerHTML = "win"){
  //       //     scorepl0.innerHTML = scorepl1.innerHTML = 0;
  //       //     current0.innerHTML = current1.innerHTML = 0;
  //       // }
  //       // scorepl0.innerHTML = 0;
  //     };
  //   }
  // }
};
