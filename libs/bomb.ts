import { Point } from "./point.js";

export class Bomb {
    public damage: number;
    public radius: number;
    public x: number;
    public y: number;

    public constructor(point: Point) {
        this.damage = 10;
        this.radius = 10;
        this.x = point.x;
        this.y = point.y;
    }

    public step() {
        this.radius = this.radius == 30 ? this.radius + 10 : 0;
        this.damage = this.radius ? this.damage + 10 : 0;
    }
}