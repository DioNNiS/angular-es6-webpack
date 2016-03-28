import homeTemplate from './home.html';

export default function HomeDirective(randomNames) {
    return {
        restrict: 'E',
        scope: {},
        template: homeTemplate,
        controller: function ($scope, $element, $attrs, $transclude) {

            $scope.name = randomNames.getName();
            
        }
    }
}

HomeDirective.$inject = ['randomNames'];


