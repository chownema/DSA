/**
 * Intialisation.js
 * Stores all the variables for the js application
 */

// Display Elements
var display = document.getElementById('display');
var ctx = display.getContext('2d');
var width = display.width = window.innerWidth;
var height = display.height = window.innerHeight;
var mouse = { x: width * 0.5, y: height * 0.5};

var BULLET_LIFE_TIME = 3500;

// Game State Enum
var GAMESTATE = function() {
    var currentState = 0;
    var PLAYING = 1;
    var MENU = 2;
    var PAUSED = 3;
    var LOST = 4;
}
// Input Controls
var inputMap = { 
    38:false, // up
    40:false, // down
    37:false, // left
    39:false, // right
}
// Game Elements
var enemies = [];
var defaultEntity = new Entity("", 0, 0, 0, "", 0, 0);
var player = Player(defaultEntity);
var bullets = CreateParticleSystem("bullets", 0, 
    0, 2, "bullet", 1.5, 1.5, 20, 5);

// Controllers
var viewController = new ViewController();