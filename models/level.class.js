class Level {
    enemies;
    fogs;
    backgroundObjectsFront;
    backgroundObjectsBack;
    level_end_x = 2240;

    constructor(enemies, fogs, backgroundObjectsFront, backgroundObjectsBack) {
        this.enemies = enemies;
        this.fogs = fogs;
        this.backgroundObjectsFront = backgroundObjectsFront;
        this.backgroundObjectsBack = backgroundObjectsBack;
    }
}