module.exports = {
  // browsers: ['chromium --no-sandbox'],
  browsers: ['chrome'],
  src: ['src/**/*.ts', 'tests/**/*.ts'],

  skipJsErrors: true,
  skipUncaughtErrors: true,

  color: true,

  selectorTimeout: 4000,
  assertionTimeout: 4000,
  pageLoadTimeout: 10000,
  browserInitTimeout: 60000,

  disablePageCaching: true,
  disableNativeAutomation: true,

  // debugMode: false,

  compilerOptions: {
    typescript: {
      configPath: './tsconfig.json',
    },
  },
};
