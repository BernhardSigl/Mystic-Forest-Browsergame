class SticksBar extends DrawableObject {
    IMAGES_STICKSBAR = [
        'img/6_statusbar/weoponbar/100.png',
        'img/6_statusbar/weoponbar/80.png',
        'img/6_statusbar/weoponbar/60.png',
        'img/6_statusbar/weoponbar/40.png',
        'img/6_statusbar/weoponbar/20.png',
        'img/6_statusbar/weoponbar/0.png',
    ];

    amount = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES_STICKSBAR);
        this.x = 30;
        this.y = 32;
        this.setAmountSticks(0);
    }

    setAmountSticks(amount) {
        this.amount = amount;
        let path = this.IMAGES_STICKSBAR[this.resolveImageIndex()];
        this.img = this.imageCache[path];
        // console.log(this.amount);
    }

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