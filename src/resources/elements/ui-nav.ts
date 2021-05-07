import { bindable } from 'aurelia-framework';
import { NavModel } from 'aurelia-router';

export class UiNav {  
  @bindable() navigation: NavModel[] = [];
}
