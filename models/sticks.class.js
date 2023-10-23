class Sticks extends MovableObject {
    x = 100;
    y = 385;
    width = 40;
    height = 40;
    offset = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    }

    IMAGES_MAGICBALLS = [
        'img/7_items/w1.png',
        'img/7_items/w2.png',
        'img/7_items/w3.png',
    ];

    constructor() {
        super().loadImage('img/7_items/w1.png');
        this.loadImages(this.IMAGES_MAGICBALLS);
        this.x = 200 + Math.random() * 2000;
        this.y = 385 - Math.random() * 200;
        this.animateMagicBalls();
    }

    animateMagicBalls() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_MAGICBALLS);
        }, 175);
    }
}