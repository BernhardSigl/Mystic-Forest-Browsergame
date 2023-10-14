class CoinBar extends DrawableObject {
    IMAGES_COINBAR = [
        'img/6_statusbar/coinbar/100.png',
        'img/6_statusbar/coinbar/80.png',
        'img/6_statusbar/coinbar/60.png',
        'img/6_statusbar/coinbar/40.png',
        'img/6_statusbar/coinbar/20.png',
        'img/6_statusbar/coinbar/0.png',
    ];

    amount = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES_COINBAR);
        this.x = 30;
        this.y = 64;
        this.setAmount(0);
    }

    setAmount(amount) {
        this.amount = amount;
        let path = this.IMAGES_COINBAR[this.resolveImageIndex()];
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