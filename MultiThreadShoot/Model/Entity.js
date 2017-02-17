/**
 * Constructor for entity
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
}

