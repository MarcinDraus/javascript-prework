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
  
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
}


/*if(randomNumber == 1){
  computerMove = 'kamień';
}
else if(randomNumber == 2) {
    computerMove = 'papier';
}
else if(randomNumber == 3) {
    computerMove = 'nozyce'
}
*/
printMessage('Computera ruch to: ' + computerMove);



let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

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
    } else 
       { printMessage('przegrałeś');}
}


/*
if(playerInput == '1'){
    playerMove = 'kamień';
  } else if(playerInput == '2')
      {playerMove = 'papier'
  }else if(playerInput == '3'){
      playerMove = 'nozyce'
  }*/
  /*printMessage('Twój ruch to: ' + playerMove);*/




/*
if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }else if( computerMove == 'papier' && playerMove == 'nozyce'){
    printMessage('Ty wygrywasz!');
  }else if( computerMove == 'nozyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
  }else if(playerMove == 'kamień' && computerMove == 'papier'){
    printMessage('computer wygrywa');
  }else if(playerMove =='papier' && computerMove == 'nozyce'){
    printMessage('computer wygrywa');
  }else if(playerMove == 'nozyce' && computerMove == 'kamień'){
    printMessage('computer wygrywa');
  }else if(computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('remis');
  }else if(computerMove == 'papier' && playerMove == 'papier'){
    printMessage('remis');
  }else if(computerMove == 'nozyce' && playerMove == 'noozyce'){
    printMessage('remis');
  }else if(playerMove == 'kamień' && computerMove == 'kamień'){
    printMessage('remis');
  }else if(playerMove == 'papier' && computerMove == 'papier'){
    printMessage('remis');
  }else if(playerMove == 'nozyce' && computerMove == 'nozyce'){
    printMessage('remis');
  }
  */