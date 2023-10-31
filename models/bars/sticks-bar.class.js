class SticksBar extends DrawableObject {
    /**
     * Array of image paths representing the sticks bar at different fill levels.
     */
    IMAGES_STICKSBAR = [
        'img/6_statusbar/weoponbar/100.png',
        'img/6_statusbar/weoponbar/80.png',
        'img/6_statusbar/weoponbar/60.png',
        'img/6_statusbar/weoponbar/40.png',
        'img/6_statusbar/weoponbar/20.png',
        'img/6_statusbar/weoponbar/0.png',
    ];

    /**
     * The current amount of sticks in the bar in the beginning.
     */
    amount = 0;

    /**
    * Create a bar object.
    */
    constructor() {
        super();
        this.loadImages(this.IMAGES_STICKSBAR);
        this.x = 30;
        this.y = 39;
        this.setAmountSticks(0);
    }

    /**
     * Sets the amount of throwable objects in the bar and updates the displayed image accordingly.
     * @param {number} amount - The amount of sticks (0 to 5).
     */
    setAmountSticks(amount) {
        this.amount = amount;
        let path = this.IMAGES_STICKSBAR[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
    * Resolves the index of the image in the array based on the current amount of throwable objects.
    */
    resolveImageIndex() {
        if (this.amount == 5) {
            return 0;
        } else if (this.amount == 4) {
            return 1;
        } else if (this.amount == 3) {
            return 2;
        } else if (this.amount == 2) {
            return 3;
        } else if (this.amount == 1) {
            return 4;
        } else if (this.amount == 0) {
            return 5;
        }
    }
}