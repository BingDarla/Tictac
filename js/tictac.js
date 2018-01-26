const size = 3;
// use for index of table


const TicTac = {
    winner: {
      1: ['1', '2', '3'],
      2: ['4', '5', '6'],
      3: ['7', '8', '9'],
      4: ['1', '4', '7'],
      5: ['2', '5', '8'],
      6: ['3', '6', '9'],
      7: ['1', '5', '9'],
      8: ['3', '5', '7']
    },
    player1Score: 0,
    player2Score: 0,
    AIscore: 0,

    totalArray: [], // hold all the id players clicked.
    winFlag: false,

    winnerFound: false,
    // true for win

    counter: 0, //if all the grid are clicked

    player1Array: [], //hold all the click play1 did
    player2Array: [], //hold all the click play2 did

    //generate a talbe for Tic Tac Toe game based on size;
    gameTable: function() {
      let account = 1;
      const parent = $('#game');
      for (let i = 0; i < size; i++) {
        let row = $('<tr>');
        $(parent).append(row);
        // console.log(row);
        for (let j = 0; j < size; j++) {
          col = $('<td>')
          $(row).append(col);
        $(col).attr("id", account).attr("class", "squres");
        account++;
      }

    }
    // console.log("gameTable is running");
  },
  //checking function if playersArray contain Winner array
  checkWinner: function(playersArray) {
    // console.log("checkingwinner function was called");
    for (key in this.winner) {
      let winArray = this.winner[key];
      let found = true;

      for (let i = 0; i < winArray.length; i++) {
        this.winFlag = false;
        for (let j = 0; j < playersArray.length; j++) {
          if (+winArray[i] === +playersArray[j]) {
            this.winFlag = true;
            break;
          }
        }
        if (this.winFlag === false) {
          found = false;
          break;
        }

      }
      if (found === true) {
        console.log("You win!!");
        // console.log(this.winFlag);
        this.winnerFound = true;
        return true;
        //alert("You win");
      }
    }
  },
  //checking the grid was clicked or not
  checkClick: function(id) {
    console.log('checkClick function is called');
    console.log("Total in checkClick:" + this.totalArray);
    // debugger;
    for (let i = 0; i < this.totalArray.length; i++) {
      if (+id === +this.totalArray[i]) {
        return true;
      }
    }

    return false;
  },

  //reset function
  reset: function() {
    this.counter = 0;
    this.player1Array = [];
    this.player2Array = [];
    this.totalArray = [];
    TicTac.winnerFound = false;
    $('#sakura').removeClass('winner');
    $('#sasuki').removeClass('winner');
    $('.ninja').children().css('visibility','hidden');
    $('#r2').css('visibility','hidden');

    // console.log("reset was called!!!!!");
    console.log(this.player1Array + "   " + this.player2Array);
  },

  //***************AI smart strategy********************
  AIsmart: function(playArray) {
    //*************check the winner pattern
    for (key in this.winner) {

      let counter1 = 0 // to record how close to win. 2 ==1 left to win
      let winArray = this.winner[key];
      for (let i = 0; i < winArray.length; i++) {
        for (let j = 0; j < playArray.length; j++) {
          if (+winArray[i] === +playArray[j]) {
            counter1++;
            break;
          }
        }

      }
      if (counter1 === 2) {

        for (let i = 0; i < winArray.length; i++) {
          for (let j = 0; j < playArray; j++) {
            if (+winArray[i] === +playArray[j])
              break;
          }

          if (!(this.checkClick(winArray[i])))
            return winArray[i];
        }
      }
    }
    return 0;
  },


  //*************AI main function****************************
  AIplay: function() {
    let remain = [];


    if (!this.checkClick(5)) {
      return 5;
    }
    //checking AI's going to win******************
    if (this.player2Array.length >= 2) {
      console.log('checking AI  is going to win');
      let r = this.AIsmart(this.player2Array);
      if (r)
        return r;
    }

    // checking if play1 going to win, click the 3rd one.
    if (this.player1Array.length >= 2) {
      console.log('checking winner 1 is going to win');
      let r = this.AIsmart(this.player1Array);
      if (r)
        return r;
    }

    //check and radom

    // console.log("before radom tatal list"+this.totalArray);
    for (let k = 1; k < 10; k++) {
      if (!this.checkClick(k)) {
        remain.push(k);
      }
    }

    //***************radom part*********************************
    // console.log('Radom from AI: remain list: '+remain);
    let r = remain[Math.floor(Math.random() * remain.length)];
    if (!this.checkClick(r))
      return r;
  }
}
//background music
const musicPlay= function() {
  var audio = document.getElementById("audio");
  audio.play();
}
