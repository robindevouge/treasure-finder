import ControlsManager from '@robindevouge/controls-manager';
import { Grid } from './Grid';
import { Player } from './Player';
import EventManager from './utils/EventManager';
import { moveVectors } from './utils/Vec2';

const eventManager = new EventManager();

export default class GameController {
	constructor() {
		this.init();
	}

	init() {
		this.grid = new Grid(this);
		this.player = new Player(this, '1', 'dev');

		// eventManager.on('dig', (player) => {
		// 	const cell = this.grid.getCellByCoords(player.x, player.y);
		// 	if (cell) {
		// 		cell.dig();
		// 	}
		// });

		this.controls = new ControlsManager({
			// debug: true,
			enabled: false,
			allowKeyRepeat: true,
			keyMaps: [
				{
					key: 'ArrowLeft',
					actionDown: () => {
						this.player.move(moveVectors.LEFT);
					},
					actionUp: () => {
						// this.player.move(moveVectors.ZERO);
					},
				},
				{
					key: 'ArrowRight',
					actionDown: () => {
						this.player.move(moveVectors.RIGHT);
					},
					actionUp: () => {
						// this.player.move(moveVectors.ZERO);
					},
				},
				{
					key: 'ArrowUp',
					actionDown: () => {
						this.player.move(moveVectors.UP);
					},
					actionUp: () => {
						// this.player.move(moveVectors.ZERO);
					},
				},
				{
					key: 'ArrowDown',
					actionDown: () => {
						this.player.move(moveVectors.DOWN);
					},
					actionUp: () => {
						// this.player.move(moveVectors.ZERO);
					},
				},
				{
					key: 'Space',
					actionDown: () => {
						this.player.dig();
					},
				},
			],
		});
	}

	start() {
		this.controls.enabled = true;
	}
}
