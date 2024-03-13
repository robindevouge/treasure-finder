import { initDetectDevTool } from './detectdevtool';

export const initAntiCheat = (disableCondition, onCheat) => {
	if (disableCondition) return;

	initDetectDevTool(onCheat);
};
