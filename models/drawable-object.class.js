class DrawableObject {
    otherDirection = false;
    img;
    imageCache = {};
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
    currentImage = 0;
    collectedCoins = 0;
    collectedSticks = 0;
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
        try {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } catch (e) {
            console.warn('error loading image', e);
            console.log('could not load image', this.img.src);
        }
    }

    drawFrame(ctx) {
        if (
            this instanceof Character ||
            this instanceof WildZombie ||
            this instanceof ManZombie ||
            this instanceof WomanZombie ||
            this instanceof ThrowableObject ||
            this instanceof Endboss ||
            this instanceof Coins ||
            this instanceof Sticks) {
            ctx.beginPath();
            ctx.lineWidth = 2;
            // ctx.strokeStyle = 'red';
            ctx.strokeStyle = 'transparent';
            ctx.rect(
                this.x + this.offset.left, // offset x
                this.y + this.offset.top, // offset y
                this.width - this.offset.right, // offset width
                this.height - this.offset.bottom, // offset height
            );
            ctx.stroke();
        }
    }

    drawFrameOnFollowingLeft(ctx) {
        if (

            this instanceof Endboss || this instanceof ManZombie) {
            ctx.beginPath();
            ctx.lineWidth = 2;
            // ctx.strokeStyle = 'blue';
            ctx.strokeStyle = 'transparent';
            ctx.rect(
                this.x + this.offsetOnFollowingLeft.left, // offset x
                this.y + this.offsetOnFollowingLeft.top, // offset y
                this.width - this.offsetOnFollowingLeft.right, // offset width
                this.height - this.offsetOnFollowingLeft.bottom, // offset height
            );
            ctx.stroke();
        }
    }
    drawFrameOnFollowingRight(ctx) {
        if (

            this instanceof Endboss || this instanceof ManZombie) {
            ctx.beginPath();
            ctx.lineWidth = 2;
            // ctx.strokeStyle = 'green';
            ctx.strokeStyle = 'transparent';
            ctx.rect(
                this.x + this.offsetOnFollowingRight.left, // offset x
                this.y + this.offsetOnFollowingRight.top, // offset y
                this.width - this.offsetOnFollowingRight.right, // offset width
                this.height - this.offsetOnFollowingRight.bottom, // offset height
            );
            ctx.stroke();
        }
    }

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