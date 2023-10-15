class Coins extends DrawableObject {
    x = 100;
    y = 385;
    width = 60;
    height = 40;

    constructor() {
        super().loadImage('img/7_items/coins.png');
        this.x = 200 + Math.random() * 2000;
    }
}