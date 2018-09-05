   
var players = {
    currentPlayer: "one",
    one: {currentPosition: 1},
    two: {currentPosition: 1}
}

var pols = {
    p5: 10,
    p10: 15,
    p15: 20,
    p20: 30
}

var bridge = {
    p6: 12
}

var death = {
    p31: 0
}

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
    }
    return ("De puente a puente, tiras porque te lleva la corriente");
}

function isDeath() {
    if (death['p' + players[players.currentPlayer].currentPosition] != undefined) {
        players[players.currentPlayer].currentPosition = death['p' + players[players.currentPlayer].currentPosition];
    }
    
}

function rollDice() {
    var dice = Math.ceil(Math.random()*6);
    $('#dice_value').text(dice);
    return dice;
}

function startGame() {
    $('#p1').append('<div class="player" id="playerone"></div>');
    $('#p1').append('<div class="player" id="playertwo"></div>');

}

function movePlayer() {
    players[players.currentPlayer].currentPosition += rollDice();
    $('#player' + players.currentPlayer).remove();
    $('#p' + players[players.currentPlayer].currentPosition).append('<div class="player" id="player' + players.currentPlayer + '"></div>')
    isBridge();
    isDeath();
    if (!isPol()){
        changeTurn();
    }
}

function changeTurn() {
    if (players.currentPlayer == "one") {
        players.currentPlayer = "two";
    } else {
        players.currentPlayer = "one";
    }
}

function gameOver() {
    alert ("Has muerto! Pol está muy enfadada contigo!!");
    currentPosition = 0;
    location.reload();
}
    
$(document).ready(function() {
    startGame();
    $('#dice button').click(function(){
        movePlayer();
    });
    
});    