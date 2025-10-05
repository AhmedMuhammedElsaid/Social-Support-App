import type { Config } from 'jest';

const config: Config = {
    roots: ['<rootDir>/src'],
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    moduleNameMapper: {
        '\\.(css|less)$': 'identity-obj-proxy',
    },
};

export default config;
