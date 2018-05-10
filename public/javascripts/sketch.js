var s;

function setup() {
    createCanvas(600, 600);
    s = new Snake();
}

function draw() {
    background(51);
    s.update();
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        s.direction("up");
    }
    else if (keyCode === DOWN_ARROW) {
        s.direction("down");
    }
    else if (keyCode === LEFT_ARROW) {
        s.direction("left");
    }
    else if (keyCode === RIGHT_ARROW) {
        s.direction("right");
    }
    else if (keyCode === ENTER) {
        s.direction("stop");
    }
}