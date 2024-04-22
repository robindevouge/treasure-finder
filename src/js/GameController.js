import { Grid } from './Grid';

export default class GameController {
	constructor() {
		this.init();
	}

	init() {
		this.grid = new Grid();

		document.addEventListener('click', (ev) => {
			const clickedCell = this.grid.getCellByCoords(ev.x, ev.y);
			if (clickedCell) {
				clickedCell.dig();
			}
		});
	}

	start() {}
}
