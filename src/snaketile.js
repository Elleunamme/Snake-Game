console.log("SnakeTile")

// Inherits from Tile
class SnakeTile extends Tile{
    // (1 north, 2 east, 3 south, 4 west)
    // int direction
    constructor() {
        super('snake-tile');
        super.tileCssClass = 'snake-tile-alternative';
    }

}