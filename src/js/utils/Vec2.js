export default class Vec2 {
	constructor(x = 0, y = 0) {
		this.x = x;
		this.y = y;
	}

	add(vec2) {
		return new Vec2(this.x + vec2.x, this.y + vec2.y);
	}
}

export const moveVectors = {
	LEFT: { x: -1, y: 0 },
	RIGHT: { x: 1, y: 0 },
	UP: { x: 0, y: -1 },
	DOWN: { x: 0, y: 1 },
	ZERO: { x: 0, y: 0 },
};
