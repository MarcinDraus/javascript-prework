{
function  playGame(playerInput){
    clearMessages()

  let randomNumber = Math.floor(Math.random() * 3 + 1);
 
   let computerMove = getMoveName(randomNumber);
   
   const getMoveName = function (argMoveId){
        if(argMoveId == 1){
        return 'kamień';
        }else if(argMoveId == 2){
            return 'papier';
        }else if(argMoveId == 3){
            return 'nozyce';
        }else {
          return 'nieznany ruch';
        }
    }
   let playerMove = getMoveName(playerInput);
   
   
    const displayResult = function(argComputerMove, argPlayerMove){
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if(argComputerMove == argPlayerMove){
        printMessage('remis');
    }else if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage('Ty wygrywasz!');
    }else if(argComputerMove == 'papier' && argPlayerMove == 'nozyce'){
        printMessage('Ty wygrywasz!'); 
    }else if(argComputerMove == 'nozyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
    } else {
        printMessage('przegrałeś');
       }
   }
   displayResult(computerMove, playerMove);
}    
  document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });
  document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
  });
  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
  });
}