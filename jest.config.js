module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx,js,jsx}',
    '!src/queries/**',
    '!**/styles.ts',
    '!**/styles.tsx',
    '!**/types.ts',
    '!**.query.ts',
    '!**Query.ts',
    '!coverage',
  ],
  testMatch: ['**/?(*.)+(spec|_spec_|_test_).[jt]s?(x)'],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@react-native|react-native|concat-color-matrices|rn-color-matrices|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|sentry-expo|native-base|static-container)',
  ],
  setupFilesAfterEnv: [
    // '@testing-library/react-native/cleanup-after-each',
    '@testing-library/jest-dom/extend-expect',
    '@testing-library/jest-native/extend-expect',
    '<rootDir>/internals/jest.mocks.js',
    './node_modules/react-native-gesture-handler/jestSetup.js',
  ],
  globals: {
    REDUX_LOGGER_ENABLED: false,
  },
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './coverage/jest-html-reporters',
        pageTitle: 'Product Coverage Report',
        enableMergeData: true,
        coverageLink: './coverage/lcov-report/index.html',
        jestStareConfigJson: 'jest-html-reporters.json',
        jestGlobalConfigJson: 'globalStuff.json',
      },
    ],
  ],
};
