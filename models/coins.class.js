class Coins extends MovableObject {
    x = 100;
    y = 345;
    width = 40;
    height = 40;
    offset = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    }

    IMAGES_COINS = [
        'img/7_items/Gold_21.png',
        'img/7_items/Gold_22.png',
        'img/7_items/Gold_23.png',
        'img/7_items/Gold_24.png',
        'img/7_items/Gold_25.png',
        'img/7_items/Gold_26.png',
        'img/7_items/Gold_27.png',
        'img/7_items/Gold_28.png',
        'img/7_items/Gold_29.png',
        'img/7_items/Gold_30.png',
    ];

    constructor() {
        super().loadImage('img/7_items/Gold_21.png');
        this.loadImages(this.IMAGES_COINS);
        this.x = 200 + Math.random() * 2000;
        this.y = 345 - Math.random() * 200;
        this.animateCoins();
    }
    animateCoins() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_COINS);
        }, 100);
    }
}