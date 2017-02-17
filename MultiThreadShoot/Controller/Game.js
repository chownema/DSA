
/**
 * Game.js
 * Holds all the logic for the game
 */

/**
 * Initialize the game
 */
function init() {
    console.log("Game initializing...");
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