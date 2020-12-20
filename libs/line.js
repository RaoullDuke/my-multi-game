import { Point } from "./point.js";
export class Line {
    constructor(from) {
        this.from = from;
        this.cos = 0;
        this.sin = 0;
    }
    rebuild(to) {
        const angle = Math.atan2(to.y - this.from.y, to.x - this.from.x);
        this.cos = Math.cos(angle);
        this.sin = Math.sin(angle);
    }
    getPointOnLine(length) {
        const dx = this.cos * length;
        const dy = this.sin * length;
        return new Point(this.from.x + dx, this.from.y + dy);
    }
}
//# sourceMappingURL=line.js.map