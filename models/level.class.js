class Level {
    /**
     * Arrays of the objects in the level.
     */
    enemies;
    endboss;
    fogs;
    backgroundObjectsFront;
    backgroundObjectsBack;
    coins;
    sticks;
    /**
     * Maximum playable area.
     */
    level_end_x = 2240;

    /**
     * Constructs a Level object.
     */
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