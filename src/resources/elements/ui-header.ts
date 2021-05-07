import { bindable } from 'aurelia-framework';

export class UiHeader {
  @bindable title: string;
  @bindable showSearch = false;
}
