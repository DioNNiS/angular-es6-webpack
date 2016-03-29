import baseTemplate from '../shared/page/base.html';

export default function config($urlRouterProvider, $locationProvider, $stateProvider) {
    //$locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/home');

    //////////////////////////
    // State Configurations //
    //////////////////////////

    $stateProvider
        .state('app', {
            abstract: true,
            template: baseTemplate
        })



        .state('login', {
            url: '/login',
            template: '<login />'
        });
    
    
}

config.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider'];