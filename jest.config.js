module.exports = {
    preset: "jest-preset-angular",
    setupFilesAfterEnv: ["<rootDir>/src/setup-jest.ts"],
    collectCoverage: true,
    testPathIgnorePatterns: ["advanced-components.component.spec.ts"]
};
