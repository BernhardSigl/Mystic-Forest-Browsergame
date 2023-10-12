class ThrowableObject extends Character {



    throw() {
        this.speedY = 30;
        this.speedY = 20;
    }

    animate() {
        setInterval(() => {
            if (this.world.keyboard.THROW) {
                this.moveRight();
                this.walking_sound.play();
            }
        }, 1000 / 60);

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
    }

}