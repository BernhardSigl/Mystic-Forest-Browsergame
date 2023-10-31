class BackgroundObjectsBack extends MovableObject {
    /**
     * The width and height of the background object from the back.
     */
    width = 718;
    height = 480;

    /**
    * Create a fog object.
    */
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.height;
        this.camera_x = 100;
    }
}

class BackgroundObjectsFront extends MovableObject {
    /**
         * The width and height of the background object from the front.
         */
    width = 718;
    height = 480;

    /**
     * The width and height of the background object from the front.
     */
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.height;
        this.camera_x = 100;
    }
}