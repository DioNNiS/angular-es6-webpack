config.$inject = ['$stateProvider'];

export default function config($stateProvider) {
    $stateProvider
        .state('login', {
            url: '/login',
            template: '<login />'
        });
}