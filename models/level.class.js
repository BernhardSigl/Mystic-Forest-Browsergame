class Level {
    enemies;
    fogs;
    backgroundObjectsFront;
    backgroundObjectsBack;
    level_end_x = 2240;
    coins;

    constructor(enemies, fogs, backgroundObjectsFront, backgroundObjectsBack, coins) {
        this.enemies = enemies;
        this.fogs = fogs;
        this.backgroundObjectsFront = backgroundObjectsFront;
        this.backgroundObjectsBack = backgroundObjectsBack;
        this.coins = coins;
    }
}