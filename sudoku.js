var _board = [
    ['0', '0', '0', '2', '6', '0', '7', '0', '1'],
    ['6', '8', '0', '0', '7', '0', '0', '9', '0'],
    ['1', '9', '0', '0', '0', '4', '5', '0', '0'],
    ['8', '2', '0', '1', '0', '0', '0', '4', '0'],
    ['0', '0', '4', '6', '0', '2', '9', '0', '0'],
    ['0', '5', '0', '0', '0', '3', '0', '2', '8'],
    ['0', '0', '9', '3', '0', '0', '0', '7', '4'],
    ['0', '4', '0', '0', '5', '0', '0', '3', '6'],
    ['7', '0', '3', '0', '1', '8', '0', '0', '0'],
];

const empty_board = [
    ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
];




initial_board(_board);



document.getElementById('solve_button').onclick = solve_board;
document.getElementById('clear_button').onclick = clear_board;
document.getElementById('new_board_button').onclick = new_board;
document.getElementById('clear_new_button').onclick = clear_new;

function clear_new(){
    document.getElementById("a9").value = 0;document.getElementById("a8").value = 0;document.getElementById("a7").value = 0;
    document.getElementById("a6").value = 0;document.getElementById("a5").value = 0;document.getElementById("a4").value = 0;
    document.getElementById("a3").value = 0;document.getElementById("a2").value = 0;document.getElementById("a1").value = 0;

    document.getElementById("b9").value = 0;document.getElementById("b8").value = 0;document.getElementById("b7").value = 0;
    document.getElementById("b6").value = 0;document.getElementById("b5").value = 0;document.getElementById("b4").value = 0;
    document.getElementById("b3").value = 0;document.getElementById("b2").value = 0;document.getElementById("b1").value = 0;

    document.getElementById("c9").value = 0;document.getElementById("c8").value = 0;document.getElementById("c7").value = 0;
    document.getElementById("c6").value = 0;document.getElementById("c5").value = 0;document.getElementById("c4").value = 0;
    document.getElementById("c3").value = 0;document.getElementById("c2").value = 0;document.getElementById("c1").value = 0;

    document.getElementById("d9").value = 0;document.getElementById("d8").value = 0;document.getElementById("d7").value = 0;
    document.getElementById("d6").value = 0;document.getElementById("d5").value = 0;document.getElementById("d4").value = 0;
    document.getElementById("d3").value = 0;document.getElementById("d2").value = 0;document.getElementById("d1").value = 0;

    document.getElementById("e9").value = 0;document.getElementById("e8").value = 0;document.getElementById("e7").value = 0;
    document.getElementById("e6").value = 0;document.getElementById("e5").value = 0;document.getElementById("e4").value = 0;
    document.getElementById("e3").value = 0;document.getElementById("e2").value = 0;document.getElementById("e1").value = 0;

    document.getElementById("f9").value = 0;document.getElementById("f8").value = 0;document.getElementById("f7").value = 0;
    document.getElementById("f6").value = 0;document.getElementById("f5").value = 0;document.getElementById("f4").value = 0;
    document.getElementById("f3").value = 0;document.getElementById("f2").value = 0;document.getElementById("f1").value = 0;

    document.getElementById("g9").value = 0;document.getElementById("g8").value = 0;document.getElementById("g7").value = 0;
    document.getElementById("g6").value = 0;document.getElementById("g5").value = 0;document.getElementById("g4").value = 0;
    document.getElementById("g3").value = 0;document.getElementById("g2").value = 0;document.getElementById("g1").value = 0;

    document.getElementById("h9").value = 0;document.getElementById("h8").value = 0;document.getElementById("h7").value = 0;
    document.getElementById("h6").value = 0;document.getElementById("h5").value = 0;document.getElementById("h4").value = 0;
    document.getElementById("h3").value = 0;document.getElementById("h2").value = 0;document.getElementById("h1").value = 0;

    document.getElementById("i9").value = 0;document.getElementById("i8").value = 0;document.getElementById("i7").value = 0;
    document.getElementById("i6").value = 0;document.getElementById("i5").value = 0;document.getElementById("i4").value = 0;
    document.getElementById("i3").value = 0;document.getElementById("i2").value = 0;document.getElementById("i1").value = 0;
}

function new_board(){

    _board = [
        [document.getElementById("a9").value, document.getElementById("b9").value, document.getElementById("c9").value, document.getElementById("d9").value, document.getElementById("e9").value, document.getElementById("f9").value, document.getElementById("g9").value, document.getElementById("h9").value, document.getElementById("i9").value],
        [document.getElementById("a8").value, document.getElementById("b8").value, document.getElementById("c8").value, document.getElementById("d8").value, document.getElementById("e8").value, document.getElementById("f8").value, document.getElementById("g8").value, document.getElementById("h8").value, document.getElementById("i8").value],
        [document.getElementById("a7").value, document.getElementById("b7").value, document.getElementById("c7").value, document.getElementById("d7").value, document.getElementById("e7").value, document.getElementById("f7").value, document.getElementById("g7").value, document.getElementById("h7").value, document.getElementById("i7").value],
        [document.getElementById("a6").value, document.getElementById("b6").value, document.getElementById("c6").value, document.getElementById("d6").value, document.getElementById("e6").value, document.getElementById("f6").value, document.getElementById("g6").value, document.getElementById("h6").value, document.getElementById("i6").value],
        [document.getElementById("a5").value, document.getElementById("b5").value, document.getElementById("c5").value, document.getElementById("d5").value, document.getElementById("e5").value, document.getElementById("f5").value, document.getElementById("g5").value, document.getElementById("h5").value, document.getElementById("i5").value],
        [document.getElementById("a4").value, document.getElementById("b4").value, document.getElementById("c4").value, document.getElementById("d4").value, document.getElementById("e4").value, document.getElementById("f4").value, document.getElementById("g4").value, document.getElementById("h4").value, document.getElementById("i4").value],
        [document.getElementById("a3").value, document.getElementById("b3").value, document.getElementById("c3").value, document.getElementById("d3").value, document.getElementById("e3").value, document.getElementById("f3").value, document.getElementById("g3").value, document.getElementById("h3").value, document.getElementById("i3").value],
        [document.getElementById("a2").value, document.getElementById("b2").value, document.getElementById("c2").value, document.getElementById("d2").value, document.getElementById("e2").value, document.getElementById("f2").value, document.getElementById("g2").value, document.getElementById("h2").value, document.getElementById("i2").value],
        [document.getElementById("a1").value, document.getElementById("b1").value, document.getElementById("c1").value, document.getElementById("d1").value, document.getElementById("e1").value, document.getElementById("f1").value, document.getElementById("g1").value, document.getElementById("h1").value, document.getElementById("i1").value],
    ];

    initial_board(_board);
}

