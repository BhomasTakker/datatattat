//jest setup follows / https://nextjs.org/docs/testing#setting-up-jest-with-the-rust-compiler
// jest.config.js
const nextJest = require("next/jest");

const createJestConfig = nextJest({
	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
	dir: "./",
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
	setupFilesAfterEnv: ["<rootDir>/setup.ts"],
	// Add more setup options before each test is run
	// setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	// if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
	moduleDirectories: ["node_modules", "<rootDir>/"],
	testEnvironment: "jest-environment-jsdom",
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 80,
			lines: 80,
			statements: -10,
		},
	},
	moduleNameMapper: {
		"^@/styles/(.*)$": "<rootDir>/styles/$1",
		"^@/models/(.*)$": "<rootDir>/models/$1",
		"^@/src/(.*)$": "<rootDir>/src/$1",

		"^@/components/(.*)$": "<rootDir>/src/components/$1",
		"^@/lib/(.*)$": "<rootDir>/src/lib/$1",
		"^@/store/(.*)$": "<rootDir>/src/store/$1",
		"^@/queries/(.*)$": "<rootDir>/src/queries/$1",
		"^@/hoc/(.*)$": "<rootDir>/src/hoc/$1",
		"^@/hooks/(.*)$": "<rootDir>/src/hooks/$1",
		"^@/head/(.*)$": "<rootDir>/src/head/$1",
		"^@/types/(.*)$": "<rootDir>/src/types/$1",
		"^@/pages/(.*)$": "<rootDir>/src/pages/$1",
	},
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
