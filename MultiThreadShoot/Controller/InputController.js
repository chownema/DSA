/**
 * InputController.js
 * Holds all the logic to do with input
 */

function initControlls() {
    console.log("Controlls initializing...");
    display.addEventListener('mousemove', onMousemove, false);
    display.addEventListener('mouseup', onMouseup, false);
    display.addEventListener('mousedown', onMousedown, false);
    window.addEventListener('keydown', onKeydown, false);
}

function onMousedown(e) {

}

function onMouseup(e) {

}

function onKeydown(e) {
    switch (e.keyCode) {
        case 38: // up arrow 
            console.log("up");
            break;
        case 40: // down arrow
            console.log("down");
            break;
        case 37: // left arrow
            console.log("left");
            break;
        case 39: // right arrow
            console.log("right");
            break;
        default:
            e.preventDefault(); 
            break;
    }
    // Uncomment if controlls are sticky
    // if (e.keyCode == '38') {
    //     // up arrow
    //     console.log("up");
    // }
    // else if (e.keyCode == '40') {
    //     // down arrow
    //     console.log("down");
    //     e.preventDefault();
    // }
    // else if (e.keyCode == '37') {
    //    // left arrow
    //    console.log("left");
    // }
    // else if (e.keyCode == '39') {
    //    // right arrow
    //    console.log("right");
    // }
}


/**
 * Track mouse movement
 */
function onMousemove(e) {
     mouse.x = e.clientX;
     mouse.y = e.clientY;
}

// Call functions
initControlls();