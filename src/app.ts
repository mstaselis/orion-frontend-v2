import { PLATFORM } from 'aurelia-pal';
import { RouterConfiguration, Router } from 'aurelia-router';

export class App {
  private router!: Router;
  navTitle = 'Title';

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = 'Orion frontend';

    config.options.root = '/';
    config.map([
      {
        route: ['', 'home'],
        name: 'home',
        title: 'Home',
        nav: true,
        moduleId: PLATFORM.moduleName('components/home'),
        settings: { icon: 'home' }
      }
    ]);
  }
}
