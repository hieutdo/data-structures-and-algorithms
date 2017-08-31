module.exports = function () {
  return {
    files: [
      '**/*.js',
      '!**/*.spec.js',
      '!node_modules/**',
      '!wallaby.js',
    ],
    tests: [
      '**/*.spec.js',
    ],
    env: {
      type: 'node',
      runner: 'node',
    },
    testFramework: 'jest',
  };
};