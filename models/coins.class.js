class Coins extends MovableObject {
    /**
     * The coordinates of the stick object.
     */
    width = 40;
    height = 40;
    offset = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    }

    /**
     * An array of image paths for the coin animation.
     */
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

    /**
     * Creates an instance of the Coins class.
     * Loads the initial image, sets position, and initiates the animation.
     */
    constructor() {
        super().loadImage('img/7_items/Gold_21.png');
        this.loadImages(this.IMAGES_COINS);
        this.x = 300 + Math.random() * 1700;
        this.y = 390 - Math.random() * 200;
        this.animateCoins();
    }

    /**
     * Initiates the animation of the coin object.
     */
    animateCoins() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_COINS);
        }, 100);
    }
}