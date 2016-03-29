import angular from 'angular';
import uiRouter from 'angular-ui-router';

import config from './login.config';
import LoginDirective from './login.directive';

export default angular.module('auth', [uiRouter])
    .config(config)
    .directive('login', LoginDirective)
    .name;