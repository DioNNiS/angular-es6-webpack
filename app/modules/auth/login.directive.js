import loginTemplate from './login.html';

export default function LoginDirective() {
    return {
        restrict: 'E',
        scope: {},
        template: loginTemplate,
        controller: function ($scope, $element, $attrs, $transclude) {

        }
    }
}


