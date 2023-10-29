class StatusBarEndBoss extends DrawableObject {
    IMAGES_HEALTHBAR = [
        'img/6_statusbar/endbossbar/100.png',
        'img/6_statusbar/endbossbar/80.png',
        'img/6_statusbar/endbossbar/60.png',
        'img/6_statusbar/endbossbar/40.png',
        'img/6_statusbar/endbossbar/20.png',
        'img/6_statusbar/endbossbar/0.png',
    ];

    percentage = 100;

    constructor() {
        super().loadImage('img/6_statusbar/endbossbar/60.png');
        this.loadImages(this.IMAGES_HEALTHBAR);
        this.x = 495;
        this.y = 0;
        this.setPercentageEndboss(100);
        this.updateStatusbarVisibility(0);
    }

    updateStatusbarVisibility(visible) {
        this.y = visible;
    }

    setPercentageEndboss(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_HEALTHBAR[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

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