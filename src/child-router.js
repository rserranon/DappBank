export class ChildRouter {
  heading = 'Child Router';

  configureRouter(config, router) {
    config.map([
      { route: ['', 'welcome'], name: 'welcome',       moduleId: 'welcome',       nav: true, title: 'Welcome' },
      { route: 'contrato', 		name: 'contrato',        moduleId: 'contrato',      nav: true, title: 'Contrato' },
      { route: 'admin',       name: 'admin',           moduleId: 'admin',         nav: true, title: 'Admin' },
      { route: 'users',         name: 'users',         moduleId: 'users',         nav: true, title: 'Github Users' },
      { route: 'child-router',  name: 'child-router',  moduleId: 'child-router',  nav: true, title: 'Child Router' }
    ]);

    this.router = router;
  }
}
