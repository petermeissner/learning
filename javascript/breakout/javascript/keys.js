// key handler 
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

right_key_pressed = false;
left_key_pressed = false;

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        right_key_pressed = true;
    }
    else if(e.keyCode == 37) {
        left_key_pressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        right_key_pressed = false;
    }
    else if(e.keyCode == 37) {
        left_key_pressed = false;
    }
}