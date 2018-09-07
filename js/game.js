   
var players = {
    currentPlayer: "one",
    one: {currentPosition: 1},
    two: {currentPosition: 1}
}

var pols = {
    "p5": 10,
    "p10": 15,
    "p15": 20,
    "p20": 25,
    "p25": 30
}

var bridge = {
    "p6": 12
}

var death = {
    "p31": 1
}

/*************** Funciones de casillas especiales ***************/

function isPol() { 
    var pol = false;
    if (pols['p' + players[players.currentPlayer].currentPosition] != undefined) {
        pol = true;
        players[players.currentPlayer].currentPosition = pols['p' + players[players.currentPlayer].currentPosition];

    }
    return pol;
}

function isBridge() {
    if (bridge['p' + players[players.currentPlayer].currentPosition] != undefined) {
        players[players.currentPlayer].currentPosition = bridge['p' + players[players.currentPlayer].currentPosition];
        $("#messages").append('<div class="bridgeText">De puente a puente, avanzas porque te lleva la corriente</div>');
    }
}

function isDeath() {
var deaths = false;
    if (death['p' + players[players.currentPlayer].currentPosition] != undefined) {
        deaths = true;
        players[players.currentPlayer].currentPosition = death['p' + players[players.currentPlayer].currentPosition];
    }
    return deaths;
 }

/*************** Lanzar dado y mostrar número ***************/

function rollDice() {
    var dice = Math.ceil(Math.random()*6);
    $("#messages").empty();
    $('#dice_value').text(dice);
    return dice;
}

/*************** Empezar juego y reStart ***************/

function startGame() {
    $(".player").remove(); /***** Por si ya hubiese empezado la partida, para resetearla ******/
    $('#p1').append('<div class="player" id="playerone"></div>');
    $('#p1').append('<div class="player" id="playertwo"></div>');

}

/*************** Mover al jugador actual las casillas que marque el dado ***************/

function movePlayer() {
    players[players.currentPlayer].currentPosition += rollDice(); 
    
    if (players[players.currentPlayer].currentPosition > 35) { /* Para rebotar en la última casilla*/
        var backPositions = players[players.currentPlayer].currentPosition - 35;
        players[players.currentPlayer].currentPosition = 35 - backPositions;
      }

    $('#player' + players.currentPlayer).remove();
    $('#p' + players[players.currentPlayer].currentPosition).append('<div class="player" id="player' + players.currentPlayer + '"></div>');
    
    isBridge();
    checkIfWin();

    if (isPol()) {
        $("#messages").append('<div class="locaText">De loca a loca y tiras porque te toca </div>');
    }

    if (!isPol()) {
        changeTurn();
    }

    if (isDeath()) {
        $("#player" + players.currentPlayer).remove();
        $("#p" + players[players.currentPlayer].currentPosition).append('<div class="player" id="player' + players.currentPlayer + '"></div>');
        $("#messages").append('<div class="diedText">Has muerto! Pol está muy enfadada contigo!!</div>');
        gameOver();
    }   

}

/*************** Cambio de turno entre jugadores ***************/

function changeTurn() {
    if (players.currentPlayer == "one") {
        players.currentPlayer = "two";
    } else {
        players.currentPlayer = "one";
    }
}

/*************** Fin y reStart ***************/

function gameOver() {
    
    startGame();
    players.currentPlayer = "one";
    players.one.currentPosition = 1;
    players.two.currentPosition = 1;

}

function checkIfWin() {
    if (players[players.currentPlayer].currentPosition == 35) {
        $("#messages").append('<div class="winText">Has ganado! Y Pol está muy feliz!!</div>');
        gameOver();  
    }
}    
    
$(document).ready(function() {
    startGame();
    $('#dice img').click(function(){
        movePlayer();
    });
    
});