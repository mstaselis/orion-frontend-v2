import * as nprogress from 'nprogress';
import { bindable, noView, PLATFORM } from 'aurelia-framework';

@noView
export class LoadingIndicator {
  @bindable loading = false;

  constructor() {
    nprogress.configure({ showSpinner: false });
  }

  loadingChanged(newValue: boolean): void {
    if (newValue) {
      nprogress.start();
    } else {
      nprogress.done();
    }
  }
}
