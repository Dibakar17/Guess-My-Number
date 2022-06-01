'use strict';

document.querySelector('.score').textContent=10;
let score= 10;
let highscore=0;

//Functions..
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
  };

let snumber=Math.trunc(Math.random()*20)+1;
//console.log(snumber, typeof snumber);


document.querySelector('.check').addEventListener('click',  function(){

    const guess= Number (document.querySelector('.guess').value);
    console.log(guess,typeof guess);


    //for no number//
    if (!guess){
        displayMessage('No Number!');
    } else if(guess===snumber){
        displayMessage('Correct Number!');
        
        document.querySelector('.numb').textContent= snumber;
        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }

        //style manipulating
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.numb').style.width='30rem'; 
    } else if (guess !== snumber) {
        if (score > 1) {
          // document.querySelector('.message').textContent =
          // guess > secretNumber ? 'Too high!' : 'Too low!';
          displayMessage(guess > snumber ? 'Too high!' : ' Too low!');
          score--;
          document.querySelector('.score').textContent = score;
        } else {
          displayMessage('You lost the game!');

          document.querySelector('.score').textContent = 0;
          document.querySelector('.score').textContent=0;
            document.querySelector('body').style.backgroundColor='#c02626';
            document.querySelector('.numb').textContent='LOL';
        }
      }
});



///reset bution

document.querySelector('.again').addEventListener('click', function() {
    score= 10;
    snumber= Math.trunc(Math.random()*20)+1;
console.log(snumber);


    displayMessage('Start Guessing....');
    //document.querySelector('.massage').textContent='Start Guessing....';
    document.querySelector('.score').textContent=score;
    document.querySelector('.guess').value='';
    document.querySelector('.numb').textContent='?';
    document.querySelector('.numb').style.width='15rem';
    document.querySelector('body').style.backgroundColor='#222';
});
