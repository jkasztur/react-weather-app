module.exports = {
	testEnvironment: "node",
	testPathIgnorePatterns: [
		"<rootDir>/node_modules/",
	],
	testRegex: [
		"(/__tests__/.*|(\\.|/)(test|spec))\\.ts$",
	],
	transform: {
		"^.+\\.ts?$": "ts-jest",
	}
};
