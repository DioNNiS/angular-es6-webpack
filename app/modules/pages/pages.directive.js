import pagesTemplate from './pages.html';

export default function pagesDirective() {
    return {
        restrict: 'E',
        scope: {
            page: '@'
        },
        template: pagesTemplate,
        controllerAs: '$ctrl',
        controller: function ($scope, $element, $attrs, $transclude) {
            var $ctrl = this;

            $ctrl.title = 'Pages List';

            if ($ctrl.page) {
                $ctrl.title = 'Page - ' + $ctrl.page;
            }

            if ($scope.page) {
                $scope.title = 'Page - ' + $scope.page;
            }

        }
    }
}


