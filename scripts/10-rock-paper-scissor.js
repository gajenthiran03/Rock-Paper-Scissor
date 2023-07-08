let  score =JSON.parse( localStorage.getItem('score')) || {
  wins: 0,
  loses: 0,
  ties: 0
 };


updateScoreElement();

 /*
if(!score) {
 score = {
  wins: 0,
  loses: 0,
  ties: 0

 };

 }
*/


 function playGame(playerMove) {
  const computerMove = pickcomputerMove();



  let result = '';

  if (playerMove === 'Scissors') {
    if (computerMove === 'rock') {
      result = 'you lose.';
     } else if (computerMove === 'paper') {
      result = 'you win.';
     } else if (computerMove === 'scissors') {
      result = 'Tie.' ;
    }

   } 


   else if (playerMove === 'paper'){
      if (computerMove === 'rock') {
       result = 'you win.';
       } else if (computerMove === 'paper') {
       result = 'Tie.';
       } else if (computerMove === 'scissors') {
        result = 'you lose.' ;
       }
   }

   

   else if (playerMove === 'rock'){
      if (computerMove === 'rock') {
       result = 'Tie.';
       } else if (computerMove === 'paper') {
       result = 'you lose.';
       } else if (computerMove === 'scissors') {
         result = 'you win.' ;
       }

  }


   if (result === 'you win.') {
     score.wins += 1;
    } else if (result === 'you lose.'){
     score.loses += 1;
     } else if (result === 'Tie.'){
     score.ties += 1;
     }
    
     localStorage.setItem('score', JSON.stringify(score));

     updateScoreElement();

     document.querySelector('.js-result').innerHTML = result;

     document.querySelector('.js-moves').innerHTML = `you 
       <img src="images/${playerMove}.jpg" class="move-icon">
       <img src="images/${computerMove}.jpg" class="move-icon"> 
     computer`;

  
}

function updateScoreElement() {
 document.querySelector('.js-score') .innerHTML = ` wins: ${score.wins}, losses: ${score.loses}, ties: ${score.ties}`;


}

 function pickcomputerMove () {
   const randomNumber = Math.random(); 

 
   let computerMove = '';


   if (randomNumber >=  0 && randomNumber < 1 / 3 ) {

    computerMove = 'rock'; 
   }else if (randomNumber >= 1/3 && randomNumber < 2 / 3) {

   computerMove ='paper';
   }else  if (randomNumber >= 2 / 3 && randomNumber <  1)  {

   computerMove = 'scissors';

   }
   return computerMove ;
}