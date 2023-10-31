class ThrowableObject extends MovableObject {
    /**
     * Array of image paths for a throwable object.
     */
    IMAGES_WEOPON = [
        'img/7_items/w1.png',
        'img/7_items/w2.png',
        'img/7_items/w3.png',
    ];

    /**
    * Create a throwable object object.
    */
    constructor(x, y) {
        super().loadImage('img/7_items/w1.png');
        this.loadImages(this.IMAGES_WEOPON);
        this.x = x + 200;
        this.y = y + 100;
        this.width = 40;
        this.height = this.width;
        this.throw();
    }

    /**
     * Throws the object by applying a vertical speed and animating its movement.
     */
    throw() {
        this.speedY = 16;
        this.applyGravity();
        setInterval(() => {
            this.x += 20;
            this.playAnimation(this.IMAGES_WEOPON);
        }, 60);
    }
}