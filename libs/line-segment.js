import { Line } from "./line.js";
export class LineSegment extends Line {
    constructor(from) {
        super(from);
        this.to = this.from;
        this.distance = 0;
    }
    rebuild(to) {
        this.distance = this.from.distance(this.to);
        super.rebuild(to);
    }
    setTarget(target) {
        this.to = target;
        this.rebuild(this.to);
    }
    reset() {
        this.to = this.from;
        this.distance = 0;
    }
}
//# sourceMappingURL=line-segment.js.map