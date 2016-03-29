import homeTemplate from './home.html';

homeDirective.$inject = ['randomNames'];

export default function homeDirective(randomNames) {
    return {
        restrict: 'E',
        scope: {},
        template: homeTemplate,
        controllerAs: '$ctrl',
        controller: function ($scope, $element, $attrs, $transclude) {
            let $ctrl = this;
            $ctrl.name = randomNames.getName();
            
        }
    }
}




