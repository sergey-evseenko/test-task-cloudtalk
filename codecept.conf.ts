import {
  setHeadlessWhen,
  setCommonPlugins
} from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: 'tests/*.test.ts',
  output: './output',
  helpers: {
    Playwright: {
      url: '',
      show: true,
      browser: 'chromium'
    },
    AssertWrapper: {
      require: 'codeceptjs-assert'
    }
  },
  plugins: {
    tryTo: {
      enabled: true
    }
  },
  include: {
    I: './steps_file',
    todoPage: "./pages/todo.Page.ts"
  },
  name: 'test-task-cloudtalk'
}
