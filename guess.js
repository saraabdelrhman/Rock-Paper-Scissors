let player = document.querySelector('.player');
let computer = document.querySelector('.computer');
let result = document.querySelector('.result'); // Selecting the result button
let body = document.querySelector('body'); // Selecting the body element

document.querySelector('#paper').addEventListener('click', function() {
  player.textContent = 'Player: paper';
  playGame('paper');
});

document.querySelector('#rock').addEventListener('click', function() {
  player.textContent = 'Player: rock';
  playGame('rock');
});

document.querySelector('#scissors').addEventListener('click', function() {
  player.textContent = 'Player: scissors';
  playGame('scissors');
});

function playGame(playerChoice) {
  let game = ['rock', 'paper', 'scissors'];
  let random = game[Math.trunc(Math.random() * game.length)];
  computer.textContent = 'Computer: ' + random;

  if (random === playerChoice) {
    result.textContent = 'IT IS A TIE';
    result.style.background = 'blue';
    body.style.background = 'blue';
  } else if (
    (random === 'rock' && playerChoice === 'paper') ||
    (random === 'scissors' && playerChoice === 'rock') ||
    (random === 'paper' && playerChoice === 'scissors')
  ) {
    result.textContent = 'You Win';
    result.style.background = 'green';
    body.style.background = 'green';
  } else {
    result.textContent = 'Computer Wins';
    result.style.background = 'red';
    body.style.background = 'red';
  }
}
