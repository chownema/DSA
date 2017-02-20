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

function processParticles(particles) {
    for (i = 0; i < particles.length; i++) {
        if(!particles[i].dead) {
            particles[i].posX += 1 * Math.cos(particles[i].angle);
            particles[i].posY += 1 * Math.sin(particles[i].angle);
        }
    }
}