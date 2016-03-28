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

        .state('app.home', {
            url: '/home',
            template: '<home />'
        })

        .state('app.pages-list', {
            url: '/pages',
            template: '<pages />'
        })

        .state('app.pages-item', {
            url: '/pages/:id',
            templateProvider: ['$stateParams', function ($stateParams) {
                return '<pages page="' + $stateParams.id + '"/>';
            }]
        })

        .state('login', {
            url: '/login',
            template: '<login />'
        });
    
    
}

config.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider'];