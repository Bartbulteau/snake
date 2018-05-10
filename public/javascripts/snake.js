function Snake() {
    this.x = 290;
    this.y = 290;
    this.xspeed = 0;
    this.yspeed = 0;

    this.globalspeed = 3.5;

    this.width = 20;
    this.height = 20;

    this.show = function () {
        fill(255);
        rect(this.x, this.y, this.width, this.height);
    }

    this.update = function () {
        this.x += this.xspeed;
        this.y += this.yspeed;

        this.show();
    }

    this.direction = function (direction) {
        if (direction === "up") {
            this.xspeed = 0;
            this.yspeed = -this.globalspeed;
        }
        else if (direction === "down") {
            this.xspeed = 0;
            this.yspeed = this.globalspeed;
        }
        else if (direction === "left") {
            this.xspeed = -this.globalspeed;
            this.yspeed = 0;
        }
        else if (direction === "right") {
            this.xspeed = this.globalspeed;
            this.yspeed = 0;
        }
        else if (direction === "stop") {
            this.xspeed = 0;
            this.yspeed = 0;
        }
    }
}