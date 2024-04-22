import { initAntiCheat } from './utils/anticheat';
import { config } from './config';
import GameController from './GameController';

const debug = {
	dev: true,
};

initAntiCheat(debug.dev, (cheat) => {
	console.error('Cheat detected!', `[${cheat}]`);
	console.error('Nice try 😏');
});

const gameController = new GameController();
gameController.start();
