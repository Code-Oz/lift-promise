export default {
  coverageDirectory: "coverage",
  testEnvironment: "node",
  testMatch: [ "**/__tests__/**/*spec.ts", "**/?(*.)+(spec|test).ts" ],
  collectCoverageFrom: [
    "src/**/*.ts",
    "!**/node_modules",
    "!**/__tests__/**",
    "!**/__mocks__/**",
  ],
  collectCoverage: true,
  coverageThreshold: {
      "global": {
          "statements": 60
      }
  }
}
