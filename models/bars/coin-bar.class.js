class CoinBar extends DrawableObject {
    IMAGES_COINBAR = [
        'img/6_statusbar/coinbar/100.png',
        'img/6_statusbar/coinbar/80.png',
        'img/6_statusbar/coinbar/60.png',
        'img/6_statusbar/coinbar/40.png',
        'img/6_statusbar/coinbar/20.png',
        'img/6_statusbar/coinbar/0.png',
    ];

    percentage = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES_COINBAR);
        this.x = 30;
        this.y = 64;
        this.setPercentage(0);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_COINBAR[this.resolveImageIndex()];
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