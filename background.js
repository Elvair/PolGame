//Otra solución para hacer tablero



// $(document).ready (createTable();

$(document).ready(function () {
    createTable();
    var board = document.getElementById("board");

    console.log('board fuera: ', board)
});

console.log('pepe')

function createTable() {
    var arrayBi = new Array (6);

    for (var i = 0; i < 7; i++) { 
        arrayBi[i] = new Array (6);      //rows
        for (var j = 0; j < 6; j++) {
            console.log('board dentro: ', arrayBi);  //columns    
            arrayBi[i];
        }
    }
console.log (arrayBi);

}
$("#board").append("<div class=spaceBoard></div>");
