class ThrowableObject extends MovableObject {
    otherDirection = false;

    constructor(x, y) {
        super().loadImage('img/7_items/weapon.png');
        this.x = x;
        this.y = y;
        this.width = 40;
        this.height = this.width;
        this.throw();

    }

    throw() {
        this.speedY = 30;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 25);
    }

    // animate() {
    //     setInterval(() => {
    //         if (this.world.keyboard.THROW) {
    //             this.moveRight();
    //             this.walking_sound.play();
    //         }
    //     }, 1000 / 60);

    //     setInterval(() => {
    //         if (this.isDead()) {
    //             this.playAnimation(this.IMAGES_DEAD);
    //         } else if (this.isHurt()) {
    //             this.playAnimation(this.IMAGES_HURT);
    //         } else if (this.isAboveGround()) {
    //             this.playAnimation(this.IMAGES_JUMP);
    //         } else {
    //             if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x || this.world.keyboard.LEFT && this.x > 0) {
    //                 this.playAnimation(this.IMAGES_WALK);
    //             }
    //         }
    //     }, 200);
    // }

}