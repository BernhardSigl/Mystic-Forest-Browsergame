class Coins extends MovableObject {
    x = 100;
    y = 360;
    width = 90;
    height = 65;

    constructor() {
        super().loadImage('img/7_items/coins.png');
        this.x = 200 + Math.random() * 2000;
    }
}