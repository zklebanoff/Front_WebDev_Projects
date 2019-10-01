//by Zackary Klebanoff of 10/1/2019

$('td').css('color','red');
 $("#64").css('color','blue');

var player1 = prompt("You will be red. Player 1 enter your name:");
var player2 = prompt("You will be blue. Player 2 enter your name:");

$('h4').text(player1 + " is up! Pick a column!");
$('h4').css('color','red');

var i = 0;
var check = 0;
var col1 = 0;
var col2 = 0;
var col3 = 0;
var col4 = 0;
var col5 = 0;
var col6 = 0;
var col7 = 0;

var winner = 3;
var gameover = 0;

//blue marks an identifier 0
//red marks an identifier 1

var c1r1 = 8;
var c1r2 = 9;
var c1r3 = 10;
var c1r4 = 11;
var c1r5 = 12;
var c1r6 = 13;
var c2r1 = 14;
var c2r2 = 15;
var c2r3 = 16;
var c2r4 = 17;
var c2r5 = 18;
var c2r6 = 19;
var c3r1 = 20;
var c3r2 = 21;
var c3r3 = 22;
var c3r4 = 23;
var c3r5 = 24;
var c3r6 = 25;
var c4r1 =26;
var c4r2 = 27;
var c4r3 = 28;
var c4r4 = 29;
var c4r5 = 30;
var c4r6 =31;
var c5r1 = 32;
var c5r2 = 33;
var c5r3 = 34;
var c5r4 = 35;
var c5r5 = 36;
var c5r6 = 37;
var c6r1 = 38;
var c6r2 = 39;
var c6r3 = 40;
var c6r4 = 41;
var c6r5 = 42;
var c6r6 = 43;
var c7r1 = 44;
var c7r2 = 45;
var c7r3 = 46;
var c7r4 = 47;
var c7r5 = 48;
var c7r6 = 49;






