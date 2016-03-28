/**
 * Created by dliger on 8/26/15.
 */

(function(angular) {
    'use strict';

    fetchConfig().then(bootstrapApplication);

    function fetchConfig() {
        var injector = angular.injector(['ng']);
        var $http = injector.get('$http');

        // "/server/settings.json"
        return $http.get('/server/1/config/settings.json').then(function(response) {
            var coreModule = angular.module('core');
            coreModule.constant('localSettings', response.data);
        });
    }

    function bootstrapApplication() {
        angular.element(document).ready(function() {
            angular.bootstrap(document, ['core']);
        });
    }
}(angular));

