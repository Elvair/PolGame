$(document).ready = createTable();

var board = document.getElementById("board");
var arrayBi = []; 

function createTable(arrayBi) {
    for (var i=0; i<7; i++) {       //rows
        for (var j=0; j<7; j++){    //columns    
            board[i][j];
        }
    }
}
$("#board").append("<div class=spaceBoard></div>");
