/**
 * MathHelper.js
 * Holds all the helper functions for math calculations
 */

/**
 * Gets the angle between two points in Radians, starting 
 * from the right side at 0 Radians
 */
function getAngle (x1, y1, x2, y2) {
    var a = Math.atan2(y2 - y1, x2 - x1);
    //return angle in radians
    return a; 
}