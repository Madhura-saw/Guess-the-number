'use strict';
// we use . for classname and # for id just like in css

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!🎉';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guessValue = Number(document.querySelector('.guess').value);
  console.log(guessValue, typeof guessValue);

  if (!guessValue) {
    displayMessage('Enter a number!');
    // console.log(`Enter the value!`);
  } else if (guessValue === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!🎉';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guessValue !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guessValue > secretNumber ? 'Too high 📈' : 'Too low 📉';
      displayMessage(guessValue > secretNumber ? 'Too high 📈' : 'Too low 📉');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
  //  else if (guessValue > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too high 📈';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guessValue < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low 📉';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
