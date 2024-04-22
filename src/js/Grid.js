import { config } from './config';

class Cell {
	constructor(grid, x, y) {
		this.grid = grid;
		this.x = x;
		this.y = y;
		this.state = 'DEFAULT';

		this.init();
	}

	init() {
		this.element = document.createElement('div');
		this.element.classList.add('cell');
		this.element.dataset.x = this.x;
		this.element.dataset.y = this.y;
		this.element.innerHTML = `${this.x}, ${this.y}`;

		this.grid.element.appendChild(this.element);
	}

	dig() {
		if (this.state === 'DEFAULT') {
			this.state = 'DUG';
			this.element.classList.add('dug');
		}
	}
}

export class Grid {
	constructor(gameController) {
		this.gameController = gameController;
		this.container = document.querySelector(config.grid.containerSelector);
		this.size = config.grid.size;
		this.cells = [];

		this.init();
	}

	init() {
		this.element = document.createElement('div');
		this.element.classList.add('grid');
		this.element.style.display = 'grid';
		this.element.style.gridTemplateColumns = `repeat(${this.size}, 1fr)`;
		this.element.style.gridTemplateRows = `repeat(${this.size}, 1fr)`;
		this.container.appendChild(this.element);

		for (let y = 0; y < this.size; y++) {
			for (let x = 0; x < this.size; x++) {
				this.cells.push(new Cell(this, x, y));
			}
		}
	}

	getCell(vec2) {
		return this.cells.find((cell) => {
			return cell.x === vec2.x && cell.y === vec2.y;
		});
	}

	getCellByCoords(x, y) {
		const rect = this.element.getBoundingClientRect();
		// const rect = {
		// 	left: 0,
		// 	top: 0,
		// 	right: this.element.offsetWidth,
		// 	bottom: this.element.offsetHeight,
		// 	width: this.element.offsetWidth,
		// 	height: this.element.offsetHeight,
		// };

		if (x < rect.left || x > rect.right || y < rect.top || y > rect.bottom) {
			return null;
		}

		const cellSize = rect.width / this.size;
		return this.getCell({
			x: Math.floor((x - rect.left) / cellSize),
			y: Math.floor((y - rect.top) / cellSize),
		});
	}
}
