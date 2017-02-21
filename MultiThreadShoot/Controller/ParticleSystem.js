/**
 * ParticleSystem.js
 * Holds all the logic for controlling a particle system object
 */

function CreateParticleSystem(type, x, y, size, name, velX, velY, maxAmount, lifeTime) {
    var particles = [];
    for (i = 0; i < maxAmount; i++) {
        particles[i] = new Entity(type, x, y, size, name, velX, velY);
    }
    return particles;
}

/**
 * Processes all the particles from a particle list
 * updating the postion and life status
 */
function processParticles(particles) {
    for (i = 0; i < particles.length; i++) {
        if ((Date.now() - particles[i].lifeTime) > BULLET_LIFE_TIME) {
            // reset particle if life time is up
            particles[i].dead = true;
            particles[i].posX = player.posX;
            particles[i].posY = player.posY;
            particles[i].oldPosX = particles[i].posX;
            particles[i].oldPosY = particles[i].posY;
        }
        if(!particles[i].dead) {
            // while alive update position
            particles[i].oldPosX = particles[i].posX;
            particles[i].oldPosY = particles[i].posY;
            particles[i].posX += particles[i].velX * Math.cos(particles[i].angle);
            particles[i].posY += particles[i].velY * Math.sin(particles[i].angle);
            
        }
    }
}