
const size = 3;
    // use for index of table


  const ticTac  = {
    winner:{
      1:['1','2','3'],
      2:['4','5','6'],
      3:['7','8','9'],
      4:['1','4','7'],
      5:['2','5','8'],
      6:['3','6','9'],
      7:['1','5','9'],
      8:['3','5','7']
    },
     player1Score:0,
     player2Score:0,

     totalArray:[],    // hold all the id players clicked.
     winFlag:false,

     winnerFound:false,
           // true for win

     counter:0,       //if all the grid are clicked

     player1Array:[],  //hold all the click play1 did
     player2Array:[],  //hold all the click play2 did

    //generate a talbe for Tic Tac Toe game based on size;
    gameTable: function(){
         let account = 1;
      const parent = $('#game');
      for (let i=0;i<size;i++){
            let row = $('<tr>');
            $(parent).append(row);
            // console.log(row);
            for (let j=0;j<size;j++){
              col = $('<td>')
              $(row).append(col);
              $(col).attr("id",account).attr("class","squres");
              account++;
            }

      }
        // console.log("gameTable is running");
    },
    //checking function if playersArray contain Winner array
    checkWinner:function( playersArray ){
      console.log("checking function was called");
      for (key in this.winner) {
        let winArray = this.winner[key];
        let found = true;

        for (let i=0;i<winArray.length;i++){
          this.winFlag = false;
          for (let j=0; j<playersArray.length;j++){
            if (winArray[i] === playersArray[j]){
              this.winFlag = true;
              break;
            }
          }
          if (this.winFlag === false){
            found = false;
            break;
        }

        }
        if (found === true){
          console.log("You win!!");
          console.log(this.winFlag);
          this.winnerFound = true;
          return;
          //alert("You win");
        }
      }
  },
      //checking the grid was clicked or not
      checkClick:function(id){
        console.log('checkClick function is called');
        console.log("Total "+this.totalArray);
        for (let i = 0; i<this.totalArray.length; i++){
          if (id ===this.totalArray[i])
          return true;
        }
      },

    //reset function
     reset:function(){
      this.counter = 0;
      this.player1Array=[];
      this.player2Array=[];
      this.totalArray = [];
      ticTac.winnerFound = false;
      console.log("reset was called!!!!!");
      console.log(this.player1Array+"   "+this.player2Array);
    },

    //computer generate click id
    computer:function(){
      return 3;
    }

  }
