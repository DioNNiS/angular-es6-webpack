import pagesTemplate from './pages.html';

export default function PagesDirective() {
    return {
        restrict: 'E',
        scope: {
            page: '@'
        },
        template: pagesTemplate,
        controller: function ($scope, $element, $attrs, $transclude) {

            $scope.title = 'Pages list';

            if ($scope.page) {
                $scope.title = 'Page - ' + $scope.page;
            }

        }
    }
}


