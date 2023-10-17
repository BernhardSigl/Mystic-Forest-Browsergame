class MovableObject extends DrawableObject {
    speedY = 0;
    acceleration = 2;
    energyCharacter = 100;
    energyManZombie = 50;
    lastHit = 0;
    collectedCoins = 0;
    collectedSticks = 0;
    isAttacking = false;

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        if (this instanceof ThrowableObject || this instanceof ManZombie) {
            return true; // item soll aus der Welt fallen
        } else {
            return this.y <= 293;
        }
    }

    // this.x und this.width ist der character; mo ist das Colliding-Objekt
    isColliding(mo) {
        return (this.x + this.width) >= mo.x
            && this.x <= (mo.x + mo.width)
            && (this.y + this.height) >= mo.y
            // && this.x < mo.x // von hinten darf nicht angegriffen werden
            && this.y <= (mo.y + mo.height);
    }

    hit() {
        if (this.isAttacking === false) {
            this.energyCharacter -= 10;
            if (this.energyCharacter < 0) {
                this.energyCharacter = 0;
            } else {
                this.lastHit = new Date().getTime();
            }
        }
    }

    hitManZombie(enemy) {
        if (this.isAttacking === true) {
            enemy[0].energyManZombie -= 10;;
            if (enemy[0].energyManZombie < 0) {
                enemy[0].energyManZombie = 0;
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
        return this.energyManZombie == 0;
    }

    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }

    moveLeft() {
        this.x -= this.speed;
        this.otherDirection = true;
    }

    jump() {
        this.speedY = 21;
    }

    attack(enemy) {
        this.isAttacking = true;
        if (this.isColliding === true) {
            enemy[0].energyManZombie -= 50;
        }
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
}
