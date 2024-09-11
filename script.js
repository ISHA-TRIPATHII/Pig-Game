'use strict';

const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const dice = document.querySelector('.dice');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const current0 =document.getElementById('current--0');
const current1 = document.getElementById('current--1');

const btnRoll =  document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');


score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

let currentScore = 0;
const scores = [0, 0];
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};


btnRoll.addEventListener('click', function() {
  if(playing) {
    
    const dicenum = Number(Math.trunc(Math.random() * 6) + 1);
   

    dice.classList.remove('hidden');
    dice.src = `assets/dice-${dicenum}.png`;
    
    if(dicenum !== 1){
        currentScore += dicenum;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;}
        
    else 
      {
      switchPlayer();
      
      }

    }});

btnNew.addEventListener('click', function() {
    playing=true;
    scores[0] = 0;
    scores[1] = 0;
    score0.textContent = 0;
    score1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;
    activePlayer = 0; 
    currentScore = 0;
    dice.classList.add('hidden');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
  
  });

btnHold.addEventListener('click', function() {
  if(playing) {
  scores[activePlayer] += currentScore;

  document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

if(scores[activePlayer] >= 100){
  playing = false;
  dice.classList.add('hidden');
  document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');}
  else{
    switchPlayer();
  }

  }
});
