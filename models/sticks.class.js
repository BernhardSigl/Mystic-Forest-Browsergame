class Sticks extends MovableObject {
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
    * An array of image paths for the stick animation.
    */
    IMAGES_MAGICBALLS = [
        'img/7_items/w1.png',
        'img/7_items/w2.png',
        'img/7_items/w3.png',
    ];

    /**
    * Creates an instance of the Sticks class.
    * Loads the initial image, sets position, and initiates the animation.
    */
    constructor() {
        super().loadImage('img/7_items/w1.png');
        this.loadImages(this.IMAGES_MAGICBALLS);
        this.x = 300 + Math.random() * 1700;
        this.y = 390 - Math.random() * 200;
        this.animateMagicBalls();
    }

    /**
     * Initiates the animation of the stick object.
     */
    animateMagicBalls() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_MAGICBALLS);
        }, 175);
    }
}