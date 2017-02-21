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
    // Process
    player.processPlayerMovement(inputMap);
    processParticles(bullets);
    // Animate and clear canvas
    window.requestAnimationFrame(gameLoop);
    ctx.clearRect(0, 0, width, height);
    // Draw
    viewController.drawCrossHairs();
    viewController.drawPlayer();
    viewController.drawParticles(bullets);
}

// Call functions
init();
gameLoop();