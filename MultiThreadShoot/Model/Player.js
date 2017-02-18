/**
 * Player.js
 * Holds all the logic for the game
 */

function Player(parent) {
    var player = Object.create(parent);
    
    player.type = "Player";
    player.posX = display.width/2;
    player.posY = display.height/2;
    player.size = 5;
    player.name = "Jerry";
    player.velX = 1;
    player.velY = 1;

    return player;
}