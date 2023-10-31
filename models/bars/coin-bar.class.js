class CoinsBar extends DrawableObject {
    /**
     * Array of image paths representing the coin bar at different fill levels.
     */
    IMAGES_COINBAR = [
        'img/6_statusbar/coinbar/100.png',
        'img/6_statusbar/coinbar/80.png',
        'img/6_statusbar/coinbar/60.png',
        'img/6_statusbar/coinbar/40.png',
        'img/6_statusbar/coinbar/20.png',
        'img/6_statusbar/coinbar/0.png',
    ];

    /**
     * The current amount of collected coins.
     */
    amount = 0;

    /**
    * Create a bar object.
    */
    constructor() {
        super();
        this.loadImages(this.IMAGES_COINBAR);
        this.x = 30;
        this.y = 78;
        this.setAmountCoins(0);
    }

    /**
     * Sets the amount of collected coins and updates the displayed image accordingly.
     * @param {number} amount - The amount of collected coins (0 to 5).
     */
    setAmountCoins(amount) {
        this.amount = amount;
        let path = this.IMAGES_COINBAR[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * Resolves the index of the image in the array based on the current amount of collected coins.
     * @returns {number} - The index of the image in the array.
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