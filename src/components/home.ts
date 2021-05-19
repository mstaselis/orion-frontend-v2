import { autoinject } from 'aurelia-framework';
import { MdlUpdateService } from './../services/mdl-service';

@autoinject()
export class Home {
  message: string;

  constructor(private mdlService: MdlUpdateService) {
    this.message = 'Hello world';
  }

  attached(): void {
    this.mdlService.UpdateDom();
  }
}
