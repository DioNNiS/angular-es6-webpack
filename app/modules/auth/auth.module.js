import angular from 'angular';

import LoginDirective from './login.directive';

export default angular.module('auth', [])
    .directive('login', LoginDirective)
    .name;