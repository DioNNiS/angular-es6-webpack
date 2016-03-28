import angular from 'angular';

import RandomNamesService from './randomNames.service';
import HomeDirective from './home.directive';

export default angular.module('home', [])
    .directive('home', HomeDirective)
    .service('randomNames', RandomNamesService)
    .name;