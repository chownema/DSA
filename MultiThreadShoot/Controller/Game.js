
// Field Variables
var display = document.getElementById('display');
var ctx = display.getContext('2d');
var displayPos = getPosition(display);
var particles = [];
var enemies = [];
var player = null;
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

/**
 * Initialize the game
 */
function init() {
    console.log("Game initializing...");
    display.addEventListener('mousemove', onMousemove, false);
    window.requestAnimationFrame(gameLoop);
}


/**
 * Draws a line from one point to another
 */
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

/**
 * Draws Cross Hairs on the screen
 */
function drawCrossHairs() {
    ctx.strokeStyle = '#FFF';
    ctx.lineWidth = 2;

    drawLine(mouse.x, mouse.y, mouse.x-10, mouse.y);
    drawLine(mouse.x, mouse.y, mouse.x, mouse.y-10);
    drawLine(mouse.x, mouse.y, mouse.x+10, mouse.y);
    drawLine(mouse.x, mouse.y, mouse.x, mouse.y+10);
}



/**
 * Track mouse movement
 */
function onMousemove(e) {
     mouse.x = e.clientX;
     mouse.y = e.clientY;
}

function getPosition(el) {
  var xPosition = 0;
  var yPosition = 0;
 
  while (el) {
    xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
    yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
    el = el.offsetParent;
  }
  return {
    x: xPosition,
    y: yPosition
  };
}

/**
 * Game loop function
 */
function gameLoop() {
    window.requestAnimationFrame(gameLoop);
    ctx.clearRect(0, 0, width, height);
    drawCrossHairs();
}

// Call functions
init();
gameLoop();