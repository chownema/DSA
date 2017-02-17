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
}

Entity.moveEntity = function(x, y) {
    this.x +=x*this.velX;
    this.y +=y*this.velY;
}