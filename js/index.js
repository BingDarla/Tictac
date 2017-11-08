$(document).ready(function() {

  ticTac.gameTable();

  let currentPlayer1 = 0;
  let currentPlayer2 = 0;
  let playFlag1 = 0;
  let playFlag2 = 0;

  //function
  console.log("The document is ready");

  let flag = false; //  game over turn true;
  //gamereset function
  const gameReset = function() {
    ticTac.reset();
    $(".squres").removeClass("player1");
    $(".squres").removeClass("player2");
    $('p1').css('background-color', 'lightpink');

    playFlag1 = currentPlayer1;
    playFlag2 = 0;
  }
  //reset button
  $('#p4').click(function() {
    gameReset();
    flag = false;
  })

  $('#p1').click(function() {
    currentPlayer1 = 1;
    $('#player1').addClass("choose");
    playFlag1 = 1;
    console.log('player1 is choosen');
  })

  $('#p2').click(function() {
    currentPlayer2 = 1;
    playFlag2 = 0;
    $('#player2').addClass("choose");
    console.log('player2 is choosen');
  })

  $('#p3').click(function(){
    currentPlayer2 = 0;
    $('#player3').addClass("choose");
    console.log("AI is choosen");

  })





  $(".squres").click(function() {
    if (ticTac.checkClick(+$(this).attr('id'))) {
      console.log('You can not click there');
      return;
    }
    if (flag) {
      return;
    }

    if (playFlag1 ) {
      // condition:check that grid is not clicked

      $(this).addClass("player1");
      console.log("player1 is called");
      // console.log($(this).attr('id'));
      ticTac.player1Array.push(+$(this).attr('id'));
      // console.log("player1Array: " + ticTac.player1Array);

      ticTac.totalArray.push(+$(this).attr('id'));
      console.log('After player1 totalArray is :'+ticTac.totalArray);

      if (ticTac.player1Array.length >= 3) {
        ticTac.checkWinner(ticTac.player1Array);
        console.log('player1Array was checked');
        console.log("after check" + ticTac.winnerFound);
        if (ticTac.winnerFound) {
          $('#winner').fadeIn(3000);
          $('#winner').fadeOut(2000);
          console.log(`YOU ARE THE WINNER1:${ticTac.player1Array}`);
          ticTac.player1Score++;
          $('#player1').text(ticTac.player1Score);
          flag = true; //game over
          // gameReset();
          return;

        }
      }
      ticTac.counter++;
      console.log(`counter: ${ticTac.counter}`);
      if (ticTac.counter >= 9) {
        console.log(`player1 reset: ${ticTac.counter}`)
        flag = true;
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
        let idAi = ticTac.AIplay();
        $('#' + idAi).addClass("player2");
        ticTac.player2Array.push(+idAi);
        console.log("player2Array:  " + ticTac.player2Array);
        ticTac.totalArray.push(+idAi);
        console.log("After player 2, totalArray is "+ticTac.totalArray);
        // checking AI whether win or not.
        if (ticTac.player2Array.length >= 3) {
          if (ticTac.checkWinner(ticTac.player2Array)){

              document.getElementById("over").play();
              $("#lost").fadeIn(3000);
              $('#lost').fadeOut(3000);
              console.log("YOU ARE THE WINNER2 " + ticTac.player2Array);
              ticTac.AIscore++;
              $('#player3').text(ticTac.AIscore);
              flag = true;
              // gameReset();
              return;

            }
          }
        }
        ticTac.counter++;
        console.log(`counter: ${ticTac.counter}`);
        if (ticTac.counter >= 9) {
          console.log(`player2 reset ${ticTac.counter}`)
          flag = true;
          // gameReset();
          return;
        }

        playFlag1 = 1;
        return;



      }

//*******************Second player*******************
     else if (playFlag2 ) {
      //condition: check the grid is not clicked

      $(this).addClass("player2");
      console.log("player2 is called");
      ticTac.player2Array.push(+$(this).attr('id'));
      console.log("player2Array:  " + ticTac.player2Array);

      ticTac.totalArray.push(+$(this).attr('id'));

      if (ticTac.player2Array.length >= 3) {
        ticTac.checkWinner(ticTac.player2Array);
        console.log('player2Array was checked');
        console.log("after check" + ticTac.winnerFound);
        if (ticTac.winnerFound) {
          console.log("YOU ARE THE WINNER2 " + ticTac.player2Array);
          ticTac.player2Score++;
          $('#player2').text(ticTac.player2Score);
          flag = true;
          // gameReset();
          return;

        }
      }
      ticTac.counter++;
      console.log(`counter: ${ticTac.counter}`);
      if (ticTac.counter >= 9) {
        console.log(`player2 reset ${ticTac.counter}`)
        flag = true;
        // gameReset();
        return;
      }

      playFlag2 = 0;
      playFlag1 = 1;
      return;
    }


  })

})



//checking the playersWay

//ticTac.checkWinner([1,5,6,7]);
// ticTac.checkWinner(['1','5','9']);
