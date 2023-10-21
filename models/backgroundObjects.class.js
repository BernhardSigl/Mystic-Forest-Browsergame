class BackgroundObjectsBack extends MovableObject {
    width = 718;
    height = 480;

    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.height;
        this.camera_x = 100;
    }
}

class BackgroundObjectsFront extends MovableObject {

    width = 718;
    height = 480;

    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.height;
        this.camera_x = 100;
    }
}