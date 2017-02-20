function getAngle (x1, y1, x2, y2) {
    var a = Math.atan2(y2 - y1, x2 - x1);
    return a; //return angle in radians
}