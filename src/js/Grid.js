import { config } from './config';

class Cell {
	constructor(grid, x, y) {
		this.grid = grid;
		this.x = x;
		this.y = y;

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
}

export class Grid {
	constructor(container) {
		this.size = config.grid.size;
		this.container = document.querySelector(config.grid.containerSelector);

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
				const cell = new Cell(this, x, y);
			}
		}
	}
}
