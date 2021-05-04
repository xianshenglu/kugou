module.exports = {
  overrides: [
    {
      files: ["*.js"],
      globals: {
        jasmine: true,
        require: true,
        expect: true,
        afterEach: true,
        browser: true,
      },
    },
  ],
  rules: {
    "import/no-extraneous-dependencies": ["off"],
    "@typescript-eslint/no-floating-promises": ["off"],
  },
};
