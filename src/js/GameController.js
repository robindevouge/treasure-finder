import { Grid } from './Grid';

export default class GameController {
	constructor() {
		this.init();
	}

	init() {
		this.grid = new Grid();
	}

	start() {
		console.log('Game started!');
	}
}
