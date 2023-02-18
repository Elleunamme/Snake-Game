console.log("Tile")
// Abstract
class Tile {
    tileCssClass;

    constructor(tileCssClass) {
        this.tileCssClass = tileCssClass;
    }

    getTileCssClass = () => this.tileCssClass;
}

class BackgroundTile extends Tile {
    constructor(){
        super('empty-background-tile');
    }
}