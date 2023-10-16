class ThrowableObject extends MovableObject {
    otherDirection = false;

    constructor(x, y) {
        super().loadImage('img/7_items/weapon.png');
        this.x = x;
        this.y = y;
        this.width = 40;
        this.height = this.width;
        this.throw();
    }

    throw() {
        this.speedY = 18;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 25);
    }
}