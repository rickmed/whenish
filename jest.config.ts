import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  testEnvironment: 'node',
  testRegex: './src/.*\\.(test|spec)?\\.(ts|ts)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  "roots": [
    "<rootDir>/src"
  ]
};
export default config;