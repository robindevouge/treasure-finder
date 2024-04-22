import { config } from './config';
import EventManager from './utils/EventManager';
import Vec2 from './utils/Vec2';

const eventManager = new EventManager();

export class Player {
	constructor(gameController, id, name) {
		this.gameController = gameController;
		this.id = id;
		this.name = name;
		this.container = document.querySelector(config.players.containerSelector);

		this.position = new Vec2(0, 0); // player's position on the screen
		this.cell = null; // player's position in the grid

		this.init();
	}

	init() {
		this.element = document.createElement('div');
		this.element.classList.add('player');
		this.element.classList.add(`player--${this.id}`);
		this.container.appendChild(this.element);

		this.updatePosition();
	}

	updatePosition() {
		this.element.style.left = `${this.position.x}%`;
		this.element.style.top = `${this.position.y}%`;

		const rect = this.element.getBoundingClientRect();
		this.cell = this.gameController.grid.getCellByCoords(rect.x, rect.y);
	}

	move(moveVect) {
		if (
			this.position.x + moveVect.x < 0 ||
			this.position.x + moveVect.x > 100 ||
			this.position.y + moveVect.y < 0 ||
			this.position.y + moveVect.y > 100
		)
			return;
		this.position = this.position.add(moveVect);
		this.updatePosition();
	}

	dig() {
		// eventManager.trigger('dig', [this]);
		this.cell.dig();
	}
}