//COL 1
$("#61, #51, #41, #31, #21, #11").on('click',function(){
  if(col1 == 6){}
  else{
    if (col1 == 0 && gameover == 0) {
      if (i%2 == 0) {
        $("#61").css('background-color','red');
        c1r6 = 1;
      }
      else {
        $("#61").css('background-color','blue');
        c1r6 =0;
      }

    }

    if (col1 == 1 && gameover == 0) {
      if (i%2 == 0) {
        $("#51").css('background-color','red');
        c1r5 = 1;
      }
      else {
        $("#51").css('background-color','blue');;
        c1r5 = 0;
      }

    }

    if (col1 == 2 && gameover == 0) {
      if (i%2 == 0) {
        $("#41").css('background-color','red');
        c1r4 = 1;
      }
      else {
        $("#41").css('background-color','blue');
        c1r4 = 0;
      }

    }

    if (col1 == 3 && gameover == 0) {
      if (i%2 == 0) {
        $("#31").css('background-color','red');
        c1r3 = 1;
      }
      else {
        $("#31").css('background-color','blue');
        c1r3 = 0;
      }

    }

    if (col1 == 4 && gameover == 0) {
      if (i%2 == 0) {
        $("#21").css('background-color','red');
        c1r2 = 1;
      }
      else {
        $("#21").css('background-color','blue');
        c1r2 = 0;
      }

    }

    if (col1 == 5 && gameover == 0) {
      if (i%2 == 0) {
        $("#11").css('background-color','red');
        c1r1 = 1;
      }
      else {
        $("#11").css('background-color','blue');
        c1r1 = 0;
      }

    }


    col1 = col1+1
    i = i+1;}
})
//COL 2
$("#62, #52, #42, #32, #22, #12").on('click',function(){
  if(col2 == 6){}
  else{
    if (col2 == 0 && gameover == 0) {
      if (i%2 == 0) {
        $("#62").css('background-color','red');
        c2r6 = 1;
      }
      else {
        $("#62").css('background-color','blue');
        c2r6 = 0;
      }

    }

    if (col2 == 1 && gameover == 0) {
      if (i%2 == 0) {
        $("#52").css('background-color','red');
        c2r5= 1;
      }
      else {
        $("#52").css('background-color','blue');
        c2r5 = 0;
      }

    }

    if (col2 == 2 && gameover == 0) {
      if (i%2 == 0) {
        $("#42").css('background-color','red');
        c2r4 = 1;
      }
      else {
        $("#42").css('background-color','blue');
        c2r4=0;
      }

    }

    if (col2 == 3 && gameover == 0) {
      if (i%2 == 0) {
        $("#32").css('background-color','red');
        c2r3 = 1;
      }
      else {
        $("#32").css('background-color','blue');
        c2r3 = 0;
      }

    }

    if (col2 == 4 && gameover == 0) {
      if (i%2 == 0) {
        $("#22").css('background-color','red');
        c2r2 = 1;
      }
      else {
        $("#22").css('background-color','blue');
        c2r2 = 0;
      }

    }

    if (col2 == 5 && gameover == 0) {
      if (i%2 == 0) {
        $("#12").css('background-color','red');
        c2r1 = 1;
      }
      else {
        $("#12").css('background-color','blue');
        c2r1 = 0;
      }

    }


    col2 = col2+1
    i = i+1;}
})
//COL 3
$("#63, #53, #43, #33, #23, #13").on('click',function(){
  if(col3 == 6){}
  else{
    if (col3 == 0 && gameover == 0) {
      if (i%2 == 0) {
        $("#63").css('background-color','red');
        c3r6 = 1;
      }
      else {
        $("#63").css('background-color','blue');
        c3r6 = 0;
      }

    }

    if (col3 == 1 && gameover == 0) {
      if (i%2 == 0) {
        $("#53").css('background-color','red');
        c3r5 = 1;
      }
      else {
        $("#53").css('background-color','blue');
        c3r5 = 0;
      }

    }

    if (col3 == 2 && gameover == 0) {
      if (i%2 == 0) {
        $("#43").css('background-color','red');
        c3r4 = 1;
      }
      else {
        $("#43").css('background-color','blue')
        c3r4 =0;
      }

    }

    if (col3 == 3 && gameover == 0) {
      if (i%2 == 0) {
        $("#33").css('background-color','red');
        c3r3 = 1;
      }
      else {
        $("#33").css('background-color','blue');
        c3r3 = 0;
      }

    }

    if (col3 == 4 && gameover == 0) {
      if (i%2 == 0) {
        $("#23").css('background-color','red');
        c3r2 = 1;
      }
      else {
        $("#23").css('background-color','blue')
        c3r2 = 0;
      }

    }

    if (col3 == 5 && gameover == 0) {
      if (i%2 == 0) {
        $("#13").css('background-color','red');
        c3r1 = 1;
      }
      else {
        $("#13").css('background-color','blue');
        c3r1 = 0;
      }

    }


    col3 = col3+1
    i = i+1;}
})
//COL 4
$("#64, #54, #44, #34, #24, #14").on('click',function(){
  if(col4 == 6){}
  else{
    if (col4 == 0 && gameover == 0) {
      if (i%2 == 0) {
        $("#64").css('background-color','red');
        c4r6 = 1;
      }
      else {
        $("#64").css('background-color','blue');
        c4r6 = 0;
      }

    }

    if (col4 == 1 && gameover == 0) {
      if (i%2 == 0) {
        $("#54").css('background-color','red');
        c4r5 = 1;
      }
      else {
        $("#54").css('background-color','blue');
        c4r5 = 0;
      }

    }

    if (col4 == 2 && gameover == 0) {
      if (i%2 == 0) {
        $("#44").css('background-color','red');
        c4r4 = 1;
      }
      else {
        $("#44").css('background-color','blue');
        c4r4 = 0;
      }

    }

    if (col4 == 3 && gameover == 0) {
      if (i%2 == 0) {
        $("#34").css('background-color','red');
        c4r3 = 1;
      }
      else {
        $("#34").css('background-color','blue');
        c4r3 = 0;
      }

    }

    if (col4 == 4 && gameover == 0) {
      if (i%2 == 0) {
        $("#24").css('background-color','red');
        c4r2 = 1;
      }
      else {
        $("#24").css('background-color','blue');
        c4r2 = 0;
      }

    }

    if (col4 == 5 && gameover == 0) {
      if (i%2 == 0) {
        $("#14").css('background-color','red');
        c4r1 = 1;
      }
      else {
        $("#14").css('background-color','blue');
        c4r1 = 0;
      }

    }


    col4 = col4+1
    i = i+1;}
})
//COL 5
$("#65, #55, #45, #35, #25, #15").on('click',function(){
  if(col5 == 6){}
  else{
    if (col5 == 0 && gameover == 0) {
      if (i%2 == 0) {
        $("#65").css('background-color','red');
        c5r6 = 1;
      }
      else {
        $("#65").css('background-color','blue');
        c5r6 = 0;
      }

    }

    if (col5 == 1 && gameover == 0) {
      if (i%2 == 0) {
        $("#55").css('background-color','red');
        c5r5 = 1;
      }
      else {
        $("#55").css('background-color','blue');
        c5r5 = 0;
      }

    }

    if (col5 == 2 && gameover == 0) {
      if (i%2 == 0) {
        $("#45").css('background-color','red');
        c5r4 = 1;
      }
      else {
        $("#45").css('background-color','blue');
        c5r4 = 0;
      }

    }

    if (col5 == 3 && gameover == 0) {
      if (i%2 == 0) {
        $("#35").css('background-color','red');
        c5r3 = 1;
      }
      else {
        $("#35").css('background-color','blue');
        c5r3 =0;
      }

    }

    if (col5 == 4 && gameover == 0) {
      if (i%2 == 0) {
        $("#25").css('background-color','red');
        c5r2 = 1;
      }
      else {
        $("#25").css('background-color','blue');
        c5r2 = 0;
      }

    }

    if (col5 == 5 && gameover == 0) {
      if (i%2 == 0) {
        $("#15").css('background-color','red');
        c5r1 =1;
      }
      else {
        $("#15").css('background-color','blue');
        c5r1 = 0;
      }

    }


    col5 = col5+1
    i = i+1;}
})
//COL 6
$("#66, #56, #46, #36, #26, #16").on('click',function(){
  if(col6 == 6){}
  else{
    if (col6 == 0 && gameover == 0) {
      if (i%2 == 0) {
        $("#66").css('background-color','red');
        c6r6 = 1;
      }
      else {
        $("#66").css('background-color','blue');
        c6r6 = 0;
      }

    }

    if (col6 == 1 && gameover == 0) {
      if (i%2 == 0) {
        $("#56").css('background-color','red');
        c6r5 = 1;
      }
      else {
        $("#56").css('background-color','blue');
        c6r5 = 0;
      }

    }

    if (col6 == 2 && gameover == 0) {
      if (i%2 == 0) {
        $("#46").css('background-color','red');
        c6r4 = 1;
      }
      else {
        $("#46").css('background-color','blue');
        c6r4 = 0;
      }

    }

    if (col6 == 3 && gameover == 0) {
      if (i%2 == 0) {
        $("#36").css('background-color','red');
        c6r3 = 1;
      }
      else {
        $("#36").css('background-color','blue');
        c6r3 = 0;
      }

    }

    if (col6 == 4 && gameover == 0) {
      if (i%2 == 0) {
        $("#26").css('background-color','red');
        c6r2 = 1;
      }
      else {
        $("#26").css('background-color','blue');
        c6r2 = 0;
      }

    }

    if (col6 == 5 && gameover == 0) {
      if (i%2 == 0) {
        $("#16").css('background-color','red');
        c6r1 = 1;
      }
      else {
        $("#16").css('background-color','blue');
        c6r1 = 0;
      }

    }


    col6 = col6+1
    i = i+1;}
})
//COL 7
$("#67, #57, #47, #37, #27, #17").on('click',function(){
  if(col7 == 6){}
  else{
    if (col7 == 0 && gameover == 0) {
      if (i%2 == 0) {
        $("#67").css('background-color','red');
        c7r6 = 1;
      }
      else {
        $("#67").css('background-color','blue');
        c7r6 = 0;
      }

    }

    if (col7 == 1 && gameover == 0) {
      if (i%2 == 0) {
        $("#57").css('background-color','red');
        c7r5 = 1;
      }
      else {
        $("#57").css('background-color','blue');
        c7r5 = 0;
      }

    }

    if (col7 == 2 && gameover == 0) {
      if (i%2 == 0) {
        $("#47").css('background-color','red');
        c7r4 = 1;
      }
      else {
        $("#47").css('background-color','blue');
        c7r4 = 0;
      }

    }

    if (col7 == 3 && gameover == 0) {
      if (i%2 == 0) {
        $("#37").css('background-color','red');
        c7r3 = 1;
      }
      else {
        $("#37").css('background-color','blue');
        c7r3 = 0;
      }

    }

    if (col7 == 4 && gameover == 0) {
      if (i%2 == 0) {
        $("#27").css('background-color','red');
        c7r2 = 1;
      }
      else {
        $("#27").css('background-color','blue');
        c7r2 = 0;
      }

    }

    if (col7 == 5 && gameover == 0) {
      if (i%2 == 0) {
        $("#17").css('background-color','red');
        c7r1 = 1;
      }
      else {
        $("#17").css('background-color','blue');
        c7r1 = 0;
      }

    }


    col7 = col7+1
    i = i+1;}
})




