// module.exports = {
//     testEnvironment: 'jest-environment-jsdom',
//     setupFiles: ['./jest.setup.cjs']
// }

module.exports = {
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./jest.setup.cjs'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  }
};