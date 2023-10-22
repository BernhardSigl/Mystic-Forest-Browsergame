class Sticks extends DrawableObject {
    x = 100;
    y = 385;
    width = 40;
    height = this.width;

    constructor() {
        super().loadImage('img/7_items/w1.png');
        this.x = 100 + Math.random() * 2000;
        this.y = 385 - Math.random() * 200;
    }
}