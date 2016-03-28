import baseTemplate from './modules/shared/page/base.html';

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
            template: '<h1>Home Page</h1>'
        })

        .state('app.about', {
            url: '/about',
            template: '<h1>About</h1>'
        })

        .state('app.contact', {
            url: '/contact',
            template: '<h1>Contact</h1>'
        })
}

config.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider'];