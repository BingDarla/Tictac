$(document).ready(function() {

  musicPlay();
  setInterval(musicPlay, 130000);
  $('.ninja').children().css('visibility', 'hidden');
  $('#r2').css('visibility', 'hidden');

  TicTac.gameTable();

  let currentPlayer1 = 0;
  let currentPlayer2 = 0;
  let playFlag1 = 0;
  let playFlag2 = 0;
  let resetFlag = 0; // set 1 if one of reset Buttons is visible

  //function
  console.log("The document is ready");

  let gameIsOver = false; //  game over turn true;
  //gamereset function
  const gameReset = function() {
    TicTac.reset();
    $(".squres").removeClass("player1");
    $(".squres").removeClass("player2");
    $('.control').removeClass("selected");

    playFlag1 = currentPlayer1;
    playFlag2 = 0;
  }
  //reset button
  $('.reset').click(function() {
    gameReset();
    gameIsOver = false;
    resetFlag = 0;
  })

  $('#p1').click(function() {
    currentPlayer1 = 1;
    $('#p1').addClass("selected");
    playFlag1 = 1;
    console.log('player1 is choosen');
  })

  $('#p2').click(function() {
    currentPlayer2 = 1;
    playFlag2 = 0;
    $('#p2').addClass("selected");
    $('#p3').removeClass("selected");
    console.log('player2 is choosen');
  })

  $('#p3').click(function() {
    currentPlayer2 = 0;
    $('#p3').addClass("selected");
    $('#p2').removeClass("selected");

    console.log("AI is choosen");

  })





  $(".squres").click(function() {
    if (TicTac.checkClick(+$(this).attr('id'))) {

      console.log('You can not click there');
      return;
    }
    if (gameIsOver) {

      return;
    }

    if (playFlag1) {
      // condition:check that grid is not clicked

      $(this).addClass("player1");
      console.log("player1 is called");
      // console.log($(this).attr('id'));
      TicTac.player1Array.push(+$(this).attr('id'));
      // console.log("player1Array: " + TicTac.player1Array);

      TicTac.totalArray.push(+$(this).attr('id'));
      console.log('After player1 totalArray is :' + TicTac.totalArray);

      if (TicTac.player1Array.length >= 3) {
        TicTac.checkWinner(TicTac.player1Array);
        console.log('player1Array was checked');
        console.log("after check" + TicTac.winnerFound);
        //if play1 is winner
        if (TicTac.winnerFound) {
          $('#sakura').addClass('winner');
          $('#sakura').children().css('visibility', 'visible');
          resetFlag = 1;

          console.log(`YOU ARE THE WINNER1:${TicTac.player1Array}`);
          TicTac.player1Score++;
          $('#player1').text(TicTac.player1Score);
          gameIsOver = true; //game over
          return;

        }
      }
      TicTac.counter++;
      console.log(`counter: ${TicTac.counter}`);
      if (TicTac.counter == 9) {
        console.log(`player1 reset: ${TicTac.counter}`)
        gameIsOver = true;
        $('#r2').css('visibility', 'visible');
        // gameReset();
        return;
      }
      if (currentPlayer2 === 1) {
        playFlag1 = 0;
        playFlag2 = 1;
        console.log(`playFlag2 and playFlag1:   ${playFlag2}, ${playFlag1}`);
        return;

      } else if (!currentPlayer2) {
        //**********************AI AI AI**************
        //***********************AI**get in********* count can reach 10
        // console.log("AI function is called.");
        let idAi = TicTac.AIplay();
        $('#AI').css('visibility','visible');
        setTimeout(()=>{
          $('#' + idAi).addClass("player2");
          $('#AI').css('visibility','hidden');
        },500);

        TicTac.player2Array.push(+idAi);
        console.log("player2Array:  " + TicTac.player2Array);
        TicTac.totalArray.push(+idAi);
        console.log("After player 2, totalArray is " + TicTac.totalArray);
        // checking AI whether win or not.
        if (TicTac.player2Array.length >= 3) {
          // if Play2 is winnder
          if (TicTac.checkWinner(TicTac.player2Array)) {
            setTimeout(()=>{
              $('#sasuki').addClass('winner');
              $('#sasuki').children().css('visibility', 'visible');
            },600)
            resetFlag = 1;
            console.log("YOU ARE THE WINNER2 " + TicTac.player2Array);
            TicTac.AIscore++;
            $('#player3').text(TicTac.AIscore);
            gameIsOver = true;
            return;
          }
        }
      }
      TicTac.counter++;
      console.log(`counter: ${TicTac.counter}`);
      // case : no winner
      if (TicTac.counter == 9) {
        console.log(`player2 reset ${TicTac.counter}`)
        gameIsOver = true;

        return;
      }

      playFlag1 = 1;
      return;
    }

    //*******************Second player*******************
    else if (playFlag2) {
      //condition: check the grid is not clicked

      $(this).addClass("player2");
      console.log("player2 is called");
      TicTac.player2Array.push(+$(this).attr('id'));
      console.log("player2Array:  " + TicTac.player2Array);

      TicTac.totalArray.push(+$(this).attr('id'));

      if (TicTac.player2Array.length >= 3) {
        TicTac.checkWinner(TicTac.player2Array);
        console.log('player2Array was checked');
        console.log("after check" + TicTac.winnerFound);
        if (TicTac.winnerFound) {
          $('#sasuki').children().css('visibility', 'visible');
          resetFlag = 1;
          console.log("YOU ARE THE WINNER2 " + TicTac.player2Array);
          $('#sasuki').addClass('winner');
          TicTac.player2Score++;
          $('#player2').text(TicTac.player2Score);
          gameIsOver = true;
          return;
        }
      }

      TicTac.counter++;
      console.log(`counter: ${TicTac.counter}`);
      if (TicTac.counter >= 9) {
        console.log(`player2 reset ${TicTac.counter}`)
        gameIsOver = true;
        return;
      }

      playFlag2 = 0;
      playFlag1 = 1;

      return;
    }
  })

})



//checking the playersWay

//TicTac.checkWinner([1,5,6,7]);
// TicTac.checkWinner(['1','5','9']);
