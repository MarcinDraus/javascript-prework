{
function  playGame(playerInput){
    clearMessages()

    const randomNumber = Math.floor(Math.random() * 3 + 1);
    
    const computerMove = getMoveName(randomNumber);

    function getMoveName(argMoveId){
        if(argMoveId == 1){
        return 'kamień';
        }else if(argMoveId == 2){
            return 'papier';
        }else (argMoveId == 3){
            return 'nozyce';
        }return 'nieznany ruch';
    }
   
    const playerMove = getMoveName(playerInput);

    const displayResult= function(ComputerMove, PlayerMove){
    printMessage('Zagrałem ' + ComputerMove + ', a Ty ' + PlayerMove);

    if(ComputerMove == PlayerMove){
        printMessage('remis');
    }else if(ComputerMove == 'kamień' && PlayerMove == 'papier'){
      printMessage('Ty wygrywasz!');
    }else if(ComputerMove == 'papier' && PlayerMove == 'nozyce'){
        printMessage('Ty wygrywasz!'); 
    }else if(ComputerMove == 'nozyce' && PlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
    } else {
        printMessage('przegrałeś');
       }
   }
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