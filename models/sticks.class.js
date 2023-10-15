class Sticks extends DrawableObject {
    x = 100;
    y = 395;
    width = 40;
    height = this.width;

    constructor() {
        super().loadImage('img/7_items/weapon.png');
        this.x = 200 + Math.random() * 1500;
    }
}