// jest.config.js
// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  verbose: true,
  collectCoverageFrom: ['src/**/*.js*'],
  coverageDirectory: './coverage/',
  collectCoverage: true,
};

module.exports = config;
