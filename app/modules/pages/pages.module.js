import angular from 'angular';

import PagesDirective from './pages.directive';

export default angular.module('pages', [])
    .directive('pages', PagesDirective)
    .name;