module.exports = {
  preset: "ts-jest",

  testEnvironment: "node",

  bail: true,

  clearMocks: true,

  coverageProvider: "v8",

  collectCoverage: true,

  coverageDirectory: "coverage",

  coverageReporters: ["text-summary", "lcov"],
};
