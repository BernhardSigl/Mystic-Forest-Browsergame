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
        if (this instanceof Character || this instanceof WildZombie || this instanceof ManZombie || this instanceof WomanZombie || this instanceof Endboss || this instanceof Coins) {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = 'red';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    addItem() {
        this.collectedItems++;
        if (this.collectedItems > 5) {
            this.collectedItems = 5;
        }
    }

    removeItemFromLevel(item) {
        let index = level1.coins.indexOf(item);
        level1.coins.splice(index, 1);
    }
}