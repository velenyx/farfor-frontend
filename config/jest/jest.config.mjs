import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './'
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
    rootDir: './../../',
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
    testMatch: ['<rootDir>/src/**/*(*.)@(spec|test).[tj]s?(x)'],
    moduleDirectories: ['node_modules', '<rootDir>/'],
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    moduleNameMapper: {
        '^~/(.*)$': '<rootDir>/src/$1',
    },
    setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.ts'],
    testEnvironment: 'jest-environment-jsdom'
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)
