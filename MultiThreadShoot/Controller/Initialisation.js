/**
 * Intialisation.js
 * Stores all the variables for the js application
 */

var display = document.getElementById('display');
var ctx = display.getContext('2d');
var particles = [];
var enemies = [];
var player = new Entity();
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