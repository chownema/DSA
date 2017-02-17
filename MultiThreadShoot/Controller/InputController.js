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

/**
 * Track mouse movement
 */
function onMousemove(e) {
     mouse.x = e.clientX;
     mouse.y = e.clientY;
}

// Call functions
initControlls();

    // switch (e.keyCode) {
    //     case 38: // up arrow 
    //         console.log("up");
    //         inputMap[e.keyCode] = true;
    //         player.moveEntity(0, -1);
    //         break;
    //     case 40: // down arrow
    //         console.log("down");
    //         e.preventDefault(); 
    //         player.moveEntity(0, 1);
    //         break;
    //     case 37: // left arrow
    //         console.log("left");
    //         player.moveEntity(-1, 0);
    //         break;
    //     case 39: // right arrow
    //         console.log("right");
    //         player.moveEntity(1, 0);
    //         break;
    //     default:
    //         e.preventDefault(); 
    //         break;
    // }

    // Uncomment if controlls are sticky
    // map[e.keyCode] = e.type == 'keydown';
    // console.log(map);
    // if (e.keyCode == '38') {
    //     // up arrow
    //     console.log("up");
    //     if (e.keyCode == '37' && e.keyCode == '38') {
    //         console.log("left");
    //         player.moveEntity(-1, -1);
            
    //     }
    //     else
    //         player.moveEntity(0, -1);
    // }
    // if (e.keyCode == '40') {
    //     // down arrow
    //     console.log("down");
    //     e.preventDefault();
    //     player.moveEntity(0, 1);
    // }
    // if (e.keyCode == '37') {
    //    // left arrow
    //    console.log("left");
    //    player.moveEntity(-1, 0);
    // }
    // if (e.keyCode == '39') {
    //    // right arrow
    //    console.log("right");
    //    player.moveEntity(1, 0);
    // }