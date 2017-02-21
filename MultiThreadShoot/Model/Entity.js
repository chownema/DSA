/**
 * Entity.js
 * Super Class Model for Entities in the game
 */

function Entity(type, posX, posY, size, name, velX, velY) {
    console.log(name + " Entity initializing...");
    this.type = type;
    this.posX = posX;
    this.posY = posY;
    this.size = size;
    this.name = name;
    this.velX = velX;
    this.velY = velY;
    this.dead = true;
    this.lifetime = 0;
    this.angle = 0;
    this.oldPosX = 0;
    this.oldPosY = 0;
    this.moveEntity = function(x, y) {
        this.posX+=x*this.velX;
        this.posY+=y*this.velY;
    }
    this.processMovement = function(inputMap) {
        if (inputMap[38]) // up
            this.moveEntity(0, -1);
        if (inputMap[37]) // left
            this.moveEntity(-1, 0);
        if (inputMap[39]) // right
            this.moveEntity(1, 0);
        if (inputMap[40]) // down
            this.moveEntity(0, 1);
    }
    this.fireBullet = function(bullets) {
        for (i = 0; i < bullets.length; i++)
        {
            if(bullets[i].dead) {
                bullets[i].lifeTime = Date.now();
                bullets[i].dead = false;
                bullets[i].posX = player.posX, 
                bullets[i].posY = player.posY;
                bullets[i].angle = getAngle(player.posX, player.posY, 
                    mouse.x, mouse.y);
                break;
            }
        }
    }
}

