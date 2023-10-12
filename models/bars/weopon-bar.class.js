class WeoponBar extends DrawableObject {
    IMAGES_WEOPONBAR = [
        'img/6_statusbar/weoponbar/100.png',
        'img/6_statusbar/weoponbar/80.png',
        'img/6_statusbar/weoponbar/60.png',
        'img/6_statusbar/weoponbar/40.png',
        'img/6_statusbar/weoponbar/20.png',
        'img/6_statusbar/weoponbar/0.png',
    ];

    percentage = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES_WEOPONBAR);
        this.x = 30;
        this.y = 32;
        this.setPercentage(0);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_WEOPONBAR[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 0;
        } else if (this.percentage > 80) {
            return 1;
        } else if (this.percentage > 60) {
            return 2;
        } else if (this.percentage > 40) {
            return 3;
        } else if (this.percentage > 20) {
            return 4;
        } else if (this.percentage >= 0) {
            return 5;
        }
    }
}