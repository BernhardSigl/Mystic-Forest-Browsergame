class StatusBarEndBoss extends DrawableObject {
    /**
     * Array of image paths representing the end boss health bar at different fill levels.
     */
    IMAGES_HEALTHBAR = [
        'img/6_statusbar/endbossbar/100.png',
        'img/6_statusbar/endbossbar/80.png',
        'img/6_statusbar/endbossbar/60.png',
        'img/6_statusbar/endbossbar/40.png',
        'img/6_statusbar/endbossbar/20.png',
        'img/6_statusbar/endbossbar/0.png',
    ];

    /**
     * The current health percentage of the end boss.
     */
    percentage = 100;

    /**
    * Create a bar object.
    */
    constructor() {
        super().loadImage('img/6_statusbar/endbossbar/60.png');
        this.loadImages(this.IMAGES_HEALTHBAR);
        this.x = 495;
        this.y = 0;
        this.setPercentageEndboss(100);
        this.updateStatusbarVisibility(0);
    }

    /**
     * Updates the visibility of the status bar based on the provided value.
     * @param {number} visible - The visibility value (0 for hidden, 1 for visible).
     */
    updateStatusbarVisibility(visible) {
        this.y = visible;
    }

    /**
     * Sets the health percentage of the end boss and updates the displayed image accordingly.
     * @param {number} percentage - The health percentage (0 to 100).
     */
    setPercentageEndboss(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_HEALTHBAR[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * Resolves the index of the image in the array based on the current end boss's health percentage.
     * @returns {number} - The index of the image in the array.
     */
    resolveImageIndex() {
        if (this.percentage > 80) {
            return 0;
        } else if (this.percentage > 60) {
            return 1;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 3;
        } else if (this.percentage > 0) {
            return 4;
        } else if (this.percentage == 0) {
            return 5;
        }
    }
}