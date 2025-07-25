module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',   // 또는 'jsdom' (브라우저 환경 테스트용)
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};