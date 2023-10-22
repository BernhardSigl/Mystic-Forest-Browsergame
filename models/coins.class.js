class Coins extends DrawableObject {
    x = 100;
    y = 345;
    width = 120;
    height = 120;
    offset = {
        top: 60 * 0.7,
        bottom: 85,
        left: 80 / 2,
        right: 80,
    }

    constructor() {
        super().loadImage('img/7_items/coin_1.png');
        this.x = 200 + Math.random() * 2000;
        this.y = 345 - Math.random() * 200;
    }
}