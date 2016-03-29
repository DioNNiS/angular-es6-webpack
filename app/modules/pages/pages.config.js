config.$inject = ['$stateProvider'];

export default function config($stateProvider) {
    console.log('$stateProvider', $stateProvider);
    $stateProvider
        .state('app.pages-list', {
            url: '/pages',
            template: '<pages />'
        })

        .state('app.pages-item', {
            url: '/pages/:id',
            templateProvider: ['$stateParams', function ($stateParams) {
                return '<pages page="' + $stateParams.id + '"/>';
            }]
        });
}