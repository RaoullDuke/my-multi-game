export class Bomb {
    constructor(point) {
        this.damage = 10;
        this.radius = 10;
        this.x = point.x;
        this.y = point.y;
    }
    step() {
        this.radius = this.radius == 30 ? this.radius + 10 : 0;
        this.damage = this.radius ? this.damage + 10 : 0;
    }
}
//# sourceMappingURL=bomb.js.map