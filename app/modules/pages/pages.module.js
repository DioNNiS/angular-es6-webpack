import angular from 'angular';
import uiRouter from 'angular-ui-router';

import config from './pages.config';
import pagesDirective from './pages.directive';

export default angular.module('pages', [uiRouter])
    .config(config)
    .directive('pages', pagesDirective)
    .name;