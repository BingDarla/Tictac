

$(document).ready(function(){

  ticTac.gameTable();

  let currentPlayer = 1;
  
  //function
  console.log("The document is ready");

  let flag = false;  //  game over turn true;
  const gameReset = function(){
    ticTac.reset();
    $(".squres").removeClass("player1");
    $(".squres").removeClass("player2");
  }
     $('#p4').click(function(){
       gameReset();
       flag = false;
     })


   $(".squres").click(function(){
     if (ticTac.checkClick($(this).attr('id'))){
       console.log('You can not cliked there');
       return;
     }
     if (flag){
       return;
     }

     if(currentPlayer === 1 ){
      // condition:check that grid is not clicked

      $(this).addClass("player1");
      console.log("player1 is called");
      console.log($(this).attr('id'));
      ticTac.player1Array.push($(this).attr('id'));
      console.log("player1Array: "+ticTac.player1Array);

      ticTac.totalArray.push($(this).attr('id'));

      if (ticTac.player1Array.length >= 3){
        ticTac.checkWinner(ticTac.player1Array);
      console.log('player1Array was checked');
        console.log("after check"+ticTac.winnerFound);
        if (ticTac.winnerFound){
          console.log(`YOU ARE THE WINNER1:${ticTac.player1Array}`);
          ticTac.player1Score++;
          $('#player1').text(ticTac.player1Score);
          flag = true;  //game over
          // gameReset();
          return;

        }
      }
      ticTac.counter ++;
      console.log(`counter: ${ticTac.counter}`);
      if (ticTac.counter >=9){
        console.log(`player1 reset: ${ticTac.counter}`)
        flag =true;
        // gameReset();
        return;
      }
      currentPlayer = 0;
    }  else {
      //condition: check the grid is not clicked

      $(this).addClass("player2");
      console.log("player2 is called");
      ticTac.player2Array.push($(this).attr('id'));
      console.log("player2Array:  "+ticTac.player2Array);

      ticTac.totalArray.push($(this).attr('id'));

      if (ticTac.player2Array.length >=3){
        ticTac.checkWinner(ticTac.player2Array);
        console.log('player2Array was checked');
        console.log("after check"+ticTac.winnerFound);
        if (ticTac.winnerFound){
          console.log("YOU ARE THE WINNER2 "+ticTac.player2Array);
          ticTac.player2Score++;
          $('#player2').text(ticTac.player2Score);
          flag = true;
          // gameReset();
          return;

        }
      }
      ticTac.counter ++;
      console.log(`counter: ${ticTac.counter}`);
      if (ticTac.counter >=9){
        console.log(`player2 reset ${ticTac.counter}`)
        flag = true;
        // gameReset();
        return;
      }
      // ticTac.counter ++;
      currentPlayer = 1;
    }


  })

  //checking the playersWay

  //ticTac.checkWinner([1,5,6,7]);
  // ticTac.checkWinner(['1','5','9']);

})
