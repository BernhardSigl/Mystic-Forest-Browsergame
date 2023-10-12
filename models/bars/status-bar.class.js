class StatusBar extends DrawableObject {
    IMAGES_HEALTHBAR = [
        'img/6_statusbar/healthbar/100.png',
        'img/6_statusbar/healthbar/80.png',
        'img/6_statusbar/healthbar/60.png',
        'img/6_statusbar/healthbar/40.png',
        'img/6_statusbar/healthbar/20.png',
        'img/6_statusbar/healthbar/0.png',
    ];

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES_HEALTHBAR);
        this.x = 30;
        this.y = 0;
        this.setPercentage(100);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_HEALTHBAR[this.resolveImageIndex()];
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