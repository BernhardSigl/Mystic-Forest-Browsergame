class ThrowableObject extends MovableObject {
    otherDirection = false;
    IMAGES_WEOPON = [
        'img/7_items/weapon-1.png',
        'img/7_items/weapon-2.png',
        'img/7_items/weapon-3.png',
        'img/7_items/weapon-4.png',
        'img/7_items/weapon-5.png',
        'img/7_items/weapon-6.png',
        'img/7_items/weapon-7.png',
    ];

    constructor(x, y) {
        super().loadImage('img/7_items/weapon-1.png');
        this.loadImages(this.IMAGES_WEOPON);
        this.x = x + 150;
        this.y = y;
        this.width = 40;
        this.height = this.width;
        this.throw();
    }

    throw() {
        this.speedY = 16; //18
        this.applyGravity();
        setInterval(() => {
            this.x += 20;
            this.playAnimation(this.IMAGES_WEOPON);
        }, 60);
    }
}