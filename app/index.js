import angular from 'angular';
import  './modules/core/core.module';

(function(angular) {
    'use strict';

    fetchConfig().then(bootstrapApplication);

    function fetchConfig() {
        var injector = angular.injector(['ng']);
        var $http = injector.get('$http');

        // "/server/settings.json"
        console.log('fetchConfig');
        return $http.get('/server/1/config/settings.json').then(function(){}, function(response) {
            var coreModule = angular.module('core');
            //coreModule.constant('localSettings', response.data);
        });
    }

    function bootstrapApplication() {
        angular.element(document).ready(function() {
            angular.bootstrap(document, ['core']);
        });
    }
}(angular));