class DrawableObject {
    otherDirection = false;
    img;
    imageCache = {};
    currentImage = 0;
    collectedItems = 0;
    x = 0;
    y = 0;
    width = 190;
    height = 50;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof WildZombie || this instanceof ManZombie || this instanceof WomanZombie || this instanceof Endboss || this instanceof Coins || this instanceof Sticks) {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = 'red';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    // removeCoin(coin) {
    //     let index = level1.coins.indexOf(coin);
    //     level1.coins.splice(index, 1);
    // }

    // removeStick(stick) {
    //     let index = level1.sticks.indexOf(stick);
    //     level1.sticks.splice(index, 1);
    // }

    addItem(item) {
        switch (item) {
            case 'coin':
                this.collectedCoins++;
                if (this.collectedCoins > 5) {
                    this.collectedCoins = 5;
                }
                break;
            case 'stick':
                this.collectedSticks++;
                if (this.collectedSticks > 5) {
                    this.collectedSticks = 5;
                }
                break;
        }
    }

    removeItem(array, item) {
        let index = array.indexOf(item);
        array.splice(index, 1);
    }
}