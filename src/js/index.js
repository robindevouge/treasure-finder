import { initAntiCheat } from './utils/anticheat';

const debug = {
	dev: true,
};

initAntiCheat(debug.dev, (cheat) => {
	console.error('Cheat detected!', `[${cheat}]`);
	console.error('Nice try 😏');
});

console.log('Hello, world!');
