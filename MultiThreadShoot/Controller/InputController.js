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
    window.addEventListener('keyup', onKeyup, false);
}

/**
 *  Event key listeners 
 */

function onMousedown(e) {
    console.log(inputMap);
}

function onMouseup(e) {

}

function onKeydown(e) {
     e = e || event; // to deal with IE
     if (e.keyCode in inputMap)
        inputMap[e.keyCode] = true;
}

function onKeyup(e) {
     e = e || event; // to deal with IE
     if (e.keyCode in inputMap)
        inputMap[e.keyCode] = false;
}

function onMousemove(e) {
     mouse.x = e.clientX;
     mouse.y = e.clientY;
}

// Call functions
initControlls();