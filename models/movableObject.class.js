class MovableObject extends DrawableObject {
    /**
    * characteristics of the movable objects.
    */
    speedY = 0;
    acceleration = 2;
    energyCharacter = 100;
    energyEnemy = 50;
    energyEndboss = 100;
    lastHit = 0;
    collectedCoins = 0;
    collectedSticks = 0;
    endbossIsDead = false;
    isAttacking = false;
    enemyIsAttacked = false;
    characterMovable = true;
    enemiesMovable = true;
    enemiesAttacking = true;
    checkColliding = false;
    checkFollowingLeftEndboss = false;
    checkFollowingRightEndboss = false;
    enemyIsThrownOff = false;
    characterDied = false;
    offset = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    }
    offsetOnFollowingLeft = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    }
    offsetOnFollowingRight = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    }

    /**
     * Applies gravity to the object's vertical movement.
     */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    /**
     * Checks if the object is above the ground.
     */
    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y <= 200;
        }
    }

    /**
     * Checks if the object is colliding with another object.
     */
    isColliding(mo) {
        return (
            this.x + this.offset.left + this.width - this.offset.right >=
            mo.x + mo.offset.left &&
            this.y + this.offset.top + this.height - this.offset.bottom >=
            mo.y + mo.offset.top &&
            this.x + this.offset.left <= mo.x + mo.offset.left + mo.width - mo.offset.right &&
            this.y + this.offset.top <= mo.y + mo.offset.top + mo.height - mo.offset.bottom
        );
    }

    /**
     * Checks if the end boss is following to the left.
     * @param {MovableObject} mo - The other movable object to check following with.
     */
    endbossIsFollowingLeft(mo) {
        return (
            this.x + this.offsetOnFollowingLeft.left + this.width - this.offsetOnFollowingLeft.right >=
            mo.x + mo.offset.left &&
            this.y + this.offsetOnFollowingLeft.top + this.height - this.offsetOnFollowingLeft.bottom >=
            mo.y + mo.offset.top &&
            this.x + this.offsetOnFollowingLeft.left <= mo.x + mo.offset.left + mo.width - mo.offset.right &&
            this.y + this.offsetOnFollowingLeft.top <= mo.y + mo.offset.top + mo.height - mo.offset.bottom
        );
    }

    /**
     * Checks if the end boss is following to the right.
     * @param {MovableObject} mo - The other movable object to check following with.
     */
    endbossIsFollowingRight(mo) {
        return (
            this.x + this.offsetOnFollowingRight.left + this.width - this.offsetOnFollowingRight.right >=
            mo.x + mo.offset.left &&
            this.y + this.offsetOnFollowingRight.top + this.height - this.offsetOnFollowingRight.bottom >=
            mo.y + mo.offset.top &&
            this.x + this.offsetOnFollowingRight.left <= mo.x + mo.offset.left + mo.width - mo.offset.right &&
            this.y + this.offsetOnFollowingRight.top <= mo.y + mo.offset.top + mo.height - mo.offset.bottom
        );
    }

    /**
     * Damages the object to the character based on the attack conditions.
     */
    damageObjectToCharacter() {
        if (this.isAttacking === false && this.enemiesAttacking === true) {
            if (world.character.isAboveGround()) {
                if (world.cheatActivated === false) {
                    this.energyCharacter -= 5;
                } else if (this.cheatActivated === true) {
                    this.energyCharacter -= 0;
                }
            } else if (!world.character.isAboveGround()) {
                if (world.cheatActivated === false) {
                    this.energyCharacter -= 10;
                } else if (this.cheatActivated === true) {
                    this.energyCharacter -= 0;
                }
            }
            if (this.energyCharacter < 0) {
                this.energyCharacter = 0;
            } else {
                this.lastHit = new Date().getTime();
            }
        }
    }

    /**
     * Checks if the object is currently hurt based on the time since the last hit.
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }

    /**
     * Checks if the character is dead.
     */
    isDead() {
        return this.energyCharacter == 0
    }

    /**
    * Checks if the enemy is dead.
    */
    isManZombieDead() {
        return this.energyEnemy == 0;
    }

    /**
     * Moves the object to the right if movable.
     */
    moveRight() {
        if (this.characterMovable === true) {
            this.characterMovable = true;
            this.x += this.speed;
            this.otherDirection = false;
        }
    }

    /**
     * Moves the object to the left if movable.
     */
    moveLeft() {
        if (this.characterMovable === true) {
            this.x -= this.speed;
            this.otherDirection = true;
        }
    }

    /**
    * Makes the object jump based on cheat activation and character movability.
    */
    jump() {
        if (this.characterMovable === true && world.cheatActivated === false) {
            this.speedY = 26;
            world.character.y = 212; // höhe nach dem sprung
        } else if (this.characterMovable === true && world.cheatActivated === true) {
            this.speedY = 35;
            world.character.y = 212;
        }
    }

    /**
     * Plays the animation with the provided images.
     * @param {string[]} images - Array of image paths for the animation.
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
}
