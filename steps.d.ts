/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type todoPage = typeof import('./pages/todo.Page');
type AssertWrapper = import('codeceptjs-assert');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, todoPage: todoPage }
  interface Methods extends Playwright, AssertWrapper {}
  interface I extends ReturnType<steps_file>, WithTranslation<AssertWrapper> {}
  namespace Translation {
    interface Actions {}
  }
}
