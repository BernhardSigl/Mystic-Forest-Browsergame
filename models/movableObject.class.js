class MovableObject extends DrawableObject {
    speedY = 0;
    acceleration = 2;
    energyCharacter = 100;
    energyEnemy = 50;
    lastHit = 0;
    collectedCoins = 0;
    collectedSticks = 0;
    isAttacking = false;
    characterMovable = true;

    applyGravity() {
        this.gravityInterval = setInterval(() => {
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
        if (this instanceof ThrowableObject || this instanceof ManZombie) {
            return true; // item soll aus der Welt fallen
        } else {
            return this.y <= 293;
        }
    }

    // this.x und this.width ist der character; mo ist das Colliding-Objekt
    isColliding(mo) {
        // if (mo === this.throwableObjects) {
        // console.log('mo ist dasselbe wie this.throwableObjects');
        // } else {

        return (this.x + this.width) >= mo.x
            && this.x <= (mo.x + mo.width)
            && (this.y + this.height) >= mo.y
            // && this.x < mo.x // von hinten darf nicht angegriffen werden
            && this.y <= (mo.y + mo.height);
        // }
    }

    damageEnemyToCharacter() {
        if (this.isAttacking === false) {
            this.energyCharacter -= 10;
            if (this.energyCharacter < 0) {
                this.energyCharacter = 0;
            } else {
                this.lastHit = new Date().getTime();
            }
        }
    }
    throwableObjectsDamage(enemy) {
        console.log('throwableObjectsDamage wird aufgerufen');
        enemy.energyEnemy -= 100;;
        if (enemy.energyEnemy < 0) {
            enemy.energyEnemy = 0;
        }
    }

    damageCharacterToEnemy(enemy) {
        if (this.isAttacking === true) {
            enemy.energyEnemy -= 10;;
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
