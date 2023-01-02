
function  playGame(playerInput){
    clearMessages()

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
    let computerMove = getMoveName(randomNumber);

    function getMoveName(argMoveId){
        if(argMoveId == 1){
        return 'kamień';
        }else if(argMoveId == 2){
            return 'papier';
        }else if (argMoveId == 3){
            return 'nozyce';
        }
        printMessage('Nie znam ruchu o id:' + argMoveId+ '.');
        return 'nieznany ruch';
    }

   printMessage('Computera ruch to: ' + computerMove);


    let playerMove = getMoveName(/*playerInput*/);


   printMessage('Twój ruch to: ' + playerMove);
   

    displayResult(computerMove, playerMove);

   function displayResult(argComputerMove, argPlayerMove){
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
}    
  document.getElementById('play-rock').addEventListener('click', function(){
    playGame('Kamień');
  });
  document.getElementById('play-paper').addEventListener('click', function(){
    playGame('Papier');
  });
  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame('Nozyce');
  });
  