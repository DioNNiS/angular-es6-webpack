config.$inject = ['$stateProvider'];

export default function config($stateProvider) {
    $stateProvider
        .state('app.home', {
            url: '/home',
            template: '<home />'
        });
}