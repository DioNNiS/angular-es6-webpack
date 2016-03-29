import angular from 'angular';
import uiRouter from 'angular-ui-router';

import RandomNamesService from './randomNames.service';

import config from './home.config';
import homeDirective from './home.directive';

export default angular.module('home', [uiRouter])
    .config(config)
    .directive('home', homeDirective)
    .service('randomNames', RandomNamesService)
    .name;