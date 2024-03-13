// https://dev.to/composite/a-simple-way-to-detect-devtools-2ag0

function detectDevTool(allow, onCheat) {
	if (isNaN(+allow)) allow = 100;
	var start = +new Date(); // Validation of built-in Object tamper prevention.
	debugger;
	var end = +new Date(); // Validates too.
	if (isNaN(start) || isNaN(end) || end - start > allow) {
		// input your code here when devtools detected.
		onCheat('devtools open');
	}
}

export const initDetectDevTool = (onCheat) => {
	window.addEventListener('load', detectDevTool.bind(null, 100, onCheat));
	window.addEventListener('resize', detectDevTool.bind(null, 100, onCheat));
	window.addEventListener('mousemove', detectDevTool.bind(null, 100, onCheat));
	window.addEventListener('focus', detectDevTool.bind(null, 100, onCheat));
	window.addEventListener('blur', detectDevTool.bind(null, 100, onCheat));
};