function clear_board(){
    initial_board(empty_board);
    _board = empty_board;
}

function solve_board(){
    sodokoSolver(_board);
    print_board(_board);
}


function initial_board(bo){
    
    for(i = 0; i < bo.length; i++){
        for(j = 0; j < bo[0].length; j++){

            a = bo[i][j];

            if(a == 0){
                a = " ";
            }
            

            if(i == 0){
                document.getElementsByClassName('row1')[j].innerHTML = a;
                document.getElementsByClassName('row1')[j].style.background="#FFFFFF";

                if(a != 0){
                    document.getElementsByClassName('row1')[j].style.background="#90EE90";
                }

            } else if (i == 1){
                document.getElementsByClassName('row2')[j].innerHTML = a;
                document.getElementsByClassName('row2')[j].style.background="#FFFFFF";

                if(a != 0){
                    document.getElementsByClassName('row2')[j].style.background="#90EE90";
                }

            } else if (i == 2){
                document.getElementsByClassName('row3')[j].innerHTML = a;
                document.getElementsByClassName('row3')[j].style.background="#FFFFFF";

                if(a != 0){
                    document.getElementsByClassName('row3')[j].style.background="#90EE90";
                }

            } else if (i == 3){
                document.getElementsByClassName('row4')[j].innerHTML = a;
                document.getElementsByClassName('row4')[j].style.background="#FFFFFF";

                if(a != 0){
                    document.getElementsByClassName('row4')[j].style.background="#90EE90";
                }

            } else if (i == 4){
                document.getElementsByClassName('row5')[j].innerHTML = a;
                document.getElementsByClassName('row5')[j].style.background="#FFFFFF";

                if(a != 0){
                    document.getElementsByClassName('row5')[j].style.background="#90EE90";
                }

            } else if (i == 5){
                document.getElementsByClassName('row6')[j].innerHTML = a;
                document.getElementsByClassName('row6')[j].style.background="#FFFFFF";

                if(a != 0){
                    document.getElementsByClassName('row6')[j].style.background="#90EE90";
                }
                
            } else if (i == 6){
                document.getElementsByClassName('row7')[j].innerHTML = a;
                document.getElementsByClassName('row7')[j].style.background="#FFFFFF";

                if(a != 0){
                    document.getElementsByClassName('row7')[j].style.background="#90EE90";
                }
                
            } else if (i == 7){
                document.getElementsByClassName('row8')[j].innerHTML = a;
                document.getElementsByClassName('row8')[j].style.background="#FFFFFF";

                if(a != 0){
                    document.getElementsByClassName('row8')[j].style.background="#90EE90";
                }

            } else if (i == 8){
                document.getElementsByClassName('row9')[j].innerHTML = a;
                document.getElementsByClassName('row9')[j].style.background="#FFFFFF";

                if(a != 0){
                    document.getElementsByClassName('row9')[j].style.background="#90EE90";
                }

            }
            
        }
    }

}


function isValid(board, row, col, k) {
    for (let i = 0; i < 9; i++) {
        const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        const n = 3 * Math.floor(col / 3) + i % 3;
        if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
          return false;
        }
    }
    return true;
}


function sodokoSolver(data) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (data[i][j] == '0') {
        for (let k = 1; k <= 9; k++) {
          if (isValid(data, i, j, k)) {
            data[i][j] = `${k}`;
          if (sodokoSolver(data)) {
           return true;
          } else {
           data[i][j] = '0';
          }
         }
       }
       return false;
     }
   }
 }
 return true;
}

function print_board(bo){

    for(i = 0; i < bo.length; i++){
        for(j = 0; j < bo[0].length; j++){

            a = bo[i][j];

            if(a == 0){
                a = " ";
            }

            if(i == 0){
                document.getElementsByClassName('row1')[j].innerHTML = a;
            } else if (i == 1){
                document.getElementsByClassName('row2')[j].innerHTML = a;
            } else if (i == 2){
                document.getElementsByClassName('row3')[j].innerHTML = a;
            } else if (i == 3){
                document.getElementsByClassName('row4')[j].innerHTML = a;
            } else if (i == 4){
                document.getElementsByClassName('row5')[j].innerHTML = a;
            } else if (i == 5){
                document.getElementsByClassName('row6')[j].innerHTML = a;
            } else if (i == 6){
                document.getElementsByClassName('row7')[j].innerHTML = a;
            } else if (i == 7){
                document.getElementsByClassName('row8')[j].innerHTML = a;
            } else if (i == 8){
                document.getElementsByClassName('row9')[j].innerHTML = a;
            }
            
        }
    }

}
