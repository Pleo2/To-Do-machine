const config = {
  testEnviorement: 'jsDom',
  testMatch: [
    '**/__test__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test|tests).[tj]s?(x)'
  ],
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js'
  ]
}

module.export = config