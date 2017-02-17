/**
 * Intialisation.js
 * Stores all the variables for the js application
 */

var display = document.getElementById('display');
var ctx = display.getContext('2d');
var particles = [];
var enemies = [];
var player = new Entity("Player", display.width/2, display.height/2, 5, "Jerry", 1, 1);
var width = display.width = window.innerWidth;
var height = display.height = window.innerHeight;
var mouse = { x: width * 0.5, y: height * 0.5};
gamestate = function() {
    var currentState = 0;
    var PLAYING = 1;
    var MENU = 2;
    var PAUSED = 3;
    var LOST = 4;
}
// Input Controls
var inputMap = { 
    38:false,
    40:false,
    37:false,
    39:false,
}