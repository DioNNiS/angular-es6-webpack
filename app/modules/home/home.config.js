config.$inject = ['$stateProvider'];

export default function config($stateProvider) {
    console.log('$stateProvider', $stateProvider);
    $stateProvider
        .state('app.home', {
            url: '/home',
            template: '<home />'
        });
}