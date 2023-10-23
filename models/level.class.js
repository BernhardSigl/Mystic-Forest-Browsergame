class Level {
    enemies;
    endboss;
    fogs;
    backgroundObjectsFront;
    backgroundObjectsBack;
    level_end_x = 2240;
    coins;
    sticks;

    constructor(enemies, endboss, fogs, backgroundObjectsFront, backgroundObjectsBack, coins, sticks) {
        this.enemies = enemies;
        this.endboss = endboss;
        this.fogs = fogs;
        this.backgroundObjectsFront = backgroundObjectsFront;
        this.backgroundObjectsBack = backgroundObjectsBack;
        this.coins = coins;
        this.sticks = sticks;
    }
}