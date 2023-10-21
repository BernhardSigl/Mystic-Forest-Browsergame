class MovableObject extends DrawableObject {
    speedY = 0;
    acceleration = 2;
    energyCharacter = 100;
    energyEnemy = 50;
    energyEndboss = 100;
    lastHit = 0;
    collectedCoins = 0;
    collectedSticks = 0;
    isAttacking = false;
    characterMovable = true;

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    applyGravityDelay() {
        setInterval(() => {
            this.applyGravity();
        }, 800);
    }

    isAboveGround() {
        // console.log(world.character.y); // maximale springhöhe
        if (this instanceof ThrowableObject) {
            return true; // item soll aus der Welt fallen
        } else {
            return this.y <= 200;
        }
    }

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

    isFollowingLeft(mo) {
        return (
            this.x + this.offsetOnFollowingLeft.left + this.width - this.offsetOnFollowingLeft.right >=
            mo.x + mo.offset.left &&
            this.y + this.offsetOnFollowingLeft.top + this.height - this.offsetOnFollowingLeft.bottom >=
            mo.y + mo.offset.top &&
            this.x + this.offsetOnFollowingLeft.left <= mo.x + mo.offset.left + mo.width - mo.offset.right &&
            this.y + this.offsetOnFollowingLeft.top <= mo.y + mo.offset.top + mo.height - mo.offset.bottom
        );
    }

    isFollowingRight(mo) {
        return (
            this.x + this.offsetOnFollowingRight.left + this.width - this.offsetOnFollowingRight.right >=
            mo.x + mo.offset.left &&
            this.y + this.offsetOnFollowingRight.top + this.height - this.offsetOnFollowingRight.bottom >=
            mo.y + mo.offset.top &&
            this.x + this.offsetOnFollowingRight.left <= mo.x + mo.offset.left + mo.width - mo.offset.right &&
            this.y + this.offsetOnFollowingRight.top <= mo.y + mo.offset.top + mo.height - mo.offset.bottom
        );
    }

    damageEnemyToCharacter() {
        if (this.isAttacking === false) {
            if (world.character.isAboveGround()) {
                this.energyCharacter -= 5;
            } else if (!world.character.isAboveGround()) {
                this.energyCharacter -= 10;
            }
            if (this.energyCharacter < 0) {
                this.energyCharacter = 0;
            } else {
                this.lastHit = new Date().getTime();
            }
        }
    }
    throwableObjectsDamage(enemy) {
        enemy.energyEnemy -= 100;;
        if (enemy.energyEnemy < 0) {
            enemy.energyEnemy = 0;
        }
    }

    damageCharacterToEnemy(enemy) {
        if (this.isAttacking === true) {
            enemy.energyEnemy -= 10;
            enemy.energyEndboss -= 10;
            if (enemy.energyEnemy < 0) {
                enemy.energyEnemy = 0;
            }
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }

    isDead() {
        return this.energyCharacter == 0;
    }

    isManZombieDead() {
        return this.energyEnemy == 0;
    }


    moveRight() {
        if (this.characterMovable === true) {
            this.characterMovable = true;
            this.x += this.speed;
            this.otherDirection = false;
        }
    }

    moveLeft() {
        if (this.characterMovable === true) {
            this.x -= this.speed;
            this.otherDirection = true;
        }
    }

    jump() {
        if (this.characterMovable === true) {
            this.speedY = 24;
            world.character.y = 210; // höhe nach dem sprung
        }
    }

    attack() {
        if (this.characterMovable === true) {
            this.isAttacking = true;
            if (this.isColliding === true) {
                enemy.energyEnemy -= 50;
            }
        }
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
}
