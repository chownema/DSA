/**
 * ViewController.js
 * controls the View 
 * ensure this file is included before Game.js
 */

function ViewController() {
    console.log("View initializing")
    /**
     * Draws Cross Hairs on the screen
     */
    this.drawCrossHairs = function() {
        ctx.strokeStyle = '#FFF';
        ctx.lineWidth = 2;
        this.drawLine(mouse.x, mouse.y, mouse.x-10, mouse.y);
        this.drawLine(mouse.x, mouse.y, mouse.x, mouse.y-10);
        this.drawLine(mouse.x, mouse.y, mouse.x+10, mouse.y);
        this.drawLine(mouse.x, mouse.y, mouse.x, mouse.y+10);
    }

    /**
     * Draws player
     */
    this.drawPlayer = function() {
        ctx.beginPath();
        ctx.arc(player.posX, player.posY, 
            player.size, 0, 2 * Math.PI, false);
        ctx.fillStyle = '#FFF';
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#FFF';
        ctx.stroke();
    }
    
    /**
     * Draws a line from one point to another
     */
    this.drawLine = function(x1, y1, x2, y2) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }
}