//winner = 1 is red winner = 0 is blue

//WINNER CHECKEr
$("td").on('click',function(){


//Row 1
if (c1r1 == c2r1  && c2r1 == c3r1 && c3r1 == c4r1){
  if (c1r1 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

if (c2r1 == c3r1 && c3r1 == c4r1  && c4r1 == c5r1){
  if (c2r1 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

if (c3r1 == c4r1  && c4r1 == c5r1 && c5r1 == c6r1){
  if (c3r1 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

if ( c4r1 == c5r1 && c5r1 == c6r1  && c6r1 == c7r1){
  if (c4r1 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

//ROW 2
if (c1r2 == c2r2  && c2r2 == c3r2 && c3r2 == c4r2){
  if (c1r2 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

if (c2r2 == c3r2 && c3r2 == c4r2  && c4r2 == c5r2){
  if (c2r2 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

if (c3r2 == c4r2  && c4r2 == c5r2 && c5r2 == c6r2){
  if (c3r2 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

if ( c4r2 == c5r2 && c5r2 == c6r2  && c6r2 == c7r2){
  if (c4r2 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

//ROW 3
if (c1r3 == c2r3  && c2r3 == c3r3 && c3r3 == c4r3){
  if (c1r3 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

if (c2r3 == c3r3 && c3r3 == c4r3  && c4r3 == c5r3){
  if (c2r3 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

if (c3r3 == c4r3  && c4r3 == c5r3 && c5r3 == c6r3){
  if (c3r3 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

if ( c4r3 == c5r3 && c5r3 == c6r3  && c6r3 == c7r3){
  if (c4r1 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}
//ROW 4
if (c1r4 == c2r4  && c2r4 == c3r4 && c3r4 == c4r4){
  if (c1r4 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

if (c2r4 == c3r4 && c3r4 == c4r4  && c4r4 == c5r4){
  if (c2r4 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

if (c3r4 == c4r4  && c4r4 == c5r4 && c5r4 == c6r4){
  if (c3r4 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

if ( c4r4 == c5r4 && c5r4 == c6r4  && c6r4 == c7r4){
  if (c4r4 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}
//ROW 5
if (c1r5 == c2r5  && c2r5 == c3r5 && c3r5 == c4r5){
  if (c1r5 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

if (c2r5 == c3r5 && c3r5 == c4r5  && c4r5 == c5r5){
  if (c2r5 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

if (c3r5 == c4r5  && c4r5 == c5r5 && c5r5 == c6r5){
  if (c3r5 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

if ( c4r5 == c5r5 && c5r5 == c6r5  && c6r5 == c7r5){
  if (c4r5 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}
//ROW 6
if (c1r6 == c2r6  && c2r6 == c3r6 && c3r6 == c4r6){
  if (c1r6 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

if (c2r6 == c3r6 && c3r6 == c4r6  && c4r6 == c5r6){
  if (c2r6 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

if (c3r6 == c4r6  && c4r6 == c5r6 && c5r6 == c6r6){
  if (c3r6 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

if ( c4r6 == c5r6 && c5r6 == c6r6  && c6r6 == c7r6){
  if (c4r6 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}


//COL 1

if (c1r1 == c1r2 && c1r2 == c1r3 && c1r3 == c1r4){
  if (c1r1 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

if (c1r2 == c1r3 && c1r3 == c1r4 && c1r4 == c1r5){
  if (c1r2 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

if (c1r3 == c1r4 && c1r4 == c1r5 && c1r5 == c1r6){
  if (c1r3 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

//COL 2

if (c2r1 == c2r2 && c2r2 == c2r3 && c2r3 == c2r4){
  if (c2r1 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

if (c2r2 == c2r3 && c2r3 == c2r4 && c2r4 == c2r5){
  if (c2r2 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

if (c2r3 == c2r4 && c2r4 == c2r5 && c2r5 == c2r6){
  if (c2r3 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

//COL 3

if (c3r1 == c3r2 && c3r2 == c3r3 && c3r3 == c3r4){
  if (c3r1 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

if (c3r2 == c3r3 && c3r3 == c3r4 && c3r4 == c3r5){
  if (c3r2 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

if (c3r3 == c3r4 && c3r4 == c3r5 && c3r5 == c3r6){
  if (c3r3 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

//COL 4

if (c4r1 == c4r2 && c4r2 == c4r3 && c4r3 == c4r4){
  if (c4r1 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

if (c4r2 == c4r3 && c4r3 == c4r4 && c4r4 == c4r5){
  if (c4r2 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

if (c4r3 == c4r4 && c4r4 == c4r5 && c4r5 == c4r6){
  if (c4r3 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}
//COL 5

if (c5r1 == c5r2 && c5r2 == c5r3 && c5r3 == c5r4){
  if (c5r1 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

if (c5r2 == c5r3 && c5r3 == c5r4 && c5r4 == c5r5){
  if (c5r2 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

if (c5r3 == c5r4 && c5r4 == c5r5 && c5r5 == c5r6){
  if (c5r3 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

//COL 6

if (c6r1 == c6r2 && c6r2 == c6r3 && c6r3 == c6r4){
  if (c6r1 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

if (c6r2 == c6r3 && c6r3 == c6r4 && c6r4 == c6r5){
  if (c6r2 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

if (c6r3 == c6r4 && c6r4 == c6r5 && c6r5 == c6r6){
  if (c6r3 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

//COL 7

if (c7r1 == c7r2 && c7r2 == c7r3 && c7r3 == c7r4){
  if (c7r1 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

if (c7r2 == c7r3 && c7r3 == c7r4 && c7r4 == c7r5){
  if (c7r2 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

if (c7r3 == c7r4 && c7r4 == c7r5 && c7r5 == c7r6){
  if (c7r3 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

//diags

if (c1r3 == c2r4 && c2r4 == c3r5 && c3r5 == c4r6){
  if (c1r3 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

if (c2r3 == c3r4 && c3r4 == c4r5 && c4r5 == c5r6){
  if (c2r3 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

if (c2r3 == c3r4 && c3r4 == c4r5 && c2r3 == c1r2){
  if (c2r3 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

if (c6r6 == c5r5 && c4r4 == c5r5 && c3r3 == c4r4) {
  if (c6r6 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;

}

if (c2r2 == c5r5 && c4r4 == c5r5 && c3r3 == c4r4) {
  if (c2r2 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;

}

if (c2r2 == c3r3 && c4r4 == c1r1 && c3r3 == c4r4) {
  if (c2r2 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;

}

if(c7r6 == c6r5 && c6r5 == c5r4 && c5r4 == c4r3){
  if (c7r6 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

if(c6r5 == c5r4 && c5r4 == c4r3  && c4r3 == c3r2){
  if (c6r5 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

if(c5r4 == c4r3  && c4r3 == c3r2 && c3r2 == c2r1){
  if (c5r4 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

//diags right to left

if (c1r6 == c2r5 && c2r5 == c3r4 && c3r4 == c4r3) {
  if (c1r6 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

if (c2r5 == c3r4 && c3r4 == c4r3 && c4r3 == c5r2) {
  if (c2r5 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

if (c3r4 == c4r3 && c4r3 == c5r2 && c5r2 == c6r1) {
  if (c3r4 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

if (c2r6 == c3r5 &&  c3r5 == c4r4 && c4r4 == c5r3){
  if (c2r6 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

if (c3r5 == c4r4 && c4r4 == c5r3 && c5r3 == c6r2){
  if (c3r5 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

if (c4r4 == c5r3 && c5r3 == c6r2 && c6r2 == c7r1){
  if (c4r4 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

if(c3r6 == c4r5 && c4r5 == c5r4 && c5r4 == c6r3){
  if (c3r6 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

if(c4r5 == c5r4 && c5r4 == c6r3 && c6r3 == c7r2){
  if (c4r5 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

if(c4r6 == c5r5 && c5r5 == c6r4 && c6r4 == c7r3){
  if (c4r6 == 1){
    winner = 1;
  }
  else { winner = 0;}

  gameover = 1;
}

if (gameover == 0){
  if(i%2 == 0){
  $('h4').text(player1 + " is up! Pick a column!");
  $('h4').css('color','red');
}
  else{
    $('h4').text(player2 + " is up! Pick a column!");
    $('h4').css('color','blue');
  }
}

if (gameover == 1){
  if(winner == 1){
  $('h4').text("Gameover! " + player1 + " won! Refresh the brower to play again.");
  $('h4').css('color','red');
}
  else{
    $('h4').text("Gameover! " + player2 + " won! Refresh the browser to play again.");
    $('h4').css('color','blue');
  }
}

})
