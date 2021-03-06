// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
	dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
	collectCoverageFrom: [
		'src/**/*.{js,jsx,ts,tsx}',
		'!src/lib/consts/**.ts',
		'!src/lib/db/**',
		'!src/styles/**',
		'!src/ts/**',
	],
	moduleDirectories: ['node_modules', '<rootDir>/'],
	moduleNameMapper: {
		// NOTE that the following need to be configured to match
		// desired order of any alias mappings added to jsconfig.json
		'^@/components/(.*)$': '<rootDir>/src/components/$1',
		'^@/lib/(.*)$': '<rootDir>/src/lib/$1',
		'^@/pages/(.*)$': '<rootDir>/src/pages/$1',
	},
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	// if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
	testEnvironment: 'jest-environment-jsdom',
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
