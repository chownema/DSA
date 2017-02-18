/**
 * ParticleSystem.js
 * Holds all the logic for controlling a particle system object
 */

function CreateParticleSystem(type, x, y, size, name, vel, maxAmount, lifeTime) {
    var particles = [];
    for (i = 0; i < maxAmount; i++) {
        particles[i] = new Entity(type, x, y, size, name, vel, vel);
    }
    return particles;
}
