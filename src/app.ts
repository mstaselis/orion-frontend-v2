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
      },
      {
        route: 'entities',
        name: 'entities',
        title: 'Entities',
        nav: true,
        moduleId: PLATFORM.moduleName('components/entities'),
        settings: { icon: 'home' }
      },
      {
        route: 'types',
        name: 'types',
        title: 'Types',
        nav: true,
        moduleId: PLATFORM.moduleName('components/types'),
        settings: { icon: 'home' }
      },
      {
        route: 'subscriptions',
        name: 'subscriptions',
        title: 'Subscriptions',
        nav: true,
        moduleId: PLATFORM.moduleName('components/subscriptions'),
        settings: { icon: 'home' }
      },
      {
        route: 'registrations',
        name: 'registrations',
        title: 'Registrations',
        nav: true,
        moduleId: PLATFORM.moduleName('components/registrations'),
        settings: { icon: 'home' }
      }
    ]);
  }
}
