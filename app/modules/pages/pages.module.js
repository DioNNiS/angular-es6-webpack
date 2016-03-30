import angular from 'angular';
import uiRouter from 'angular-ui-router';

import config from './pages.config';
import { pagesComponent } from './pages.component';

export default angular.module('pages', [uiRouter])
    .config(config)
    .component(pagesComponent.name, pagesComponent)
    .name;