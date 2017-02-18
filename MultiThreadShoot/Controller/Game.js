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
 * Game loop function
 */
function gameLoop() {
    player.processMovement(inputMap);
    window.requestAnimationFrame(gameLoop);
    ctx.clearRect(0, 0, width, height);
    viewController.drawCrossHairs();
    viewController.drawPlayer();
}

// Call functions
init();
gameLoop();